import React from "react";
import { SearchResultsListWidget } from "@nfdi4health/semlookp-widgets";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [searchParams,] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <SearchResultsListWidget
      api="https://semanticlookup.zbmed.de/api/"
      query={query}
      targetLink="https://semanticlookup.zbmed.de/dev/"
      parameter={"collection=nfdi4health"}
    />
  );
}
