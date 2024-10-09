import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiText,
  EuiButton,
  EuiImage,
} from "@elastic/eui";
import { global_config, ts_specific_metadata } from "../../config";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { imageMap } from "../imageMap";

const description = (logo) => {
  return (
    <>
      <EuiText>
        <EuiFlexGroup alignItems={"center"}>
          <EuiFlexItem grow={3}>
            <div style={{ textAlign: "center" }}>
              <EuiText>
                <i>
                  Small
                  <EuiLink
                    href={
                      "https://github.com/ts4nfdi/terminology-service-suite"
                    }
                  >
                    {" "}
                    GUI components{" "}
                  </EuiLink>
                  to use and display semantic information
                </i>
              </EuiText>
            </div>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiButton
                  onClick={() =>
                    window.location.assign(
                      "https://ts4nfdi.github.io/terminology-service-suite/comp/latest"
                    )
                  }
                >
                  Explore
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="s" />
      </EuiText>
      <EuiSpacer size={"s"} />
      <EuiImage size="original" src={logo} alt={"SemLookP Widgets Icons"} />
    </>
  );
};

const InfoBoxBTemplate = () => {
  const theme = useTheme();
  const [logos, setLogos] = useState({
    logo: null,
  });

  const projectComponents = imageMap[global_config.projectName];

  useEffect(() => {
    if (projectComponents) {
      const loadLogos = async () => {
        const logo = await projectComponents.infoBoxLogoB();

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
      title={ts_specific_metadata.info_boxes.info_box2.title}
      description={description(logos.logo)}
      style={{
        backgroundColor: theme.color.infoBoxColor2,
        minHeight: 150,
      }}
      hasShadow={true}
    />
  );
};

export default InfoBoxBTemplate;
