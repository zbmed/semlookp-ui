import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import LinkScroller from "./components/LinkScroller";
import { Layout } from "./components/layout/Layout";
import {
  AboutPage,
  ApiPage,
  Entity,
  Error,
  Home,
  Ontology,
  ProjectsPage,
  Resources,
  SearchResults,
} from "./imports/PagesImport";
import StaticMarkdownPage from "./pages/static/StaticMarkdownPage";

function App() {
  return (
    <Router basename="/">
      <LinkScroller>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/api" element={<ApiPage />} />
            <Route path="*" element={<Error />} />
            <Route path="/ontologies/:ontologyId" element={<Ontology />} />
            <Route
              path="/privacy"
              element={
                <StaticMarkdownPage file={"privacy"} title={"Privacy Policy"} />
              }
            />
            <Route
              path="/imprint"
              element={
                <StaticMarkdownPage file={"imprint"} title={"Imprint"} />
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/search" element={<SearchResults />} />
            <Route
              path="/ontologies/:ontologyId/:entityType"
              element={<Entity />}
            />
          </Route>
        </Routes>
      </LinkScroller>
    </Router>
  );
}

export default App;
