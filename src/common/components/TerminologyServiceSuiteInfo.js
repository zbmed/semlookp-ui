import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useEffect, useState } from "react";
import { global_config } from "../../config";
import { imageMap } from "../../imageMap";

export default function TerminologyServiceSuiteInfo() {
  const [logos, setLogos] = useState({
    logo: null,
  });

  const projectComponents = imageMap[global_config.projectName];

  useEffect(() => {
    if (projectComponents) {
      const loadLogos = async () => {
        const logo = await projectComponents.ts4nfdiLogo();

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
  const description = (
    <>
      <EuiFlexGroup alignItems={"center"} justifyContent={"spaceBetween"}>
        <EuiFlexItem grow={false}>
          <EuiTitle size={"l"}>
            <h1>Terminology Service Suite (TSS)</h1>
          </EuiTitle>
          <EuiSpacer size={"s"} />
          <EuiText>
            Small software applications, called widgets, allow the integration
            of extracted user interface functionalities into other services,
            streamlining the development of user interfaces and the integration
            and linking of semantic information.This Terminology Service is
            build upon those widgets. For more information visit the{" "}
            <EuiLink
              href={
                "https://ts4nfdi.github.io/terminology-service-suite/comp/latest/?path=/docs/overview--docs"
              }
            >
              {" "}
              TSS documentation
            </EuiLink>
            .
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiImage size="l" src={logos.logo} alt={"TSS"} />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );

  return (
    <EuiCard
      title=""
      description={description}
      style={{ backgroundColor: "#86d3eb" }}
      textAlign={"left"}
    />
  );
}
