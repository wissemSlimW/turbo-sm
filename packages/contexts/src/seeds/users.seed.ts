import { addItem } from "@repo/api";
import { User } from "@repo/types";
import { FEMALE_NAMES, MALE_NAMES } from "./data.cnst";
export const seedUsers = async () => {
  const genUsers = (list: string[]): Omit<User, "_id">[] =>
    list.map((item) => {
      const nameArr = item.split(" ");
      return {
        createdAt: new Date(),
        createdBy: "",
        firstName: nameArr[0]!,
        lastName: nameArr[1]!,
      };
    });
  genUsers([...FEMALE_NAMES, ...MALE_NAMES]).forEach((u) =>
    addItem({ collection: "users", data: u })
  );

  // const genAvatars = (list: User[], imgs: string[]): Media[] =>
  //   list.map((user, i): Media => {
  //     return {
  //       _id: generateId(),
  //       createdAt: new Date(),
  //       createdBy: "",
  //       isAudio: false,
  //       isImage: true,
  //       isJSON: false,
  //       isPDF: false,
  //       isText: false,
  //       isVideo: false,
  //       name: `photo${i + 1}`,
  //       meta: { userId: user._id },
  //       path: "https://firebasestorage.googleapis.com/v0/b/turbo-sm.appspot.com/o/users%2Fphoto1.jpg?alt=media&token=a856142c-7854-4343-8101-23342bc640c8",
  //       size: 0,
  //     };
  //   });
};
