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
    infoBoxLogoB: () =>
      import(
        "./common/layout/images/projectSpecificImages/health/widgets-icons.png"
      ),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
    projectALogo: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/address-card-svgrepo-com.svg"
      ),
  },
  health: {
    homepageLogo: () =>
      import(
        "./common/layout/images/projectSpecificImages/health/nfdi4health_logo.svg"
      ),
    footerLogoA: () =>
      import(
        "./common/layout/images/projectSpecificImages/health/dfg_logo.svg"
      ),
    footerLogoB: () =>
      import(
        "./common/layout/images/projectSpecificImages/health/nfdi4health_logo.svg"
      ),
    footerLogoC: () =>
      import(
        "./common/layout/images/projectSpecificImages/health/zbmed_logo.svg"
      ),
    headerLogo: () =>
      import(
        "./common/layout/images/projectSpecificImages/health/NFDI_SemLookP_Logo.svg"
      ),
    infoBoxLogoB: () =>
      import(
        "./common/layout/images/projectSpecificImages/health/widgets-icons.png"
      ),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
  },
};
