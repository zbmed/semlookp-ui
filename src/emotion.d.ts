import "@emotion/react";
import { IconSize } from "@elastic/eui/src/components/icon/icon";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      euiPrimary: string;
      euiWarning: string;
      euiBody: string;
      euiAccent: string;
      missingResourceBoxColor: string;
      infoBoxColor1: string;
      infoBoxColor2: string;
      headerBorderTop: string;
      headerBackground: string;
    };
    shape: {
      headerLogoSize: string; // "original" | "s" | "m" | "l" | "xl" | "xxl";
      headerLogoWidth: string;
    };
  }
}
