import { User } from "@repo/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
// TODO
type AdminUser = Pick<User, "_id" | "firstName" | "lastName"> & {
  imgUrl: string;
};
export const useUser = (): {
  ready: boolean;
  user: AdminUser;
} => {
  const [ready, setReady] = useState({ media: true, user: true });
  const [user, setUser] = useState<AdminUser>({
    _id: "",
    firstName: "",
    imgUrl: "",
    lastName: "",
  });
  useEffect(() => {
    const userRef = doc(db, "users", "12345");
    const mediaRef = doc(db, "media", "12345");
    setReady({ media: false, user: false });
    getDoc(mediaRef)
      .then((res) => setUser((prev) => ({ ...prev, imgUrl: res.data()?.path })))
      .finally(() => setReady((prev) => ({ ...prev, media: true })));
    getDoc(userRef)
      .then((res) =>
        setUser((prev) => ({
          ...prev,
          firstName: res.data()?.firstName,
          lastName: res.data()?.lastName,
          _id: res.id,
        }))
      )
      .finally(() => setReady((prev) => ({ ...prev, user: true })));
  }, [db]);

  return {
    user,
    ready: ready.media && ready.user,
  };
};
