import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import widgetimage from "./layout/logos/widgets-icons.png";

export const UsecaseCard2 = () => {
  const semlookpWidgetsDescription = (
    <>
      <EuiText>
        <EuiFlexGroup alignItems={"center"}>
          <EuiFlexItem grow={3}>
            <div style={{ textAlign: "center" }}>
              <EuiText>
                <i>
                  Small
                  <EuiLink
                    href={
                      "https://github.com/ts4nfdi/terminology-service-suite"
                    }
                  >
                    {" "}
                    GUI components{" "}
                  </EuiLink>
                  to use and display semantic information
                </i>
              </EuiText>
            </div>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiButton
                  onClick={() =>
                    window.location.assign(
                      "https://ts4nfdi.github.io/terminology-service-suite/comp/latest"
                    )
                  }
                >
                  Explore
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="s" />
      </EuiText>
      <EuiSpacer size={"s"} />
      <EuiImage
        size="original"
        hasShadow
        allowFullScreen={false}
        caption=""
        src={widgetimage}
        alt={"SemLookP Widgets Icons"}
      />
    </>
  );

  return (
    <EuiCard
      title="Terminology Service Suite"
      description={semlookpWidgetsDescription}
      // onClick={() => window.location.assign("https://github.com/nfdi4health/semlookp-widgets")}
      style={{ backgroundColor: "#D3DAE6", minHeight: 150 }}
      display="subdued"
    />
  );
};
