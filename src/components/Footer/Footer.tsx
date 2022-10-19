import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiText, EuiLink, EuiSpacer, EuiHorizontalRule } from "@elastic/eui";
import { ReactComponent as DfgLogo } from "../Logos/dfg_logo_schriftzug_blau_foerderung_en.svg";
import { ReactComponent as NfdiLogo } from "../Logos/NFDI4Health_Logo_cmyk_RZ.svg";
import { ReactComponent as ZbmedLogo } from "../Logos/ZBMED_2017_DE.svg";
import EuiCustomLink from '../../router/EuiCustomLink';

export default function Footer() {
  return (
      <div>
        <EuiSpacer size="xl" />
        <EuiHorizontalRule size="half" />
        <EuiFlexGroup justifyContent="spaceAround">
          <EuiFlexItem grow={false}>
            <EuiText color="subdued" size="s">
              <EuiLink href="mailto:semlookp-support@zbmed.de">Contact</EuiLink> |{" "}
              <EuiCustomLink to="/imprint">Legal Notice</EuiCustomLink> |{" "}
              <EuiCustomLink to="/privacy">Privacy Declaration</EuiCustomLink>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup justifyContent="spaceAround">
          {/*TODO get version and last update from API*/}
          <EuiFlexItem grow={false}>
            <EuiText color="subdued" size="xs">
              Version: {"development version"}
              <p></p>
              Last Update: {"October 06, 2022"}
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup justifyContent="spaceAround" gutterSize="xl">
          <EuiFlexItem grow={true}></EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLink target="_blank" href="https://www.dfg.de/" external={false}>
              <DfgLogo width="auto" height="100px"/>
            </EuiLink>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLink target="_blank" href="https://www.nfdi4health.de/en/" external={false}>
              <NfdiLogo width="auto" height="100px"/>
            </EuiLink>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLink target="_blank" href="https://zbmed.de/" external={false}>
              <ZbmedLogo width="auto" height="100px"/>
            </EuiLink>
          </EuiFlexItem>
          <EuiFlexItem grow={true}></EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="xl" />
        <EuiFlexGroup justifyContent="spaceAround" gutterSize="xl">
          <EuiFlexItem grow={false}>
            <EuiText color="subdued" size="s">
              This service is developed in the project Placeholder. (Project identifier 0123456789).
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
  );
}
