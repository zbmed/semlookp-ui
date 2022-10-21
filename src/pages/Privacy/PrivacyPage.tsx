import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLink, EuiPanel, EuiText } from "@elastic/eui";

export default function PrivacyPage() {
  return (
    <div>
      <EuiPanel>
        <EuiFlexGroup direction={'column'}>

          <EuiFlexItem>
            <EuiText>
              <h1>Privacy Declaration</h1>
            </EuiText>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiPanel>
              <EuiText>
                <p>
                  Gemäß Art. 13 Datenschutz-Grundverordnung (DSGVO) möchten wir Sie
                  im Folgenden über den Umgang mit Ihren Daten informieren:
                </p>
                <p>
                  <b>Verantwortlicher</b>
                  <br></br>
                  Verantwortliche Stelle im Sinne der DSGVO ist:<br></br>
                  Deutsche Zentralbibliothek für Medizin (ZB MED) -
                  Informationszentrum Lebenswissenschaften <br></br>
                  Gleueler Straße 60<br></br>
                  50931 Köln<br></br>
                  Tel.: <EuiLink href="tel:+49 221 478-5685">
                  +49 (0)221 478-5685</EuiLink>{" "}
                  (Infocenter)<br></br>
                  Email: <EuiLink href="mailto:info@zbmed.de">
                  info@zbmed.de</EuiLink>
                  <br></br>
                </p>

                <p>
                  <b>Kontaktdaten des Datenschutzbeauftragten</b>
                  <br></br>
                  Unseren Datenschutzbeauftragten erreichen Sie unter: <br></br>
                  <EuiLink href="mailto:Datenschutz@zbmed.de">
                    Datenschutz@zbmed.de
                  </EuiLink>{" "}
                  <br></br>
                  oder unserer Postadresse mit dem Zusatz „der
                  Datenschutzbeauftragte“.
                </p>
                <p>
                  <b>
                    Welche Daten werden bei Ihrem Besuch auf unserer Webseite
                    erhoben?{" "}
                  </b>
                  <br></br>
                  Wenn Sie unsere Webseiten besuchen, erheben wir Daten, die Ihr
                  Browser an unseren Server übermittelt und die für uns technisch
                  notwendig sind, um die Webseite anzuzeigen. Diese werden zu
                  statistischen Zwecken auf unseren Systemen temporär als Protokoll
                  ausgewertet, um die Stabilität und Sicherheit zu gewährleisten und
                  unser Produkt qualitativ zu verbessern. Der folgende Datensatz
                  wird dabei anonymisiert ausgewertet:
                </p>
                <ul>
                  <li>IP-Adresse,</li>
                  <li>Datum und Uhrzeit der Anfrage,</li>
                  <li>Inhalt der Anforderung (konkrete Seite),</li>
                  <li>Zugriffsstatus/HTTP-Statuscode,</li>
                  <li>jeweils übertragene Datenmenge.</li>
                </ul>
                <p>
                  <b>Speicherung des Datensatzes zu Sicherheitszwecken</b>
                  <br></br>
                  Die von Ihrem Webbrowser übermittelte IP-Adresse, das Datum und
                  Uhrzeit der Anfrage sowie Inhalt der Anforderung werden für die
                  Dauer von sieben Tagen gespeichert. Dies erfolgt streng
                  zweckgebunden um die Stabilität und Sicherheit der angebotenen
                  Services zu gewährleisten. Nach Ablauf der Frist löschen wir diese
                  Daten. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
                </p>
                <p>
                  <b>Ihre Rechte </b>
                  <br></br>
                  Als betroffene Person haben Sie bei der Verarbeitung Ihrer
                  personenbezogenen Daten nach der DSGVO folgende Rechte:
                </p>
                <ul>
                  <li>Auskunftsrecht (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>
                    Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                  </li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerrufsrecht (Art. 7 DSGVO)</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                  <li>
                    Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)
                  </li>
                </ul>

                <p>
                  <b>Datenschutz-Aufsichtsbehörde</b>
                  <br></br>
                  Landesbeauftragten für Datenschutz und Informationsfreiheit
                  Nordrhein-Westfalen<br></br>
                  Kavalleriestr. 2-4<br></br>
                  40213 Düsseldorf<br></br>
                  Telefon: <EuiLink href="tel:+49 211 384 240">
                  0211/38424-0</EuiLink>
                  <br></br>
                  Fax: <EuiLink href="fax:+49 211 384 241 0">
                  0211/38424-10</EuiLink>
                  <br></br>
                  E-Mail:{" "}
                  <EuiLink href="mailto:poststelle@ldi.nrw.de">
                    poststelle@ldi.nrw.de
                  </EuiLink>
                  <br></br>
                  Web:{" "}
                  <EuiLink href="https://www.ldi.nrw.de/index.php"
                     target="_blank">
                    www.ldi.nrw.de/index.php
                  </EuiLink>
                </p>
              </EuiText>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </div>

  );
}
