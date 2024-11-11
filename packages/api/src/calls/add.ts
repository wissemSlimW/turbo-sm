import { Collections, DB } from "@repo/types";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const addItem = <T extends Collections>(props: {
  collection: keyof DB;
  data: Partial<T>;
}) =>
  addDoc(collection(db, props.collection), {
    createdAt: serverTimestamp(),
    ...props.data,
  });
