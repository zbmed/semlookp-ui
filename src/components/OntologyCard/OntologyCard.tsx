import React from "react";
import {EuiPanel} from "@elastic/eui";
import "./OntologyCard.css"

interface OntologyCardProps {
    title: string,
    loaded: string,
    description: string,
    preferredPrefix: string,
}

export default function OntologyCard(props: OntologyCardProps){
    return (
        <EuiPanel className="panel">
            <span>
                {props.title}
            </span>
            <span>
                {props.preferredPrefix}

            </span>
            <span>
                <EuiPanel className="description">
                    {props.description}
                </EuiPanel>
            </span>
        </EuiPanel>
    )
}
