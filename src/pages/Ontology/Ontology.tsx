import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import { useParams, useNavigate } from "react-router-dom";
import { AutocompleteWidget, DescriptionWidget, EntityInfoWidget, HierarchyWidget, JsonApiWidget, TitleWidget } from "@km/widgets-semlookp";


export default function Ontology() {
  const routeParams = useParams();
  const navigate = useNavigate();
  const API = "https://semanticlookup.zbmed.de/api/"

  function goToEntityPage(selectedOption) {
    const targetIri = encodeURIComponent(selectedOption.iri)
    if (selectedOption.type === "class") {
      navigate({
        pathname: "/ontologies/" +
          selectedOption.ontology_name + "/terms",
        search: "iri=" + targetIri
      });
    } else if (selectedOption.type === "individual") {
      navigate({
        pathname: "/ontologies/" +
          selectedOption.ontology_name + "/individuals",
        search: "iri=" + targetIri
      });
    } else if (selectedOption.type === "property") {
      navigate({
        pathname:
          "/ontologies/" +
          selectedOption.ontology_name + "/properties",
        search: "iri=" + targetIri
      });
    } else if (selectedOption.type === "ontology") {
      navigate({
        pathname: "/ontologies/" +
          selectedOption.ontology_name + "/",
      });
    }
  }

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
              selectionChangedEvent={goToEntityPage}
              parameter={"ontology="+routeParams.ontologyId}
              frontend={"nfdi4health"}
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
          <EuiPanel id="hierarchyBox" hasShadow={true}>
            <HierarchyWidget api={API} ontologyID={routeParams.ontologyId}/>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiPanel id="ontoInfoBox" hasShadow={true}>
            <EntityInfoWidget
              api={API}
              ontologyId={routeParams.ontologyId}
              hasTitle={true}
              entityType={"ontology"}
            />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}
