import { Sidebar as SidebarPanel } from "@panel/sidebar";
import { useUser } from "@repo/api";
import { UserAvatar } from "@repo/user-avatar";

export const Sidebar = () => {
  const { user } = useUser();
  return (
    <SidebarPanel
      menu={[
        {
          menu: [
            {
              link: "/profile",
              label: `${user.firstName || ""} ${user.lastName || ""}`,
              icon: (
                <UserAvatar
                  user={{
                    firstName: user.firstName,
                    imgUrl: user.imgUrl,
                    lastName: user.lastName,
                  }}
                />
              ),
            },
            {
              link: "/firends",
              label: "Friends",
              icon: <img src={"/icons/people.png"} />,
            },
            {
              link: "/memories",
              label: "Memories",
              icon: <img src={"/icons/memories.png"} />,
            },
            {
              link: "/saved",
              label: "Saved",
              icon: <img src={"/icons/saved.png"} />,
            },
            {
              link: "/groups",
              label: "Groups",
              icon: <img src={"/icons/groups.png"} />,
            },
            {
              link: "/videos",
              label: "Videos",
              icon: <img src={"/icons/videos.png"} />,
            },
            {
              link: "/market_place",
              label: "Marketplace",
              icon: <img src={"/icons/marketPlace.png"} />,
            },
            {
              link: "/feeds",
              label: "Feeds",
              icon: <img src={"/icons/feeds.png"} />,
            },
            {
              link: "/events",
              label: "Events",
              icon: <img src={"/icons/calendar.png"} />,
            },
            {
              link: "/messenger",
              label: "Messenger",
              icon: <img src={"/icons/messenger.png"} />,
            },
            {
              link: "/messenger_kids",
              label: "Messenger kids",
              icon: <img src={"/icons/messengerKids.png"} />,
            },
            {
              link: "/birthdays",
              label: "Birthdays",
              icon: <img src={"/icons/birthday.png"} />,
            },
            {
              link: "/reels",
              label: "Reels",
              icon: <img src={"/icons/reels.png"} />,
            },
            {
              link: "/gaming_videos",
              label: "Gaming Video",
              icon: <img src={"/icons/gamingVideo.png"} />,
            },
            {
              link: "/play_games",
              label: "Play Games",
              icon: <img src={"/icons/playGames.png"} />,
            },
          ],
        },
      ]}
    />
  );
};
