// health
import { lazy } from "react";

export const componentMap = {
  defaultTemplate: {
    InfoBoxA: lazy(() =>
      import(
        "./defaultTemplate/defaultTemplateComponents/InfoBoxADefaultTemplate"
      )
    ),
    InfoBoxB: lazy(() =>
      import(
        "./defaultTemplate/defaultTemplateComponents/InfoBoxBDefaultTemplate"
      )
    ),
    FooterLogos: lazy(() =>
      import(
        "./defaultTemplate/defaultTemplateComponents/FooterLogosDefaultTemplate"
      )
    ),
    LogoBox: lazy(() =>
      import(
        "./defaultTemplate/defaultTemplateComponents/LogoBoxDefaultTemplate"
      )
    ),
    ProjectADescription: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/IDSNProjectDescription"
      )
    ),
    ProjectBDescription: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/IDSNProjectDescription"
      )
    ),
    About: lazy(() =>
      import(
        "./defaultTemplate/defaultTemplateComponents/AboutDescriptionDefaultTemplate"
      )
    ),
  },
  health: {
    InfoBoxA: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/InfoBoxAHealth")
    ),
    InfoBoxB: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/InfoBoxBHealth")
    ),
    FooterLogos: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/FooterLogosHealth")
    ),
    LogoBox: lazy(() =>
      import("./projectSpecific/projectSpecificComponents/LogoBoxHealth")
    ),
    ProjectADescription: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/NFDI4HealthProjectDescription"
      )
    ),
    ProjectBDescription: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/IDSNProjectDescription"
      )
    ),
    About: lazy(() =>
      import(
        "./projectSpecific/projectSpecificComponents/AboutDescriptionHealth"
      )
    ),
  },
};
