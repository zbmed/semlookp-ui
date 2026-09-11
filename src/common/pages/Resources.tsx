import { EuiButton, EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { ResourcesWidget } from "@ts4nfdi/terminology-service-suite";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { global_config, ts_specific_metadata } from "../../config";

const OLS4API = global_config.api_url;
export default function Resources() {
  const navigate = useNavigate();
  return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>List of All Resources in the Terminology Service</h2>
      </EuiText>
      <EuiSpacer />
      <ResourcesWidget
        api={OLS4API}
        onNavigate={(ontologyId) => {
          navigate(`/ontologies/${ontologyId}/`);
        }}
        parameter={ts_specific_metadata.collection}
        actions={[
          {
            render: (item) => (
              <EuiButton
                href={`/ontologies/${item.ontologyId}/?hierarchy=classes-hierarchy`}
                size={"s"}
              >
                Show classes
              </EuiButton>
            ),
          },
          {
            render: (item) => (
              <EuiButton
                href={`/ontologies/${item.ontologyId}/?hierarchy=properties-hierarchy`}
                size={"s"}
              >
                Show properties
              </EuiButton>
            ),
          },
          {
            render: (item) => (
              <EuiButton
                href={`/ontologies/${item.ontologyId}/?hierarchy=individuals-hierarchy`}
                size={"s"}
              >
                Show individuals
              </EuiButton>
            ),
          },
        ]}
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
