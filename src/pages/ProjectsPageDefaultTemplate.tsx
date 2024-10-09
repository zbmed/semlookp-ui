import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText } from "@elastic/eui";
import { Helmet } from "react-helmet";
import ProjectADescription from "../components/defaultTemplateComponents/ProjectADescription";

export default function ProjectsPageDefaultTemplate() {
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
            <ProjectADescription />
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
