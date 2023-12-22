import React from "react";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiLink, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { AutocompleteWidget, DataContentWidget } from "@nfdi4health/semlookp-widgets";
import { useNavigate } from "react-router-dom";
import EuiCustomLink from "../../router/EuiCustomLink";
import { navigateToEntity } from "../../index";
import GlobalConfig from "../../config";
import "../../index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/*<EuiFlexGroup>*/}
      <EuiFlexItem>
        <EuiPanel id="searchBox" hasShadow={true}>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiTitle><h1>Welcome to the Terminology Service SemLookP</h1></EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem>
              <AutocompleteWidget
                api={GlobalConfig.apiUrlGateway}
                placeholder={"Search"}
                selectionChangedEvent={(selectedOption) => {
                  navigateToEntity(selectedOption, navigate);
                }}
                parameter="collection=nfdi4health"
                allowCustomTerms={false}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">Examples: <EuiCustomLink
                to="/search?q=diabetes">diabetes</EuiCustomLink>, <EuiCustomLink
                to="/search?q=GO:0098743">GO:0098743</EuiCustomLink>, <EuiCustomLink
                to="/search?q=http://snomed.info/id/423701002">http://snomed.info/id/423701002</EuiCustomLink>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFlexGroup>
                <EuiFlexItem grow={2}>
                  <EuiText size="s">Or use the <EuiCustomLink to="/search?q=*">Advanced Search</EuiCustomLink>
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText size="s" textAlign="right">
                    <EuiCustomLink to="/resources">Looking for a certain terminology?</EuiCustomLink>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer size="xl" />

        <EuiFlexGroup>
          <EuiFlexItem grow={3}>
            <DataContentWidget
              api={GlobalConfig.apiUrlGateway}
              parameter={"collection=nfdi4health"}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={4}>
            <EuiCard
              title="Use Case"
              description={""}
              layout="horizontal"
            >
              <EuiText>
                <i><EuiLink href={"https://www.zbmed.de/en/"}>ZB MED </EuiLink>
                  preprint Viewer </i>
                <EuiLink href="https://preview.zbmed.de/"><span className="brandColor" style={{ fontSize: "x-large" }}>
                  pre<span className="brandSubColor">VIEW</span>: COVID-19
                </span></EuiLink><br></br>
                <i>Semantic Search to Explore COVID-19 Research Preprints.</i><br></br>
                <EuiSpacer size="s" />
                The search engine uses the
                <EuiCustomLink to={"/about/api"}> SemLookP API</EuiCustomLink> and
                <EuiLink href={"https://github.com/nfdi4health/semlookp-widgets"}> Widgets </EuiLink>
                to display semantic information.
              </EuiText>
            </EuiCard>
          </EuiFlexItem>
          <EuiFlexItem grow={3}>
            <EuiCard title="SemLookP Widgets"
              description={""}
              layout="horizontal">

            </EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        {/*<EuiPanel id="aboutSection" hasShadow={true}>*/}
        <EuiTitle><EuiCustomLink to="/docs/index">About the Terminology Service</EuiCustomLink></EuiTitle>
        <EuiSpacer size="xl" />
        <EuiText>
          <p>The Terminology Service is a repository for biomedical resources that aims to provide a single point of
            access to the latest ontology and terminology versions. The preliminary health terminology set of the
            BMBF-funded project <EuiCustomLink to="/projects#idsn">IDSN</EuiCustomLink> was extended by <EuiCustomLink
              to="/projects#nfdi">NFDI4Health</EuiCustomLink> relevant resources.</p>
          <p>You can browse the resources through the website as well as programmatically via our API. The API of
            SemLookP is integrated into other web services for example the ZB MED preprint viewer <EuiLink
              href="https://preview.zbmed.de/" target="_blank">preVIEW</EuiLink>.</p>
          <p>It is part of the Semantic Lookup Platform, which is developed and maintained by ZB MED - Information
            Centre for Life Sciences.</p>
        </EuiText>
        {/*</EuiPanel>*/}
      </EuiFlexItem>

      {/*</EuiFlexGroup>*/}
    </>
  );
}
