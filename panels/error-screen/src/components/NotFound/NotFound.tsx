import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { NavigationLink, ROUTESNAMES } from "@repo/routes";
import { useLang } from "../../contexts";
import { ComingSoonProps } from "./type";
export const NotFound = (props: ComingSoonProps) => {
  const theme = useAppTheme();
  const Classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <div className={Classes.container}>
      <img
        src={props.imageUrl}
        alt={"Page not found "}
        className={Classes.image}
      />
      <span className={Classes.title}>{translation.pagepageNotFound}</span>
      <NavigationLink to={`/${ROUTESNAMES.home}`} className={Classes.link}>
        {translation.headToTheMainPage}
      </NavigationLink>
    </div>
  );
};
