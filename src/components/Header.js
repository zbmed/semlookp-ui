import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
} from "@elastic/eui";
import { Helmet } from "react-helmet";
import { ReactComponent as SEMLOOKPLOGO } from "./layout/logos/projects/NFDI_SemLookP_Logo.svg";
import { EuiCustomHeaderLink } from "./layout/util/EuiCustomLinks";

export const Header = () => {
  return (
    <EuiHeader
      position="fixed"
      style={{
        height: "60px",
        background: "#ffffff",
        borderTop: "2px solid #2DAADE",
        boxShadow: "0 6px 5px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <Helmet>
        <title> Terminology Service</title>
        <meta name="description" content="Terminology Service" />
      </Helmet>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <EuiCustomHeaderLink color="text" to="/" isActive={false}>
            <EuiIcon
              type={SEMLOOKPLOGO}
              title="SemLookP"
              size="original"
              width="120px"
            />
          </EuiCustomHeaderLink>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiCustomHeaderLink color="text" to="/">
            Home
          </EuiCustomHeaderLink>
          <EuiCustomHeaderLink to="/search?q=*">Search</EuiCustomHeaderLink>
          <EuiCustomHeaderLink to="/resources">Resources</EuiCustomHeaderLink>
          <EuiCustomHeaderLink to="/about">About</EuiCustomHeaderLink>
          <EuiCustomHeaderLink to="/projects">Projects</EuiCustomHeaderLink>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
};
