import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./Entity.css";
import { EuiAccordion, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer } from "@elastic/eui";
import { Helmet } from "react-helmet";
import { navigateToEntity } from "../../index";
import GlobalConfig from "../../config";
import "@ts4nfdi/terminology-service-suite/dist/esm/index.css";
import {
  AutocompleteWidget,
  BreadcrumbWidget,
  DescriptionWidget,
  EntityInfoWidget,
  EntityRelationsWidget,
  HierarchyWidget,
  IriWidget,
  JsonApiWidget,
  TitleWidget
} from "@ts4nfdi/terminology-service-suite";

const OLS4API = GlobalConfig.apiUrlSemlookpOls4;

export default function Entity() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location
  const concatIri = decodeURIComponent(decodeURIComponent(searchParam.get("iri")));
  const routeParams = useParams();
  const navigate = useNavigate();
  const entityType = routeParams.entityType == "terms" ? "term" : routeParams.entityType == "properties" ? "property" : "individual";
  const entityTitle = entityType[0].toUpperCase() + entityType.slice(1);

  return (
    <div>
      <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={7}>
              <EuiFlexItem>
                <TitleWidget
                  iri={concatIri}
                  ontologyId={routeParams.ontologyId}
                  api={OLS4API}
                />
                <EuiSpacer size={"s"} />
                <BreadcrumbWidget iri={concatIri} api={OLS4API}
                                  ontologyId={routeParams.ontologyId}
                />
                <EuiSpacer size={"s"} />
                <IriWidget iri={concatIri} />
                <EuiSpacer size={"s"} />
                <DescriptionWidget
                  iri={concatIri}
                  ontologyId={routeParams.ontologyId}
                  api={OLS4API}
                />
                <EuiSpacer size={"s"} />
                <AutocompleteWidget
                  api={GlobalConfig.apiUrlSemlookpOls4}
                  placeholder={"Search in " + routeParams.ontologyId.toUpperCase()}
                  selectionChangedEvent={(selectedOption) => {
                    navigateToEntity(selectedOption, navigate);
                  }}
                  parameter={"ontology=" + routeParams.ontologyId + "&collection=nfdi4health"}
                  allowCustomTerms={false}
                  singleSelection={true} />
              </EuiFlexItem>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <JsonApiWidget
                apiQuery={OLS4API + "ontologies/" + routeParams.ontologyId + "/" + routeParams.entityType + "?iri=" + concatIri.replaceAll("#", "%23").replaceAll("&", "%26")}
                buttonText="JSON" />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize={"m"}>
            <EuiFlexItem grow={false}>
              <HierarchyWidget
                ontologyId={routeParams.ontologyId}
                api={OLS4API}
                iri={concatIri}
                entityType={entityType}
                onNavigateToOntology={(ontologyId, entityType, iri) => {
                  console.log(ontologyId, entityType, iri)
                  navigate(
                    `/ontologies/${ontologyId}/${entityType == "classes" ? "terms" : entityType}?iri=${encodeURIComponent(encodeURIComponent(iri))
                    }`
                  );
                }}
                onNavigateToEntity={(ontologyId, entityType, iri) => {
                  console.log("ontos", ontologyId, entityType, iri)
                  navigate(
                    `/ontologies/${ontologyId}/${entityType == "classes" ? "terms" : entityType}?iri=${encodeURIComponent(encodeURIComponent(iri))
                    }`
                  );
                }}
              />
            </EuiFlexItem>
            <EuiSpacer size={"l"} />
            <EuiFlexItem grow={true}>
              <EuiFlexGroup direction={"column"}>
                <EuiSpacer size={"s"} />
                <EuiFlexItem grow={false}>
                  <EuiAccordion id={"entity info"} initialIsOpen={true}>
                    <EntityInfoWidget
                      api={OLS4API}
                      ontologyId={routeParams.ontologyId}
                      iri={concatIri}
                      hasTitle={true}
                      entityType={entityType}
                    />
                  </EuiAccordion>
                </EuiFlexItem>
                <EuiSpacer size={"s"} />
                <EuiFlexItem grow={false}>
                  <EuiAccordion id={"entity info"} initialIsOpen={true}>
                    <EntityRelationsWidget
                      hasTitle
                      api={OLS4API}
                      entityType={entityType}
                      iri={concatIri}
                      ontologyId={routeParams.ontologyId}
                    />
                  </EuiAccordion>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexGroup>

      <Helmet>
        <title> {entityTitle} overview &gt; SemLookP </title>
        <meta
          name="description"
          content={entityTitle + " overview for the semantic Lookup Service - SemLookP"}
        />
      </Helmet>
    </div>
  );
}
