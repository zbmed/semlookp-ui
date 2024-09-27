export const global_config = {
  api_url: "http://ols4-test.qa.km.k8s.zbmed.de/ols4/api/",
};

export const ts_specific_metadata = {
  active_dev_banner_text:
    " This software is currently under active development. Therefore, please forgive any errors that occur. We would be very pleased if you could report any errors to semlookp-support@zbmed.de.",
  homepage: {
    homepage_helmet_text: " Overview - Terminology Service ",
    homepage_below_logo_text: "Terminology Service",
    project_information_title: "Terminology Service NFDI4Health",
    funding_notice:
      "This service is developed in the project NFDI4Health. NFDI4Health is one of the funded consortia of the National Research Data Infrastructure programme of the DFG. (Project identifier 451265285 and 442326535).",
  },
  search: {
    search_example_text1: "diabetes",
    search_example_link1: "/search?q=diabetes",
    search_example_text2: "GO:0098743",
    search_example_link2: "/search?q=GO:0098743",
    search_example_text3: "http://snomed.info/id/423701002",
    search_example_link3: "/search?q=http://snomed.info/id/423701002",
  },
  contact_mail_address: "semlookp-support@zbmed.de",
  contact_mail_address_mailto: "mailto:semlookp-support@zbmed.de",
  missing_resource_box_color: "#AEE6E6",
  collection: "collection=nfdi4health",
};
