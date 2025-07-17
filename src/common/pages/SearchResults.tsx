import { SearchResultsListWidget } from "@ts4nfdi/terminology-service-suite";
import { useSearchParams } from "react-router-dom";
import { global_config } from "../../config";
import { useEffect } from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
  }, []);

  return (
    <SearchResultsListWidget
      api={global_config.api_url}
      query={query}
      targetLink={"/"}
      parameter={""}
      useLegacy={false}
    />
  );
}
