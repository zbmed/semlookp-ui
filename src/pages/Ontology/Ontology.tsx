import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer } from "@elastic/eui";
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
import GlobalConfig from "../../config";
import { Helmet } from "react-helmet";


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
                  entityType={"ontology"}
                  api={API}
                />
                <EuiSpacer size={"s"} />
                <DescriptionWidget
                  ontologyId={routeParams.ontologyId}
                  entityType={"ontology"}
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
                    hasTitle={true}
                    entityType={"ontology"}
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
