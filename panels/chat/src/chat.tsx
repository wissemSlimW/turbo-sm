import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { ChatProps } from "./type";
import { useMemo, useState } from "react";
import { SearchBar, UserListItem } from "./components";
import { getItem, randomize } from "@repo/utils";
import { ScrollArea } from "@repo/scroll-area";

export const Chat = (props: ChatProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const [search, setSearch] = useState("");
  const {
    list: users,
    db: { media },
    ready,
  } = props.hooks.useUsersList(useMemo(() => ({ search }), [search]));
  return (
    <div className={classes.container}>
      <SearchBar value={search} onChange={(val) => setSearch(val)} />
      <ScrollArea
        hideLoadingComponent={ready}
        cb={(visible) => {}}
        hideScroll={false}
        // maxhieght={"100%"}
        loadingComponent={
          <div className={classes.loadingContainer}>
            {Array(randomize(10) + 10)
              .fill("")
              .map((_, i) => (
                <div key={i} className={classes.loadingElement}>
                  <span className={classes.animation}></span>
                  <span className={classes.animation}></span>
                </div>
              ))}
          </div>
        }
      >
        <div className={classes.listContainer}>
          {users.map((user) => (
            <UserListItem
              key={user._id}
              online={user.online}
              user={{
                firstName: user.firstName,
                lastName: user.lastName,
                imgUrl:
                  getItem({
                    list: media,
                    value: user._id,
                    field: "meta.userId",
                  })?.path || "",
              }}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
