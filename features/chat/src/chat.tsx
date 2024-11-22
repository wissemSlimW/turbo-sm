import { Chat as ChatPanel } from "@panel/chat";
import { useUsersList } from "./hooks";
export const Chat = () => {
  return <ChatPanel hooks={{ useUsersList }} onUserClick={() => {}} />;
};
