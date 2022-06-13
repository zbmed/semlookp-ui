import React, { useEffect, useState } from 'react';
import { EuiFlexItem, EuiText } from '@elastic/eui';

interface DescriptionWidgetProps {
    iri: string,
    api: string
}

function DescriptionWidget(props: DescriptionWidgetProps) {
    const [description, setDescription] = useState("No description available.");
    const {api, iri} = props

    useEffect(() => {
        const getDescription = async () => {
            const description = await fetch(`${api}terms?iri=${iri}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => {if (response._embedded.terms[0].description[0] != null){
                     return response._embedded.terms[0].description[0]
                }})
            setDescription(description)
        }
        getDescription().catch(error => console.log(error))
    }, [props.api, props.iri]);

    return (
        <div>
            <EuiFlexItem>
                <EuiText>
                    {description}
                </EuiText>
            </EuiFlexItem>
        </div>
    );
}

export { DescriptionWidget };
