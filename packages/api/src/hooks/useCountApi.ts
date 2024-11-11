import { Collections, DB } from "@repo/types";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
export const useCountApi = <T extends Collections>(props: {
  collection: keyof DB;
  sort?: Partial<Record<keyof T, 1 | -1>>;
  args?: Partial<Record<keyof T, T[keyof T]>>;
}): {
  count: number;
  ready: boolean;
} => {
  const [count, setCount] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(true);
  const args = useMemo(
    () =>
      Object.keys(props.args || {})
        .filter((key) => !!props.args?.[key as keyof T])
        .map((key) => where(key, "==", props?.args?.[key as keyof T])),
    [props.args]
  );
  const sort = useMemo(
    () =>
      Object.keys(props.sort || {}).map((key) =>
        orderBy(key, props?.sort?.[key as keyof T] === 1 ? "asc" : "desc")
      ),
    [props.sort]
  );
  useEffect(() => {
    setReady(false);
    const q = query(collection(db, props.collection), ...args, ...sort);
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        setCount(querySnapshot.size);
        setReady(true);
      },
      (err) => {
        console.error("Error fetching data: ", err);
        setReady(true);
      }
    );
    return () => unsubscribe();
  }, [args]);
  return { count, ready };
};
