export const logoMap = {
  template: {
    homepageLogo: () =>
      import("../components/layout/logos/placeholder/badge-svgrepo-com.svg"),
    footerLogoA: () =>
      import("../components/layout/logos/placeholder/aperture-svgrepo-com.svg"),
    footerLogoB: () =>
      import("../components/layout/logos/placeholder/aries-svgrepo-com.svg"),
    footerLogoC: () =>
      import("../components/layout/logos/placeholder/aquarius-svgrepo-com.svg"),
  },
  health: {
    homepageLogo: () =>
      import("../components/layout/logos/nfdi4health_logo.svg"),
    footerLogoA: () => import("../components/layout/logos/dfg_logo.svg"),
    footerLogoB: () =>
      import("../components/layout/logos/nfdi4health_logo.svg"),
    footerLogoC: () => import("../components/layout/logos/zbmed_logo.svg"),
  },
};
