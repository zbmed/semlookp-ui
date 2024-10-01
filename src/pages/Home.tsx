import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";
import "../index.css";
import { Helmet } from "react-helmet";
import { DataContentWidget } from "@ts4nfdi/terminology-service-suite";
import { global_config, ts_specific_metadata } from "../config";
import ProjectInformation from "../components/layout/util/ProjectInformation";
import { ResourceMissingCallOut } from "../components/ResourceMissingCallOut";
import { SearchBox } from "../components/SearchBox";
import { LogoBox } from "../components/LogoBox";
import {
  useCase1Description,
  useCase2Description,
} from "../components/UseCaseDescriptions";
import { useTheme } from "@emotion/react";

export default function Home() {
  const theme = useTheme();
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
          <EuiCard
            title="Use Case"
            description={useCase1Description()}
            style={{
              backgroundColor: theme.color.useCaseCard1Color,
              minHeight: 150,
            }}
            display="subdued"
          />
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiCard
            title="Terminology Service Suite"
            description={useCase2Description()}
            style={{
              backgroundColor: theme.color.useCaseCard2Color,
              minHeight: 150,
            }}
            display="subdued"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />

      <ProjectInformation />
    </>
  );
}
