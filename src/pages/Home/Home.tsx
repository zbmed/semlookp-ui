import React, { useState } from "react";
import { EuiFlexItem, EuiPanel, EuiText } from "@elastic/eui";
import "./Home.css";
import { SearchWidget } from "@km/widgets-semlookp";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="searchbar">
        <h1>Welcome to the Terminology Service</h1>
        <EuiFlexItem className="searchBar">
          <SearchWidget
            api={"https://semanticlookup.zbmed.de/ols/api/"}
            onChange={setSearchResults}
          />
          {searchResults.map((result) => (
            <EuiPanel style={{ padding: "10px", margin: "10px" }}>
              <EuiText
                onClick={() =>
                  navigate({
                    pathname: "/terms",
                    search: "?iri=" + result.value.iri.toString(),
                  })
                }
              >
                {result.label}{" "}
                {result.value?.description
                  ? " : " + result.value.description
                  : ""}
              </EuiText>
            </EuiPanel>
          ))}
        </EuiFlexItem>
      </div>
    </div>
  );
}
