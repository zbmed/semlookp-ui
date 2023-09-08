import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText, EuiSpacer, EuiTitle, EuiLink } from "@elastic/eui";
import { AutocompleteWidget, DataContentWidget } from "@km/widgets-semlookp";
import { useNavigate } from "react-router-dom";
import EuiCustomLink from "../../router/EuiCustomLink";
import {navigateToEntity} from "../../index";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem grow={7}>
          <EuiPanel id="searchBox" hasShadow={true}>
            <EuiFlexGroup direction="column">
              <EuiFlexItem>
                <EuiTitle><h1>Welcome to the Terminology Service SemLookP</h1></EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size="s">The following input field provides an autocomplete functionality. It could handle for
                  example a term (e.g. &quot;diabetes&quot;), a short form (e.g. &quot;GO:0098743&quot;) and even an
                  IRI (e.g. http://snomed.info/id/423701002)<br/><br/>
                  By selecting an option you will be forwarded to an overview page of the selected term, property or
                  individual.
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <AutocompleteWidget
                  api={"https://semanticlookup.zbmed.de/api/"}
                  placeholder={"Jump to a Term, Individual or property"}
                  selectionChangedEvent={(selectedOption) => { navigateToEntity(selectedOption, navigate);}}
                  parameter="collection=nfdi4health"
                  allowCustomTerms={false}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFlexGroup>
                  <EuiFlexItem grow={2}>
                    <EuiText size="s">Next to this short cut via the autocomplete input field there is the possibility
                      to use a search with filter functionality. To access this search you could click
                      on <b>Search</b> in the menu bar.<br/><br/>

                      You could also use one of our examples: <EuiCustomLink to="/search?q=diabetes">diabetes</EuiCustomLink>, <EuiCustomLink to="/search?q=GO:0098743">GO:0098743</EuiCustomLink></EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size="s" textAlign="right">Looking for a certain terminology?<br/><br/>
                      <EuiCustomLink to="/resources">Please use our terminology overview</EuiCustomLink>
                    </EuiText>
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
          <DataContentWidget
            api="https://semanticlookup.zbmed.de/api/"
            parameter={"collection=nfdi4health"}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}
