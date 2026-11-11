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
  useEntityProvider,
  EntityProviderWidget,
} from "@ts4nfdi/terminology-service-suite";
import { useCallback, useMemo } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { global_config, ts_specific_metadata } from "../../config";
import { getOntoportalApiKey } from "../components/apiKeys";
import { navigateToEntity } from "../components/utils";

const HIERARCHY_TABS = [
  { id: "classes-hierarchy", name: "Classes", entityType: "class" },
  { id: "properties-hierarchy", name: "Properties", entityType: "property" },
  {
    id: "individuals-hierarchy",
    name: "Individuals",
    entityType: "individual",
  },
] as const;

const DEFAULT_TAB_ID = HIERARCHY_TABS[0].id;

const ROUTE_SEGMENT: Record<string, string> = {
  class: "terms",
  term: "terms",
  property: "properties",
};

const CAPITALIZE_STYLE = { textTransform: "capitalize" } as const;
const HIERARCHY_COLUMN_STYLE = { maxWidth: "50%", minWidth: "50%" } as const;
const INFO_WRAPPER_STYLE = {
  overflow: "auto",
  wordWrap: "break-word",
  overflowWrap: "anywhere",
} as const;
const SCROLL_STYLE = { overflow: "auto" } as const;
const RULE_STYLE = { marginBottom: "0px" } as const;

export default function Ontology() {
  const { ontologyId = "" } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { provider } = useEntityProvider({
    ontologyId,
    parameter: ts_specific_metadata.collection,
  });

  const backendType: string = provider?.type ?? "ols";
  const apiUrl: string = provider?.api ?? "";
  const apiKey: string = useMemo(
    () =>
      provider?.type === "ontoportal" && provider.api
        ? getOntoportalApiKey(provider.api)
        : "",
    [provider?.type, provider?.api],
  );

  const navigateToEntityHierarchy = useCallback(
    (ontId: string, entityType: string, entity: { iri: string }) => {
      const segment = ROUTE_SEGMENT[entityType] ?? "individuals";
      navigate(
        `/ontologies/${ontId}/${segment}?iri=${encodeURIComponent(
          encodeURIComponent(entity.iri),
        )}`,
      );
    },
    [navigate],
  );

  const requestedTabId = searchParams.get("hierarchy");
  const currentTab =
    HIERARCHY_TABS.find((tab) => tab.id === requestedTabId) ??
    HIERARCHY_TABS[0];
  const currentTabId = currentTab.id;

  const onSelectedTabChanged = useCallback(
    (id: string) => {
      if (id === currentTabId) return;
      const newParams = new URLSearchParams(searchParams);
      newParams.set("hierarchy", id);
      setSearchParams(newParams);
    },
    [currentTabId, searchParams, setSearchParams],
  );

  const onSelect = useCallback(
    (selectedOption: any[]) => {
      const normalized = selectedOption.map((option) => ({
        ...option,
        label: option.label ?? option.iri ?? "",
      }));
      navigateToEntity(normalized, navigate);
    },
    [navigate],
  );

  const selectParameter = useMemo(
    () =>
      `ontology=${ontologyId}&${ts_specific_metadata.collection}&fieldList=description,label,iri,ontology_name,type,short_form`,
    [ontologyId],
  );

  const ontologyApiQuery = `${global_config.api_url}ontologies/${ontologyId}/`;

  return (
    <div>
      <EuiSpacer />
      <EuiFlexGroup justifyContent="spaceAround" direction="column">
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={7}>
              <EuiTitle size="m">
                <TitleWidget
                  ontologyId={ontologyId}
                  api={global_config.api_url}
                  parameter={ts_specific_metadata.collection}
                />
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <JsonApiWidget apiQuery={ontologyApiQuery} buttonText="JSON" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule />
          <EuiFlexGroup gutterSize="l">
            <EuiFlexItem grow={7}>
              <EuiTitle size="xs">
                <span>Description:</span>
              </EuiTitle>
              <EuiSpacer size="s" />
              <DescriptionWidget
                ontologyId={ontologyId}
                api={global_config.api_url}
                parameter={ts_specific_metadata.collection}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={3}>
              <EuiTitle size="xs">
                <span>Provider information:</span>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EntityProviderWidget
                ontologyId={ontologyId}
                api={global_config.api_url}
                parameter={ts_specific_metadata.collection}
                showRaw={false}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <AutocompleteWidget
            api={global_config.api_url}
            placeholder={`Search in ${ontologyId.toUpperCase()}`}
            selectionChangedEvent={onSelect}
            parameter={selectParameter}
            allowCustomTerms={false}
            singleSelection={true}
            hasShortSelectedLabel={true}
          />
        </EuiPanel>
        <EuiSpacer />
        <EuiPanel>
          <EuiFlexGroup gutterSize="m">
            <EuiFlexItem grow={false} style={HIERARCHY_COLUMN_STYLE}>
              <EuiSpacer size="s" />
              <EuiTitle size="s">
                <span style={CAPITALIZE_STYLE}>Hierarchy</span>
              </EuiTitle>
              <EuiHorizontalRule style={RULE_STYLE} />
              <EuiSpacer size="s" />
              <div style={SCROLL_STYLE}>
                <EuiFlexItem>
                  <EuiTabs expand={true}>
                    {HIERARCHY_TABS.map((tab) => (
                      <EuiTab
                        key={tab.id}
                        onClick={() => onSelectedTabChanged(tab.id)}
                        isSelected={tab.id === currentTabId}
                      >
                        {tab.name}
                      </EuiTab>
                    ))}
                  </EuiTabs>
                  {apiUrl && backendType && (
                    <HierarchyWidget
                      key={currentTab.id}
                      useLegacy={false}
                      apiUrl={apiUrl}
                      apiKey={apiKey}
                      backendType={backendType}
                      entityType={currentTab.entityType}
                      ontologyId={ontologyId}
                      onNavigateToEntity={navigateToEntityHierarchy}
                      onNavigateToOntology={navigateToEntityHierarchy}
                    />
                  )}
                </EuiFlexItem>
              </div>
            </EuiFlexItem>
            <EuiSpacer size="l" />
            <EuiFlexItem>
              <EuiFlexGroup direction="column">
                <EuiFlexItem grow={false}>
                  <EuiSpacer size="s" />
                  <EuiAccordion
                    id="ontology-info"
                    initialIsOpen={true}
                    buttonContent={
                      <EuiTitle size="s">
                        <span style={CAPITALIZE_STYLE}>
                          Ontology Information
                        </span>
                      </EuiTitle>
                    }
                  >
                    <div style={INFO_WRAPPER_STYLE}>
                      <OntologyInfoWidget
                        api={global_config.api_url}
                        ontologyId={ontologyId}
                        hasTitle={false}
                        parameter={ts_specific_metadata.collection}
                      />
                    </div>
                  </EuiAccordion>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexGroup>

      <Helmet>
        <title>Ontology overview &gt; SemLookP</title>
        <meta name="description" content={`${ontologyId} overview`} />
      </Helmet>
    </div>
  );
}
