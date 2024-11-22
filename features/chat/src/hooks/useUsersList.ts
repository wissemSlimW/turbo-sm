import { ChatProps } from "@panel/chat/src/type";
import { Media, User } from "@repo/types";
import { useMemo } from "react";
import { useApi } from "@repo/api";
import { randomize } from "@repo/utils";

export const useUsersList: ChatProps["hooks"]["useUsersList"] = (props) => {
  const { list: users, ready: usersReady } = useApi<User>(
    useMemo(() => ({ collection: "users" }), [])
  );

  const { list: media, ready: mediaReady } = useApi<Media>(
    useMemo(() => ({ collection: "media" }), [])
  );

  const options: Record<number, () => string | boolean> = {
    "0": () => true,
    "1": () =>
      randomize(2) ? `${randomize(59) + 1}m` : `${randomize(23) + 1}h`,
    "2": () => false,
  };
  const list = useMemo(
    () =>
      users
        .filter((u) =>
          !props.search
            ? true
            : `${u.firstName} ${u.lastName}`
                .toLowerCase()
                .includes(props.search.toLowerCase())
        )
        .map((u) => {
          return { ...u, opt: randomize(3) };
        })
        .sort((a, b) => a.opt - b.opt)
        .map(({ opt, ...u }) => ({
          ...u,
          online: options[opt]?.() as boolean | string,
        }))
        .slice(0, props.limit),
    [users, props.limit, props.search]
  );
  return {
    list,
    db: { media },
    ready: mediaReady && usersReady,
  };
};
