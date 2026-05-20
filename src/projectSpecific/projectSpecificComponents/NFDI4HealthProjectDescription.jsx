// health
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import { default as dfglogo } from "../../projectSpecificImages/dfg_logo.svg";
import { default as nfdi4healthlogo } from "../../projectSpecificImages/nfdi4health.png";

export default function NFDI4HealthProjectDescription() {
  return (
    <div>
      <EuiPanel>
        <EuiFlexGroup>
          <EuiFlexItem grow={8}>
            <EuiText>
              <h2 id="nfdi">
                NFDI4Health - National Research Data Infrastructure for Personal
                Health Data
              </h2>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={2}>
            <EuiLink
              href={"https://www.nfdi.de/?lang=en"}
              target="_blank"
              external={false}
            >
              <EuiImage
                alt={"NFDI4Health Logo"}
                src={nfdi4healthlogo}
                size={"m"}
              />
            </EuiLink>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiText>
          <h3>Summary</h3>
          <p>
            NFDI4Health - the National Research Data Infrastructure for Personal
            Health Data - deals with data generated in clinical trials,
            epidemiological and public health studies. The collection and
            analysis of these data on health and disease status and important
            factors influencing it are an essential component for the
            development of new therapies, comprehensive care approaches and
            preventive measures in a modern health care system. Although these
            data already meet high content quality standards, they often do not
            fulfil the requirements of the FAIR principles:{" "}
          </p>
          <ul>
            <li>
              {" "}
              The findability of data is often limited due to the lack of
              international standards for registration and publication.
            </li>
            <li>
              {" "}
              Possibilities for data use by third parties are usually unclear.
            </li>
            <li>
              {" "}
              Databases are often not interoperable, e.g. due to the great
              methodological heterogeneity in the recording of exposures and
              health endpoints.
            </li>
            <li>
              {" "}
              Furthermore, privacy requirements and informed consent of study
              participants restrict the reuse of data.
            </li>
          </ul>
          <EuiFlexGroup alignItems={"center"}>
            <EuiFlexItem grow={2}>
              <h3>Funding</h3>
              <p>
                The partners of the NFDI consortium NFDI4Health are funded by
                the
                <EuiLink
                  href={"https://www.dfg.de/en/index.jsp"}
                  target="_blank"
                  external={false}
                >
                  {" "}
                  German Research Foundation (DFG){" "}
                </EuiLink>
                within the framework of the &quot;Agreement between the Federal
                Government and the Länder Concerning the Establishment and
                Funding of a
                <EuiLink
                  href={"https://www.nfdi.de/?lang=en"}
                  target="_blank"
                  external={false}
                >
                  {" "}
                  National Research Data Infrastructure&quot;{" "}
                </EuiLink>{" "}
                of 26 November 2018. To coordinate the activities, the partners
                of NFDI4Health participate as far as possible as members in the
                National Research Data Infrastructure (NFDI) e. V. association
                and participate in the various bodies and other structures of
                the association in accordance with its statutes.
              </p>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink
                  href={"https://www.dfg.de/en/index.jsp"}
                  target="_blank"
                  external={false}
                >
                  <EuiImage alt={"DFG Logo"} src={dfglogo} size={"l"} />
                </EuiLink>
              </EuiFlexItem>
            </EuiFlexItem>
          </EuiFlexGroup>
          <h3>Further Information</h3>
          <ul>
            <li>
              <EuiLink
                href={"https://www.nfdi4health.de/en/"}
                target="_blank"
                external={false}
              >
                Website of the project
              </EuiLink>
            </li>
          </ul>
        </EuiText>
      </EuiPanel>
    </div>
  );
}
