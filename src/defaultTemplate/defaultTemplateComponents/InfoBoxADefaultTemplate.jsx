import { EuiCard, EuiImage, EuiLink, EuiSpacer, EuiText } from "@elastic/eui";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import EuiCustomLink from "../../common/layout/util/EuiCustomLink";
import { global_config, ts_specific_metadata } from "../../config";
import { imageMap } from "../../imageMap";

const description = (logo) => {
  return (
    <>
      <EuiText>
        <EuiLink href={"https://google.com"}> Some Institutions </EuiLink>
        Service <br></br>
        <EuiSpacer size="s" />
        <EuiLink href="https://google.com">
          <EuiImage size="s" src={logo} alt={"InfoBoxALogo"} />
        </EuiLink>
        <br></br>
        <EuiSpacer size="s" />
        <i>Short service description</i>
        <br></br>
        <EuiSpacer size="s" />
        <div style={{ textAlign: "center" }}>
          Long service description with
          <EuiCustomLink to={"/about/api"}> internal Links</EuiCustomLink> or
          <EuiLink href={"https://google.com"}> external Links </EuiLink>
        </div>
      </EuiText>
    </>
  );
};

const InfoBoxADefaultTemplate = () => {
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

export default InfoBoxADefaultTemplate;
