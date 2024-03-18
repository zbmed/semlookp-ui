import React from "react";
import { EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { Helmet } from "react-helmet";
import GlobalConfig from "../../config";
import { ResourcesWidget } from "@nfdi4health/semlookp-widgets";

const OLS4API = GlobalConfig.apiUrlSemlookpOls4;
export default function Resources() {
  return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>List of All Resources in the Terminology Service</h2>
      </EuiText>
      <EuiSpacer />
      <ResourcesWidget
        api={OLS4API}
        targetLink={"/"}
        parameter={"collection=nfdi4health"}
      />
      <Helmet>
        <title> Resources &gt; SemLookP </title>
        <meta
          name="description"
          content="List of All Resources in the Terminology Service - SemLookP"
        />
      </Helmet>
    </EuiPanel>
  );
}
