import { EuiPanel, EuiText } from "@elastic/eui";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { loadMarkdown } from "../../../componentMap";

export default (props: { file: string; title: string }) => {
  const [getTermsAndConditions, setTermsAndConditions] = useState<string>("");

  useEffect(() => {
    loadMarkdown(props.file).then((text) => setTermsAndConditions(text));
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
