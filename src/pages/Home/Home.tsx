import React from "react";
import {
  EuiButton,
  EuiCallOut,
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
import { AutocompleteWidget, DataContentWidget } from "@ts4nfdi/terminology-service-suite";
import { useNavigate } from "react-router-dom";
import EuiCustomLink from "../../router/EuiCustomLink";
import { navigateToEntity } from "../../index";
import GlobalConfig from "../../config";
import "../../index.css";
import widgetimage from "../../components/Layout/images/widgets-icons.png";
import { ReactComponent as LOGO } from "../../components/Layout/logos/NFDI4Health_Logo_cmyk_RZ.svg";

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
        <div style={{ textAlign: "center" }}>
          The search engine uses the
          <EuiCustomLink to={"/about/api"}> SemLookP API</EuiCustomLink> and
          <EuiLink href={"https://ts4nfdi.github.io/terminology-service-suite/comp/latest/"}> Terminology Service Suite </EuiLink>
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
                <EuiLink href={"https://github.com/ts4nfdi/terminology-service-suite"}> GUI components </EuiLink>
                to use and
                display
                semantic information</i></EuiText>
            </div>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiButton
                  onClick={() => window.location.assign("https://ts4nfdi.github.io/terminology-service-suite/comp/latest")}>Explore</EuiButton>
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

  return (
    <>
      <EuiFlexGroup direction={"column"} alignItems={"center"}>
        <EuiFlexItem grow={false}>
          <LOGO height="120px" width="auto" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiTitle size="m">
            <h1 style={{ fontSize: "40px" }}><EuiTextColor>Terminology Service</EuiTextColor></h1>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="xxl" />
      <EuiSpacer size="xxl" />

      <EuiFlexItem>
        <EuiFlexGroup>
          <EuiFlexItem grow={7}>
            <EuiPanel id="searchBox" hasShadow={true}>
              <EuiFlexGroup direction="column">
                <EuiFlexItem><EuiTitle size={"s"}><EuiTextColor>Search</EuiTextColor></EuiTitle></EuiFlexItem>
                <EuiFlexItem>
                  <AutocompleteWidget
                    api={GlobalConfig.apiUrlOls4}
                    placeholder={"Type to search"}
                    selectionChangedEvent={(selectedOption) => {
                      navigateToEntity(selectedOption, navigate);
                    }}
                    parameter="collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"
                    allowCustomTerms={false}
                    singleSelection={true}
                    hasShortSelectedLabel={true}

                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size="m">Examples: <EuiCustomLink
                      to="/search?q=diabetes">diabetes</EuiCustomLink>, <EuiCustomLink
                      to="/search?q=GO:0098743">GO:0098743</EuiCustomLink>, <EuiCustomLink
                      to="/search?q=http://snomed.info/id/423701002">http://snomed.info/id/423701002</EuiCustomLink>
                    </EuiText>
                  </EuiFlexItem>

                  <EuiSpacer size="m" />

                  <EuiFlexGroup direction={"row"}>
                    <EuiFlexItem>
                      <EuiText size="m">Or use the <EuiCustomLink to="/search?q=*">Advanced Search</EuiCustomLink>
                      </EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem>
                      <EuiText size="m" textAlign="right">
                        <EuiCustomLink to="/resources">Looking for a certain terminology?</EuiCustomLink>
                      </EuiText>
                    </EuiFlexItem>
                  </EuiFlexGroup>

                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>
          <EuiSpacer size="xl" />
          <EuiFlexItem grow={3}>
            <DataContentWidget
              api={GlobalConfig.apiUrlOls4}
              parameter={"collection=nfdi4health"}
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <EuiCallOut
          title={"Missing Resource?"}
          iconType="indexOpen"
          style={{ backgroundColor: "#AEE6E6" }}
        >
          <p>Please contact us via <EuiLink href="mailto:semlookp-support@zbmed.de">semlookp-support@zbmed.de</EuiLink>.
          </p>
        </EuiCallOut>

        <EuiSpacer size="xl" />

        <EuiFlexGroup>
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
              title="Terminology Service Suite"
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
            It is part of the Semantic Lookup Platform SemLookP, which is developed and maintained by
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
