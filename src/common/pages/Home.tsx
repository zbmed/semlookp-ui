import {
  EuiCallOut,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
} from "@elastic/eui";
import { DataContentWidget } from "@ts4nfdi/terminology-service-suite";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { componentMap } from "../../componentMap";
import { global_config, ts_specific_metadata } from "../../config";
import "../../index.css";
import { InfoBoxes } from "../components/InfoBoxes";
import { ResourceMissingCallOut } from "../components/ResourceMissingCallOut";
import { SearchBox } from "../components/SearchBox";
import ProjectInformation from "../layout/util/ProjectInformation";

export default function Home() {
  const projectComponents = componentMap[global_config.projectName];

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }

  const LogoBox = componentMap[global_config.projectName]["LogoBox"];

  return (
    <>
      <Helmet>
        <title>{ts_specific_metadata.homepage.homepage_helmet_text}</title>
      </Helmet>
      <EuiSpacer size="xxl" />

      <EuiCallOut
        title={"Welcome to the new terminology service user interface!"}
      >
        <p>
          The old user interface is still available at{" "}
          <EuiLink href={"https://ols3-semanticlookup.zbmed.de/"}>
            https://ols3-semanticlookup.zbmed.de/
          </EuiLink>{" "}
          and the OLS3 API can be accessed at{" "}
          <EuiLink href={"https://ols3-semanticlookup.zbmed.de/ols/api"}>
            https://ols3-semanticlookup.zbmed.de/ols/api.
          </EuiLink>
        </p>
      </EuiCallOut>

      <Suspense fallback={<div>Loading...</div>}>
        {ts_specific_metadata.homepage.has_logo && <LogoBox />}
      </Suspense>
      <EuiSpacer size="xxl" />
      <EuiSpacer size="xxl" />

      <EuiFlexGroup>
        <EuiFlexItem grow={7}>
          <SearchBox />
        </EuiFlexItem>
        {ts_specific_metadata.homepage.has_data_content && (
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

      {ts_specific_metadata.homepage.has_missing_resource_callout && (
        <>
          <ResourceMissingCallOut />
          <EuiSpacer size="xxl" />
        </>
      )}

      {ts_specific_metadata.homepage.has_info_boxes && (
        <>
          <InfoBoxes />
          <EuiSpacer size="xxl" />
        </>
      )}

      {ts_specific_metadata.homepage.has_project_intro && (
        <>
          <ProjectInformation />
        </>
      )}
    </>
  );
}
