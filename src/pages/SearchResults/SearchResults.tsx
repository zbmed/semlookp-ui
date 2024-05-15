import React from "react";
import { SearchResultsListWidget } from "@ts4nfdi/terminology-service-suite";
import { useSearchParams } from "react-router-dom";
import GlobalConfig from "../../config";

export default function SearchResults() {
  const [searchParams,] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <SearchResultsListWidget
      api={GlobalConfig.apiUrlGateway}
      query={query}
      targetLink={"/"}
      parameter={"collection=nfdi4health"}
    />
  );
}
