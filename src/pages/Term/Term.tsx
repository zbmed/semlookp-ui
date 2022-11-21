import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
    AutocompleteWidget,
    BreadcrumbWidget,
    DescriptionWidget,
    HierarchyTabWidget,
    IriWidget,
    JsonApiWidget,
    TermInfoWidget,
    TitleWidget
} from "@km/widgets-semlookp";
import "./Term.css";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer, EuiText } from '@elastic/eui'
import { Helmet } from "react-helmet";

const API = "https://semanticlookup.zbmed.de/ols/api/"

export default function Term() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location
    const routeParams = useParams();
    const navigate = useNavigate();

    function goToEntityPage(selectedOption) {
        if (selectedOption.type === "class") {
            navigate({
                pathname: "/ontologies/" +
                    selectedOption.ontology_name + "/terms",
                search: "iri=" + selectedOption.iri
            });
        } else if (selectedOption.type === "individual") {
            navigate({
                pathname: "/ontologies/" +
                    selectedOption.ontology_name + "/individuals",
                search: "iri=" + selectedOption.iri
            });
        } else if (selectedOption.type === "property") {
            navigate({
                pathname:
                    "/ontologies/" +
                    selectedOption.ontology_name + "/properties",
                search: "iri=" + selectedOption.iri
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
                                        iri={searchParam.get("iri")}
                                        ontologyID={routeParams.ontologyID}
                                        objType={"term"}
                                        api={API}
                                    />

                                    <BreadcrumbWidget iri={searchParam.get("iri")} api={API}/>

                                    <IriWidget iri={searchParam.get("iri")} api={API}/>

                                    <DescriptionWidget
                                        iri={searchParam.get("iri")}
                                        ontologyID={routeParams.ontologyID}
                                        objType={"term"}
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
                                    <JsonApiWidget apiQuery={API} buttonText="JSON"/>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    {/*TODO Add on click event*/}
                                    <AutocompleteWidget
                                        api={API}
                                        selectionChangedEvent={goToEntityPage}
                                        parameter={"ontology=" + routeParams.ontologyId}
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
                                api={API} ontologyID={routeParams.ontologyId} iri={searchParam.get("iri")}/>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiFlexGroup direction={"column"}>
                                <EuiFlexItem>
                                    {/*TODO Create Term Info Widget?*/}
                                    <TermInfoWidget
                                        api={API}
                                        termIri={searchParam.get("iri")}
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
