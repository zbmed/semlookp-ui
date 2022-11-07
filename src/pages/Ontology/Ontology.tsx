import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import { useParams, useNavigate } from "react-router-dom";
import { AutocompleteWidget, DescriptionWidget, HierarchyTabWidget, JsonApiWidget, OntologyInfoWidget, TitleWidget } from "@km/widgets-semlookp";


export default function Ontology() {
  const routeParams = useParams();
  const navigate = useNavigate();
  const API = "https://semanticlookup.zbmed.de/ols/api/"

  return (
    <>
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={7}>
          <EuiPanel id="titleBox" hasShadow={true}>
            <TitleWidget api={API} objType={"ontology"} ontologyID={routeParams.ontologyId}></TitleWidget>
            <DescriptionWidget api={API} objType={"ontology"} ontologyID={routeParams.ontologyId}></DescriptionWidget>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiPanel id="searchBox" hasShadow={true}>
            <AutocompleteWidget
              api={API}
              selectionChangedEvent={(selectedOption) => {
                navigate("/ontologies/"+routeParams.ontologyId +
                  "/terms?iri="+encodeURI(selectedOption.iri))
              }}
              parameter={"ontology="+routeParams.ontologyId}
            />
            <JsonApiWidget
              apiQuery={API+"ontologies/"+routeParams.ontologyId}
              buttonText={"JSON"}
              buttonSize={"s"}
            />
            {/*TODO add download widget*/}
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup>
        <EuiFlexItem grow={7}>
          <EuiPanel id="hierarchyBox" hasShadow={true}> {/*TODO initially open root element(s) instead of placeholder iri*/}
            <HierarchyTabWidget linkToSelf={API+"ontologies/"+routeParams.ontologyId+"/terms/"} iri={"https://identifiers.org/atc:P02"}/>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiPanel id="ontoInfoBox" hasShadow={true}>
            <OntologyInfoWidget api={API} ontologyID={routeParams.ontologyId}/>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}
