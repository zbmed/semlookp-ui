import React from "react";
import {EuiPanel, EuiFlexGroup, EuiFlexItem, EuiBadge, EuiText, EuiLink} from "@elastic/eui"
import "./SearchResult.css"

interface ResultProps {
    id:string,
    iri: string,
    short_form: string,
    obo_id: string,
    label: string,
    description: string,
    onto_name:string,
    onto_prefix:string,
    result_type:string,
    is_defining_ontology:boolean
}
export default function SearchResultCard(props: ResultProps) {
    return (
            <EuiPanel hasBorder={true}
            borderRadius="m"
            className="panel">
                <EuiText>
                    <EuiText
                             size={"relative"}
                             className="label">
                        {props.label}
                        <EuiBadge className="obo_badge"
                                  color="#ffac1b">
                            {props.obo_id}
                        </EuiBadge>
                    </EuiText>
                    Ontology: <EuiBadge className="onto_name">{props.onto_name.toUpperCase()}</EuiBadge>
                </EuiText>
                <EuiText>
                    <EuiLink href={props.iri}>
                        {props.iri}
                    </EuiLink>
                    </EuiText>
                <EuiText>{props.description}</EuiText>
                {/*<EuiText>Also in: ...</EuiText>*/}
            </EuiPanel>
    )

}
