import React from "react";
import { ResourcesWidget } from "@km/widgets-semlookp";
import { EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";

export default function Resources() {
  return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>List of All Resources in the Terminology Service</h2>
      </EuiText>
      <EuiSpacer />
      <ResourcesWidget api="https://semanticlookup.zbmed.de/ols/api/" />
    </EuiPanel>
  );
}
