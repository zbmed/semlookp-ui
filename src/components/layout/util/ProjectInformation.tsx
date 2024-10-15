import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { global_config, ts_specific_metadata } from "../../../config";
export default () => {
  const [getTermsAndConditions, setTermsAndConditions] = useState<string>("");

  useEffect(() => {
    const file = ts_specific_metadata.homepage.project_intro_markdown_file;
    const grabTermsAndConditions = async (): Promise<void> => {
      const termsAndConditionsFile = await import(
        `../../../markdown/${global_config.projectName}/${file}.md`
      );
      await fetch(termsAndConditionsFile.default)
        .then((res) => res.text())
        .then((text) => setTermsAndConditions(text));
    };
    grabTermsAndConditions();
  }, []);
  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiPanel hasShadow={false} color="transparent">
            <EuiTitle>
              <h1> {ts_specific_metadata.homepage.project_intro_title} </h1>
            </EuiTitle>
            <EuiSpacer size="m" />
            <EuiFlexGroup>
              <EuiFlexItem grow={9}>
                <EuiText>
                  <ReactMarkdown>{getTermsAndConditions}</ReactMarkdown>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};
