import React from "react";
import { ResourcesWidget } from "@km/widgets-semlookp";
import { EuiButton, EuiButtonIcon, EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { Helmet } from "react-helmet";
import { OlsResource } from '@km/widgets-semlookp/dist/esm/types/components/widgets/ResourcesWidget/ResourcesWidget'

export default function Resources() {

    const actions = [
    // TODO Allow usage of react-router links
    {
      render: (item: OlsResource) => (
        <EuiButtonIcon
          href="" // TODO Add working link
          iconType="search"
          aria-label="Search"
        />
      ),
    },
    {
      render: (item: OlsResource) => (
        <EuiButton href={"./ontologies/" + item.ontologyId + "/terms/var"} size="s">
          Show terms
        </EuiButton>
      ),
    },
    {
      render: (item: OlsResource) => (
        <EuiButton href={"./ontologies/" + item.ontologyId + "/properties/var"} size="s">
          Show properties
        </EuiButton>
      ),
    },
    {
      render: (item: OlsResource) => (
        <EuiButton href={"./ontologies/" + item.ontologyId + "/individuals/var"} size="s">
          Show individuals
        </EuiButton>
      ),
    },
  ]

  return (
    <EuiPanel paddingSize="l">
      <EuiText>
        <h2>List of All Resources in the Terminology Service</h2>
      </EuiText>
      <EuiSpacer />
      <ResourcesWidget
        api="https://semanticlookup.zbmed.de/api/"
        targetLink="https://semanticlookup.zbmed.de/dev/"
        frontend={"nfdi4health"}
        actions={actions}
      />
      <Helmet>
        <title> Resources &gt; SemLookP </title>
        <meta
          name="description"
          content="List of All Resources in the Terminology Service - SemLookP"
        />
      </Helmet>
    </EuiPanel>
  );
}
