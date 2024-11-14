// berd
export const global_config = {
  api_url: "https://ols4-berd.prod.km.k8s.zbmed.de/ols4/api",
  projectName: "berd",
};

export const ts_specific_metadata = {
  active_dev_banner_text:
    " This software is currently under active development. Therefore, please forgive any errors that occur. We would be very pleased if you could report any errors to semlookp-support@zbmed.de.",
  contact_mail_address: "example@example.de",
  contact_mail_address_mailto: "mailto:example@example.de",
  collection: "collection=nfdi4health",
  homepage: {
    has_logo: true,
    has_text_below_logo: true,
    has_data_content: true,
    has_missing_resource_callout: false,
    has_project_intro: true,
    has_info_boxes: true,
    homepage_helmet_text: " Overview - Terminology Service ",
    text_below_logo: "Terminology Service",
    project_intro_title: "Terminology Service",
    project_intro_markdown_file:
      "defaultTemplate/defaultTemplateMarkdown/projectintro",
    imprint_markdown_file: "defaultTemplate/defaultTemplateMarkdown/imprint",
    privacy_markdown_file: "defaultTemplate/defaultTemplateMarkdown/privacy",
  },
  header: {
    tabs: [
      { name: "Home", source: "/" },
      { name: "Search", source: "/search?q=*" },
      { name: "Resources", source: "/resources" },
      { name: "About", source: "/about" },
      // { name: "Projects", source: "/projects" },
      { name: "API", source: "/about/api" },
      // { name: "Imprint", source: "/imprint" },
    ],
  },
  footer: {
    has_links: true,
    has_funding_notice: true,
    has_version_update_info: true,
    has_logos: true,
    funding_notice:
      "This work has been funded by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) as part of BERD@NFDI (grant number 460037581) and TS4NFDI (via Base4NFDI, grant number 521453681).",
    last_update: "November, 2024",
    version: "development version",
    footer_logo_A_url: "https://www.google.de",
    footer_logo_B_url: "https://www.google.de",
    footer_logo_C_url: "https://www.google.de",
  },
  info_boxes: {
    has_info_box1: true,
    has_info_box2: true,
    info_box1: {
      title: "BERD@NFDI",
    },
    info_box2: {
      title: "Terminology Service Suite",
    },
  },
  search: {
    search_example_text1: "person",
    search_example_link1: "/search?q=person",
    search_example_text2: "SCHEMA:ORGANIZATION",
    search_example_link2: "/search?q=SCHEMA:ORGANIZATION",
    search_example_text3: "location",
    search_example_link3: "/search?q=location",
  },
  projects: {
    cards: [{ name: "ProjectADescription" }, { name: "ProjectBDescription" }],
  },
};
