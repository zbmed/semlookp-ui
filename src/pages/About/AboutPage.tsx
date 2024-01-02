import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLink, EuiPanel, EuiText } from "@elastic/eui";
import EuiCustomLink from "../../router/EuiCustomLink";
import { Helmet } from "react-helmet";

export default function AboutPage() {
  return (
    <EuiFlexGroup justifyContent="spaceAround">
      <EuiPanel paddingSize="l">
        <EuiFlexItem grow={false}>
          <EuiText>
            <h2>About the Semantic Lookup Platform</h2>
            <p>The Semantic Lookup Platform aims to provide accessibility to controlled and linked semantic information
              in the health domain. It is developed and maintained by <EuiLink
                href={"https://www.zbmed.de/en/"}> ZB MED - Information Centre for Life Sciences.</EuiLink> It emerged
              from the BMBF-funded project <EuiLink href={"http://localhost:3000/projects"}> IDSN. </EuiLink> The
              system is based on the Ontology Lookup Service (OLS), that is developed and maintained by the
              <EuiLink href={"https://www.ebi.ac.uk/about/teams/samples-phenotypes-ontologies/"}> Samples, Phenotypes
                and Ontologies Team (SPOT) </EuiLink> at <EuiLink href={"https://www.ebi.ac.uk/"}> EMBL-EBI. </EuiLink>
            </p>

            <p>The Terminology Service is a repository for controlled resources that aims to provide a single point of
              access to the latest ontology and terminology versions. You can browse the resources through the website
              as well as programmatically via the API.
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
              <EuiLink
                href="https://github.com/zbmed/semlookp-ui"
                target={"_blank"}>
                Terminology Service UI
              </EuiLink>
            </p>
            <h3>OLS documentation:</h3>
            <p>
              <EuiLink
                href="https://www.ebi.ac.uk/ols/docs/index"
                target={"_blank"}>
                EMBL-EBI’s documentation of the Ontology Lookup Service
              </EuiLink>
            </p>

            <h3>Publications:</h3>
            <EuiLink
              href="https://swat4hcls.figshare.com/articles/A_Semantic_Data_Integration_Methodology_for_Translational_Neurodegenerative_Disease_Research/7339244"
              target="_blank">
              IDSN
            </EuiLink>
            <p>
              {" "}
              A Semantic Data Integration Methodology for Translational
              Neurodegenerative Disease Research
            </p>
          </EuiText>
        </EuiFlexItem>
      </EuiPanel>
      <Helmet>
        <title> About &gt; SemLookP </title>
        <meta
          name="description"
          content="About the Terminology Service - SemLookP"
        />
      </Helmet>
    </EuiFlexGroup>
  );
}
