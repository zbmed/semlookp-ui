import React, { useState } from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText, EuiSpacer, EuiTitle, EuiLink } from "@elastic/eui";
import { AutocompleteWidget } from "@km/widgets-semlookp";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  return (
    <div>
      <EuiPanel id="searchBox" hasShadow={true}>
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <EuiTitle><h1>Welcome to the Terminology Service</h1></EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <AutocompleteWidget
              api={"https://semanticlookup.zbmed.de/ols/api/"}
              onChange={setSearchResults}
              parameter={"ontology=mesh,efo&type=class"}
            />
            {searchResults.map((result) => (
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
                {/* TODO Update example search links once search results page exists */}
                <EuiText size="s">Examples: <EuiLink href="search?q=diabetes">diabetes</EuiLink>, <EuiLink href="search?q=GO:0098743">GO:0098743</EuiLink></EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                {/* TODO Update link once resources page exists */}
                <EuiText size="s" textAlign="right"><EuiLink href="ontologies">Looking for a particular resource?</EuiLink></EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiSpacer size="xl" />
      <EuiPanel id="aboutSection" hasShadow={true}>
        <EuiTitle><EuiLink href="docs/index">About the Terminology Service</EuiLink></EuiTitle>
        <EuiSpacer size="xl" />
        <EuiText>
          {/* TODO Update project links (IDSN, NFDI4Health) once project page exists */}
          <p>The Terminology Service is a repository for biomedical resources that aims to provide a single point of access to the latest ontology and terminology versions. The preliminary health terminology set of the BMBF-funded project <EuiLink href="/ols/projects#idsn">IDSN</EuiLink> was extended by <EuiLink href="/ols/projects#nfdi">NFDI4Health</EuiLink> relevant resources.</p>
          <p>You can browse the resources through the website as well as programmatically via our API. The API of SemLookP is integrated into other web services for example the ZB MED preprint viewer <EuiLink href="https://preview.zbmed.de/" target="_blank">preVIEW</EuiLink>.</p>
          <p>It is part of the Semantic Lookup Platform, which is developed and maintained by ZB MED - Information Centre for Life Sciences.</p>
        </EuiText>
      </EuiPanel>
    </div>
  );
}
