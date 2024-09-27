import { useMemo, useState } from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiTab,
  EuiTabs,
} from "@elastic/eui";
import { useNavigate, useParams } from "react-router-dom";
import { navigateToEntity } from "../components/utils";
import { global_config } from "../config";
import { Helmet } from "react-helmet";
import {
  AutocompleteWidget,
  DescriptionWidget,
  HierarchyWidget,
  JsonApiWidget,
  OntologyInfoWidget,
  TitleWidget,
} from "@ts4nfdi/terminology-service-suite";

const OLS4API = global_config.api_url;
export default function Ontology() {
  const routeParams = useParams();
  const navigate = useNavigate();

  const tabs = [
    {
      id: "classes",
      name: "Classes",
      content: (
        <HierarchyWidget
          apiUrl={global_config.api_url}
          backendType={"ols"}
          entityType={"class"}
          ontologyId={routeParams.ontologyId}
          onNavigateToEntity={(ontologyId, entityType, entity) => {
            navigate(
              `/ontologies/${ontologyId}/${
                entityType == "class" || entityType == "term"
                  ? "terms"
                  : entityType == "property"
                  ? "properties"
                  : "individuals"
              }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`
            );
          }}
          onNavigateToOntology={(ontologyId, entityType, entity) => {
            navigate(
              `/ontologies/${ontologyId}/${
                entityType == "class" || entityType == "term"
                  ? "terms"
                  : entityType == "property"
                  ? "properties"
                  : "individuals"
              }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`
            );
          }}
        />
      ),
    },
    {
      id: "properties",
      name: "Properties",
      content: (
        <HierarchyWidget
          apiUrl={global_config.api_url}
          backendType={"ols"}
          entityType={"property"}
          ontologyId={routeParams.ontologyId}
          onNavigateToEntity={(ontologyId, entityType, entity) => {
            navigate(
              `/ontologies/${ontologyId}/${
                entityType == "class" || entityType == "term"
                  ? "terms"
                  : entityType == "property"
                  ? "properties"
                  : "individuals"
              }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`
            );
          }}
          onNavigateToOntology={(ontologyId, entityType, entity) => {
            navigate(
              `/ontologies/${ontologyId}/${
                entityType == "class" || entityType == "term"
                  ? "terms"
                  : entityType == "property"
                  ? "properties"
                  : "individuals"
              }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`
            );
          }}
        />
      ),
    },
    {
      id: "individuals",
      name: "Individuals",
      content: (
        <HierarchyWidget
          apiUrl={global_config.api_url}
          backendType={"ols"}
          entityType={"individual"}
          ontologyId={routeParams.ontologyId}
          onNavigateToEntity={(ontologyId, entityType, entity) => {
            navigate(
              `/ontologies/${ontologyId}/${
                entityType == "class" || entityType == "term"
                  ? "terms"
                  : entityType == "property"
                  ? "properties"
                  : "individuals"
              }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`
            );
          }}
          onNavigateToOntology={(ontologyId, entityType, entity) => {
            navigate(
              `/ontologies/${ontologyId}/${
                entityType == "class" || entityType == "term"
                  ? "terms"
                  : entityType == "property"
                  ? "properties"
                  : "individuals"
              }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`
            );
          }}
        />
      ),
    },
  ];

  const [selectedTabId, setSelectedTabId] = useState("classes");
  const selectedTabContent = useMemo(() => {
    return tabs.find((obj) => obj.id === selectedTabId)?.content;
  }, [selectedTabId, tabs]);

  const onSelectedTabChanged = (id: string) => {
    setSelectedTabId(id);
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        key={index}
        onClick={() => onSelectedTabChanged(tab.id)}
        isSelected={tab.id === selectedTabId}
      >
        {tab.name}
      </EuiTab>
    ));
  };

  return (
    <div>
      <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={7}>
              <EuiFlexItem>
                <TitleWidget
                  ontologyId={routeParams.ontologyId}
                  api={OLS4API}
                />
                <EuiSpacer size={"s"} />
                <DescriptionWidget
                  ontologyId={routeParams.ontologyId}
                  api={OLS4API}
                />
                <EuiSpacer size={"s"} />
                <AutocompleteWidget
                  api={global_config.api_url}
                  placeholder={
                    "Search in " + routeParams.ontologyId.toUpperCase()
                  }
                  selectionChangedEvent={(selectedOption) => {
                    navigateToEntity(selectedOption, navigate);
                  }}
                  parameter={
                    "ontology=" +
                    routeParams.ontologyId +
                    "&collection=nfdi4health"
                  }
                  allowCustomTerms={false}
                  singleSelection={true}
                />
              </EuiFlexItem>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <JsonApiWidget
                apiQuery={OLS4API + "ontologies/" + routeParams.ontologyId}
                buttonText="JSON"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize={"m"}>
            <EuiFlexItem
              grow={false}
              style={{ maxWidth: "50%", minWidth: "50%", overflow: "auto" }}
            >
              <EuiTabs>{renderTabs()}</EuiTabs>
              {selectedTabContent}
            </EuiFlexItem>
            <EuiSpacer size={"l"} />
            <EuiFlexItem grow={true}>
              <EuiFlexGroup
                direction={"column"}
                style={{
                  maxHeight: "2000px",
                  maxWidth: "500px",
                  overflow: "auto",
                  overflowX: "auto",
                }}
              >
                <EuiSpacer size={"s"} />
                <EuiFlexItem
                  grow={false}
                  style={{
                    maxHeight: "1000px",
                    maxWidth: "500px",
                    overflow: "auto",
                    overflowX: "auto",
                  }}
                >
                  <OntologyInfoWidget
                    api={OLS4API}
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
          content={
            routeParams.ontologyId +
            " overview for the semantic Lookup Service - SemLookP"
          }
        />
      </Helmet>
      ;
    </div>
  );
}
