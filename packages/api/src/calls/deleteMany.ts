import { DB } from "@repo/types";
import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "../firebase";

export const deleteMany = async (props: {
  collection: keyof DB;
  docIds: string[];
}) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, props.collection);

  props.docIds.forEach((id) => {
    const docRef = doc(collectionRef, id);
    batch.delete(docRef);
  });

  try {
    await batch.commit();
    return true;
  } catch (error) {
    console.error("Batch delete failed: ", error);
    return false;
  }
};
