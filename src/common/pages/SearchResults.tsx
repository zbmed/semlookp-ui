import { useMatomo } from "@datapunt/matomo-tracker-react";
import { SearchResultsListWidget } from "@ts4nfdi/terminology-service-suite";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { global_config } from "../../config";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
