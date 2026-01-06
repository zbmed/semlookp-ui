// health
import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import { Suspense, useEffect, useState } from "react";
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
import { ts_specific_metadata } from "./config";
import TrackingConsentFormComponent, {
  CONSENT_KEY,
} from "./projectSpecific/projectSpecificComponents/trackingConsent";

function App() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [matomoInstance, setMatomoInstance] = useState<any>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY) as
      | "accepted"
      | "declined"
      | null;
    if (storedConsent) setConsent(storedConsent);
  }, []);

  useEffect(() => {
    if (consent === "accepted" && !matomoInstance) {
      const instance = createInstance({
        urlBase: "https://books.publisso.de/matomo/",
        trackerUrl: "https://books.publisso.de/matomo/matomo.php", // optional, default value: `${urlBase}matomo.php`
        srcUrl: "https://books.publisso.de/matomo/matomo.js", // optional, default value: `${urlBase}matomo.js`
        siteId: 16,
        linkTracking: false, // Important!
      });
      setMatomoInstance(instance);
    }
  }, [consent, matomoInstance]);

  const handleConsentChange = (choice: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
  };
  const appRoutes = (
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
  return (
    <>
      {consent === null && (
        <TrackingConsentFormComponent onConsentChange={handleConsentChange} />
      )}

      {matomoInstance ? (
        <MatomoProvider value={matomoInstance}>{appRoutes}</MatomoProvider>
      ) : (
        appRoutes
      )}
    </>
  );
}

export default App;
