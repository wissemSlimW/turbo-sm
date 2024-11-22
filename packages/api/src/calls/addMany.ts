import { Collections, DB } from "@repo/types";
import {
  collection,
  doc,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase";

export const addMany = async <T extends Collections>(props: {
  collection: keyof DB;
  docs: Partial<T>[];
}) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, props.collection);
  const docIds: string[] = [];

  props.docs.forEach((docData) => {
    const newDocRef = doc(collectionRef);
    docIds.push(newDocRef.id);
    batch.set(newDocRef, { createdAt: serverTimestamp(), ...docData });
  });

  try {
    await batch.commit();
    return docIds;
  } catch (error) {
    console.error("Batch write failed: ", error);
    return [];
  }
};
