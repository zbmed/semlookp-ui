import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AutocompleteWidget, DescriptionWidget } from "@km/widgets-semlookp";
import { IriWidget } from "@km/widgets-semlookp";
import { TermWidget } from "@km/widgets-semlookp";
import { OntologyHierarchyWidget } from "@km/widgets-semlookp";
import { AlternativeNameTabWidget } from "@km/widgets-semlookp";
import { CrossRefTabWidget } from "@km/widgets-semlookp";
import { MetadataWidget } from "@km/widgets-semlookp";
import { HierarchyTabWidget } from "@km/widgets-semlookp";
import "./Term.css";
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeader,
    EuiPageHeader,
    EuiPanel,
    EuiSpacer,
    EuiText,
    EuiCard
} from '@elastic/eui'

const API = "https://semanticlookup.zbmed.de/ols/api/"

export default function Term() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParam, setSearchParams] = useSearchParams();
    const [ontology, setOntology] = useState<string>("");

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
                            {/*TODO Add ontology*/}
                            {/*TODO Add on click event*/}
                            <AutocompleteWidget
                                api={"https://semanticlookup.zbmed.de/ols/api/"}
                                onChange={() => console.log("onClick")}
                                parameter={"ontology=" + ontology}
                            />
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiPanel>

                <EuiSpacer/>

                <EuiPanel>
                    <EuiFlexGroup>
                        <EuiFlexItem>
                            {/*TODO Fetch ontology for current term or imporve Hierarchy Widget*/}
                            <HierarchyTabWidget
                                linkToSelf={"https://semanticlookup.zbmed.de/ols/api/ontologies/mesh/terms/"}
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
        </div>
    );
}
