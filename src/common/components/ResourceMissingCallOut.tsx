import { EuiCallOut, EuiFlexGroup, EuiFlexItem, EuiLink } from "@elastic/eui";
import { useTheme } from "@emotion/react";
import { ts_specific_metadata } from "../../config";

export const ResourceMissingCallOut = () => {
  const theme = useTheme();

  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiCallOut
          title={"Missing Resource?"}
          iconType="indexOpen"
          style={{
            backgroundColor: theme.color.missingResourceBoxColor,
          }}
        >
          <p>
            Please contact us via{" "}
            <EuiLink href={ts_specific_metadata.contact_mail_address_mailto}>
              {ts_specific_metadata.contact_mail_address}
            </EuiLink>
            .
          </p>
        </EuiCallOut>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
