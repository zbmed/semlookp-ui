// defaultTemplate
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
};
