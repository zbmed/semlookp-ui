import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLink, EuiPanel, EuiText}
  from "@elastic/eui";
import { Helmet } from "react-helmet";

export default function ImprintPage() {
  return (
    <div>
      <EuiPanel>
        <EuiFlexGroup direction={'column'}>

          <EuiFlexItem>
            <EuiText>
              <h1>Legal Notice</h1>
            </EuiText>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiPanel>
              <EuiText>
                <p>
                  <b>Deutsche Zentralbibliothek für Medizin (ZB MED) -
                    Informationszentrum Lebenswissenschaften</b> <br></br>
                  Gleueler Straße 60<br></br>
                  50931 Köln<br></br>
                  Tel.: <EuiLink href="tel:+49 221 478-5685">
                  +49 (0)221 478-5685</EuiLink >{" "}
                  (Infocenter)<br></br>
                  Email: <EuiLink href="mailto:info@zbmed.de">
                  info@zbmed.de</EuiLink >
                  <br></br>
                  Stiftung des öffentlichen Rechts<br></br>
                  Gefördert durch das Ministerium für Kultur und Wissenschaft des
                  Landes Nordrhein-Westfalen und durch das Bundesministerium für
                  Gesundheit aufgrund eines Beschlusses des Deutschen
                  Bundestages.{" "}
                </p>
                <p>
                  <b>Vertretungsberechtigte Personen:</b>
                  <br></br>
                  Kaufmännische Geschäftsführerin:{" "}
                  <EuiLink href="mailto:Herrmann-Krotz@zbmed.de">
                    Gabriele Herrmann-Krotz
                  </EuiLink >
                  , Diplom-Volkswirtin<br></br>
                  Wissenschaftliche Leitung:{" "}
                  <EuiLink href="mailto:Rebholz-Schuhmann@zbmed.de">
                    Prof. Dr. Dietrich Rebholz-Schuhmann
                  </EuiLink >
                  <br></br>
                  Umsatzsteuer-Identifikationsnummer: DE123486783{" "}
                </p>
                <p>
                  <b>Zuständige Aufsichtsbehörde:</b>
                  <br></br>
                  Ministerium für Kultur und Wissenschaft des Landes
                  Nordrhein-Westfalen - MKW NRW<br></br>
                  Völklinger Straße 49<br></br>
                  40221 Düsseldorf<br></br>
                  Tel.: <EuiLink href="tel:+49 211 896 03">
                  +49 (0)211 896-03</EuiLink > /{" "}
                  -<EuiLink href="tel:+49 211 896 04">04</EuiLink >
                  <br></br>
                  Fax: <EuiLink href="fax:+49 211 896 455 5">
                  +49 (0)211 896-4555</EuiLink > und -
                  <EuiLink href="fax:+49 211 896 322 0">3220</EuiLink >{" "}
                </p>
              </EuiText>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <Helmet>
        <title> Legal Notice &gt; SemLookP </title>
        <meta
          name="description"
          content="Legal Notice of the semantic Lookup Service - SemLookP"
        />
      </Helmet>
    </div>
  );
}
