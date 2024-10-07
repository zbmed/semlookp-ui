import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import EuiCustomLink from "./layout/util/EuiCustomLink";
import widgetimage from "./layout/logos/projects/widgets-icons.png";

export const infoBoxDescription1 = () => {
  return (
    <>
      <EuiText>
        <EuiLink href={"https://google.com"}> Some Institutions </EuiLink>
        Service <br></br>
        <EuiSpacer size="s" />
        <EuiLink href="https://google.com">
          <EuiImage
            size="s"
            alt="Placeholder"
            src="https://www.svgrepo.com/download/488322/picture.svg"
          />
        </EuiLink>
        <br></br>
        <EuiSpacer size="s" />
        <i>Short service description</i>
        <br></br>
        <EuiSpacer size="s" />
        <div style={{ textAlign: "center" }}>
          Long service description with
          <EuiCustomLink to={"/about/api"}> internal Links</EuiCustomLink> or
          <EuiLink href={"https://google.com"}> external Links </EuiLink>
        </div>
      </EuiText>
    </>
  );
};

export const infoBoxDescription2 = () => {
  return (
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
        src={widgetimage}
        alt={"SemLookP Widgets Icons"}
      />
    </>
  );
};
