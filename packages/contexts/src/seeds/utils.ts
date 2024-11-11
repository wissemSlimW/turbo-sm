import { Reaction, ReactionData, User } from "@repo/types";
import { REACTIOJNSTYPES } from "./data.cnst";
// import axios from "axios";

export const randomize = (num: number) => Math.floor(Math.random() * num);
export const generateId = (length = 25) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = randomize(characters.length);
    randomId += characters[randomIndex];
  }
  return randomId;
};
export const getSize = async (filePath: string) => {
  const response = await fetch(filePath);
  if (response.ok) {
    const sizeInBytes = response.headers.get("Content-Length");
    if (sizeInBytes) {
      return +(+sizeInBytes / 1024).toFixed(2);
    }
    return 0;
  } else {
    console.error("Failed to fetch file");
    return 0;
  }
};
export const getReactions = (users: User[]): ReactionData =>
  Object.fromEntries(
    Array(randomize(users.length))
      .fill("")
      .map((): [string, Reaction] => [
        users[randomize(users.length)]?._id!,
        REACTIOJNSTYPES[randomize(REACTIOJNSTYPES.length)]!,
      ])
  );


// export const generateMultipleSocialMediaPosts = async (numberOfPosts = 5) => {
//   const prompt = `Create ${numberOfPosts} fake social media posts about various interesting topics. Separate each post with a newline.`;
//   console.log(API_KEY);
//   const response = await axios.post(
//     "https://api.openai.com/v1/engines/text-davinci-003/completions",
//     {
//       prompt: prompt,
//       max_tokens: numberOfPosts * 100,
//       n: 1,
//       stop: null,
//       temperature: 0.7,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     }
//   );

//   return response.data.choices[0].text
//     .split("\n")
//     .filter((post: string) => post.trim() !== "");
// };
