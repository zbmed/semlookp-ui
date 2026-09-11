// main
import {
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPanel,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiTitle,
} from "@elastic/eui";
import {
  AutocompleteWidget,
  DescriptionWidget,
  HierarchyWidget,
  JsonApiWidget,
  OntologyInfoWidget,
  TitleWidget,
} from "@ts4nfdi/terminology-service-suite";
import { useCallback, useMemo } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { global_config, ts_specific_metadata } from "../../config";
import { navigateToEntity } from "../components/utils";

const OLS4API = global_config.api_url;
export default function Ontology() {
  const routeParams = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigateToEntityHierarchy = useCallback(
    (ontologyId, entityType, entity) => {
      navigate(
        `/ontologies/${ontologyId}/${
          entityType == "class" || entityType == "term"
            ? "terms"
            : entityType == "property"
              ? "properties"
              : "individuals"
        }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`,
      );
    },
    [navigate],
  );

  const navigateToOntologyHierarchy = useCallback(
    (ontologyId, entityType, entity) => {
      navigate(
        `/ontologies/${ontologyId}/${
          entityType == "class" || entityType == "term"
            ? "terms"
            : entityType == "property"
              ? "properties"
              : "individuals"
        }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`,
      );
    },
    [navigate],
  );

  const tabs = useMemo(
    () => [
      {
        id: "classes-hierarchy",
        name: "Classes",
        content: (
          <HierarchyWidget
            useLegacy={false}
            apiUrl={global_config.api_url}
            backendType={"ols"}
            entityType={"class"}
            ontologyId={routeParams.ontologyId}
            onNavigateToEntity={navigateToEntityHierarchy}
            onNavigateToOntology={navigateToOntologyHierarchy}
          />
        ),
      },
      {
        id: "properties-hierarchy",
        name: "Properties",
        content: (
          <HierarchyWidget
            useLegacy={false}
            apiUrl={global_config.api_url}
            backendType={"ols"}
            entityType={"property"}
            ontologyId={routeParams.ontologyId}
            onNavigateToEntity={navigateToEntityHierarchy}
            onNavigateToOntology={navigateToOntologyHierarchy}
          />
        ),
      },
      {
        id: "individuals-hierarchy",
        name: "Individuals",
        content: (
          <HierarchyWidget
            useLegacy={false}
            apiUrl={global_config.api_url}
            backendType={"ols"}
            entityType={"individual"}
            ontologyId={routeParams.ontologyId}
            onNavigateToEntity={navigateToEntityHierarchy}
            onNavigateToOntology={navigateToOntologyHierarchy}
          />
        ),
      },
    ],
    [
      routeParams.ontologyId,
      navigateToEntityHierarchy,
      navigateToOntologyHierarchy,
    ],
  );

  const currentTabId = searchParams.get("hierarchy") || "classes-hierarchy";

  const onSelectedTabChanged = (id: string) => {
    if (id !== currentTabId) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("hierarchy", id);
      setSearchParams(newParams);
    }
  };

  const selectedTabContent = useMemo(() => {
    return tabs.find((tab) => tab.id === currentTabId)?.content;
  }, [currentTabId, tabs]);

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        key={index}
        onClick={() => onSelectedTabChanged(tab.id)}
        isSelected={tab.id === currentTabId}
      >
        {tab.name}
      </EuiTab>
    ));
  };

  return (
    <div>
      <EuiSpacer />
      <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={7}>
              <EuiTitle size={"m"}>
                <TitleWidget
                  ontologyId={routeParams.ontologyId}
                  api={global_config.api_url}
                  parameter={ts_specific_metadata.collection}
                />
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <JsonApiWidget
                apiQuery={
                  global_config.api_url +
                  "ontologies/" +
                  routeParams.ontologyId +
                  "/"
                }
                buttonText="JSON"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule />
          <EuiFlexItem>
            <EuiTitle size={"xs"}>
              <span>Description:</span>
            </EuiTitle>
            <EuiSpacer size={"s"} />
            <DescriptionWidget
              ontologyId={routeParams.ontologyId}
              api={OLS4API}
              parameter={ts_specific_metadata.collection}
            />
          </EuiFlexItem>
          <EuiSpacer size={"s"} />
          <AutocompleteWidget
            api={OLS4API}
            placeholder={"Search in " + routeParams.ontologyId.toUpperCase()}
            selectionChangedEvent={(selectedOption) => {
              navigateToEntity(selectedOption, navigate);
            }}
            parameter={
              "ontology=" +
              routeParams.ontologyId +
              "&" +
              ts_specific_metadata.collection +
              "&fieldList=description,label,iri,ontology_name,type,short_form"
            }
            allowCustomTerms={false}
            singleSelection={true}
            hasShortSelectedLabel={true}
          />
        </EuiPanel>
        <EuiSpacer />
        <EuiPanel>
          <EuiFlexGroup gutterSize={"m"}>
            <EuiFlexItem
              grow={false}
              style={{ maxWidth: "50%", minWidth: "50%" }}
            >
              <EuiSpacer size={"s"} />
              <EuiTitle size={"s"}>
                <span style={{ textTransform: "capitalize" }}>Hierarchy</span>
              </EuiTitle>
              <EuiHorizontalRule style={{ marginBottom: "0px" }} />
              <EuiSpacer size={"s"} />
              <div style={{ overflow: "auto" }}>
                <EuiFlexItem>
                  <EuiTabs expand={true}>{renderTabs()}</EuiTabs>
                  {selectedTabContent}
                </EuiFlexItem>
              </div>
            </EuiFlexItem>
            <EuiSpacer size={"l"} />
            <EuiFlexItem>
              <EuiFlexGroup direction={"column"}>
                <EuiSpacer size={"s"} />
                <EuiFlexItem grow={false}>
                  <EuiAccordion
                    id={"relation info"}
                    initialIsOpen={true}
                    buttonContent={
                      <EuiTitle size="s">
                        <span style={{ textTransform: "capitalize" }}>
                          Ontology Information
                        </span>
                      </EuiTitle>
                    }
                  >
                    <div
                      style={{
                        overflow: "auto",
                        wordWrap: "break-word",
                        overflowWrap: "anywhere",
                      }}
                    >
                      <OntologyInfoWidget
                        api={OLS4API}
                        ontologyId={routeParams.ontologyId}
                        hasTitle={false}
                        parameter={ts_specific_metadata.collection}
                      />
                    </div>
                  </EuiAccordion>
                </EuiFlexItem>
                <EuiSpacer size={"s"} />
                <EuiFlexItem grow={false}></EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexGroup>

      <Helmet>
        <title> Ontology overview &gt; SemLookP </title>
        <meta name="description" content={Ontology + " overview"} />
      </Helmet>
    </div>
  );
}
