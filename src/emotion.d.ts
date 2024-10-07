import "@emotion/react";

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
    };
  }
}
