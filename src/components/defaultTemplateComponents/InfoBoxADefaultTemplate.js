import { EuiCard, EuiImage, EuiLink, EuiSpacer, EuiText } from "@elastic/eui";
import { useTheme } from "@emotion/react";
import { ts_specific_metadata } from "../../config";
import EuiCustomLink from "../layout/util/EuiCustomLink";

const description = () => {
  return (
    <>
      <EuiText>
        <EuiLink href={"https://google.com"}> Some Institutions </EuiLink>
        Service <br></br>
        <EuiSpacer size="s" />
        <EuiLink href="https://google.com">
          <EuiImage
            size="s"
            alt="Placeholder"
            src="https://www.svgrepo.com/download/488322/picture.svg"
          />
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
  return (
    <EuiCard
      title={ts_specific_metadata.info_boxes.info_box1.title}
      description={description()}
      style={{
        backgroundColor: theme.color.infoBoxColor1,
        minHeight: 150,
      }}
      hasShadow={true}
    />
  );
};

export default InfoBoxADefaultTemplate;
