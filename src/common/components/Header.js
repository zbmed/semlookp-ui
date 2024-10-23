import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon,
} from "@elastic/eui";
import { useTheme } from "@emotion/react";
import { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { global_config, ts_specific_metadata } from "../../config";
import { imageMap } from "../../imageMap";
import { EuiCustomHeaderLink } from "../layout/util/EuiCustomLinks";

export const Header = () => {
  const theme = useTheme();
  const [logos, setLogos] = useState({
    logo: null,
  });

  const projectComponents = imageMap[global_config.projectName];

  useEffect(() => {
    if (projectComponents) {
      const loadLogos = async () => {
        const logo = await projectComponents.headerLogo();

        setLogos({
          logo: logo.default,
        });
      };

      loadLogos();
    }
  }, [projectComponents]);

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EuiHeader
        position="fixed"
        style={{
          height: "60px",
          background: theme.color.headerBackground,
          borderTop: `2px solid ${theme.color.headerBorderTop}`,
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
                type={logos.logo}
                title="Header Logo"
                size={theme.shape.headerLogoSize}
                width={theme.shape.headerLogoWidth}
              />
            </EuiCustomHeaderLink>
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem>
            {ts_specific_metadata.header.tabs.map((tab, index) => (
              <EuiCustomHeaderLink key={index} to={tab.source}>
                {tab.name}
              </EuiCustomHeaderLink>
            ))}
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
    </Suspense>
  );
};
