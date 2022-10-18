import React from "react";
import { EuiFlexGroup, EuiLink, EuiPanel, EuiText } from "@elastic/eui";

export default function ProjectsPage() {
    return (
        <div>
            <EuiFlexGroup justifyContent="spaceAround">
                <EuiPanel paddingSize="l">
                    <EuiText>
                        <h1>Projects</h1>
                        <h2>NFDI4Health - National Research Data Infrastructure for Personal Health Data</h2>
                        <h3>Summary</h3>
                        <p>NFDI4Health - the National Research Data Infrastructure for Personal Health Data -
                            deals with data generated in clinical trials, epidemiological and public health
                            studies. The collection and analysis of these data on health and disease status and
                            important factors influencing it are an essential component for the development of
                            new therapies, comprehensive care approaches and preventive measures in a modern
                            health care system. Although these data already meet high content quality standards,
                            they often do not fulfil the requirements of the FAIR principles: </p>
                        <ul>
                            <li> The findability of data is often limited due to the lack of international
                                standards for registration and publication.
                            </li>
                            <li> Possibilities for data use by third parties are usually unclear.</li>
                            <li> Databases are often not interoperable, e.g. due to the great methodological
                                heterogeneity in the recording of exposures and health endpoints.
                            </li>
                            <li> Furthermore, privacy requirements and informed consent of study participants
                                restrict the reuse of data.
                            </li>
                        </ul>
                            <h3>Funding</h3>
                            <p>
                                The partners of the NFDI consortium NFDI4Health are funded by the
                                <EuiLink href={"https://www.dfg.de/en/index.jsp"}>German Research Foundation
                                    (DFG)</EuiLink>
                                within the framework of the “Agreement between the Federal Government and
                                the Länder Concerning the Establishment and Funding of a
                                <EuiLink href={"https://www.nfdi.de/?lang=en"}>National Research Data
                                    Infrastructure</EuiLink>
                                ” of 26 November 2018. To coordinate the activities, the partners of NFDI4Health
                                participate
                                as far
                                as possible as members in the National Research Data Infrastructure (NFDI) e. V.
                                association
                                and participate in the various bodies and other structures of the association in
                                accordance
                                with its statutes.
                            </p>
                            <h3>Further Information</h3>
                            <ul>
                                <li><EuiLink href={"https://www.nfdi4health.de/en/"}>Website of the project</EuiLink>
                                </li>
                            </ul>
                            <h2>
                                IDSN - Integrative Data Semantics in Neurodegeneration Research
                            </h2>
                            <h3>Summary</h3>
                            <p>The main goal of the Integrative Data Semantics in Neurodegeneration Research (IDSN)
                                project
                                was the development of &quot;integrative data semantics&quot; to support
                                application-oriented systems
                                biology for translational neurodegenerative disease research. One of the outstanding
                                requirements was to link primary data from different model systems and technology
                                platforms
                                with secondary data from public databases and publications. For this purpose, semantic
                                layers were developed in IDSN that provide interpreted data from the different systems.
                                Furthermore, it was quite important to also focus on the integration of clinical routine
                                data that is generated in our clinics daily.
                            </p>
                            <h3>Project Partners</h3>

                            <h3>Funding</h3>
                            <p>The project is funded by the
                                <EuiLink href={"https://semanticlookup.zbmed.de/ols/www.bmbf.de"}>German Federal
                                    Ministry of
                                    Education and Research (BMBF)</EuiLink>
                                as part
                                of the program
                                <EuiLink
                                    href={"https://www.bmbf.de/foerderungen/bekanntmachung.php?B=920"}> &quot;i:DSem –
                                    Integrative Datensemantik in der Systemmedizin&quot;</EuiLink>
                                , project number
                                031L0029 [A-C].
                                The project is supervised by the &quot;Projektträger Jülich&quot; (PTJ). </p>
                            <h3>Further Information</h3>
                            <ul>
                                <li><EuiLink href={"https://www.idsn.info/en/idsn.html"}>Website of the
                                    project</EuiLink>
                                </li>
                            </ul>
                        </EuiText>
                </EuiPanel>
            </EuiFlexGroup></div>

);
}
