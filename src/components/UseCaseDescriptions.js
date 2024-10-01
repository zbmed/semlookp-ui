import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import EuiCustomLink from "./layout/util/EuiCustomLink";
import widgetimage from "./layout/logos/widgets-icons.png";

export const useCase1Description = () => {
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

export const useCase2Description = () => {
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
      <EuiImage
        size="original"
        hasShadow
        allowFullScreen={false}
        caption=""
        src={widgetimage}
        alt={"SemLookP Widgets Icons"}
      />
    </>
  );
};
