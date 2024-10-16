export const global_config = {
  api_url: "https://www.ebi.ac.uk/ols4/api/",
  projectName: "health",
};

export const ts_specific_metadata = {
  active_dev_banner_text:
    " This software is currently under active development. Therefore, please forgive any errors that occur. We would be very pleased if you could report any errors to semlookp-support@zbmed.de.",
  contact_mail_address: "semlookp-support@zbmed.de",
  contact_mail_address_mailto: "mailto:semlookp-support@zbmed.de",
  collection: "collection=nfdi4health",
  homepage: {
    has_logo: true,
    has_text_below_logo: true,
    has_data_content: true,
    has_missing_resource_callout: true,
    has_project_intro: true,
    has_info_boxes: true,
    homepage_helmet_text: " Overview - Terminology Service ",
    text_below_logo: "Terminology Service",
    project_intro_title: "Terminology Service NFDI4Health",
    project_intro_markdown_file:
      "projectSpecific/projectSpecificMarkdown/projectintro",
    imprint_markdown_file: "projectSpecific/projectSpecificMarkdown/imprint",
    privacy_markdown_file: "projectSpecific/projectSpecificMarkdown/privacy",
  },
  header: {
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
    funding_notice:
      "This service is developed in the project NFDI4Health. NFDI4Health is one of the funded consortia of the National Research Data Infrastructure programme of the DFG. (Project identifier 451265285 and 442326535).",
    last_update: "September 26, 2024",
    version: "development version",
    footer_logo_A_url: "https://www.dfg.de",
    footer_logo_B_url: "https://www.nfdi4health.de",
    footer_logo_C_url: "https://www.zbmed.de",
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
    search_example_text1: "diabetes",
    search_example_link1: "/search?q=diabetes",
    search_example_text2: "GO:0098743",
    search_example_link2: "/search?q=GO:0098743",
    search_example_text3: "http://snomed.info/id/423701002",
    search_example_link3: "/search?q=http://snomed.info/id/423701002",
  },
  projects: {
    cards: [{ name: "ProjectADescription" }, { name: "ProjectBDescription" }],
  },
};
