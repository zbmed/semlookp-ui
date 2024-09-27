import { EuiCallOut, EuiFlexGroup, EuiFlexItem, EuiLink } from "@elastic/eui";
import { ts_specific_metadata } from "../config";
export const ResourceMissingCallOut = () => {
  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiCallOut
          title={"Missing Resource?"}
          iconType="indexOpen"
          style={{
            backgroundColor: ts_specific_metadata.missing_resource_box_color,
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
