import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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
} from "@nfdi4health/semlookp-widgets";
import "./Entity.css";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer } from "@elastic/eui";
import { Helmet } from "react-helmet";
import { navigateToEntity } from "../../index";
import GlobalConfig from "../../config";
import "@nfdi4health/semlookp-widgets/dist/esm/index.css";

const API = GlobalConfig.apiUrlGateway;
const OLS4API = GlobalConfig.apiUrlSemlookpOls4

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
                  entityType={entityType}
                  api={API}
                />
                <EuiSpacer size={"s"} />
                <BreadcrumbWidget iri={concatIri} api={API}
                                  ontologyId={routeParams.ontologyId}
                                  entityType={entityType}
                />
                <EuiSpacer size={"s"} />
                <IriWidget iri={concatIri} />
                <EuiSpacer size={"s"} />
                <DescriptionWidget
                  iri={concatIri}
                  ontologyId={routeParams.ontologyId}
                  entityType={entityType}
                  api={API}
                />
                <EuiSpacer size={"s"} />
                <AutocompleteWidget
                  api={GlobalConfig.apiUrlGateway}
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
                apiQuery={API + "ontologies/" + routeParams.ontologyId + "/" + routeParams.entityType + "?iri=" + concatIri.replaceAll("#", "%23").replaceAll("&", "%26")}
                buttonText="JSON" />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={3}>
              <HierarchyWidget ontologyId={routeParams.ontologyId} api={GlobalConfig.apiUrlSemlookpOls4} />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFlexGroup direction={"column"}>
                <EuiFlexItem grow={false}>
                  <EntityInfoWidget
                    api={API}
                    ontologyId={routeParams.ontologyId}
                    iri={concatIri}
                    hasTitle={true}
                    entityType={entityType}
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EntityRelationsWidget
                    hasTitle
                    api={OLS4API}
                    entityType={entityType}
                    iri={concatIri}
                    ontologyId={routeParams.ontologyId}
                  />
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
