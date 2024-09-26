import { SearchResultsListWidget } from "@ts4nfdi/terminology-service-suite";
import { useSearchParams } from "react-router-dom";
import GlobalConfig from "../../config";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <SearchResultsListWidget
      api={GlobalConfig.apiUrlOls4}
      query={query}
      targetLink={"/"}
      parameter={""}
      useLegacy={false}
    />
  );
}
