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
        <EuiLink href={"https://www.fairagro.net/"}> FAIRagro's </EuiLink>
        Search Hub <br></br>
        <EuiSpacer size="s" />
        <EuiLink href="https://google.com">
          <EuiImage size="s" src={logo} alt={"InfoBoxALogo"} />
        </EuiLink>
        <br></br>
        <EuiSpacer size="s" />
        <i>
          Central portal to discover agrosystem-related datasets and research
          data repositories.{" "}
        </i>
        <br></br>
        <EuiSpacer size="s" />
        <div style={{ textAlign: "center" }}>
          The FAIRagro Search Hub's{" "}
          <EuiLink href={"https://datasets.search-hub.fairagro.net/"}>
            {" "}
            Dataset Finder{" "}
          </EuiLink>{" "}
          uses the
          <EuiCustomLink to={"/about/api"}> SemLookP API</EuiCustomLink> and
          <EuiLink
              href={"https://terminology.services.base4nfdi.de/tss/comp/latest/"}
          >
            {" "}
            Terminology Service Suite{" "}
          </EuiLink>
          to make semantic concepts searchable.
        </div>
      </EuiText>
    </>
  );
};

const InfoBoxAFairAgro = () => {
  const theme = useTheme();
  const [logos, setLogos] = useState({
    logo: null,
  });

  const projectComponents = imageMap[global_config.projectName];

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

export default InfoBoxAFairAgro;
