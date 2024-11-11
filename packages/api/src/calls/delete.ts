import { DB } from "@repo/types";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const deleteItem = (props: { collection: keyof DB; id: string }) =>
  deleteDoc(doc(db, props.collection, props.id));
