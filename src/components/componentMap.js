import { lazy } from "react";

export const componentMap = {
  template: {
    InfoBoxA: lazy(() => import("./templateComponents/InfoBoxATemplate")),
    InfoBoxB: lazy(() => import("./templateComponents/InfoBoxBTemplate")),
    FooterLogos: lazy(() => import("./templateComponents/FooterLogosTemplate")),
    LogoBox: lazy(() => import("./templateComponents/LogoBoxTemplate")),
  },
  health: {
    InfoBoxA: lazy(() => import("./projectSpecificComponents/InfoBoxAHealth")),
    InfoBoxB: lazy(() => import("./projectSpecificComponents/InfoBoxBHealth")),
    FooterLogos: lazy(() =>
      import("./projectSpecificComponents/FooterLogosHealth")
    ),
    LogoBox: lazy(() => import("./projectSpecificComponents/LogoBoxHealth")),
  },
};
