import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
    AutocompleteWidget,
    BreadcrumbWidget,
    DescriptionWidget,
    EntityInfoWidget,
    HierarchyWidget,
    IriWidget,
    JsonApiWidget,
    TitleWidget
} from "@nfdi4health/semlookp-widgets";
import "./Entity.css";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer, EuiText } from '@elastic/eui'
import { Helmet } from "react-helmet";
import { navigateToEntity } from "../../index";

const API = "https://semanticlookup.zbmed.de/api/"
const olsAPI = "https://semanticlookup.zbmed.de/ols/api/"

export default function Entity() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location
    const concatIri = decodeURIComponent(decodeURIComponent(searchParam.get("iri")));
    const routeParams = useParams();
    const navigate = useNavigate();
    const entityType = routeParams.entityType == "terms" ? "term" : routeParams.entityType == "properties" ? "property" : "individual";

    const entityTitle = entityType[0].toUpperCase()+entityType.slice(1);
    return (
        <div>
            <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
                <EuiPanel>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={3}>
                            <EuiFlexGroup direction={"column"}>
                                <EuiFlexItem>

                                    <TitleWidget
                                      iri={concatIri}
                                        ontologyId={routeParams.ontologyId}
                                        entityType={entityType}
                                        api={API}
                                    />

                                    <BreadcrumbWidget iri={concatIri} api={API}
                                                      ontologyId={routeParams.ontologyId}
                                                      entityType={entityType}
                                    />

                                    <IriWidget iri={concatIri}/>

                                    <DescriptionWidget
                                        iri={concatIri}
                                        ontologyId={routeParams.ontologyId}
                                        entityType={entityType}
                                        api={API}
                                    />
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFlexGroup direction={"column"}>
                                <EuiFlexItem style={{
                                    maxWidth: 20, display: "inline-block",
                                    float: "right",
                                }}>
                                    <JsonApiWidget apiQuery={API + "ontologies/" + routeParams.ontologyId + "/" + routeParams.entityType + "?iri=" + concatIri.replaceAll("#", "%23").replaceAll("&", "%26")} buttonText="JSON"/>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    {/*TODO Add on click event*/}
                                    <AutocompleteWidget
                                        api={API}
                                        placeholder={"Search in " + routeParams.ontologyId.toUpperCase()}
                                        selectionChangedEvent={(selectedOption) => { navigateToEntity(selectedOption, navigate); }}
                                        parameter={"ontology=" + routeParams.ontologyId + "collection=nfdi4health"}
                                        allowCustomTerms={false}
                                    />
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>

                <EuiSpacer/>

                <EuiPanel>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={3}>
                            <HierarchyWidget
                                api={olsAPI} ontologyId={routeParams.ontologyId} iri={concatIri}/>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFlexGroup direction={"column"}>
                                <EuiFlexItem>
                                    <EntityInfoWidget
                                        api={API}
                                        ontologyId={routeParams.ontologyId}
                                        iri={concatIri}
                                        hasTitle={true}
                                        entityType={entityType}
                                    />
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    {/*TODO Create Term Relations Widget?*/}
                                    <EuiText><h3>Term Relations</h3></EuiText>
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
                    content={entityTitle+" overview for the semantic Lookup Service - SemLookP"}
                />
            </Helmet>
        </div>
    );
}
