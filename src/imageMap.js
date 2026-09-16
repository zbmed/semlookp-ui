// fairagro
export const imageMap = {
  defaultTemplate: {
    homepageLogo: () =>
      import("./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/badge-svgrepo-com.svg"),
    footerLogoA: () =>
      import("./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/aperture-svgrepo-com.svg"),
    footerLogoB: () =>
      import("./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/aries-svgrepo-com.svg"),
    footerLogoC: () =>
      import("./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/aquarius-svgrepo-com.svg"),
    headerLogo: () =>
      import("./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/badge-svgrepo-com.svg"),
    infoBoxLogoA: () =>
      import("./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/aquarius-svgrepo-com.svg"),
    infoBoxLogoB: () => import("./common/layout/images/widgets-icons.png"),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
    projectALogo: () =>
      import("./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/address-card-svgrepo-com.svg"),
  },
  fairagro: {
    homepageLogo: () => import("./projectSpecificImages/FAIRagro_mittig_Verlauf.svg"),
    footerLogoA: () => import("./projectSpecificImages/dfg_logo.svg"),
    footerLogoB: () => import("./projectSpecificImages/FAIRagro_links_Verlauf.svg"),
    footerLogoC: () => import("./projectSpecificImages/zbmed_logo.svg"),
    headerLogo: () => import("./projectSpecificImages/FAIRagro_onlyIcon_Verlauf.svg"),
    infoBoxLogoB: () => import("./common/layout/images/widgets-icons.png"),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
  }
};
