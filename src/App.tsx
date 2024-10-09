import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import LinkScroller from "./components/LinkScroller";
import { Layout } from "./components/layout/Layout";
import {
  ApiPage,
  Entity,
  Error,
  Home,
  Ontology,
  Resources,
  SearchResults,
} from "./imports/PagesImport";
import StaticMarkdownPage from "./pages/static/StaticMarkdownPage";
import { componentMap } from "./components/componentMap";
import { global_config } from "./config";
import { Suspense } from "react";

function App() {
  const projectComponents = componentMap[global_config.projectName];

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }

  const AboutPage = componentMap[global_config.projectName]["AboutPage"];
  const ProjectsPage = componentMap[global_config.projectName]["ProjectsPage"];

  return (
    <Router basename="/">
      <LinkScroller>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {AboutPage && <Route path="/about" element={<AboutPage />} />}
              <Route path="/about/api" element={<ApiPage />} />
              <Route path="*" element={<Error />} />
              <Route path="/ontologies/:ontologyId" element={<Ontology />} />
              <Route
                path="/privacy"
                element={
                  <StaticMarkdownPage
                    file={"privacy"}
                    title={"Privacy Policy"}
                  />
                }
              />
              <Route
                path="/imprint"
                element={
                  <StaticMarkdownPage file={"imprint"} title={"Imprint"} />
                }
              />
              {ProjectsPage && (
                <Route path="/projects" element={<ProjectsPage />} />
              )}
              <Route path="/resources" element={<Resources />} />
              <Route path="/search" element={<SearchResults />} />
              <Route
                path="/ontologies/:ontologyId/:entityType"
                element={<Entity />}
              />
            </Route>
          </Routes>
        </Suspense>
      </LinkScroller>
    </Router>
  );
}

export default App;
