// health
export const imageMap = {
  defaultTemplate: {
    homepageLogo: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/badge-svgrepo-com.svg"
      ),
    footerLogoA: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/aperture-svgrepo-com.svg"
      ),
    footerLogoB: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/aries-svgrepo-com.svg"
      ),
    footerLogoC: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/aquarius-svgrepo-com.svg"
      ),
    headerLogo: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/badge-svgrepo-com.svg"
      ),
    infoBoxLogoB: () => import("./common/layout/images/widgets-icons.png"),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
    projectALogo: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/address-card-svgrepo-com.svg"
      ),
  },
  health: {
    homepageLogo: () => import("./projectSpecificImages/nfdi4health_logo.svg"),
    footerLogoA: () => import("./projectSpecificImages/dfg_logo.svg"),
    footerLogoB: () => import("./projectSpecificImages/nfdi4health_logo.svg"),
    footerLogoC: () => import("./projectSpecificImages/zbmed_logo.svg"),
    headerLogo: () => import("./projectSpecificImages/NFDI_SemLookP_Logo.svg"),
    infoBoxLogoB: () => import("./projectSpecificImages/widgets-icons.png"),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
  },
};
