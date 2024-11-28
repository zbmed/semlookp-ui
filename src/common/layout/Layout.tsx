import {
  EuiErrorBoundary,
  EuiPage,
  EuiPageBody,
  EuiPageSection,
} from "@elastic/eui";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { BottomBar } from "./util/BottomBar";

export const Layout = () => {
  return (
    <EuiPage style={{ backgroundColor: "#F5F5F5" }} paddingSize="none">
      <EuiPageBody>
        <EuiPageSection paddingSize="none" color="transparent">
          <Header />
          <EuiPageSection restrictWidth style={{ marginTop: "80px" }}>
            <EuiErrorBoundary>
              <Outlet />
            </EuiErrorBoundary>
            <BottomBar />
            <Footer />
          </EuiPageSection>
        </EuiPageSection>
      </EuiPageBody>
    </EuiPage>
  );
};
