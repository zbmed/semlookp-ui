import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiProvider,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLink,
  EuiHeaderLinks,
} from "@elastic/eui";
import {QueryClientProvider, QueryClient} from "react-query"

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
          <Router>
            <div>
              <div>
                <EuiHeader>
                  <EuiHeaderSectionItem border="right">
                    <EuiHeaderLogo iconType="searchProfilerApp">
                      SemLookP
                    </EuiHeaderLogo>
                  </EuiHeaderSectionItem>
                  <EuiHeaderSectionItem>
                    <EuiHeaderLinks>
                      <EuiHeaderLink href="/">Home</EuiHeaderLink>
                      <EuiHeaderLink href="/resources">Resources</EuiHeaderLink>
                      <EuiHeaderLink href="/about">About</EuiHeaderLink>
                      <EuiHeaderLink href="/sample">Sample</EuiHeaderLink>
                    </EuiHeaderLinks>
                  </EuiHeaderSectionItem>
                </EuiHeader>
              </div>
              <div className="mainPage">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/sample" element={<SamplePage />} />
                  <Route path="/terms" element={<Term />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </Router>
        </QueryClientProvider>
      </EuiProvider>
  );
}

export default App;
