import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { componentMap } from "../componentMap";
import { global_config, ts_specific_metadata } from "../config";

export default function Projects() {
  return (
    <div>
      <EuiFlexGroup direction={"column"}>
        <EuiFlexItem>
          <EuiText>
            <h1>Related Projects</h1>
          </EuiText>
        </EuiFlexItem>
        <EuiSpacer size={"m"} />

        <EuiFlexGroup direction={"column"}>
          {ts_specific_metadata.projects.cards.map((card, index) => {
            const Component =
              componentMap[global_config.projectName][card.name];
            return (
              <EuiFlexItem key={index}>
                <Suspense fallback={<EuiLoadingSpinner size="xl" />}>
                  <Component />
                </Suspense>
              </EuiFlexItem>
            );
          })}
        </EuiFlexGroup>
      </EuiFlexGroup>
      <Helmet>
        <title> Projects </title>
        <meta
          name="description"
          content="Projects related to the Terminology Service"
        />
      </Helmet>
    </div>
  );
}
