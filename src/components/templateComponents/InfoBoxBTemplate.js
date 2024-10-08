import { EuiCard, EuiLink, EuiSpacer, EuiText } from "@elastic/eui";
import EuiCustomLink from "../layout/util/EuiCustomLink";
import { ts_specific_metadata } from "../../config";
import { useTheme } from "@emotion/react";

const description = () => {
  return (
    <>
      <EuiText>
        <EuiLink href={"https://www.zbmed.de/en/"}> ZB MED </EuiLink>
        preprint Viewer <br></br>
        <EuiSpacer size="s" />
        <EuiLink href="https://preview.zbmed.de/">
          <span className="brandColorPreview" style={{ fontSize: "x-large" }}>
            pre<span className="brandSubColorPreview">VIEW</span>: COVID-19
          </span>
        </EuiLink>
        <br></br>
        <EuiSpacer size="s" />
        <i>Semantic Search to Explore COVID-19 Research Preprints</i>
        <br></br>
        <EuiSpacer size="s" />
        <div style={{ textAlign: "center" }}>
          The search engine uses the
          <EuiCustomLink to={"/about/api"}> SemLookP API</EuiCustomLink> and
          <EuiLink
            href={
              "https://ts4nfdi.github.io/terminology-service-suite/comp/latest/"
            }
          >
            {" "}
            Terminology Service Suite{" "}
          </EuiLink>
          to display semantic information.
        </div>
      </EuiText>
    </>
  );
};

const InfoBoxBTemplate = () => {
  const theme = useTheme();
  return (
    <EuiCard
      title={ts_specific_metadata.info_boxes.info_box2.title}
      description={description()}
      style={{
        backgroundColor: theme.color.infoBoxColor2,
        minHeight: 150,
      }}
      display="subdued"
    />
  );
};

export default InfoBoxBTemplate;
