import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";
import "../index.css";
import { Helmet } from "react-helmet";
import { DataContentWidget } from "@ts4nfdi/terminology-service-suite";
import { global_config, ts_specific_metadata } from "../config";
import ProjectInformation from "../components/layout/util/ProjectInformation";
import { ResourceMissingCallOut } from "../components/ResourceMissingCallOut";
import { UsecaseCard1 } from "../components/UsecaseCard1";
import { UsecaseCard2 } from "../components/UsecaseCard2";
import { SearchBox } from "../components/SearchBox";
import { LogoBox } from "../components/LogoBox";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{ts_specific_metadata.homepage.homepage_helmet_text}</title>
      </Helmet>
      <EuiSpacer size="xxl" />

      <LogoBox />
      <EuiSpacer size="xxl" />
      <EuiSpacer size="xxl" />

      <SearchBox />
      <EuiSpacer size="xxl" />

      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <DataContentWidget
            api={global_config.api_url}
            parameter={ts_specific_metadata.collection}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />

      <ResourceMissingCallOut />
      <EuiSpacer size="xxl" />

      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <UsecaseCard1 />
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <UsecaseCard2 />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />

      <ProjectInformation />
    </>
  );
}
