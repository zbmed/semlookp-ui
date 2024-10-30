// plasmamds
export const imageMap = {
  plasmamds: {
    homepageLogo: () =>
      import("./projectSpecificImages/plasma-mds-full-logo.png"),
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
    headerLogo: () => import("./projectSpecificImages/plasma-mds-logo.png"),
    infoBoxLogoA: () =>
      import("./projectSpecificImages/plasma-mds-full-logo.png"),
    infoBoxLogoB: () => import("./common/layout/images/widgets-icons.png"),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
    projectALogo: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/address-card-svgrepo-com.svg"
      ),
  },
};
