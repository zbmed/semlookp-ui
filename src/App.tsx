import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import Resources from "./pages/Resources/Resources";
import Error from "./pages/Error/Error";
import Term from "./pages/Term/Term";
import ProjectsPage from './pages/Projects/ProjectsPage'

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
              <Route path="/resources" element={<Resources />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/terms" element={<Term />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </EuiProvider>
  );
}

export default App;
