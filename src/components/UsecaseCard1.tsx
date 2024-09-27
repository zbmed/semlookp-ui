import { EuiCard, EuiLink, EuiSpacer, EuiText } from "@elastic/eui";
import EuiCustomLink from "./layout/util/EuiCustomLink";

export const UsecaseCard1 = () => {
  const useCaseDescription = (
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

  return (
    <EuiCard
      // icon={icon}
      title="Use Case"
      description={useCaseDescription}
      // onClick={() => window.location.assign("https://preview.zbmed.de/")}
      style={{ backgroundColor: "#cce4f5", minHeight: 150 }}
      display="subdued"
    />
  );
};
