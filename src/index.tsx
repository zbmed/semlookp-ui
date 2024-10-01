import React from "react";
import { render } from "react-dom";
import App from "./App";
import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

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
