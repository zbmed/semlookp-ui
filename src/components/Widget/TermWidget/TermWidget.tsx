import React, { useEffect, useState } from 'react'

interface TermWidgetProps {
    iri: string,
    api: string
}
function TermWidget(props: TermWidgetProps) {
    const [label, setLabel] = useState('undefined')

    const {api, iri} = props

    useEffect(() => {
        const getTerm = async () => {
            const fetchedLabel = await fetch(`${api}terms?iri=${iri}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => response._embedded.terms[0].label)
            setLabel(fetchedLabel)
        }
        getTerm().catch(error => console.log(error))
    }, [props.api, props.iri]);

    return (
        <div>
            <b> {label} </b>
        </div>
    )
}


export {TermWidget}