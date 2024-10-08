import { EuiFlexGroup, EuiFlexItem, EuiImage } from "@elastic/eui";
import { projectType, ts_specific_metadata } from "../../config";
import { logoMap } from "../logoMap";
import { Suspense, useEffect, useState } from "react";

const FooterLogosTemplate = () => {
  const [logos, setLogos] = useState({
    footerLogoA: null,
    footerLogoB: null,
    footerLogoC: null,
  });

  const projectName = projectType.projectName;
  const projectComponents = logoMap[projectName];

  useEffect(() => {
    if (projectComponents) {
      const loadLogos = async () => {
        const footerLogoA = await projectComponents.footerLogoA();
        const footerLogoB = await projectComponents.footerLogoB();
        const footerLogoC = await projectComponents.footerLogoC();

        setLogos({
          footerLogoA: footerLogoA.default,
          footerLogoB: footerLogoB.default,
          footerLogoC: footerLogoC.default,
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
      <EuiFlexGroup
        justifyContent="spaceAround"
        wrap={true}
        gutterSize="xl"
        responsive={true}
      >
        <EuiFlexItem grow={false}>
          <a
            href={ts_specific_metadata.homepage.footer_logo_A_url}
            target={"_blank"}
            rel="noreferrer"
          >
            <EuiImage alt={"FooterLogoA"} src={logos.footerLogoA} size={"l"} />
          </a>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <a
            href={ts_specific_metadata.homepage.footer_logo_B_url}
            target={"_blank"}
            rel="noreferrer"
          >
            <EuiImage alt={"FooterLogoB"} src={logos.footerLogoB} size={"m"} />
          </a>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <a
            href={ts_specific_metadata.homepage.footer_logo_C_url}
            target={"_blank"}
            rel="noreferrer"
          >
            <EuiImage alt={"FooterLogoC"} src={logos.footerLogoC} size={"m"} />
          </a>
        </EuiFlexItem>
      </EuiFlexGroup>
    </Suspense>
  );
};

export default FooterLogosTemplate;
