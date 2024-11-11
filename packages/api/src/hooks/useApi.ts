import { Collections, DB } from "@repo/types";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
export const useApi = <T extends Collections>(props: {
  collection: keyof DB;
  limit?: number;
  sort?: Partial<Record<keyof T, 1 | -1>>;
  args?: Partial<Record<keyof T, T[keyof T]>>;
}): {
  list: T[];
  ready: boolean;
} => {
  const [data, setData] = useState<T[]>([]);
  const [ready, setReady] = useState<boolean>(true);
  const args = useMemo(() => {
    delete props.args?._id;
    return Object.keys(props.args || {})
      .filter((key) => !!props.args?.[key as keyof T])
      .map((key) => where(key, "==", props?.args?.[key as keyof T]));
  }, [props.args]);
  const sort = useMemo(
    () =>
      Object.keys(props.sort || {}).map((key) =>
        orderBy(key, props?.sort?.[key as keyof T] === 1 ? "asc" : "desc")
      ),
    [props.sort]
  );
  useEffect(() => {
    setReady(false);
    const q = query(
      collection(db, props.collection),
      ...(props.limit ? [limit(props.limit)] : []),
      ...args,
      ...sort
    );
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const _data: T[] = [];
        querySnapshot.forEach((doc) => {
          _data.push({
            ...doc.data(),
            ...(doc.data().createdAt
              ? { createdAt: new Date(doc.data().createdAt?.seconds * 1000) }
              : {}),
            _id: doc.id,
          } as T);
        });
        setData(_data);
        setReady(true);
      },
      (err) => {
        console.error("Error fetching data:", err);
        setReady(true);
      }
    );

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [args, props.limit, sort]);

  return { list: data, ready };
};

import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

const listRef = ref(storage, "users");

export const list = listAll(listRef)
  .then((res) =>
    Promise.all(
      res.items.map(async (item) => {
        const url = await getDownloadURL(item).then((res) => res);
        const name = item.name;
        const metadata = await getMetadata(item);
        return {
          name,
          size: metadata.size,
          path: url,
        };
      })
    ).then((res) => res)
  )
  .catch((error) => {
    console.log(error);
  });
