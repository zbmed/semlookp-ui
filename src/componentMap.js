// plasmamds
import { lazy } from "react";

export const componentMap = {
  plasmamds: {
    InfoBoxA: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/InfoBoxADefaultTemplate"
      )
    ),
    InfoBoxB: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/InfoBoxBDefaultTemplate"
      )
    ),
    FooterLogos: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/FooterLogosDefaultTemplate"
      )
    ),
    LogoBox: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/LogoBoxDefaultTemplate"
      )
    ),
    ProjectADescription: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/ProjectADescription")
    ),
    ProjectBDescription: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/ProjectADescription")
    ),
    About: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/AboutDescriptionDefaultTemplate"
      )
    ),
  },
};
