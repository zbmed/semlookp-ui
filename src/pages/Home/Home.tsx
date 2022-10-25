import React, { useState } from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText, EuiSpacer, EuiTitle, EuiLink, EuiShowFor } from "@elastic/eui";
import { AutocompleteWidget, DataContentWidget } from "@km/widgets-semlookp";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SEMLOOKPLOGO } from "../../components/Logos/NFDI_SemLookP_Logo.svg";
import EuiCustomLink from "../../router/EuiCustomLink";

export default function Home() {
  const [searchResults, setSearchResults] = useState({options:[], selectedOption:{}});
  const navigate = useNavigate();
  return (
    <>
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={false}>
          <SEMLOOKPLOGO height="170px" width="auto" />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />
      <EuiShowFor sizes={["xl"]}>
        <EuiSpacer size="xl" />
      </EuiShowFor>

      <EuiFlexGroup>
        <EuiFlexItem grow={7}>
          <EuiPanel id="searchBox" hasShadow={true}>
            <EuiFlexGroup direction="column">
              <EuiFlexItem>
                <EuiTitle><h1>Welcome to the Terminology Service</h1></EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <AutocompleteWidget
                  api={"https://semanticlookup.zbmed.de/ols/api/"}
                  onChange={setSearchResults}
                  parameter={"type=class"}
                />
                {searchResults.options.map((result) => (
                  <EuiPanel
                    key={result.value}
                    style={{ padding: "10px", margin: "10px" }}
                  >
                    <EuiText
                      onClick={() =>
                        navigate({
                          pathname: "/terms",
                          search: "?iri=" + result.value.iri.toString(),
                        })
                      }
                    >
                      {result.label}{" "}
                      {result.value?.description
                        ? " : " + result.value.description
                        : ""}
                    </EuiText>
                  </EuiPanel>
                ))}
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiText size="s">Examples: <EuiCustomLink to="/search?q=diabetes">diabetes</EuiCustomLink>, <EuiCustomLink to="/search?q=GO:0098743">GO:0098743</EuiCustomLink></EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size="s" textAlign="right"><EuiCustomLink to="/resources">Looking for a particular resource?</EuiCustomLink></EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>

          <EuiSpacer size="xl" />

          <EuiPanel id="aboutSection" hasShadow={true}>
            <EuiTitle><EuiCustomLink to="/docs/index">About the Terminology Service</EuiCustomLink></EuiTitle>
            <EuiSpacer size="xl" />
            <EuiText>
              <p>The Terminology Service is a repository for biomedical resources that aims to provide a single point of access to the latest ontology and terminology versions. The preliminary health terminology set of the BMBF-funded project <EuiCustomLink to="/projects#idsn">IDSN</EuiCustomLink> was extended by <EuiCustomLink to="/projects#nfdi">NFDI4Health</EuiCustomLink> relevant resources.</p>
              <p>You can browse the resources through the website as well as programmatically via our API. The API of SemLookP is integrated into other web services for example the ZB MED preprint viewer <EuiLink href="https://preview.zbmed.de/" target="_blank">preVIEW</EuiLink>.</p>
              <p>It is part of the Semantic Lookup Platform, which is developed and maintained by ZB MED - Information Centre for Life Sciences.</p>
            </EuiText>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <DataContentWidget api="https://semanticlookup.zbmed.de/ols/api/" />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}
