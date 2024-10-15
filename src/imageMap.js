export const imageMap = {
  defaultTemplate: {
    homepageLogo: () =>
      import(
        "./components/layout/images/defaultTemplate/badge-svgrepo-com.svg"
      ),
    footerLogoA: () =>
      import(
        "./components/layout/images/defaultTemplate/aperture-svgrepo-com.svg"
      ),
    footerLogoB: () =>
      import(
        "./components/layout/images/defaultTemplate/aries-svgrepo-com.svg"
      ),
    footerLogoC: () =>
      import(
        "./components/layout/images/defaultTemplate/aquarius-svgrepo-com.svg"
      ),
    headerLogo: () =>
      import(
        "./components/layout/images/defaultTemplate/badge-svgrepo-com.svg"
      ),
    infoBoxLogoB: () =>
      import("./components/layout/images/health/widgets-icons.png"),
    ts4nfdiLogo: () => import("./components/layout/images/common/TS4_icon.svg"),
    projectALogo: () =>
      import(
        "./components/layout/images/defaultTemplate/address-card-svgrepo-com.svg"
      ),
  },
  health: {
    homepageLogo: () =>
      import("./components/layout/images/health/nfdi4health_logo.svg"),
    footerLogoA: () => import("./components/layout/images/health/dfg_logo.svg"),
    footerLogoB: () =>
      import("./components/layout/images/health/nfdi4health_logo.svg"),
    footerLogoC: () =>
      import("./components/layout/images/health/zbmed_logo.svg"),
    headerLogo: () =>
      import("./components/layout/images/health/NFDI_SemLookP_Logo.svg"),
    infoBoxLogoB: () =>
      import("./components/layout/images/health/widgets-icons.png"),
    ts4nfdiLogo: () => import("./components/layout/images/common/TS4_icon.svg"),
  },
};
