import "@elastic/eui/dist/eui_theme_light.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { default as ApiPage } from "../src/pages/Api";
import { default as Entity } from "../src/pages/Entity";
import { default as Error } from "../src/pages/Error";
import { default as Home } from "../src/pages/Home";
import { default as Ontology } from "../src/pages/Ontology";
import { default as Resources } from "../src/pages/Resources";
import { default as SearchResults } from "../src/pages/SearchResults";
import { Layout } from "./components/layout/Layout";
import LinkScroller from "./components/LinkScroller";
import About from "./pages/About";
import Projects from "./pages/Projects";
import StaticMarkdownPage from "./pages/static/StaticMarkdownPage";

function App() {
  return (
    <Router basename="/">
      <LinkScroller>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
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

              <Route path="/projects" element={<Projects />} />
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
