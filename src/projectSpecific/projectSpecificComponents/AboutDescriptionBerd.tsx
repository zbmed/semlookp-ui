import { EuiLink, EuiText } from "@elastic/eui";
import EuiCustomLink from "../../common/layout/util/EuiCustomLink";

export default function AboutDescriptionBerd() {
  return (
    <EuiText>
      <h2>About the Terminology Service</h2>
      <p>
        The SemLookP Terminology Service aims to provide access to key
        terminologies. It is developed and maintained by{" "}
        <EuiLink href={"https://"}> Some Institution.</EuiLink> It emerged from
        the BMBF-funded project{" "}
        <EuiLink href={"https://www.idsn.info/de/idsn.html"}> IDSN. </EuiLink>{" "}
        The system is based on the Ontology Lookup Service (OLS), that is
        developed and maintained by the
        <EuiLink
          href={
            "https://www.ebi.ac.uk/about/teams/samples-phenotypes-ontologies/"
          }
        >
          {" "}
          Samples, Phenotypes and Ontologies Team (SPOT){" "}
        </EuiLink>{" "}
        at <EuiLink href={"https://www.ebi.ac.uk/"}> EMBL-EBI. </EuiLink>
      </p>
      <h3>API documentation:</h3>
      <p>
        {" "}
        <EuiCustomLink to="/about/api">
          Documentation on how to use the Terminology Service’s REST API
        </EuiCustomLink>
      </p>
      <h3>Source Code:</h3>
      <p>
        <EuiLink href="https://github.com/zbmed/semlookp-ui" target={"_blank"}>
          Terminology Service UI
        </EuiLink>
      </p>
      <h3>EMBL-EBIs OLS Help:</h3>
      <p>
        <EuiLink href="https://www.ebi.ac.uk/ols4/help" target={"_blank"}>
          EMBL-EBI’s help page for the Ontology Lookup Service
        </EuiLink>
      </p>

      <h3>Publications:</h3>
      <EuiLink
        href="https://swat4hcls.figshare.com/articles/A_Semantic_Data_Integration_Methodology_for_Translational_Neurodegenerative_Disease_Research/7339244"
        target="_blank"
      >
        IDSN
      </EuiLink>
      <p>
        {" "}
        A Semantic Data Integration Methodology for Translational
        Neurodegenerative Disease Research
      </p>
    </EuiText>
  );
}
