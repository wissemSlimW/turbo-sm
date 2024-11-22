import { Collections, DB } from "@repo/types";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateItem = <T extends Collections>(props: {
  collection: keyof DB;
  id: string;
  data: Partial<T>;
}) =>
  updateDoc(doc(db, props.collection, props.id), {
    ...props.data,
    updatedAt: serverTimestamp(),
  } as Record<string, any>);
