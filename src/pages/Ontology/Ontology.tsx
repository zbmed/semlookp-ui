import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel } from "@elastic/eui";
import { useNavigate, useParams } from "react-router-dom";
import {
  AutocompleteWidget,
  DescriptionWidget,
  EntityInfoWidget,
  HierarchyWidget,
  JsonApiWidget,
  TitleWidget
} from "@nfdi4health/semlookp-widgets";
import { navigateToEntity } from "../../index";


export default function Ontology() {
  const routeParams = useParams();
  const navigate = useNavigate();
  const API = "https://semanticlookup.zbmed.de/api/"

  return (
    <>
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={7}>
          <EuiPanel id="titleBox" hasShadow={true}>
            <TitleWidget api={API} entityType={"ontology"} ontologyId={routeParams.ontologyId}></TitleWidget>
            <DescriptionWidget api={API} entityType={"ontology"} ontologyId={routeParams.ontologyId}></DescriptionWidget>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiPanel id="searchBox" hasShadow={true}>
            <AutocompleteWidget
              api={API}
              placeholder={"Search in " + routeParams.ontologyId.toUpperCase()}
              selectionChangedEvent={(selectedOption) => { navigateToEntity(selectedOption, navigate);}}
              parameter={"ontology="+routeParams.ontologyId+"collection=nfdi4health"}
              allowCustomTerms={false}
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
            <HierarchyWidget api={API} ontologyId={routeParams.ontologyId}/>
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
