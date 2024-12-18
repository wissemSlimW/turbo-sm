import { Navbar as NavbarPanel, NavbarProps } from "@panel/navbar";
import { useUser } from "@repo/api";
import {
  Gamepad,
  Home,
  MarketPlace,
  People,
  Videos,
} from "@repo/icons/animated";
import { ROUTESNAMES } from "@repo/routes";
import { useMemo, useState } from "react";
export const Navbar = () => {
  const [search, setSearch] = useState("");
  const { user } = useUser();
  const LINKS = useMemo(
    (): NavbarProps["links"] => [
      {
        path: ROUTESNAMES.home,
        label: "Home",
        icon: (
          <Home
            variant="bold"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
        isActive: true,
      },
      {
        path: ROUTESNAMES.videos,
        label: "Videos",
        icon: (
          <Videos
            variant="linear"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
      },
      {
        path: ROUTESNAMES.marketPlace,
        label: "Market place",
        icon: (
          <MarketPlace
            variant="linear"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
      },
      {
        path: ROUTESNAMES.groups,
        label: "Groups",
        icon: (
          <People
            variant="linear"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
      },
      {
        path: ROUTESNAMES.games,
        label: "Games",
        icon: (
          <Gamepad
            variant="linear"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
      },
    ],
    []
  );
  return (
    <NavbarPanel
      user={{
        firstName: user.firstName,
        lastName: user.lastName,
        imgUrl: user.imgUrl,
      }}
      links={LINKS}
      sideMenu={[]}
      logo={{ icon: <></>, link: ROUTESNAMES.home }}
      search={{ value: search, onChange: (val) => setSearch(val) }}
    />
  );
};
