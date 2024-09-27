import React from "react";
import { render } from "react-dom";
import App from "./App";
import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <EuiProvider
      colorMode={"light"}
      modify={{
        colors: {
          LIGHT: { primary: "#005e88", accent: "#e3e55f" },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </EuiProvider>
  </React.StrictMode>,
  rootElement
);
