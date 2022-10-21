import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./components/Layout/Layout";
import {
  Home, AboutPage, ApiPage, Error, ImprintPage, PrivacyPage, ProjectsPage,
  Resources, Term
} from "./PagesImport";

function App() {
  const queryClient = new QueryClient();

  return (
    <EuiProvider colorMode={"light"}>
      <QueryClientProvider client={queryClient}>
        <Router basename="/dev">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/api" element={<ApiPage />} />
              <Route path="*" element={<Error />} />
              <Route path="/imprint" element={<ImprintPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/terms" element={<Term />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </EuiProvider>
  );
}

export default App;
