import { EuiProvider } from "@elastic/eui";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { theme } from "./theme";

const rootElement = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();
const root = createRoot(rootElement!);

root.render(
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
  </ThemeProvider>,
);
