import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTextColor,
  EuiTitle,
} from "@elastic/eui";
import { ReactComponent as LOGO } from "../components/layout/logos/NFDI4Health_Logo_cmyk_RZ.svg";
import { ts_specific_metadata } from "../config";

export const LogoBox = () => {
  return (
    <EuiFlexGroup direction={"column"} alignItems={"center"}>
      <EuiFlexItem grow={false}>
        <LOGO height="120px" width="auto" />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiTitle size="m">
          <h1 style={{ fontSize: "40px" }}>
            <EuiTextColor>
              {ts_specific_metadata.homepage.homepage_below_logo_text}
            </EuiTextColor>
          </h1>
        </EuiTitle>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
