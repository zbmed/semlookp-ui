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
            <Link to="/"><EuiHeaderLink>Home</EuiHeaderLink></Link>
            <Link to="/resources"><EuiHeaderLink>Resources</EuiHeaderLink></Link>
            <Link to="/about"><EuiHeaderLink>About</EuiHeaderLink></Link>
            <Link to="/sample"><EuiHeaderLink>Sample</EuiHeaderLink></Link>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
}