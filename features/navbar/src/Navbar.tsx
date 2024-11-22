import { Navbar as NavbarPanel, NavbarProps } from "@panel/Navbar";
import { useUser } from "@repo/api";
import {
  Gamepad,
  Home,
  MarketPlace,
  People,
  Videos,
} from "@repo/icons/animated";
import { useMemo, useState } from "react";
export const Navbar = () => {
  const [search, setSearch] = useState("");
  const { user } = useUser();
  const LINKS = useMemo(
    (): NavbarProps["links"] => [
      {
        path: "",
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
        path: "videos",
        label: "Videos",
        icon: (
          <Videos
            variant="linear"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
      },
      {
        path: "market_place",
        label: "Market place",
        icon: (
          <MarketPlace
            variant="linear"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
      },
      {
        path: "groups",
        label: "Groups",
        icon: (
          <People
            variant="linear"
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
      },
      {
        path: "games",
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
      logo={{ icon: <></>, link: "" }}
      search={{ value: search, onChange: (val) => setSearch(val) }}
    />
  );
};
