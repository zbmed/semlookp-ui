import { EuiPanel, EuiText } from "@elastic/eui";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { global_config } from "../../config";

export default (props: { file: string; title: string }) => {
  const [getTermsAndConditions, setTermsAndConditions] = useState<string>("");

  useEffect(() => {
    const grabTermsAndConditions = async (): Promise<void> => {
      const termsAndConditionsFile = await import(
        `../../markdown/${global_config.projectName}/${props.file}.md`
      );
      fetch(termsAndConditionsFile.default)
        .then((res) => res.text())
        .then((text) => setTermsAndConditions(text));
    };
    grabTermsAndConditions();
  }, [props.file]);

  return (
    <EuiPanel>
      <Helmet>
        <title>{props.title} - Terminology Service </title>
        <meta
          name="description"
          content={`${props.title} of the Terminology Service`}
        />
      </Helmet>
      <EuiText>
        <ReactMarkdown>{getTermsAndConditions}</ReactMarkdown>
      </EuiText>
    </EuiPanel>
  );
};
