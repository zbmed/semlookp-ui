import { EuiFlexItem, EuiText } from "@elastic/eui";
import EuiCustomLink from "./layout/util/EuiCustomLink";
import { ts_specific_metadata } from "../config";
export const SearchExamples = () => {
  return (
    <EuiFlexItem>
      <EuiText size="m">
        Examples:{" "}
        <EuiCustomLink to={ts_specific_metadata.search.search_example_link1}>
          {ts_specific_metadata.search.search_example_text1}
        </EuiCustomLink>
        ,{" "}
        <EuiCustomLink to={ts_specific_metadata.search.search_example_link2}>
          {ts_specific_metadata.search.search_example_text2}
        </EuiCustomLink>
        ,{" "}
        <EuiCustomLink to={ts_specific_metadata.search.search_example_link3}>
          {ts_specific_metadata.search.search_example_text3}
        </EuiCustomLink>
      </EuiText>
    </EuiFlexItem>
  );
};
