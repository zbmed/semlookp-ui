import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { AutocompleteWidget, DescriptionWidget, HierarchyTabWidget, IriWidget, TermWidget } from "@km/widgets-semlookp";
import "./Term.css";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer, EuiText } from '@elastic/eui'
import { Helmet } from "react-helmet";

const API = "https://semanticlookup.zbmed.de/ols/api/"

export default function Term() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location
    const routeParams = useParams();

    return (
        <div>
            <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>
                <EuiPanel>
                    <EuiFlexItem>
                        <TermWidget
                            iri={searchParam.get("iri")}
                            api={API}
                        />

                        <IriWidget
                            iri={searchParam.get("iri")}
                            api={API}
                        />

                        <DescriptionWidget
                            iri={searchParam.get("iri")}
                            api={API}
                        />
                    </EuiFlexItem>
                    <EuiFlexItem>
                        {/*TODO Add on click event*/}
                        <AutocompleteWidget
                            api={API}
                            onChange={() => console.log("onClick")}
                            parameter={"ontology=" + routeParams.ontologyId}
                        />
                    </EuiFlexItem>
                </EuiPanel>

                <EuiSpacer/>

                <EuiPanel>
                    <EuiFlexGroup>

                        <EuiFlexItem>
                            <HierarchyTabWidget
                                linkToSelf={API + "ontologies/" + routeParams.ontologyId + "/" + routeParams.termType + "/"}
                                iri={searchParam.get("iri")}/>
                        </EuiFlexItem>

                        <EuiFlexGroup direction={"column"}>
                            <EuiFlexItem>
                                {/*TODO Create Term Info Widget?*/}
                                <EuiText><h3>Term Info</h3></EuiText>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                {/*TODO Create Term Relations Widget?*/}
                                <EuiText><h3>Term Relations</h3></EuiText>
                            </EuiFlexItem>
                        </EuiFlexGroup>

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
