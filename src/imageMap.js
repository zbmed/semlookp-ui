// berd
export const imageMap = {
  berd: {
    homepageLogo: () =>
      import(
        "./projectSpecificImages/Logo_BERD-NFDI_einzeilig_transparent_gruen-schwarz.svg"
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
        "./projectSpecificImages/Logo_BERD-NFDI_Symbol_transparent_gruen-schwarz.svg"
      ),
    infoBoxLogoA: () =>
      import(
        "./projectSpecificImages/Logo_BERD-NFDI_auf-weiss-quadratisch_gruen-schwarz_400px.png"
      ),
    infoBoxLogoB: () => import("./common/layout/images/widgets-icons.png"),
    ts4nfdiLogo: () => import("./common/layout/images/TS4_icon.svg"),
    projectALogo: () =>
      import(
        "./defaultTemplate/defaultTemplateLayout/defaultTemplateImages/address-card-svgrepo-com.svg"
      ),
  },
};
