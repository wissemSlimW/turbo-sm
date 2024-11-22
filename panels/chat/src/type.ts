import { Media, User } from "@repo/types";

type HookParams = {
  limit?: number;
  search: string;
};
export type DataHook<T, Db> = (props: HookParams) => {
  list: T[];
  db: Db;
  ready: boolean;
};
export type ChatProps = {
  hooks: {
    useUsersList: DataHook<
      User & { online: string | boolean },
      { media: Media[] }
    >;
  };
  onUserClick: (props: User) => void;
};
