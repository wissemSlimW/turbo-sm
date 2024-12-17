import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Collections, DB } from "@repo/types";

export const findOne = async <T extends Collections>(props: {
  collection: keyof DB;
  id: string;
}): Promise<T> => {
  const docRef = doc(db, props.collection, props.id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as T;
  } else {
    console.error("Item not found");
    return null! as T;
  }
};
