// main
import {
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import {
  AutocompleteWidget,
  BreadcrumbWidget,
  DescriptionWidget,
  EntityDefinedByWidget,
  EntityInfoWidget,
  EntityOntoListWidget,
  EntityRelationsWidget,
  HierarchyWidget,
  IriWidget,
  JsonApiWidget,
  TitleWidget,
  useEntityProvider,
} from "@ts4nfdi/terminology-service-suite";
import { Helmet } from "react-helmet";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { global_config, ts_specific_metadata } from "../../config";
import { navigateToEntity } from "../components/utils";
import { getOntoportalApiKey } from "../components/apiKeys";
import { useEffect, useState } from "react";

const OLS4API = global_config.api_url;

export default function Entity() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location
  const concatIri = decodeURIComponent(
    decodeURIComponent(searchParam.get("iri")),
  );
  const routeParams = useParams();
  const navigate = useNavigate();

  const { provider } = useEntityProvider({
    ontologyId: routeParams.ontologyId,
    iri: concatIri,
  });

  const [backendType, setBackendType] = useState<string>("ols");
  const [apiUrl, setApiUrl] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");

  useEffect(() => {
    if (provider?.type) {
      setBackendType(provider.type);
    }
    if (provider?.api) {
      setApiUrl(provider.api);
      if (provider.type === "ontoportal")
        setApiKey(getOntoportalApiKey(provider.api));
    }
  }, [provider]);

  const entityType =
    routeParams.entityType == "terms"
      ? "term"
      : routeParams.entityType == "properties"
        ? "property"
        : "individual";
  const entityTitle = entityType[0].toUpperCase() + entityType.slice(1);

  return (
    <div>
      <EuiSpacer />
      <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={7}>
              <EuiTitle size={"m"}>
                <TitleWidget
                  iri={concatIri}
                  ontologyId={routeParams.ontologyId}
                  api={global_config.api_url}
                  parameter={ts_specific_metadata.collection}
                  useLegacy={false}
                  thingType={entityType}
                  defaultValue={"No title available"}
                />
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <JsonApiWidget
                apiQuery={
                  global_config.api_url +
                  "ontologies/" +
                  routeParams.ontologyId +
                  "/" +
                  routeParams.entityType +
                  "?iri=" +
                  concatIri.replaceAll("#", "%23").replaceAll("&", "%26")
                }
                buttonText="JSON"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule />
          <EuiFlexGroup justifyContent={"spaceBetween"} alignItems={"center"}>
            <EuiFlexItem grow={false}>
              <EuiTitle size={"xs"}>
                <span>
                  <span>Terminology</span>
                  <EuiIcon type="arrowRight" />
                  <span>CURIE </span>
                  <EuiIcon
                    title={"CURIE = Compact uniform resource identifier"}
                    type={"info"}
                    size={"m"}
                  />
                  <span>:</span>
                </span>
              </EuiTitle>
              <BreadcrumbWidget
                entityType={entityType}
                iri={concatIri}
                api={global_config.api_url}
                ontologyId={routeParams.ontologyId}
                onNavigateToOntology={(ontologyId) => {
                  navigate(
                    `/ontologies/${ontologyId}/?hierarchy=classes-hierarchy`,
                  );
                }}
                parameter={ts_specific_metadata.collection}
              />
              <EuiSpacer size={"m"} />
              <EntityOntoListWidget
                entityType={entityType}
                api={global_config.api_url}
                iri={concatIri}
                ontologyId={routeParams.ontologyId}
                useLegacy={false}
                onNavigateToOntology={(ontologyId, entityType, entity) => {
                  navigate(
                    `/ontologies/${ontologyId}/${
                      entityType == "class" || entityType == "term"
                        ? "terms"
                        : entityType == "property"
                          ? "properties"
                          : "individuals"
                    }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`,
                  );
                }}
                parameter={ts_specific_metadata.collection}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiTitle size={"xs"}>
                <span>Identifier/IRI:</span>
              </EuiTitle>
              <IriWidget iri={concatIri} copyButton={"left"} />
              <EuiSpacer size={"m"} />
              <EntityDefinedByWidget
                entityType={entityType}
                api={global_config.api_url}
                iri={concatIri}
                ontologyId={routeParams.ontologyId}
                useLegacy={false}
                onNavigateToOntology={(ontologyId, entityType, entity) => {
                  navigate(
                    `/ontologies/${ontologyId}/${
                      entityType == "class" || entityType == "term"
                        ? "terms"
                        : entityType == "property"
                          ? "properties"
                          : "individuals"
                    }?iri=${encodeURIComponent(encodeURIComponent(entity.iri))}`,
                  );
                }}
                parameter={ts_specific_metadata.collection}
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
              iri={concatIri}
              ontologyId={routeParams.ontologyId}
              api={OLS4API}
              parameter={ts_specific_metadata.collection}
              useLegacy={false}
              thingType={entityType}
            />
          </EuiFlexItem>
          <EuiSpacer size={"s"} />
          <AutocompleteWidget
            api={OLS4API}
            placeholder={"Search in " + routeParams.ontologyId.toUpperCase()}
            selectionChangedEvent={(selectedOption) => {
              const normalized = selectedOption.map((option) => ({
                ...option,
                label: option.label ?? option.iri ?? "",
              }));
              navigateToEntity(normalized, navigate);
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
                <span style={{ textTransform: "capitalize" }}>
                  {entityType} Hierarchy
                </span>
              </EuiTitle>
              <EuiHorizontalRule style={{ marginBottom: "0px" }} />
              <div style={{ overflow: "auto" }}>
                {apiUrl && backendType && concatIri && (
                  <HierarchyWidget
                    apiUrl={apiUrl}
                    apiKey={apiKey}
                    backendType={backendType}
                    iri={concatIri}
                    entityType={entityType}
                    ontologyId={routeParams.ontologyId}
                    onNavigateToEntity={(ontologyId, entityType, entity) => {
                      navigate(
                        `/ontologies/${ontologyId}/${
                          entityType == "class" || entityType == "term"
                            ? "terms"
                            : entityType == "property"
                              ? "properties"
                              : "individuals"
                        }?iri=${encodeURIComponent(
                          encodeURIComponent(entity.iri),
                        )}`,
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
                        }?iri=${encodeURIComponent(
                          encodeURIComponent(entity.iri),
                        )}`,
                      );
                    }}
                  />
                )}
              </div>
            </EuiFlexItem>
            <EuiSpacer size={"l"} />
            <EuiFlexItem>
              <EuiFlexGroup direction={"column"}>
                <EuiSpacer size={"s"} />
                <EuiFlexItem grow={false}>
                  <EuiAccordion
                    id={"entity info"}
                    initialIsOpen={true}
                    buttonContent={
                      <EuiTitle size="s">
                        <span style={{ textTransform: "capitalize" }}>
                          {entityType} Information
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
                      <EntityInfoWidget
                        api={global_config.api_url}
                        ontologyId={routeParams.ontologyId}
                        iri={concatIri}
                        hasTitle={false}
                        entityType={entityType}
                        parameter={ts_specific_metadata.collection}
                        useLegacy={false}
                      />
                    </div>
                  </EuiAccordion>
                </EuiFlexItem>
                <EuiSpacer size={"s"} />
                <EuiFlexItem grow={false}>
                  <EuiAccordion
                    id={"relation info"}
                    initialIsOpen={true}
                    buttonContent={
                      <EuiTitle size="s">
                        <span style={{ textTransform: "capitalize" }}>
                          {entityType} Relations
                        </span>
                      </EuiTitle>
                    }
                  >
                    <EntityRelationsWidget
                      api={global_config.api_url}
                      entityType={entityType}
                      iri={concatIri}
                      hasTitle={false}
                      ontologyId={routeParams.ontologyId}
                      onNavigateToEntity={(ontologyId, entityType, entity) => {
                        navigate(
                          `/ontologies/${ontologyId}/${
                            entityType == "class" || entityType == "term"
                              ? "terms"
                              : entityType == "property"
                                ? "properties"
                                : "individuals"
                          }?iri=${encodeURIComponent(
                            encodeURIComponent(entity.iri),
                          )}`,
                        );
                      }}
                      onNavigateToOntology={(
                        ontologyId,
                        entityType,
                        entity,
                      ) => {
                        navigate(
                          `/ontologies/${ontologyId}/${
                            entityType == "class" || entityType == "term"
                              ? "terms"
                              : entityType == "property"
                                ? "properties"
                                : "individuals"
                          }?iri=${encodeURIComponent(
                            encodeURIComponent(entity.iri),
                          )}`,
                        );
                      }}
                      parameter={ts_specific_metadata.collection}
                    />
                  </EuiAccordion>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexGroup>

      <Helmet>
        <title> {entityTitle} overview &gt; SemLookP </title>
        <meta
          name="description"
          content={
            entityTitle + " overview for the semantic Lookup Service - SemLookP"
          }
        />
      </Helmet>
    </div>
  );
}
