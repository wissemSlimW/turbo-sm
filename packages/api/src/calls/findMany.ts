import { doc, runTransaction } from "firebase/firestore";
import { db } from "../firebase";
import { Collections, DB } from "@repo/types";

export const findMany = async <T extends Collections>(props: {
  collection: keyof DB;
  documentIds: string[];
}): Promise<T[]> => {
  const documents: T[] = [];

  try {
    await runTransaction(db, async (transaction) => {
      for (const id of props.documentIds) {
        const docRef = doc(db, props.collection, id);
        const docSnapshot = await transaction.get(docRef);

        if (docSnapshot.exists()) {
          documents.push({ _id: docSnapshot.id, ...docSnapshot.data() } as T);
        }
      }
    });

    return documents;
  } catch (error) {
    console.error("Transaction failed: ", error);
    return [];
  }
};
