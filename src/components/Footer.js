import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { EuiNavigationLink } from "./layout/util/EuiCustomLinks";
import { ReactComponent as DFGLOGO } from "./layout/logos/dfg_logo_schriftzug_blau_foerderung_en.svg";
import { ReactComponent as NFDI4HEALTHLOGO } from "./layout/logos/NFDI4Health_Logo_cmyk_RZ.svg";
import { ReactComponent as ZBMEDLOGO } from "./layout/logos/ZBMED_2017_DE.svg";
import { ts_specific_metadata } from "../config";
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
              <EuiLink href="mailto:semlookp-support@zbmed.de">Contact</EuiLink>{" "}
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
              Version: {"development version"}
              <p></p>
              Last update: {"September 26, 2024"}
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
            <a href={"https://www.dfg.de"} target={"_blank"} rel="noreferrer">
              <DFGLOGO height="110px" />
            </a>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <a
              href={"https://www.nfdi4health.de"}
              target={"_blank"}
              rel="noreferrer"
            >
              <NFDI4HEALTHLOGO height="110px" />
            </a>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <a href={"https://www.zbmed.de"} target={"_blank"} rel="noreferrer">
              <ZBMEDLOGO height="110px" />
            </a>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size-="xl" />
        <EuiFlexGroup justifyContent="spaceAround" gutterSize="xl">
          <EuiFlexItem grow={true}></EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText color="subdued" size="s">
              {ts_specific_metadata.funding_notice}
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={true}></EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size-="xl" />
      </EuiPanel>
    </>
  );
}
