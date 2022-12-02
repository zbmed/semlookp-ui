import React from "react";
import { useNavigate, useParams, useSearchParams, useLocation } from "react-router-dom";
import {
    AutocompleteWidget,
    BreadcrumbWidget,
    DescriptionWidget,
    EntityInfoWidget,
    HierarchyWidget,
    IriWidget,
    JsonApiWidget,
    TitleWidget
} from "@km/widgets-semlookp";
import "./Term.css";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer, EuiText } from '@elastic/eui'
import { Helmet } from "react-helmet";

const API = "https://semanticlookup.zbmed.de/api/"
const olsAPI = "https://semanticlookup.zbmed.de/ols/api/"

export default function Term() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location
    const location = useLocation();
    const concatIri = searchParam.get("iri") + location.hash;
    const routeParams = useParams();
    const navigate = useNavigate();
    const entityType = routeParams.entityType == "terms" ? "term" : routeParams.entityType == "properties" ? "property" : "individual"

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
        <div>
            <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
                <EuiPanel>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={3}>
                            <EuiFlexGroup direction={"column"}>
                                <EuiFlexItem>

                                    <TitleWidget
                                      iri={concatIri}
                                        ontologyID={routeParams.ontologyId}
                                        objType={entityType}
                                        api={API}
                                    />

                                    <BreadcrumbWidget iri={concatIri} api={API}
                                                      ontologyID={routeParams.ontologyId}
                                                      objType={entityType}
                                    />

                                    <IriWidget iri={concatIri}/>

                                    <DescriptionWidget
                                        iri={concatIri}
                                        ontologyID={routeParams.ontologyId}
                                        objType={entityType}
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
                                    <JsonApiWidget apiQuery={API + "ontologies/" + routeParams.ontologyId + "/" + routeParams.entityType + "?iri=" + encodeURIComponent(concatIri)} buttonText="JSON"/>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    {/*TODO Add on click event*/}
                                    <AutocompleteWidget
                                        api={API}
                                        selectionChangedEvent={goToEntityPage}
                                        parameter={"ontology=" + routeParams.ontologyId}
                                        frontend={"nfdi4health"}
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
                                api={olsAPI} ontologyID={routeParams.ontologyId} iri={concatIri}/>
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
                <title> Term overview &gt; SemLookP </title>
                <meta
                    name="description"
                    content="Term overview for the semantic Lookup Service - SemLookP"
                />
            </Helmet>
        </div>
    );
}
