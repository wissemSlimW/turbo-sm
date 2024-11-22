import { UserAvatarProps } from "@repo/user-avatar";
import { LinkProps } from "./components";

export type MenuLinksProps = LinkProps & { description: string };
export type ActionsProps = {
  label: string;
  icon: React.ReactElement;
  onclick: () => void;
};
export type NavbarProps = {
  user: UserAvatarProps["user"];
  search: { value: string; onChange: (val: string) => void };
  logo: {
    link: string;
    icon: React.ReactElement;
  };
  // menu: {
  //   links: { title: string; item: MenuLinksProps[] }[];
  //   actions: { title: string; item: ActionsProps[] }[];
  // };
  // messages: {
  //   useMessagesList: () => {}; // TODO
  //   onMessageClick: () => {}; // TODO
  //   onCreateNewMessageClick: () => {}; // TODO
  //   messagesPageLink: string;
  // };
  // notifications: {
  //   useNotificationsList: () => {}; // TODO
  //   notificationsPageLink: string;
  // };
  links: LinkProps[];
  sideMenu: LinkProps[][];
};
