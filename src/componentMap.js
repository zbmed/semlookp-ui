// plasmamds
import { lazy } from "react";

export const componentMap = {
  plasmamds: {
    InfoBoxA: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/InfoBoxA")
    ),
    InfoBoxB: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/InfoBoxB")
    ),
    FooterLogos: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/FooterLogos")
    ),
    LogoBox: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/LogoBox")
    ),
    ProjectADescription: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/ProjectADescription")
    ),
    ProjectBDescription: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/ProjectADescription")
    ),
    About: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/AboutDescription")
    ),
  },
};
