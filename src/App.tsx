// health
import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LinkScroller from "./common/components/LinkScroller";
import { Layout } from "./common/layout/Layout";
import About from "./common/pages/About";
import { default as ApiPage } from "./common/pages/Api";
import { default as Entity } from "./common/pages/Entity";
import { default as Error } from "./common/pages/Error";
import { default as Home } from "./common/pages/Home";
import { default as Ontology } from "./common/pages/Ontology";
import Projects from "./common/pages/Projects";
import { default as Resources } from "./common/pages/Resources";
import { default as SearchResults } from "./common/pages/SearchResults";
import StaticMarkdownPage from "./common/pages/static/StaticMarkdownPage";
import { global_config, ts_specific_metadata } from "./config";

const shouldUseMatomo = global_config.projectname === "health";

const instance = shouldUseMatomo
  ? createInstance({
      urlBase: "https://matomo.zbmed.de/",
      trackerUrl: "https://matomo.zbmed.de/matomo.php", // optional, default value: `${urlBase}matomo.php`
      srcUrl: "https://matomo.zbmed.de/matomo.js", // optional, default value: `${urlBase}matomo.js`
      siteId: 16,
      linkTracking: false, // Important!
    })
  : null;

function App() {
  const app = (
    <Router basename="/">
      <LinkScroller>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/api" element={<ApiPage />} />
              <Route path="*" element={<Error />} />
              <Route
                path="/privacy"
                element={
                  <StaticMarkdownPage
                    file={ts_specific_metadata.homepage.privacy_markdown_file}
                    title={"Privacy Policy"}
                  />
                }
              />
              <Route
                path="/imprint"
                element={
                  <StaticMarkdownPage
                    file={ts_specific_metadata.homepage.imprint_markdown_file}
                    title={"Imprint"}
                  />
                }
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/search" element={<SearchResults />} />
              <Route
                path="/ontologies/:ontologyId/:entityType"
                element={<Entity />}
              />
              <Route path="/ontologies/:ontologyId" element={<Ontology />} />
            </Route>
          </Routes>
        </Suspense>
      </LinkScroller>
    </Router>
  );
  return shouldUseMatomo ? (
    <MatomoProvider value={instance}>{app}</MatomoProvider>
  ) : (
    app
  );
}

export default App;
