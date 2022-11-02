import React from "react";
import { SearchResultsListWidget } from "@km/widgets-semlookp";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [searchParams,] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <SearchResultsListWidget
      api="https://semanticlookup.zbmed.de/ols/api/"
      query={query}
    />
  );
}
