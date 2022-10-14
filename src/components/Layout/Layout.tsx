import React from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiShowFor,
} from "@elastic/eui";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <EuiPage paddingSize="none">
      <EuiPageBody>
        <EuiPageContent
          hasBorder={false}
          hasShadow={false}
          paddingSize="none"
          color="transparent"
          borderRadius="none"
        >
          <Header />

          <EuiPageContentBody restrictWidth>
            <EuiSpacer size="xl" />
            <EuiShowFor sizes={["xl"]}>
              <EuiSpacer size="xl" />
            </EuiShowFor>

            <Outlet />

            <Footer />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}