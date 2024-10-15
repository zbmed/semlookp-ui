import { EuiProvider } from "@elastic/eui";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { theme } from "./theme";

const rootElement = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <EuiProvider
        colorMode={"light"}
        modify={{
          colors: {
            LIGHT: {
              primary: theme.color.euiPrimary,
              accent: theme.color.euiAccent,
            },
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </EuiProvider>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
