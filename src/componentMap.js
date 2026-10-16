// defaultTemplate
import { lazy } from "react";

export const componentMap = {
  defaultTemplate: {
    InfoBoxA: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/InfoBoxADefaultTemplate"),
    ),
    InfoBoxB: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/InfoBoxBDefaultTemplate"),
    ),
    FooterLogos: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/FooterLogosDefaultTemplate"),
    ),
    LogoBox: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/LogoBoxDefaultTemplate"),
    ),
    ProjectADescription: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/ProjectADescription"),
    ),
    ProjectBDescription: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/ProjectADescription"),
    ),
    About: lazy(
      () =>
        import("./defaultTemplate/defaultTemplateComponents/AboutDescriptionDefaultTemplate"),
    ),
  },
};

const markdownMap = import.meta.glob(
  "./{defaultTemplate,projectSpecific}/*Markdown/*.md",
  { query: "?raw", import: "default" },
);

// accepts config paths with or without ".md" suffix
export const loadMarkdown = (file) => {
  const loader = markdownMap[`./${file.replace(/\.md$/, "")}.md`];
  return loader ? loader() : Promise.resolve("");
};
