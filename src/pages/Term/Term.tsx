import React from "react";
import {useSearchParams} from "react-router-dom";
import {DescriptionWidget} from "../../components/Widget/DescriptionWidget/DescriptionWidget";
import {IriWidget} from "../../components/Widget/IriWidget/IriWidget";
import "./Term.css"
import {TermWidget} from "../../components/Widget/TermWidget/TermWidget";
import {OntologyHierarchyWidget} from "../../components/Widget/OntologyHierarchyWidget/OntologyHierarchyWidget";
import {AlternativeNameTabWidget} from "../../components/Widget/AlternativeNameWidget/AlternativeNameWidget";
import {CrossRefTabWidget} from "../../components/Widget/CrossRefWidget/CrossRefWidget";
import {TabWidget} from "../../components/Widget/TabWidget/TabWidget";
import {MetadataWidget} from "../../components/Widget/Metadata/MetaDataWidget";
import {EuiPanel} from "@elastic/eui";

export default function Term (){
    const [searchParam, setSearchParams] = useSearchParams()

    return(
        <div>
            OntologyTerm Page
            <h2>Description:</h2>
            <DescriptionWidget iri={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>

            <div className="iri">
                <IriWidget iri={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>
            </div>

            <TermWidget iri={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>

            <OntologyHierarchyWidget iri={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>

            <div style={{padding:10}}>
                <h2>Alternative Names</h2>
            <AlternativeNameTabWidget term={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>
            </div>

            <div>
                <CrossRefTabWidget term={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>
            </div>
            <div>
                <TabWidget iri={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>
            </div>
            <div>
                <EuiPanel>
                <MetadataWidget iri={searchParam.get("iri")} api={'https://semanticlookup.zbmed.de/ols/api/'}/>
                </EuiPanel>
                </div>

            </div>
    )
}
