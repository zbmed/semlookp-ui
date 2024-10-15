import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { Helmet } from "react-helmet";
import { componentMap } from "../componentMap";
import { global_config } from "../config";

export default function About() {
  const projectComponents = componentMap[global_config.projectName];

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }

  const About = componentMap[global_config.projectName]["About"];
  return (
    <div>
      <EuiFlexGroup direction={"column"}>
        <EuiFlexItem>
          <EuiText>
            <h1>About</h1>
          </EuiText>
        </EuiFlexItem>
        <EuiSpacer size={"m"} />

        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel>
              <About />
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>

      <Helmet>
        <title> About the Terminology Service</title>
        <meta name="description" content="About the Terminology Service" />
      </Helmet>
    </div>
  );
}
