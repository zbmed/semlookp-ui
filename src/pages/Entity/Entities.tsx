import React from "react";
import { EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { Helmet } from "react-helmet";
import { EntityListWidget } from "@km/widgets-semlookp";
import { useParams } from 'react-router-dom'

export default function Entities() {
    const routeParams = useParams();

    return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>{"List of all entities of " + routeParams.ontologyId + " in the Terminology Service"}</h2>
      </EuiText>
      <EuiSpacer />
      <EntityListWidget
        api="https://semanticlookup.zbmed.de/api/"
        targetLink="https://semanticlookup.zbmed.de/dev/"
        frontend={"nfdi4health"}
        ontologyId={routeParams.ontologyId}
        entityType={routeParams.entitiesType}
      />
      <Helmet>
        <title> Entities &gt; SemLookP </title>
        <meta
          name="description"
          content="List of All Entities in the Terminology Service - SemLookP"
        />
      </Helmet>
    </EuiPanel>
  );
}
