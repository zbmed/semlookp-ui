import React from "react";
import {
    EuiHeader,
    EuiHeaderLink,
    EuiHeaderLinks,
    EuiHeaderSection,
    EuiHeaderSectionItem,
    EuiIcon,
} from "@elastic/eui";
import EuiCustomLink from '../../router/EuiCustomLink';
import { ReactComponent as SEMLOOKPLOGO } from "../Logos/NFDI_SemLookP_Logo.svg";

export default function Header() {
  return (
    <EuiHeader>
      <EuiHeaderSection side="left">
        <EuiHeaderSectionItem border="right">
          <EuiCustomLink to="/">
            <EuiIcon type={SEMLOOKPLOGO} title="SemLookP" size="original" width="120px" />
          </EuiCustomLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiHeaderLinks>
            <EuiCustomLink to="/"><EuiHeaderLink>Home</EuiHeaderLink></EuiCustomLink>
            <EuiCustomLink to="/resources"><EuiHeaderLink>Resources</EuiHeaderLink></EuiCustomLink>
            <EuiCustomLink to="/about"><EuiHeaderLink>About</EuiHeaderLink></EuiCustomLink>
            <EuiCustomLink to="/projects"><EuiHeaderLink>Projects</EuiHeaderLink></EuiCustomLink>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}
