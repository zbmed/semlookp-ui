import React from "react";
import SearchResultCard from "../components/SearchResult/SearchResultCard";
import OntologyCard from "../components/OntologyCard/OntologyCard";

export default function SamplePage(){
    return(
        <div>
            Sample Page
            <SearchResultCard id={"ncit:class:http://purl.obolibrary.org/obo/NCIT_C2985"}
                              iri={"http://purl.obolibrary.org/obo/NCIT_C2985"}
                              short_form={"NCIT_C2985"}
                              obo_id={"NCIT:C2985"}
                              label={"Diabetes Mellitus"}
                              description={"A metabolic disorder characterized by abnormally high blood sugar levels due to diminished production of insulin or insulin resistance/desensitization."}
                              onto_name={"ncit"}
                              onto_prefix={"NCIT"}
                              result_type={"class"}
                              is_defining_ontology={true}/>
            <OntologyCard description={"The Anatomical Therapeutic Chemical (ATC) Classification System is used for the classification of active ingredients of drugs according to the organ or system on which they act and their therapeutic, pharmacological and chemical properties. It is controlled by the World Health Organization Collaborating Centre for Drug Statistics Methodology (WHOCC), and was first published in 1976."}
                          loaded={"2020-03-16T15:00:34.710+0000"}
                          preferredPrefix={"ATC"}
                          title={"Anatomical Therapeutic Chemical Classification"}/>
        </div>
    )
}
