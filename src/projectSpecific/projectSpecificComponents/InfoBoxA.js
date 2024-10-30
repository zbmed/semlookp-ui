import { EuiCard, EuiLink, EuiSpacer, EuiText } from "@elastic/eui";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { global_config, ts_specific_metadata } from "../../config";
import { imageMap } from "../../imageMap";

const description = (logo) => {
  return (
    <>
      <EuiText>
        {/*<EuiLink href="https://google.com">*/}
        {/*  <EuiImage size="m" src={logo} alt={"InfoBoxALogo"} />*/}
        {/*</EuiLink>*/}
        {/*<br></br>*/}
        {/*<EuiSpacer size="s" />*/}
        <i>Research data management for low-temperature plasma science</i>
        <br></br>
        <EuiSpacer size="s" />
        <div style={{ textAlign: "center" }}>
          With the development of the plasma metadata schema
          <EuiLink href={"https://www.go-fair.org/fair-principles/"}>
            {" "}
            Plasma-MDS{" "}
          </EuiLink>
          , the low-temperature plasma (LTP) community initiated developments
          towards structured research data management (RDM) and measures to
          implement the
          <EuiLink href={"https://www.go-fair.org/fair-principles/"}>
            {" "}
            FAIR data principles{" "}
          </EuiLink>
          in the scientific community.
        </div>
      </EuiText>
    </>
  );
};

const InfoBoxA = () => {
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

export default InfoBoxA;
