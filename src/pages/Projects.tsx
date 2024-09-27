import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { ReactComponent as DFGLOGO } from "../components/layout/logos/dfg_logo_schriftzug_blau_foerderung_en.svg";
import { ReactComponent as BMBFLOGO } from "../components/layout/logos/BMBF_Logo.svg";
import {
  dznelogo,
  idsnlogo,
  nfdi4health,
  scailogo,
  ukelogo,
} from "../imports/ImageImport";
import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <div>
      <EuiPanel>
        <EuiFlexGroup direction={"column"}>
          <EuiFlexItem>
            <EuiText>
              <h1>Projects</h1>
            </EuiText>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiPanel>
              <EuiFlexGroup>
                <EuiFlexItem grow={8}>
                  <EuiText>
                    <h2 id="nfdi">
                      NFDI4Health - National Research Data Infrastructure for
                      Personal Health Data
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
                      src={nfdi4health}
                      size={"m"}
                    />
                  </EuiLink>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiText>
                <h3>Summary</h3>
                <p>
                  NFDI4Health - the National Research Data Infrastructure for
                  Personal Health Data - deals with data generated in clinical
                  trials, epidemiological and public health studies. The
                  collection and analysis of these data on health and disease
                  status and important factors influencing it are an essential
                  component for the development of new therapies, comprehensive
                  care approaches and preventive measures in a modern health
                  care system. Although these data already meet high content
                  quality standards, they often do not fulfil the requirements
                  of the FAIR principles:{" "}
                </p>
                <ul>
                  <li>
                    {" "}
                    The findability of data is often limited due to the lack of
                    international standards for registration and publication.
                  </li>
                  <li>
                    {" "}
                    Possibilities for data use by third parties are usually
                    unclear.
                  </li>
                  <li>
                    {" "}
                    Databases are often not interoperable, e.g. due to the great
                    methodological heterogeneity in the recording of exposures
                    and health endpoints.
                  </li>
                  <li>
                    {" "}
                    Furthermore, privacy requirements and informed consent of
                    study participants restrict the reuse of data.
                  </li>
                </ul>
                <EuiFlexGroup>
                  <EuiFlexItem grow={8}>
                    <h3>Funding</h3>
                    <p>
                      The partners of the NFDI consortium NFDI4Health are funded
                      by the
                      <EuiLink
                        href={"https://www.dfg.de/en/index.jsp"}
                        target="_blank"
                        external={false}
                      >
                        {" "}
                        German Research Foundation (DFG){" "}
                      </EuiLink>
                      within the framework of the &quot;Agreement between the
                      Federal Government and the Länder Concerning the
                      Establishment and Funding of a
                      <EuiLink
                        href={"https://www.nfdi.de/?lang=en"}
                        target="_blank"
                        external={false}
                      >
                        {" "}
                        National Research Data Infrastructure&quot;{" "}
                      </EuiLink>{" "}
                      of 26 November 2018. To coordinate the activities, the
                      partners of NFDI4Health participate as far as possible as
                      members in the National Research Data Infrastructure
                      (NFDI) e. V. association and participate in the various
                      bodies and other structures of the association in
                      accordance with its statutes.
                    </p>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiFlexItem grow={2}>
                      <EuiLink
                        href={"https://www.dfg.de/en/index.jsp"}
                        target="_blank"
                        external={false}
                      >
                        <DFGLOGO height={"50px"} />
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
          </EuiFlexItem>

          <EuiSpacer />

          <EuiFlexItem>
            <EuiPanel>
              <EuiFlexItem>
                <EuiFlexGroup>
                  <EuiFlexItem grow={8}>
                    <EuiText>
                      <h2 id="idsn">
                        IDSN - Integrative Data Semantics in Neurodegeneration
                        Research
                      </h2>
                      <h3>Summary</h3>
                      <p>
                        The main goal of the Integrative Data Semantics in
                        Neurodegeneration Research (IDSN) project was the
                        development of &quot;integrative data semantics&quot; to
                        support application-oriented systems biology for
                        translational neurodegenerative disease research. One of
                        the outstanding requirements was to link primary data
                        from different model systems and technology platforms
                        with secondary data from public databases and
                        publications. For this purpose, semantic layers were
                        developed in IDSN that provide interpreted data from the
                        different systems. Furthermore, it was quite important
                        to also focus on the integration of clinical routine
                        data that is generated in our clinics daily.
                      </p>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem grow={2}>
                    <EuiLink
                      href={"https://www.idsn.info/en/idsn.html"}
                      target="_blank"
                      external={false}
                    >
                      <EuiImage alt={""} src={idsnlogo} size={"m"} />
                    </EuiLink>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiSpacer />
              <EuiFlexItem>
                <EuiText>
                  <h3>Project Partners</h3>
                  <EuiFlexGroup>
                    <EuiFlexItem>
                      <EuiLink
                        href={"https://www.scai.fraunhofer.de/en.html"}
                        target="_blank"
                        external={false}
                      >
                        <EuiImage alt={""} src={scailogo} size={"m"} />
                      </EuiLink>
                    </EuiFlexItem>
                    <EuiFlexItem>
                      <EuiLink
                        href={"https://www.uke.de/english/index.html"}
                        target="_blank"
                        external={false}
                      >
                        <EuiImage alt={""} src={ukelogo} size={"s"} />
                      </EuiLink>
                    </EuiFlexItem>
                    <EuiFlexItem>
                      <EuiLink
                        href={"https://www.dzne.de/en/"}
                        target="_blank"
                        external={false}
                      >
                        <EuiImage alt={""} src={dznelogo} size={"m"} />
                      </EuiLink>
                    </EuiFlexItem>
                  </EuiFlexGroup>

                  <EuiSpacer />

                  <EuiFlexGroup>
                    <EuiFlexItem grow={8}>
                      <h3>Funding</h3>
                      <p>
                        The project is funded by the
                        <EuiLink
                          href={
                            "https://semanticlookup.zbmed.de/ols/www.bmbf.de"
                          }
                          target="_blank"
                          external={false}
                        >
                          {" "}
                          German Federal Ministry of Education and Research
                          (BMBF){" "}
                        </EuiLink>
                        as part of the program
                        <EuiLink
                          href={
                            "https://www.bmbf.de/foerderungen/bekanntmachung.php?B=920"
                          }
                          target="_blank"
                          external={false}
                        >
                          {" "}
                          &quot;i:DSem – Integrative Datensemantik in der
                          Systemmedizin&quot;{" "}
                        </EuiLink>
                        , project number 031L0029 [A-C]. The project is
                        supervised by the &quot;Projektträger Jülich&quot;
                        (PTJ).
                      </p>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiLink
                        href={
                          "https://www.bmbf.de/foerderungen/bekanntmachung-920.html"
                        }
                        target="_blank"
                        external={false}
                      >
                        <BMBFLOGO height={"100px"} />
                      </EuiLink>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                  <h3>Further Information</h3>
                  <ul>
                    <li>
                      <EuiLink
                        href={"https://www.idsn.info/en/idsn.html"}
                        target="_blank"
                        external={false}
                      >
                        Website of the project
                      </EuiLink>
                    </li>
                  </ul>
                </EuiText>
              </EuiFlexItem>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <Helmet>
        <title> Projects &gt; SemLookP </title>
        <meta
          name="description"
          content="Projects which integrates the Terminology Service - SemLookP"
        />
      </Helmet>
    </div>
  );
}
