// health
import { lazy } from "react";

export const componentMap = {
  defaultTemplate: {
    InfoBoxA: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/InfoBoxADefaultTemplate"),
    ),
    InfoBoxB: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/InfoBoxBDefaultTemplate"),
    ),
    FooterLogos: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/FooterLogosDefaultTemplate"),
    ),
    LogoBox: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/LogoBoxDefaultTemplate"),
    ),
    ProjectADescription: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/IDSNProjectDescription.jsx"),
    ),
    ProjectBDescription: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/IDSNProjectDescription.jsx"),
    ),
    About: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/AboutDescriptionDefaultTemplate"),
    ),
  },
  health: {
    InfoBoxA: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/InfoBoxAHealth.jsx"),
    ),
    InfoBoxB: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/InfoBoxBHealth.jsx"),
    ),
    FooterLogos: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/FooterLogosHealth.jsx"),
    ),
    LogoBox: lazy(
      () => import("./projectSpecific/projectSpecificComponents/LogoBoxHealth"),
    ),
    ProjectADescription: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/NFDI4HealthProjectDescription.jsx"),
    ),
    ProjectBDescription: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/IDSNProjectDescription.jsx"),
    ),
    About: lazy(
      () =>
        import("./projectSpecific/projectSpecificComponents/AboutDescriptionHealth"),
    ),
  },
};
