import { Sidebar as SidebarPanel } from "@panel/sidebar";
import { useUser } from "@repo/api";
import { UserAvatar } from "@repo/user-avatar";
import { ROUTESNAMES } from "@repo/routes";

export const Sidebar = () => {
  const { user } = useUser();
  return (
    <SidebarPanel
      menu={[
        {
          menu: [
            {
              link: ROUTESNAMES.profile,
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
              link: ROUTESNAMES.firends,
              label: "Friends",
              icon: <img src={"/icons/people.png"} />,
            },
            {
              link: ROUTESNAMES.memories,
              label: "Memories",
              icon: <img src={"/icons/memories.png"} />,
            },
            {
              link: ROUTESNAMES.saved,
              label: "Saved",
              icon: <img src={"/icons/saved.png"} />,
            },
            {
              link: ROUTESNAMES.groups,
              label: "Groups",
              icon: <img src={"/icons/groups.png"} />,
            },
            {
              link: ROUTESNAMES.videos,
              label: "Videos",
              icon: <img src={"/icons/videos.png"} />,
            },
            {
              link: ROUTESNAMES.marketPlace,
              label: "Marketplace",
              icon: <img src={"/icons/marketPlace.png"} />,
            },
            {
              link: ROUTESNAMES.feeds,
              label: "Feeds",
              icon: <img src={"/icons/feeds.png"} />,
            },
            {
              link: ROUTESNAMES.events,
              label: "Events",
              icon: <img src={"/icons/calendar.png"} />,
            },
            {
              link: ROUTESNAMES.messenger,
              label: "Messenger",
              icon: <img src={"/icons/messenger.png"} />,
            },
            {
              link: ROUTESNAMES.messengerKids,
              label: "Messenger kids",
              icon: <img src={"/icons/messengerKids.png"} />,
            },
            {
              link: ROUTESNAMES.birthdays,
              label: "Birthdays",
              icon: <img src={"/icons/birthday.png"} />,
            },
            {
              link: ROUTESNAMES.reels,
              label: "Reels",
              icon: <img src={"/icons/reels.png"} />,
            },
            {
              link: ROUTESNAMES.gamingVideos,
              label: "Gaming Video",
              icon: <img src={"/icons/gamingVideo.png"} />,
            },
            {
              link: ROUTESNAMES.playGames,
              label: "Play Games",
              icon: <img src={"/icons/playGames.png"} />,
            },
          ],
        },
      ]}
    />
  );
};
