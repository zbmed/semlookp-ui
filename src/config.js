// defaultTemplate
export const global_config = {
  api_url: "https://terminology.services.base4nfdi.de/api-gateway/ols/api/",
  projectName: "defaultTemplate",
  matomo_tracking: false,
  show_consent_form: false,
};

export const matomo_config = {
  tracker_url: "",
  site_id: "1",
};

export const ts_specific_metadata = {
  active_dev_banner_text:
    " This software is currently under active development. Therefore, please forgive any errors that occur. We would be very pleased if you could report any errors to semlookp-support@zbmed.de.",
  contact_mail_address: "example@example.de", // use semlookp-support@zbmed.de if you have none
  contact_mail_address_mailto: "mailto:example@example.de", // the "mailto" URI is needed to produce a hyperlink that will allow users to send an email on click
  collection: "collectionId=ff5491d1-d0a9-481e-ac90-0fad065fa097", // if using the TS4NFDI Gateway, specify a collection here (uuid), otherwise leave empty
  homepage: {
    has_logo: true,
    has_text_below_logo: true,
    has_data_content: true,
    has_missing_resource_callout: true,
    has_project_intro: true,
    has_info_boxes: true,
    homepage_helmet_text: " Overview - Terminology Service ",
    text_below_logo: "Terminology Service",
    project_intro_title: "Terminology Service Template",
    project_intro_markdown_file:
      "defaultTemplate/defaultTemplateMarkdown/projectintro",
    imprint_markdown_file: "defaultTemplate/defaultTemplateMarkdown/imprint",
    privacy_markdown_file: "defaultTemplate/defaultTemplateMarkdown/privacy",
  },
  header: {
    // to remove links, remove or uncomment
    tabs: [
      { name: "Home", source: "/" },
      { name: "Search", source: "/search?q=*" },
      { name: "Resources", source: "/resources" },
      { name: "About", source: "/about" },
      { name: "Projects", source: "/projects" },
      { name: "API", source: "/about/api" },
      // { name: "Imprint", source: "/imprint" },
    ],
  },
  footer: {
    has_links: true,
    has_funding_notice: true,
    has_version_update_info: true,
    has_logos: true,
    funding_notice: "This is the funding notice.",
    last_update: "June, 2025",
    version: "development version",
    footer_logo_A_url: "https://www.google.de",
    footer_logo_B_url: "https://www.google.de",
    footer_logo_C_url: "https://www.google.de",
  },
  info_boxes: {
    has_info_box1: true,
    has_info_box2: true,
    info_box1: {
      title: "Use Case",
    },
    info_box2: {
      title: "Terminology Service Suite",
    },
  },
  search: {
    search_example_text1: "milk",
    search_example_link1: "/search?q=milk",
    search_example_text2: "planet",
    search_example_link2: "/search?q=planet",
    search_example_text3: "derives from",
    search_example_link3: "/search?q=derives from",
  },
  projects: {
    cards: [{ name: "ProjectADescription" }, { name: "ProjectBDescription" }],
  },
};
