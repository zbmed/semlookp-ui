import React, { useState } from 'react';
import { EuiComboBox } from '@elastic/eui';
import {useNavigate} from "react-router-dom";
import "./SearchWidget.css"

interface SearchWidgetProps {
    api: string
}
function SearchWidget(props: SearchWidgetProps) {
    const [options, setOptions] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedOptions, setSelected] = useState([]);
    let navigate = useNavigate()

    function getSuggestion(searchValue: string) {
        const suggestions = {
            label: 'Suggestions',
            // @ts-ignore
            options: [],
        };
        const optionsList: { label: string }[] = [];
        if (searchValue.length > 0) {
            fetch(`${props.api}suggest?q=${searchValue}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((res) => res.json())
                .then((res) => res.response.docs)
                .then((res) => {
                    for (const item in res) {
                        optionsList.push({ label: res[item].autosuggest });
                        if (optionsList.length > 4) {
                            break;
                        }
                    }
                    suggestions.options = optionsList;
                });
        } else {
            suggestions.options = [];
            // build array
            return suggestions;
        }
    }

    function getSearch(searchValue: string) {
        const searchs = {
            label: 'Terms',
            // @ts-ignore
            options: [],
        };
        const optionsList: { label: string }[] = [];
        if (searchValue.length > 0) {
            fetch(`${props.api}search?q=${searchValue}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((res) => res.json())
                .then((res) => res.response.docs)
                .then((res) => {
                    for (const item in res) {
                        optionsList.push({
                            // value: res[item].iri,
                            label: res[item].label,
                        });
                        if (optionsList.length > 4) {
                            break;
                        }
                    }
                    searchs.options = optionsList;
                });
        } else {
            searchs.options = [];
            // build array
            return searchs;
        }
    }

    function buildOptions(searchValue: string) {
        const search = getSearch(searchValue);
        const suggestions = getSuggestion(searchValue);
        setOptions([search, suggestions]);
    }

    function searchTerm(searchValue: string) {
        const options_data: any[] = [];
        if (searchValue.length > 0) {
            fetch(`${props.api}search?q=${searchValue}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            }).then((res) => res.json())
                .then((res) => res.response.docs)
                .then((res) => {
                    for (const item in res) {
                        const obo_short_form = res[item].hasOwnProperty("obo_id") ?
                            res[item].obo_id.toUpperCase() : res[item].ontology_name == "mesh" ? "MESH: " + res[item].short_form.toUpperCase() : res[item].short_form.toUpperCase()
                        options_data.push({
                            label: res[item].label.toLowerCase() + " | " + obo_short_form,
                            value: {
                                iri: res[item].iri,
                                obo_id: res[item].obo_id
                            }});


                        if (options_data.length > 4) {
                            break;
                        }
                    }
                    setOptions(options_data);
                });
        } else {
            setOptions([]);
        }
    }

    function onChange (selectedOptions) {
        setSelected(selectedOptions);

        const searchString = selectedOptions[0].value.iri
        navigate({
            pathname: "/terms",
            // iri missing now using label
            //search: "?iri="+ searchString.toString().replace(/\s/g, "+")
            search: "?iri=" + searchString.toString(),
        })
    }

    const onCreateOption = (searchValue: string, flattenedOptions = []) => {
        const normalizedSearchValue = searchValue.trim().toLowerCase();

        if (!normalizedSearchValue) {
            return;
        }

        const newOption = {
            label: searchValue,
        };

        // Create the option if it doesn't exist.

        if (
            flattenedOptions.findIndex(
                // @ts-ignore
                (option) => option.label.trim().toLowerCase() === normalizedSearchValue,
            ) === -1
        ) {
            // setOptions([...options, newOption]);
            setOptions([newOption]);
        }

        // Select the option.
        setSelected([...selectedOptions, newOption]);
    };

    const onSearchChange = (searchValue: string) => {
        searchTerm(searchValue);
        // buildOptions(searchValue);
    };

    return (
        <EuiComboBox
            aria-label="Accessible screen reader label"
            placeholder="Select or create options"
            options={options}
            selectedOptions={selectedOptions}
            onChange={onChange}
            onSearchChange={onSearchChange}
            // onCreateOption={onCreateOption}
            isClearable
            async={true}
            singleSelection
            className="comboBox"
            fullWidth={true}
        />
    );
}

export { SearchWidget };
