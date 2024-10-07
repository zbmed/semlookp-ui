import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiTextColor,
  EuiTitle,
} from "@elastic/eui";
import { ts_specific_metadata } from "../config";
import { homepageLogo } from "../imports/ImageImport";

export const LogoBox = () => {
  return (
    <>
      <EuiFlexGroup direction={"column"} alignItems={"center"}>
        <EuiFlexItem grow={false} style={{ marginBottom: "-40px" }}>
          <EuiImage size="l" alt="homepagelogo" src={homepageLogo} />
        </EuiFlexItem>
        {ts_specific_metadata.homepage.show_text_below_logo && (
          <EuiFlexItem grow={false}>
            <EuiTitle size="m">
              <h1 style={{ fontSize: "40px" }}>
                <EuiTextColor>
                  {ts_specific_metadata.homepage.text_below_logo}
                </EuiTextColor>
              </h1>
            </EuiTitle>
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    </>
  );
};
