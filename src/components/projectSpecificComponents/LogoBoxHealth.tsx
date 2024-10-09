import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiTextColor,
  EuiTitle,
} from "@elastic/eui";
import { global_config, ts_specific_metadata } from "../../config";
import { Suspense, useEffect, useState } from "react";
import { imageMap } from "../imageMap";

const LogoBoxHealth = () => {
  const [logos, setLogos] = useState({
    homepageLogo: null,
  });

  const projectName = global_config.projectName;
  const projectComponents = imageMap[projectName];

  useEffect(() => {
    if (projectComponents) {
      const loadLogos = async () => {
        const homepageLogo = await projectComponents.homepageLogo();

        setLogos({
          homepageLogo: homepageLogo.default,
        });
      };

      loadLogos();
    }
  }, [projectComponents]);

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <EuiFlexGroup direction={"column"} alignItems={"center"}>
          <EuiFlexItem grow={false} style={{ marginBottom: "-40px" }}>
            <EuiImage size="l" alt="homepagelogo" src={logos.homepageLogo} />
          </EuiFlexItem>
          {ts_specific_metadata.homepage.has_text_below_logo && (
            <EuiFlexItem grow={false}>
              <EuiTitle size="m">
                <h1 style={{ fontSize: "40px" }}>
                  <EuiTextColor>
                    {ts_specific_metadata.homepage.text_below_logo}
                  </EuiTextColor>
                </h1>
              </EuiTitle>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </Suspense>
    </>
  );
};

export default LogoBoxHealth;
