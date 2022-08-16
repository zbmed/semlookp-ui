import React from "react";
import { useSearchParams } from "react-router-dom";
import { DescriptionWidget } from "@km/widgets-semlookp";
import { IriWidget } from "@km/widgets-semlookp";
import { TermWidget } from "@km/widgets-semlookp";
import { OntologyHierarchyWidget } from "@km/widgets-semlookp";
import { AlternativeNameTabWidget } from "@km/widgets-semlookp";
import { CrossRefTabWidget } from "@km/widgets-semlookp";
import { MetadataWidget } from "@km/widgets-semlookp";
import "./Term.css";

export default function Term() {

  const [searchParam, setSearchParams] = useSearchParams();

  return (
    <div className="pageDiv">
      <div>
        <div className="wrapperDiv">
          <div id="termDiv">
            <TermWidget
              iri={searchParam.get("iri")}
              api={"https://semanticlookup.zbmed.de/ols/api/"}
            />
          </div>
        </div>

        <div className="iri">
          <IriWidget
            iri={searchParam.get("iri")}
            api={"https://semanticlookup.zbmed.de/ols/api/"}
          />
        </div>
      </div>
      <div>
        <DescriptionWidget
          iri={searchParam.get("iri")}
          api={"https://semanticlookup.zbmed.de/ols/api/"}
        />
      </div>

      <OntologyHierarchyWidget
        iri={searchParam.get("iri")}
        api={"https://semanticlookup.zbmed.de/ols/api/"}
      />

      <div style={{ margin: "10px", width: "fit-content" }}>
        <h2>Alternative Names</h2>
        <AlternativeNameTabWidget
          iri={searchParam.get("iri")}
          api={"https://semanticlookup.zbmed.de/ols/api/"}
        />
      </div>

      <div style={{ margin: "10px", width: "fit-content" }}>
        <h2>CrossRef</h2>
        <CrossRefTabWidget
          iri={searchParam.get("iri")}
          api={"https://semanticlookup.zbmed.de/ols/api/"}
        />
      </div>

      <div
        style={{
          padding: "10px",
          borderStyle: "solid",
          borderRadius: "5px",
          width: "fit-content",
        }}
      >
        <MetadataWidget
          iri={searchParam.get("iri")}
          api={"https://semanticlookup.zbmed.de/ols/api/"}
        />
      </div>
    </div>
  );
}
