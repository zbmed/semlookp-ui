import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import { useParams, useNavigate } from "react-router-dom";
import { AutocompleteWidget, HierarchyTabWidget, OntologyInfoWidget, JsonApiWidget } from "@km/widgets-semlookp";


export default function Ontology() {
  const routeParams = useParams();
  const navigate = useNavigate();

  return (
    <>
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={7}>
          <EuiPanel id="titleBox" hasShadow={true}>
            PLACEHOLDER! Will contain 2 widgets: Title and Description {/*TODO*/}
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiPanel id="searchBox" hasShadow={true}>
            <AutocompleteWidget
              api={"https://semanticlookup.zbmed.de/ols/api/"}
              onChange={(result: {options:[], selectedOption}) => {
                navigate("/ontologies/"+routeParams.ontoId +
                  "/terms?iri="+encodeURI(result.selectedOption.value.iri))
              }}
              parameter={"ontology="+routeParams.ontoId}
            />
            <JsonApiWidget
              apiQuery={"https://semanticlookup.zbmed.de/ols/api/ontologies/"+routeParams.ontoId}
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
            <HierarchyTabWidget linkToSelf={"https://semanticlookup.zbmed.de/ols/api/ontologies/"+routeParams.ontoId+"/terms/"} iri={"https://identifiers.org/atc:P02"}/>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiPanel id="ontoInfoBox" hasShadow={true}>
            <OntologyInfoWidget api={"https://semanticlookup.zbmed.de/ols/api/"} onto={routeParams.ontoId}/>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}
