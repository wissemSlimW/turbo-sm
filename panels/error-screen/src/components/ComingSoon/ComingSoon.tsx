import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { NavigationLink, ROUTESNAMES } from "@repo/routes";
import { useLang } from "../../contexts";
import { ComingSoonProps } from "./type";
export const ComingSoon = (props: ComingSoonProps) => {
  const theme = useAppTheme();
  const Classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <div className={Classes.container}>
      <img
        src={props.imageUrl}
        alt={"Page under construction "}
        className={Classes.image}
      />
      <span className={Classes.title}>{translation.pageUnderConstruction}</span>
      <NavigationLink to={ROUTESNAMES.home} className={Classes.link}>
        {translation.headToTheMainPage}
      </NavigationLink>
    </div>
  );
};
