import React from "react";
import { render } from "react-dom";
import App from "./App";
import {NavigateFunction} from "react-router-dom";

/**
 * Global function which gets passed as selectionChangedEvent of AutocompleteWidget on several pages to navigate to the newly selected entity
 * @param selectedOption    the passed on selectedOptions of the entity
 * @param navigate          a function argument to pass the hook useNavigate() to use it outside a function component
 */
export function navigateToEntity(selectedOption: {label: string, iri?: string, ontology_name?: string, type?: string}, navigate: NavigateFunction) {
    const targetIri = selectedOption.iri.replaceAll("#", "%23").replaceAll("&", "%26"); // '#' and '&' have to be URI-escaped because the iri gets passed as query search parameter in the URL
    if (selectedOption.type === "class") { // Not checking if "term" should be right here because the api only uses class. However, this comment might be useful if related bugs should be detected later
        navigate({
            pathname: "/ontologies/" +
                selectedOption.ontology_name + "/terms",
            search: "iri=" + targetIri
        });
    } else if (selectedOption.type === "individual") {
        navigate({
            pathname: "/ontologies/" +
                selectedOption.ontology_name + "/individuals",
            search: "iri=" + targetIri
        });
    } else if (selectedOption.type === "property") {
        navigate({
            pathname:
                "/ontologies/" +
                selectedOption.ontology_name + "/properties",
            search: "iri=" + targetIri
        });
    } else if (selectedOption.type === "ontology") {
        navigate({
            pathname: "/ontologies/" +
                selectedOption.ontology_name + "/",
        });
    }
}

const rootElement = document.getElementById("root") as HTMLElement;
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
