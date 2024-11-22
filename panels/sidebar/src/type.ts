export type Link = {
  label: string;
  icon: React.ReactElement;
  link: string;
};
export type SidebarProps = { menu: { title?: string; menu: Link[] }[] };
