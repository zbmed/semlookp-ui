import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";
import LinkScroller from "./components/LinkScroller";

import Layout from "./components/Layout/Layout";
import {
  AboutPage,
  ApiPage,
  Entity,
  Error,
  Home,
  ImprintPage,
  Ontology,
  PrivacyPage,
  ProjectsPage,
  Resources,
  SearchResults
} from "./imports/PagesImport";

function App() {
  const queryClient = new QueryClient();

  return (
    <EuiProvider colorMode={"light"}>
      <QueryClientProvider client={queryClient}>
        <Router basename="/">
          <LinkScroller>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about/api" element={<ApiPage />} />
                <Route path="*" element={<Error />} />
                <Route path="/imprint" element={<ImprintPage />} />
                <Route path="/ontologies/:ontologyId" element={<Ontology />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/ontologies/:ontologyId/:entityType" element={<Entity />} />
              </Route>
            </Routes>
          </LinkScroller>
        </Router>
      </QueryClientProvider>
    </EuiProvider>
  );
}

export default App;
