import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer } from "@elastic/eui";
import { useNavigate, useParams } from "react-router-dom";
import { navigateToEntity } from "../../index";
import GlobalConfig from "../../config";
import { Helmet } from "react-helmet";
import {
  AutocompleteWidget,
  DescriptionWidget,
  HierarchyWidget,
  JsonApiWidget,
  OntologyInfoWidget,
  TitleWidget
} from "@nfdi4health/semlookp-widgets";


export default function Ontology() {
  const routeParams = useParams();
  const navigate = useNavigate();
  const API = GlobalConfig.apiUrlGateway;

  return (
    <div>
      <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={7}>
              <EuiFlexItem>
                <TitleWidget
                  ontologyId={routeParams.ontologyId}
                  api={API}
                />
                <EuiSpacer size={"s"} />
                <DescriptionWidget
                  ontologyId={routeParams.ontologyId}
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
                apiQuery={API + "ontologies/" + routeParams.ontologyId}
                buttonText="JSON" />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize={"m"}>
            <EuiFlexItem grow={false} style={{ maxHeight: "1000px", overflow: "auto", overflowX: "auto" }}>
              <HierarchyWidget ontologyId={routeParams.ontologyId} api={GlobalConfig.apiUrlSemlookpOls4}
                               onNavigateToOntology={(ontologyId, entityType, iri) => {
                                 navigate(
                                   `/ontologies/${ontologyId}/${entityType == "classes" ? "terms" : entityType}?iri=${iri
                                   }`
                                 );
                               }}
                               onNavigateToEntity={(ontologyId, entityType, iri) => {
                                 navigate(
                                   `/ontologies/${ontologyId}/${entityType == "classes" ? "terms" : entityType}?iri=${iri
                                   }`
                                 );
                               }}
              />
            </EuiFlexItem>
            <EuiSpacer size={"l"} />
            <EuiFlexItem grow={true}>
              <EuiFlexGroup direction={"column"}
                            style={{ maxHeight: "2000px", maxWidth: "500px", overflow: "auto", overflowX: "auto" }}>
                <EuiSpacer size={"s"} />
                <EuiFlexItem grow={false}
                             style={{ maxHeight: "1000px", maxWidth: "500px", overflow: "auto", overflowX: "auto" }}>
                  <OntologyInfoWidget
                    api={API}
                    ontologyId={routeParams.ontologyId}
                    hasTitle={true}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexGroup>

      <Helmet>
        <title> {routeParams.ontologyId} overview &gt; SemLookP </title>
        <meta
          name="description"
          content={routeParams.ontologyId + " overview for the semantic Lookup Service - SemLookP"}
        />
      </Helmet>
    </div>


  );
}
