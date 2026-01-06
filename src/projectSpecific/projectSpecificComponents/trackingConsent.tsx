// health
import {
  EuiButton,
  EuiLink,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiText,
} from "@elastic/eui";

export const CONSENT_KEY = "user_tracking_consent";

interface TrackingConsentProps {
  onConsentChange?: (consent: "accepted" | "declined") => void;
}

export default function TrackingConsentFormComponent({
  onConsentChange,
}: TrackingConsentProps) {
  return (
    <EuiOverlayMask>
      <EuiModal
        onClose={() => onConsentChange("accepted")}
        maxWidth={600}
        style={{ textAlign: "left" }}
      >
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            Before you use NFDI4Health Terminology Service
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          <EuiText>
            <p>
              We use cookies and tracking technologies to improve your
              experience on our website. By clicking <b>“Accept”</b>, you agree
              to our use of tracking for analytics and performance purposes.
            </p>
            <ul>
              <li>Understand how the app is used</li>
              <li>Measure performance and detect issues</li>
              <li>Continuously improve functionality</li>
            </ul>
            <p>
              We do <b>not</b> use tracking for advertising or sell your data.
              For further information please read our{" "}
              <EuiLink href="https://www.zbmed.de/en/privacy-policy">
                Privacy Policy
              </EuiLink>
              .
            </p>
          </EuiText>
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButton color="danger" onClick={() => onConsentChange("declined")}>
            Decline
          </EuiButton>
          <EuiButton fill onClick={() => onConsentChange("accepted")}>
            Accept
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    </EuiOverlayMask>
  );
}
