import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiImage,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { EuiNavigationLink } from "./layout/util/EuiCustomLinks";
import { ts_specific_metadata } from "../config";
import { dfglogo, nfdi4healthlogo, zbmedlogo } from "../imports/ImageImport";

export default function Footer() {
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
        <EuiFlexGroup justifyContent="spaceAround">
          <EuiFlexItem grow={true}></EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText color="subdued" size="s">
              <EuiLink href={ts_specific_metadata.contact_mail_address_mailto}>
                Contact
              </EuiLink>{" "}
              | <EuiNavigationLink to="/about/api">API</EuiNavigationLink> |{" "}
              <EuiNavigationLink to="/imprint">Imprint</EuiNavigationLink> |{" "}
              <EuiNavigationLink to="/privacy">Privacy</EuiNavigationLink>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={true}></EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup justifyContent="spaceAround">
          <EuiFlexItem grow={true}></EuiFlexItem>
          <EuiFlexItem grow={false}>
            {/*TODO get version and last update from API*/}
            <EuiText color="subdued" size="xs">
              Version: {ts_specific_metadata.homepage.version}
              <p></p>
              Last update: {ts_specific_metadata.homepage.last_update}
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={true}></EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiFlexGroup
          justifyContent="spaceAround"
          wrap={true}
          gutterSize="xl"
          responsive={true}
        >
          <EuiFlexItem grow={false}>
            <a
              href={ts_specific_metadata.homepage.footer_logo_1_url}
              target={"_blank"}
              rel="noreferrer"
            >
              <EuiImage alt={""} src={dfglogo} size={"l"} />
            </a>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <a
              href={ts_specific_metadata.homepage.footer_logo_2_url}
              target={"_blank"}
              rel="noreferrer"
            >
              <EuiImage alt={""} src={nfdi4healthlogo} size={"m"} />
            </a>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <a
              href={ts_specific_metadata.homepage.footer_logo_3_url}
              target={"_blank"}
              rel="noreferrer"
            >
              <EuiImage alt={""} src={zbmedlogo} size={"m"} />
            </a>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size-="xl" />
        <EuiFlexGroup justifyContent="spaceAround" gutterSize="xl">
          <EuiFlexItem grow={true}></EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText color="subdued" size="s">
              {ts_specific_metadata.homepage.funding_notice}
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={true}></EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size-="xl" />
      </EuiPanel>
    </>
  );
}
