import { Navbar as NavbarPanel, NavbarProps } from "@panel/navbar";
import { useUser } from "@repo/api";
import {
  Gamepad,
  Home,
  MarketPlace,
  People,
  Videos,
} from "@repo/icons/animated";
import { ROUTESNAMES, useActiveLink } from "@repo/routes";
import { useMemo, useState } from "react";
export const Navbar = () => {
  const activeLink = useActiveLink();
  const [search, setSearch] = useState("");
  const { user } = useUser();
  const LINKS = useMemo(
    (): NavbarProps["links"] => [
      {
        path: ROUTESNAMES.home,
        label: "Home",
        icon: (
          <Home
            variant={activeLink === ROUTESNAMES.home ? "bold" : "linear"}
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
        isActive: activeLink === ROUTESNAMES.home,
      },
      {
        path: ROUTESNAMES.videos,
        label: "Videos",
        icon: (
          <Videos
            variant={activeLink === ROUTESNAMES.videos ? "bold" : "linear"}
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
        isActive: activeLink === ROUTESNAMES.videos,
      },
      {
        path: ROUTESNAMES.marketPlace,
        label: "Market place",
        icon: (
          <MarketPlace
            variant={activeLink === ROUTESNAMES.marketPlace ? "bold" : "linear"}
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
        isActive: activeLink === ROUTESNAMES.marketPlace,
      },
      {
        path: ROUTESNAMES.groups,
        label: "Groups",
        icon: (
          <People
            variant={activeLink === ROUTESNAMES.groups ? "bold" : "linear"}
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
        isActive: activeLink === ROUTESNAMES.groups,
      },
      {
        path: ROUTESNAMES.games,
        label: "Games",
        icon: (
          <Gamepad
            variant={activeLink === ROUTESNAMES.games ? "bold" : "linear"}
            active={{ variant: "linear", classname: "navbar-link" }}
          />
        ),
        isActive: activeLink === ROUTESNAMES.games,
      },
    ],
    [activeLink]
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
