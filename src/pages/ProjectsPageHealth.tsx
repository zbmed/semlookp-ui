import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { Helmet } from "react-helmet";
import NFDI4HealthDescription from "../components/projectSpecificComponents/NFDI4HealthDescription";
import IDSNDescription from "../components/projectSpecificComponents/IDSNDescription";

export default function ProjectsPageHealth() {
  return (
    <div>
      <EuiPanel>
        <EuiFlexGroup direction={"column"}>
          <EuiFlexItem>
            <EuiText>
              <h1>Projects</h1>
            </EuiText>
          </EuiFlexItem>

          <EuiFlexItem>
            <NFDI4HealthDescription />
          </EuiFlexItem>

          <EuiSpacer />

          <EuiFlexItem>
            <IDSNDescription />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
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
