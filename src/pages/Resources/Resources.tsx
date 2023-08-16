import React from "react";
import { ResourcesWidget } from "@nfdi4health/semlookp-widgets";
import { EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { Helmet } from "react-helmet";

export default function Resources() {
  return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>List of All Resources in the Terminology Service</h2>
      </EuiText>
      <EuiSpacer />
      <ResourcesWidget
        api="https://semanticlookup.zbmed.de/api/"
        targetLink="https://semanticlookup.zbmed.de/dev/"
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
