import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle,
} from "@elastic/eui";
import { AutocompleteWidget } from "@ts4nfdi/terminology-service-suite";
import { useNavigate } from "react-router-dom";
import { global_config, ts_specific_metadata } from "../../config";
import EuiCustomLink from "../layout/util/EuiCustomLink";
import { SearchExamples } from "./SearchExamples";
import { navigateToEntity } from "./utils";

export const SearchBox = () => {
  const navigate = useNavigate();

  return (
    <EuiFlexGroup gutterSize={"s"}>
      <EuiFlexItem>
        <EuiPanel id="searchBox" hasShadow={true}>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiTitle size={"m"}>
                <EuiTextColor>Search</EuiTextColor>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem>
              <AutocompleteWidget
                api={global_config.api_url}
                placeholder={"Type to search"}
                selectionChangedEvent={(selectedOption) => {
                  navigateToEntity(selectedOption, navigate);
                }}
                parameter={
                  ts_specific_metadata.collection +
                  "&fieldList=description,label,iri,ontology_name,type,short_form"
                }
                allowCustomTerms={false}
                singleSelection={true}
                hasShortSelectedLabel={true}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <SearchExamples />
              <EuiSpacer size="m" />

              <EuiFlexGroup direction={"row"}>
                <EuiFlexItem>
                  <EuiText size="m">
                    Or use the advanced{" "}
                    <EuiCustomLink to="/search?q=*"> Search </EuiCustomLink>
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText size="m" textAlign="right">
                    <EuiCustomLink to="/resources">
                      Looking for a certain terminology?
                    </EuiCustomLink>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
