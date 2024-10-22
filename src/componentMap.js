// berd
import { lazy } from "react";

export const componentMap = {
  berd: {
    InfoBoxA: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/InfoBoxABerd")
    ),
    InfoBoxB: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/InfoBoxBBerd")
    ),
    FooterLogos: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/FooterLogosBerd")
    ),
    LogoBox: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/LogoBoxBerd")
    ),
    ProjectADescription: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/ProjectADescription")
    ),
    ProjectBDescription: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/ProjectADescription")
    ),
    About: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/AboutDescriptionBerd")
    ),
  },
};
