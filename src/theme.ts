// plasmamds
import { global_config } from "./config";

const defaultTemplateTheme = {
  primary: "#005e88",
  warning: "#e3e55f",
  body: "#e5e5e5",
  accent: "#e3e55f",
  missingResourceBoxColor: "#ccc8c8",
  infoBoxColor1: "#b0aeae",
  infoBoxColor2: "#e8e6e6",
  headerBorderTop: "#000000",
  headerBackground: "#ffffff",
  headerLogoSize: "l", // "original" | "s" | "m" | "l" | "xl" | "xxl";
  headerLogoWidth: "120px",
};

const plasmamdsTheme = {
  primary: "#022556",
  warning: "#e3e55f",
  body: "#e5e5e5",
  accent: "#e3e55f",
  missingResourceBoxColor: "#ccc8c8",
  infoBoxColor1: "#8193ac",
  infoBoxColor2: "#c4ccd8",
  headerBorderTop: "#000000",
  headerBackground: "#ffffff",
  headerLogoSize: "l", // "original" | "s" | "m" | "l" | "xl" | "xxl";
  headerLogoWidth: "120px",
};

const themes = {
  template: defaultTemplateTheme,
  plasmamds: plasmamdsTheme,
};

const selectedTheme = themes[global_config.projectName] || defaultTemplateTheme;

export const theme = {
  color: {
    euiPrimary: selectedTheme.primary,
    euiWarning: selectedTheme.warning,
    euiBody: selectedTheme.body,
    euiAccent: selectedTheme.accent,
    missingResourceBoxColor: selectedTheme.missingResourceBoxColor,
    infoBoxColor1: selectedTheme.infoBoxColor1,
    infoBoxColor2: selectedTheme.infoBoxColor2,
    headerBorderTop: selectedTheme.headerBorderTop,
    headerBackground: selectedTheme.headerBackground,
  },
  shape: {
    headerLogoSize: selectedTheme.headerLogoSize,
    headerLogoWidth: selectedTheme.headerLogoWidth,
  },
};
