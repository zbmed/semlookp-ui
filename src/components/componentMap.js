import { lazy } from "react";

export const componentMap = {
  template: {
    InfoBoxA: lazy(() =>
      import("./defaultTemplateComponents/InfoBoxATemplate")
    ),
    InfoBoxB: lazy(() =>
      import("./defaultTemplateComponents/InfoBoxBTemplate")
    ),
    FooterLogos: lazy(() =>
      import("./defaultTemplateComponents/FooterLogosTemplate")
    ),
    LogoBox: lazy(() => import("./defaultTemplateComponents/LogoBoxTemplate")),
    AboutPage: lazy(() => import("../pages/AboutPageDefaultTemplate")),
    ProjectsPage: lazy(() => import("../pages/ProjectsPageDefaultTemplate")),
  },
  health: {
    InfoBoxA: lazy(() => import("./projectSpecificComponents/InfoBoxAHealth")),
    InfoBoxB: lazy(() => import("./projectSpecificComponents/InfoBoxBHealth")),
    FooterLogos: lazy(() =>
      import("./projectSpecificComponents/FooterLogosHealth")
    ),
    LogoBox: lazy(() => import("./projectSpecificComponents/LogoBoxHealth")),
    AboutPage: lazy(() => import("../pages/AboutPageHealth")),
    ProjectsPage: lazy(() => import("../pages/ProjectsPageHealth")),
  },
};
