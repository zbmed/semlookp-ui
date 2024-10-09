import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import {
  idsnlogo,
  scailogo,
  ukelogo,
  dznelogo,
  bmbflogo,
} from "../../imports/ImageImport";

export default function IDSNDescription() {
  return (
    <div>
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
                  Neurodegeneration Research (IDSN) project was the development
                  of &quot;integrative data semantics&quot; to support
                  application-oriented systems biology for translational
                  neurodegenerative disease research. One of the outstanding
                  requirements was to link primary data from different model
                  systems and technology platforms with secondary data from
                  public databases and publications. For this purpose, semantic
                  layers were developed in IDSN that provide interpreted data
                  from the different systems. Furthermore, it was quite
                  important to also focus on the integration of clinical routine
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
                    href={"https://semanticlookup.zbmed.de/ols/www.bmbf.de"}
                    target="_blank"
                    external={false}
                  >
                    {" "}
                    German Federal Ministry of Education and Research (BMBF){" "}
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
                  , project number 031L0029 [A-C]. The project is supervised by
                  the &quot;Projektträger Jülich&quot; (PTJ).
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
                  <EuiImage alt={""} src={bmbflogo} size={"m"} />
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
    </div>
  );
}
