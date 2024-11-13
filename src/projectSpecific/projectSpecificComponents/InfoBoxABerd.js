import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { global_config, ts_specific_metadata } from "../../config";
import { imageMap } from "../../imageMap";

const description = (logo) => {
  return (
    <>
      <EuiText>
        <EuiSpacer size={"m"} />
        <EuiFlexGroup>
          <EuiFlexItem grow={8}>
            <EuiFlexGroup direction={"column"}>
              <EuiFlexItem>
                <div style={{ textAlign: "center" }}>
                  <EuiLink href={"https://www.berd-nfdi.de/"}>
                    {" "}
                    BERD@NFDI{" "}
                  </EuiLink>
                  is a Central Resource for Unstructured Data Related to
                  Business, Economics, and similar Social Sciences.
                </div>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <div>
                  <EuiButton
                    style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    onClick={() =>
                      window.location.assign("https://www.berd-nfdi.de/about/")
                    }
                  >
                    Learn more about BERD@NFDI
                  </EuiButton>
                </div>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiText>
    </>
  );
};

const InfoBoxABerd = () => {
  const theme = useTheme();
  const [logos, setLogos] = useState({
    logo: null,
  });

  const projectComponents = imageMap[global_config.projectName];

  useEffect(() => {
    if (projectComponents) {
      const loadLogos = async () => {
        const logo = await projectComponents.infoBoxLogoA();

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
    <EuiCard
      title={ts_specific_metadata.info_boxes.info_box1.title}
      description={description(logos.logo)}
      style={{
        backgroundColor: theme.color.infoBoxColor1,
        minHeight: 150,
      }}
      hasShadow={true}
    />
  );
};

export default InfoBoxABerd;
