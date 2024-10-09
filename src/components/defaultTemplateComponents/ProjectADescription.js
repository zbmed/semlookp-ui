import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import { Suspense, useEffect, useState } from "react";
import { global_config } from "../../config";
import { imageMap } from "../imageMap";

export default function ProjectADescription() {
  const [logos, setLogos] = useState({
    logo: null,
  });

  const projectName = global_config.projectName;
  const projectComponents = imageMap[projectName];

  useEffect(() => {
    if (projectComponents) {
      const loadLogos = async () => {
        const logo = await projectComponents.projectALogo();

        setLogos({
          logo: logo.default,
        });
      };

      loadLogos();
    }
  }, [projectComponents]);

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }
  return (
    <div>
      <EuiPanel>
        <EuiFlexGroup>
          <EuiFlexItem grow={8}>
            <EuiText>
              <h2 id="project_title">Some project title</h2>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={2}>
            <EuiLink href={"https://"} target="_blank" external={false}>
              <Suspense fallback={<div>Loading...</div>}>
                <EuiImage alt={"Project logo"} src={logos.logo} size={"s"} />
              </Suspense>
            </EuiLink>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiText>
          <h3>Summary</h3>
          <p>Project summary</p>
          <EuiFlexGroup alignItems={"center"}>
            <EuiFlexItem grow={2}>
              <h3>Funding</h3>
              <p>Funding information.</p>
            </EuiFlexItem>
          </EuiFlexGroup>
          <h3>Further Information</h3>
          <ul>
            <li>
              <EuiLink href={"https://"} target="_blank" external={false}>
                Website of the project
              </EuiLink>
            </li>
          </ul>
        </EuiText>
      </EuiPanel>
    </div>
  );
}
