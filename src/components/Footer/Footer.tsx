import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";

export default function Footer() {
  return (
    <div>
      <EuiPanel className="footer" hasBorder={true}>
        <EuiFlexGroup gutterSize={"none"}>
          <EuiFlexItem>About the service:</EuiFlexItem>
          <EuiFlexItem>Maintainers:</EuiFlexItem>
          <EuiFlexItem>Project Partners:</EuiFlexItem>
          <EuiFlexItem>Funding:</EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </div>
  );
}
