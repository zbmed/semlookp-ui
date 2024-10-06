import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./Entity.css";
import {
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
  EuiHorizontalRule,
  EuiIcon,
} from "@elastic/eui";
import { Helmet } from "react-helmet";
import { global_config } from "../config";
import "@ts4nfdi/terminology-service-suite/dist/esm/index.css";
import {
  AutocompleteWidget,
  BreadcrumbWidget,
  DescriptionWidget,
  EntityInfoWidget,
  EntityRelationsWidget,
  HierarchyWidget,
  IriWidget,
  JsonApiWidget,
  TitleWidget,
} from "@ts4nfdi/terminology-service-suite";
import { navigateToEntity } from "../components/utils";

const OLS4API = global_config.api_url;

export default function Entity() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location
  const concatIri = decodeURIComponent(
    decodeURIComponent(searchParam.get("iri"))
  );
  const routeParams = useParams();
  const navigate = useNavigate();
  const entityType =
    routeParams.entityType == "terms"
      ? "term"
      : routeParams.entityType == "properties"
      ? "property"
      : "individual";
  const entityTitle = entityType[0].toUpperCase() + entityType.slice(1);

  return (
    <div>
      <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
        <EuiPanel>
          <EuiFlexGroup>
            <EuiFlexItem grow={7}>
              <EuiFlexItem>
                <EuiTitle size={"m"}>
                  <TitleWidget
                    iri={concatIri}
                    ontologyId={routeParams.ontologyId}
                    api={OLS4API}
                  />
                </EuiTitle>
              </EuiFlexItem>
            </EuiFlexItem>
            <EuiFlexItem grow={1} />
            <EuiFlexItem grow={1}>
              <JsonApiWidget
                apiQuery={
                  OLS4API +
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
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiHorizontalRule />
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiTitle size={"xs"}>
                    <span>
                      <span>Terminology</span>
                      <EuiIcon type="arrowRight" />
                      <span>CURIE</span>
                      <EuiIcon
                        title={"CURIE = Compact uniform resource identifier"}
                        type={"iInCircle"}
                        size={"m"}
                      />
                      <span>:</span>
                    </span>
                  </EuiTitle>
                  <EuiFlexItem>
                    <BreadcrumbWidget
                      iri={concatIri}
                      api={OLS4API}
                      ontologyId={routeParams.ontologyId}
                    />
                  </EuiFlexItem>
                </EuiFlexItem>
                <div
                  style={{
                    float: "right",
                    marginRight: "12px",
                  }}
                >
                  <EuiSpacer size={"m"} />
                  <EuiTitle size={"xs"}>
                    <span>Identifier/IRI:</span>
                  </EuiTitle>
                  <EuiFlexItem>
                    <IriWidget iri={concatIri} />
                  </EuiFlexItem>
                </div>
              </EuiFlexGroup>
              <EuiFlexItem>
                <EuiHorizontalRule />
                <EuiTitle size={"xs"}>
                  <span>Description:</span>
                </EuiTitle>
                <EuiSpacer size={"s"} />
                <DescriptionWidget
                  iri={concatIri}
                  ontologyId={routeParams.ontologyId}
                  api={OLS4API}
                />
              </EuiFlexItem>
              <EuiSpacer size={"s"} />
              <AutocompleteWidget
                api={OLS4API}
                placeholder={
                  "Search in " + routeParams.ontologyId.toUpperCase()
                }
                selectionChangedEvent={(selectedOption) => {
                  navigateToEntity(selectedOption, navigate);
                }}
                parameter={
                  "ontology=" +
                  routeParams.ontologyId +
                  "&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"
                }
                allowCustomTerms={false}
                singleSelection={true}
                hasShortSelectedLabel={true}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize={"m"}>
            <EuiFlexItem
              grow={false}
              style={{ maxWidth: "50%", minWidth: "50%" }}
            >
              <EuiTitle size={"s"}>
                <span>Hierarchy</span>
              </EuiTitle>
              <EuiHorizontalRule />
              <div style={{ overflow: "auto" }}>
                <HierarchyWidget
                  apiUrl={global_config.api_url}
                  backendType={"ols"}
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
                        encodeURIComponent(entity.iri)
                      )}`
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
                        encodeURIComponent(entity.iri)
                      )}`
                    );
                  }}
                />
              </div>
            </EuiFlexItem>
            <EuiSpacer size={"l"} />
            <EuiFlexItem grow={true}>
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
                    <EntityInfoWidget
                      api={OLS4API}
                      ontologyId={routeParams.ontologyId}
                      iri={concatIri}
                      hasTitle={false}
                      entityType={entityType}
                    />
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
