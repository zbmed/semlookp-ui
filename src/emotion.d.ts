import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      euiPrimary: string;
      euiWarning: string;
      euiBody: string;
      euiAccent: string;
      missingResourceBoxColor: string;
      useCaseCard1Color: string;
      useCaseCard2Color: string;
    };
  }
}
