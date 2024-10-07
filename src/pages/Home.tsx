import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";
import "../index.css";
import { Helmet } from "react-helmet";
import { DataContentWidget } from "@ts4nfdi/terminology-service-suite";
import { global_config, ts_specific_metadata } from "../config";
import ProjectInformation from "../components/layout/util/ProjectInformation";
import { ResourceMissingCallOut } from "../components/ResourceMissingCallOut";
import { SearchBox } from "../components/SearchBox";
import { LogoBox } from "../components/LogoBox";
import { InfoBoxes } from "../components/InfoBoxes";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{ts_specific_metadata.homepage.homepage_helmet_text}</title>
      </Helmet>
      <EuiSpacer size="xxl" />

      {ts_specific_metadata.homepage.show_logo && <LogoBox />}
      <EuiSpacer size="xxl" />
      <EuiSpacer size="xxl" />

      <EuiFlexGroup>
        <EuiFlexItem grow={7}>
          <SearchBox />
        </EuiFlexItem>
        {ts_specific_metadata.homepage.show_data_content && (
          <>
            <EuiFlexItem grow={3}>
              <DataContentWidget
                api={global_config.api_url}
                parameter={ts_specific_metadata.collection}
              />
            </EuiFlexItem>
          </>
        )}
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />

      {ts_specific_metadata.homepage.show_missing_resource_callout && (
        <>
          <ResourceMissingCallOut />
          <EuiSpacer size="xxl" />
        </>
      )}

      {ts_specific_metadata.homepage.show_info_boxes && (
        <>
          <InfoBoxes />
          <EuiSpacer size="xxl" />
        </>
      )}

      {ts_specific_metadata.homepage.show_project_information && (
        <>
          <ProjectInformation />
        </>
      )}
    </>
  );
}
