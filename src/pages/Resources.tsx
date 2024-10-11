import { EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { ResourcesWidget } from "@ts4nfdi/terminology-service-suite";
import { Helmet } from "react-helmet";
import { global_config } from "../config";

const OLS4API = global_config.api_url;
export default function Resources() {
  return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>List of All Resources in the Terminology Service</h2>
      </EuiText>
      <EuiSpacer />
      <ResourcesWidget
        api={OLS4API}
        targetLink={"/"}
        parameter={"collection=nfdi4health"}
      />
      <Helmet>
        <title> Resources &gt; SemLookP </title>
        <meta
          name="description"
          content="List of All Resources in the Terminology Service - SemLookP"
        />
      </Helmet>
    </EuiPanel>
  );
}
