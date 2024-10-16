import {
  EuiErrorBoundary,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from "@elastic/eui";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { BottomBar } from "./util/BottomBar";

export const Layout = () => {
  return (
    <EuiPage style={{ backgroundColor: "#F5F5F5" }} paddingSize="none">
      <EuiPageBody>
        <EuiPageContent
          hasBorder={false}
          hasShadow={false}
          paddingSize="none"
          color="transparent"
          borderRadius="none"
        >
          <Header />
          <EuiPageContentBody restrictWidth style={{ marginTop: "80px" }}>
            <EuiErrorBoundary>
              <Outlet />
            </EuiErrorBoundary>
            <BottomBar />
            <Footer />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
