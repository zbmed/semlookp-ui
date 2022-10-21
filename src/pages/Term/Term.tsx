import React from "react";
import { useSearchParams } from "react-router-dom";
import { AutocompleteWidget, DescriptionWidget, HierarchyTabWidget, IriWidget, TermWidget } from "@km/widgets-semlookp";
import "./Term.css";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer, EuiText } from '@elastic/eui'
import { useQuery } from 'react-query'
import { Helmet } from "react-helmet";

const API = "https://semanticlookup.zbmed.de/ols/api/"

export default function Term() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParam, setSearchParams] = useSearchParams(); // read the query string in the URL for the current location

    const {
        data: ontology,
        isSuccess
    } = useQuery(
        ["ontologiesData", API],
        () => {
            return fetch(`${API}terms?iri=${searchParam.get("iri")}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Content_Type: "application/json",
                },
            }).then(response => response.json())
                .then(response => {
                    if (response._embedded.terms.ontology_name != null) {
                        return response._embedded.terms.ontology_name;
                    } else {
                        return "Not available"
                    }
                });
        }
    )

    return (
        <div>
            <EuiFlexGroup justifyContent={"spaceAround"} direction={"column"}>

                <EuiPanel>
                    <EuiFlexGroup>
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
                            {isSuccess && <AutocompleteWidget
                                api={API}
                                onChange={() => console.log("onClick")}
                                parameter={"ontology=" + ontology}
                            />}
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>

                <EuiSpacer/>

                <EuiPanel>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            <HierarchyTabWidget
                                linkToSelf={"https://semanticlookup.zbmed.de/ols/api/ontologies/" + ontology + "/terms/"}
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
