import React from "react";
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
  EuiHeaderLink,
  EuiHeaderLinks,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import { ReactComponent as SEMLOOKPLOGO } from "../Logos/NFDI_SemLookP_Logo.svg";

export default function Header() {
  return (
    <EuiHeader>
      <EuiHeaderSection side="left">
        <EuiHeaderSectionItem border="right">
          <Link to="/">
            <EuiIcon type={SEMLOOKPLOGO} title="SemLookP" size="original" width="120px" />
          </Link>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiHeaderLinks>
            {/* TODO Remove /dev for production */}
            <EuiHeaderLink href="/dev/">Home</EuiHeaderLink>
            <EuiHeaderLink href="/dev/resources">Resources</EuiHeaderLink>
            <EuiHeaderLink href="/dev/about">About</EuiHeaderLink>
            <EuiHeaderLink href="/dev/sample">Sample</EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}