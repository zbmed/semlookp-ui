import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiProvider,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiShowFor,
} from "@elastic/eui";
import {QueryClientProvider, QueryClient} from "react-query"
import { ReactComponent as SEMLOOKPLOGO } from "./components/Logos/NFDI_SemLookP_Logo.svg";

import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import Resources from "./pages/Resources/Resources";
import Error from "./pages/Error/Error";
import SamplePage from "./pages/SamplePage";
import Term from "./pages/Term/Term";
import Footer from "./components/Footer/Footer";

function App() {
  const queryClient = new QueryClient()

  return (
      <EuiProvider colorMode={"light"}>
        <QueryClientProvider client={queryClient}>
          <Router basename="/dev">
            <EuiPage paddingSize="none">
              <EuiPageBody>
                <EuiPageContent
                  hasBorder={false}
                  hasShadow={false}
                  paddingSize="none"
                  color="transparent"
                  borderRadius="none"
                >
                  <EuiHeader>
                    <EuiHeaderSection side="left">
                      <EuiHeaderSectionItem border="right">
                        <Link to="/">
                          <EuiIcon type={SEMLOOKPLOGO} title="SemLookP" size="original" width="120px" />
                        </Link>
                      </EuiHeaderSectionItem>
                      <EuiHeaderSectionItem>
                        <EuiHeaderLinks>
                          {/* TODO Remove /dev for production */}
                          <EuiHeaderLink href="/dev/">Home</EuiHeaderLink>
                          <EuiHeaderLink href="/dev/resources">Resources</EuiHeaderLink>
                          <EuiHeaderLink href="/dev/about">About</EuiHeaderLink>
                          <EuiHeaderLink href="/dev/sample">Sample</EuiHeaderLink>
                        </EuiHeaderLinks>
                      </EuiHeaderSectionItem>
                    </EuiHeaderSection>
                  </EuiHeader>
                  <EuiPageContentBody restrictWidth>
                    <EuiSpacer size="xl" />
                    <EuiShowFor sizes={["xl"]}>
                      <EuiSpacer size="xl" />
                    </EuiShowFor>

                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/sample" element={<SamplePage />} />
                      <Route path="/terms" element={<Term />} />
                      <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                  </EuiPageContentBody>
                </EuiPageContent>
              </EuiPageBody>
            </EuiPage>
          </Router>
        </QueryClientProvider>
      </EuiProvider>
  );
}

export default App;
