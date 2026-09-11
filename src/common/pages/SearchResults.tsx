// main
import { SearchResultsListWidget } from "@ts4nfdi/terminology-service-suite";
import { useSearchParams } from "react-router-dom";
import { global_config, ts_specific_metadata } from "../../config";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <SearchResultsListWidget
      api={global_config.api_url}
      query={query}
      targetLink={"/"}
      useLegacy={false}
      parameter={ts_specific_metadata.collection}
    />
  );
}
