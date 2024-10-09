import {
  EuiErrorBoundary,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from "@elastic/eui";
import { BottomBar } from "./util/BottomBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <EuiPage style={{ backgroundColor: "#dcdee0" }} paddingSize="none">
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
