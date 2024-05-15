import React from "react";
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle
} from "@elastic/eui";
import { AutocompleteWidget, DataContentWidget } from "@nfdi4health/semlookp-widgets";
import { useNavigate } from "react-router-dom";
import EuiCustomLink from "../../router/EuiCustomLink";
import { navigateToEntity } from "../../index";
import GlobalConfig from "../../config";
import "../../index.css";
import widgetimage from "../../components/Layout/images/widgets-icons.png";
import { ReactComponent as NFDI4HEALTHLOGO } from "../../components/Layout/logos/NFDI4Health_Logo_cmyk_RZ.svg";

export default function Home() {
  const navigate = useNavigate();

  const useCaseDescription = (<>
      <EuiText>
        <EuiLink href={"https://www.zbmed.de/en/"}> ZB MED </EuiLink>
        preprint Viewer <br></br>
        <EuiSpacer size="s" />
        <EuiLink href="https://preview.zbmed.de/"><span className="brandColorPreview"
                                                        style={{ fontSize: "x-large" }}>
                  pre<span className="brandSubColorPreview">VIEW</span>: COVID-19
                </span></EuiLink><br></br>
        <EuiSpacer size="s" />
        <i>Semantic Search to Explore COVID-19 Research Preprints</i><br></br>
        <EuiSpacer size="s" />
        <div style={{ textAlign: "left" }}>
          The search engine uses the
          <EuiCustomLink to={"/about/api"}> SemLookP API</EuiCustomLink> and
          <EuiLink href={"https://github.com/nfdi4health/semlookp-widgets"}> Widgets </EuiLink>
          to display semantic information.
        </div>
      </EuiText>
    </>
  );

  const semlookpWidgetsDescription = (<>
      <EuiText>
        <EuiFlexGroup alignItems={"center"}>
          <EuiFlexItem grow={3}>
            <div style={{ textAlign: "center" }}>
              <EuiText><i>Small
                <EuiLink href={"https://github.com/nfdi4health/semlookp-widgets"}> GUI components </EuiLink>
                to use and
                display
                semantic information</i></EuiText>
            </div>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiButton
                  onClick={() => window.location.assign("https://nfdi4health.github.io/semlookp-widgets/?path=/docs/autocomplete-widget--docs")}>Explore</EuiButton>
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

  const dataContentDescription = (<>
      <EuiFlexGroup
        direction={"column"}
        gutterSize={"none"}
        justifyContent={"center"}
        style={{ height: "100%" }}
      >
        <DataContentWidget
          api={GlobalConfig.apiUrlGateway}
          parameter={"collection=nfdi4health"}
        />
      </EuiFlexGroup>
    </>
  );


  return (
    <>
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={false}>
          <NFDI4HEALTHLOGO height="120px" width="auto" />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xl" />

      <EuiFlexGroup direction={"column"} gutterSize="m" alignItems={"center"}>
        <EuiFlexItem grow={false}>
          <EuiTitle size="m">
            <h1><EuiTextColor>Welcome to the Semantic Lookup Platform</EuiTextColor></h1>
          </EuiTitle>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <span className="brandColorSemlookp" style={{ fontSize: "xxx-large" }}>
            SEM<span className="brandSubColorSemLookp">LOOK</span>P</span>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="l" />

      <EuiFlexItem>
        <EuiPanel id="searchBox" hasShadow={true}>
          <EuiFlexGroup direction="column">
            <EuiFlexItem><EuiTitle size={"s"}><EuiTextColor>Search the Terminology
              Service</EuiTextColor></EuiTitle></EuiFlexItem>
            <EuiFlexItem>
              <AutocompleteWidget
                api={GlobalConfig.apiUrlGateway}
                placeholder={"Type to search"}
                selectionChangedEvent={(selectedOption) => {
                  navigateToEntity(selectedOption, navigate);
                }}
                parameter="collection=nfdi4health"
                allowCustomTerms={false}
                singleSelection={true} />
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
                <EuiFlexItem grow={3}>
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
            <EuiCard
              // icon={icon}
              title=""
              description={dataContentDescription}
              style={{ backgroundColor: "#ccedf5", minHeight: 150 }}
              display="subdued"
            />
          </EuiFlexItem>

          <EuiFlexItem grow={3}>
            <EuiCard
              // icon={icon}
              title="Use Case"
              description={useCaseDescription}
              // onClick={() => window.location.assign("https://preview.zbmed.de/")}
              style={{ backgroundColor: "#cce4f5", minHeight: 150 }}
              display="subdued"
            />
          </EuiFlexItem>

          <EuiFlexItem grow={3}>
            <EuiCard
              title={
                <EuiFlexGroup justifyContent={"center"} gutterSize={"s"} alignItems={"baseline"}>
                  <EuiFlexItem grow={false}>
          <span className="brandColorSemlookp" style={{ fontSize: "x-large" }}>
            SEM<span className="brandSubColorSemLookp">LOOK</span>P</span>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiText><h3>Widgets</h3></EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
              description={semlookpWidgetsDescription}
              // onClick={() => window.location.assign("https://github.com/nfdi4health/semlookp-widgets")}
              style={{ backgroundColor: "#D3DAE6", minHeight: 150 }}
              display="subdued"
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xxl" />

        {/*<EuiPanel id="aboutSection" hasShadow={true}>*/}
        <EuiTitle><EuiCustomLink to="/docs/index">About</EuiCustomLink></EuiTitle>
        <EuiSpacer size="m" />
        <EuiText>
          <p>The Terminology Service is a repository for controlled resources that aims to provide a single point of
            access to the latest ontology and terminology versions.
            You can browse the resources through the website as well as programmatically via the API.
            It is part of the Semantic Lookup Platform, which is developed and maintained by
            <EuiLink href={"https://www.zbmed.de/en/"}> ZB MED - Information Centre for Life Sciences.</EuiLink>
            The system is based on the Ontology Lookup Service (OLS), that is developed and maintained by the
            <EuiLink href={"https://www.ebi.ac.uk/about/teams/samples-phenotypes-ontologies/"}
            > Samples, Phenotypes and Ontologies Team (SPOT) </EuiLink> at
            <EuiLink href={"https://www.ebi.ac.uk/"}> EMBL-EBI. </EuiLink>
          </p>
        </EuiText>
        {/*</EuiPanel>*/}
      </EuiFlexItem>

      {/*</EuiFlexGroup>*/}
    </>
  );
}
