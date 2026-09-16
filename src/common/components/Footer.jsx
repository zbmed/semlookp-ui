import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { Suspense } from "react";
import { componentMap } from "../../componentMap";
import { global_config, ts_specific_metadata } from "../../config";
import { EuiNavigationLink } from "../layout/util/EuiCustomLinks";

export default function Footer() {
  const projectName = global_config.projectName;
  const projectComponents = componentMap[projectName];

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }

  const FooterLogos = componentMap[projectName]["FooterLogos"];

  return (
    <>
      <EuiPanel
        hasBorder={false}
        hasShadow={false}
        paddingSize="none"
        color="transparent"
        borderRadius="none"
      >
        <EuiSpacer size-="xl" />
        <EuiHorizontalRule size="half" />
        {ts_specific_metadata.footer.has_links && (
          <EuiFlexGroup justifyContent="spaceAround">
            <EuiFlexItem grow={false}>
              <EuiText color="subdued" size="s">
                <EuiLink
                  href={ts_specific_metadata.contact_mail_address_mailto}
                >
                  Contact
                </EuiLink>{" "}
                | <EuiNavigationLink to="/imprint">Imprint</EuiNavigationLink> |{" "}
                <EuiNavigationLink to="/privacy">Privacy</EuiNavigationLink>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
        {ts_specific_metadata.footer.has_version_update_info && (
          <EuiFlexGroup justifyContent="spaceAround">
            <EuiFlexItem grow={false}>
              {/*TODO get version and last update from API*/}
              <EuiText color="subdued" size="xs">
                Version: {ts_specific_metadata.footer.version}
                <p></p>
                Last update: {ts_specific_metadata.footer.last_update}
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
        <EuiSpacer />
        <Suspense fallback={<div>Loading...</div>}>
          {ts_specific_metadata.footer.has_logos && <FooterLogos />}
        </Suspense>
        <EuiSpacer size-="xl" />
        {ts_specific_metadata.footer.has_funding_notice && (
          <EuiFlexGroup justifyContent="spaceAround" gutterSize="xl">
            <EuiFlexItem grow={true}></EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiText color="subdued" size="s">
                {ts_specific_metadata.footer.funding_notice}
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={true}></EuiFlexItem>
          </EuiFlexGroup>
        )}
        <EuiSpacer size-="xl" />
      </EuiPanel>
    </>
  );
}
