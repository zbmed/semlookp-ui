import { lazy } from "react";

export const componentMap = {
  defaultTemplate: {
    InfoBoxA: lazy(() =>
      import("./components/defaultTemplateComponents/InfoBoxADefaultTemplate")
    ),
    InfoBoxB: lazy(() =>
      import("./components/defaultTemplateComponents/InfoBoxBDefaultTemplate")
    ),
    FooterLogos: lazy(() =>
      import(
        "./components/defaultTemplateComponents/FooterLogosDefaultTemplate"
      )
    ),
    LogoBox: lazy(() =>
      import("./components/defaultTemplateComponents/LogoBoxDefaultTemplate")
    ),
    ProjectADescription: lazy(() =>
      import("./components/projectSpecificComponents/IDSNProjectDescription")
    ),
    ProjectBDescription: lazy(() =>
      import("./components/projectSpecificComponents/IDSNProjectDescription")
    ),
    About: lazy(() =>
      import(
        "./components/defaultTemplateComponents/AboutDescriptionDefaultTemplate"
      )
    ),
  },
  health: {
    InfoBoxA: lazy(() =>
      import("./components/projectSpecificComponents/InfoBoxAHealth")
    ),
    InfoBoxB: lazy(() =>
      import("./components/projectSpecificComponents/InfoBoxBHealth")
    ),
    FooterLogos: lazy(() =>
      import("./components/projectSpecificComponents/FooterLogosHealth")
    ),
    LogoBox: lazy(() =>
      import("./components/projectSpecificComponents/LogoBoxHealth")
    ),
    ProjectADescription: lazy(() =>
      import(
        "./components/projectSpecificComponents/NFDI4HealthProjectDescription"
      )
    ),
    ProjectBDescription: lazy(() =>
      import("./components/projectSpecificComponents/IDSNProjectDescription")
    ),
    About: lazy(() =>
      import("./components/projectSpecificComponents/AboutDescriptionHealth")
    ),
  },
};
