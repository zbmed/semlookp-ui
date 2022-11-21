import React from "react";
import { ResourcesWidget } from "@km/widgets-semlookp";
import { EuiButton, EuiButtonIcon, EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { Helmet } from "react-helmet";

export default function Resources() {
  return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>List of All Resources in the Terminology Service</h2>
      </EuiText>
      <EuiSpacer />
      <ResourcesWidget
        api="http://localhost:10009/api/"
        targetLink="https://semanticlookup.zbmed.de/safety/"
         // frontend="safety"
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
