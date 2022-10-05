import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiProvider,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiShowFor,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import {QueryClientProvider, QueryClient} from "react-query"
import { ReactComponent as SEMLOOKPLOGO } from "./components/Logos/NFDI_SemLookP_Logo.svg";
import { ReactComponent as NFDI4HEALTHICON } from "./components/Logos/NFDI4Health_Icon.svg";

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
                        <EuiHeaderLogo iconType={NFDI4HEALTHICON} iconTitle="SemLookP" href="#" />
                      </EuiHeaderSectionItem>
                      <EuiHeaderSectionItem>
                        <EuiHeaderLinks>
                          <EuiHeaderLink href="/">Home</EuiHeaderLink>
                          <EuiHeaderLink href="/resources">Resources</EuiHeaderLink>
                          <EuiHeaderLink href="/about">About</EuiHeaderLink>
                          <EuiHeaderLink href="/sample">Sample</EuiHeaderLink>
                        </EuiHeaderLinks>
                      </EuiHeaderSectionItem>
                    </EuiHeaderSection>
                  </EuiHeader>
                  <EuiPageContentBody restrictWidth>
                    <EuiSpacer size="xl" />
                    <EuiShowFor sizes={["xl"]}>
                      <EuiSpacer size="xl" />
                    </EuiShowFor>

                    <EuiFlexGroup justifyContent="spaceAround">
                      <EuiFlexItem grow={false}>
                        <SEMLOOKPLOGO height="170px" width="auto" />
                      </EuiFlexItem>
                    </EuiFlexGroup>

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
