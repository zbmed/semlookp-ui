import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiText, EuiPanel} from "@elastic/eui";

export default function AboutPage(){
    return(
        <EuiFlexGroup justifyContent="spaceAround">
            <EuiPanel paddingSize="l">
            <EuiFlexItem grow={false}>
                <EuiText>
                    <h2>About the Terminology Service</h2>
                    <p>
                        The Terminology Service is a repository for biomedical resources that aims to provide a single point of access to the latest ontology and terminology versions. You can browse the resources through the website as well as programmatically via our API.
                    </p>
                    <p>
                        The Terminology Service is part of the Semantic Lookup Platform (SemLookP) for the IDSN Project. SemLookP is developed and maintained by ZB MED - Information Centre for Life Sciences.
                    </p>
                    <p>
                        What are you looking for?
                    </p>
                    <h3>API documentation:</h3>
                    <p> Documentation on how to use the Terminology Service’s REST API</p>
                    <h3>Source Code:</h3>
                    <p>Terminology Service on GitLab</p>
                    <h3>OLS documentation:</h3>
                    <p> EMBL-EBI’s documentation of the Ontology Lookup Service, on which the Terminology Service is based</p>

                    <h3>Publications:</h3>
                    <a href="https://swat4hcls.figshare.com/articles/A_Semantic_Data_Integration_Methodology_for_Translational_Neurodegenerative_Disease_Research/7339244">IDSN</a>
                    <p> A Semantic Data Integration Methodology for Translational Neurodegenerative Disease Research</p>
                </EuiText>
            </EuiFlexItem>
            </EuiPanel>
        </EuiFlexGroup>
    )
}

