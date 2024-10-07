export const global_config = {
  api_url: "http://ols4-nfdi4health.qa.km.k8s.zbmed.de/ols4/api/",
};

export const ts_specific_metadata = {
  active_dev_banner_text:
    " This software is currently under active development. Therefore, please forgive any errors that occur. We would be very pleased if you could report any errors to semlookp-support@zbmed.de.",
  contact_mail_address: "semlookp-support@zbmed.de",
  contact_mail_address_mailto: "mailto:semlookp-support@zbmed.de",
  collection: "collection=nfdi4health",
  homepage: {
    show_logo: true,
    show_text_below_logo: true,
    show_data_content: true,
    show_missing_resource_callout: true,
    show_project_information: true,
    show_info_boxes: true,
    homepage_helmet_text: " Overview - Terminology Service ",
    text_below_logo: "Terminology Service",
    project_information_title: "Terminology Service NFDI4Health",
    funding_notice:
      "This service is developed in the project NFDI4Health. NFDI4Health is one of the funded consortia of the National Research Data Infrastructure programme of the DFG. (Project identifier 451265285 and 442326535).",
    last_update: "September 26, 2024",
    version: "development version",
    footer_logo_1_url: "https://www.dfg.de",
    footer_logo_2_url: "https://www.nfdi4health.de",
    footer_logo_3_url: "https://www.zbmed.de",
  },
  info_boxes: {
    show_info_box1: true,
    show_info_box2: true,
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
};
