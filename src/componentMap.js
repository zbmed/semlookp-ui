// berd
import { lazy } from "react";

export const componentMap = {
  berd: {
    InfoBoxA: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/InfoBoxABerd.jsx"),
    ),
    InfoBoxB: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/InfoBoxBBerd.jsx"),
    ),
    FooterLogos: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/FooterLogosBerd.jsx"),
    ),
    LogoBox: lazy(
      () => import("./projectSpecific/projectSpecificComponents/LogoBoxBerd"),
    ),
    ProjectADescription: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/ProjectADescription.jsx"),
    ),
    ProjectBDescription: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/ProjectADescription.jsx"),
    ),
    About: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/AboutDescriptionBerd"),
    ),
  },
};
