import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { EuiPanel, EuiText } from "@elastic/eui";

export default (props: { file: string; title: string }) => {
  const [getTermsAndConditions, setTermsAndConditions] = useState<string>("");

  useEffect(() => {
    const grabTermsAndConditions = async (): Promise<void> => {
      const termsAndConditionsFile = await import(
        `../../markdown/${props.file}.md`
      );
      const termsAndConditionsContent = await fetch(
        termsAndConditionsFile.default
      )
        .then((res) => res.text())
        .then((text) => setTermsAndConditions(text));
    };
    grabTermsAndConditions();
  }, []);

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
