import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import { useParams} from "react-router-dom";
import { AutocompleteWidget } from "@km/widgets-semlookp";
import { HierarchyTabWidget } from "@km/widgets-semlookp";
import { OntologyInfoWidget } from "@km/widgets-semlookp";


export default function Ontology() {
  const routeParams = useParams();

  return (
    <>
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={7}>
          <EuiPanel id="titleBox" hasShadow={true}>
            PLACEHOLDER! Will contain 4 widgets: Title+Description and JsonApi+Download buttons {/*TODO*/}
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiPanel id="searchBox" hasShadow={true}>
            <AutocompleteWidget
              api={"https://semanticlookup.zbmed.de/ols/api/"}
              onChange={() => console.log("clicked a search result")} /*TODO allow clicking results to navigate there*/
              parameter={"ontology="+routeParams.ontoId}
            />
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
