import {
  EuiBasicTable,
  EuiCode,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiPanel,
  EuiSideNav,
  EuiText
} from "@elastic/eui";
import { Helmet } from "react-helmet";

export default function ApiPage() {
  return (
    <div>
      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <EuiPanel hasShadow={true}>
            <EuiSideNav
              items={[
                {
                  name: "SemLookP - Terminology Service API",
                  id: "1",
                  items: [
                    {
                      name: "Overview",
                      id: "1",
                      forceOpen: true,
                      items: [
                        {
                          name: "HTTP verbs",
                          id: "1.1",
                          href: "#http-verbs"
                        },
                        {
                          name: "HTTP status codes",
                          id: "1.2",
                          href: "#http-status-code"
                        },
                        {
                          name: "Errors",
                          id: "1.3",
                          href: "#errors"
                        },
                        {
                          name: "Hypermedia",
                          id: "1.4",
                          href: "#hypermedia"
                        },
                        {
                          name: "Listing resources",
                          id: "1.5",
                          forceOpen: true,
                          href: "#listing-resources",
                          items: [
                            {
                              name: "Paging resources",
                              id: "1.5.1",
                              forceOpen: true,
                              href: "#paging-resources",
                              items: [
                                {
                                  name: "Example request",
                                  id: "1.5.1.1",
                                  href: "#example-request"
                                },
                                {
                                  name: "Example response",
                                  id: "1.5.1.2",
                                  href: "#example-response"
                                },
                                {
                                  name: "Response structure",
                                  id: "1.5.1.3",
                                  href: "#response-structure"
                                },
                                {
                                  name: "Links",
                                  id: "1.5.1.4",
                                  href: "#links"
                                }

                              ]
                            }
                          ]
                        }
                      ],
                      href: "#overview"
                    },
                    {
                      name: "Resources",
                      id: "2",
                      href: "#resources",
                      forceOpen: true,
                      items: [
                        {
                          name: "API",
                          id: "2.1",
                          href: "#api",
                          forceOpen: true,
                          items: [
                            {
                              name: "Accessing the API",
                              id: "2.1.1",
                              href: "#accessing-the-api",
                              forceOpen: true,
                              items: [
                                {
                                  name: "Example request",
                                  id: "2.1.1.1",
                                  href: "#example-request-2"
                                },
                                {
                                  name: "Example response",
                                  id: "2.1.1.2",
                                  href: "#example-response-2"
                                },
                                {
                                  name: "Response structure",
                                  id: "2.1.1.3",
                                  href: "#response-structure-2"
                                },
                                {
                                  name: "Links",
                                  id: "2.1.1.4",
                                  href: "#links-2"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "Ontologies",
                          id: "2.2",
                          href: "#ontologies",
                          forceOpen: true,
                          items: [
                            {
                              name: "Listing ontologies",
                              id: "2.2.1",
                              href: "#listing-ontologies",
                              forceOpen: true,
                              items: [
                                {
                                  name: "Example request",
                                  id: "2.2.1.1",
                                  href: "#example-request-3"
                                },
                                {
                                  name: "Response structure",
                                  id: "2.2.1.2",
                                  href: "#response-structure-3"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "Ontology",
                          id: "2.3",
                          href: "#ontology",
                          forceOpen: true,
                          items: [
                            {
                              name: "Retrieve an ontology",
                              id: "2.3.1",
                              href: "#retrieve-an-ontology",
                              forceOpen: true,
                              items: [
                                {
                                  name: "Example request",
                                  id: "2.3.1.1",
                                  href: "#example-request-4"
                                },
                                {
                                  name: "Example response",
                                  id: "2.3.1.2",
                                  href: "#example-response-4"
                                },
                                {
                                  name: "Links",
                                  id: "2.3.1.3",
                                  href: "#links-4"
                                },
                                {
                                  name: "Root terms",
                                  id: "2.3.1.4",
                                  href: "#root-terms"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "Terms",
                          id: "2.4",
                          href: "#terms",
                          forceOpen: true,
                          items: [
                            {
                              name: "Listing ontology terms",
                              id: "2.4.1",
                              href: "#listing-ontology-terms",
                              forceOpen: true,
                              items: [
                                {
                                  name: "Optional parameters",
                                  id: "2.4.1.1",
                                  href: "#optional-parameters"
                                },
                                {
                                  name: "Example request",
                                  id: "2.4.1.2",
                                  href: "#example-request-5"
                                },
                                {
                                  name: "Response structure",
                                  id: "2.4.1.3",
                                  href: "#response-structure-5"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "Term",
                          id: "2.5",
                          href: "#term",
                          forceOpen: true,
                          items: [
                            {
                              name: "Retrieve a term",
                              id: "2.5.1",
                              href: "#retrieve-a-term",
                              forceOpen: true,
                              items: [
                                {
                                  name: "Example request",
                                  id: "2.5.1.1",
                                  href: "#example-request-6"
                                },
                                {
                                  name: "Example request",
                                  id: "2.5.1.2",
                                  href: "#example-request-7"
                                },
                                {
                                  name: "Example response",
                                  id: "2.5.1.3",
                                  href: "#example-response-7"
                                },
                                {
                                  name: "Links",
                                  id: "2.5.1.4",
                                  href: "#links-7"
                                }
                              ]
                            },
                            {
                              name: "Parent/Child relationships for terms",
                              id: "2.5.2",
                              href: "#parent-child-relationships-for-terms",
                              forceOpen: true,
                              items: [
                                {
                                  name: "Example request",
                                  id: "2.5.2.1",
                                  href: "#example-request-8"
                                },
                                {
                                  name: "Example requests",
                                  id: "2.5.2.2",
                                  href: "#example-requests"
                                }
                              ]
                            },
                            {
                              name: "Other related terms",
                              id: "2.5.3",
                              href: "#other-related-terms",
                              forceOpen: true,
                              items: [
                                {
                                  name: "Example request",
                                  id: "2.5.3.1",
                                  href: "#example-request-9"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "Properties and individuals",
                          id: "2.6",
                          href: "#properties-and-individuals",
                          forceOpen: true,
                          items: [
                            {
                              name: "Retrieve a property",
                              id: "2.6.1",
                              href: "#retrieve-a-property"
                            },
                            {
                              name: "Retrieve an individual",
                              id: "2.6.2",
                              href: "#retrieve-an-individual"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "Search",
                      id: "3",
                      href: "#search",
                      forceOpen: true,
                      items: [
                        {
                          name: "Search terms",
                          id: "3.1",
                          href: "#search-terms",
                          forceOpen: true,
                          items: [
                            {
                              name: "Search parameters",
                              id: "3.1.1",
                              href: "#search-parameters"
                            }
                          ]
                        },
                        {
                          name: "Select terms",
                          id: "3.2",
                          href: "#select-terms"
                        },
                        {
                          name: "Suggest terms",
                          id: "3.3",
                          href: "#suggest-terms"
                        }
                      ]
                    }
                  ]
                }
              ]}
            />
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={7}>
          <EuiPanel hasShadow={true}>
            <EuiText>
              <h1>SemLookP - Terminology Service API Guide</h1>
              <h2 id="overview">Overview</h2>{" "}
              <h3 id="http-verbs">HTTP verbs</h3>
              <p>This API supports the following HTTP verbs. </p>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Verb" },
                  { field: "c2", name: "Usage" }
                ]}
                items={[
                  {
                    c1: "GET",
                    c2: "Used to retrieve a resource"
                  }
                ]}
              />
              <h3 id="http-status-code">HTTP status codes</h3>
              <p>
                This API tries to adhere as closely as possible to
                standard HTTP and REST conventions in its use of
                HTTP status codes.
              </p>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Status code" },
                  { field: "c2", name: "Usage" }
                ]}
                items={[
                  {
                    c1: "200 OK",
                    c2: "The request completed successfully"
                  },
                  {
                    c1: "400 Bad Request",
                    c2: "The request was malformed. The response " +
                      "body will include an error providing further " +
                      "information"
                  },
                  {
                    c1: "404 Not Found",
                    c2: "The requested resource did not exist"
                  }
                ]}
              />
              <h3 id="errors">Errors</h3>
              <p>
                Whenever an error response (status code &gt;= 400) is
                returned, the body will contain a JSON object that
                describes the problem. The error object has the
                following structure:
              </p>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Path" },
                  { field: "c2", name: "Type" },
                  {
                    field: "c3", name: "Description",
                    textOnly: false
                  }
                ]}
                items={[
                  {
                    c1: "error",
                    c2: "String",
                    c3:
                      "The HTTP error that occurred, e.g. Bad Request."
                  },
                  {
                    c1: "message",
                    c2: "String",
                    c3:
                      "A description of the cause of the error "
                  },
                  {
                    c1: "path",
                    c2: "String",
                    c3:
                      "The path to which the request was made"
                  },
                  {
                    c1: "status",
                    c2: "Number",
                    c3:
                      "The HTTP status code, e.g. 400"
                  },
                  {
                    c1: "timestamp",
                    c2: "Number",
                    c3:
                      "The time, in milliseconds, at which the error " +
                      "occurred"
                  }
                ]}
              /><br></br>
              <p>
                For example, a request that attempts to apply a
                non-existent tag to a resource will produce a
                <EuiCode>400 Bad Request</EuiCode> response:
                <br></br>
                <br></br>
                <EuiCodeBlock language="json" fontSize="m"
                              paddingSize="m" isCopyable={true}>
                  {
                    `HTTP/1.1 404 Not Found
Content-Type: application/json;charset=UTF-8
Content-Length: 153

{
"timestamp" : 1527162502737,
"status" : 404,
"error" : "Not Found",
"message" : "Resource not found",
"path" : "/api/ontologies/foobar"
}`
                  }
                </EuiCodeBlock>
              </p>
              <h3 id="hypermedia">Hypermedia</h3>
              <p>
                This API uses hypermedia and resources include links to
                other resources in their responses. Responses are in {" "}
                <EuiLink
                  href="https://stateless.co/hal_specification.html"
                  target="_blank">
                  Hypertext Application Language (HAL) format.
                </EuiLink>
                Links can be found benath the <EuiCode>_links</EuiCode>
                key. Users of the API should not created URIs themselves,
                instead they should use the above-described links to
                navigate from resource to resource.
              </p>
              <h3 id="listing-resources">Listing resources</h3>
              <p>
                Requests that return multiple resources will be paginated
                to 20 items by default. You can change number of
                items returned using the <EuiCode>size</EuiCode>
                parameter up to a maximum of 500 for a single request.
                The API also supports the <EuiCode>page</EuiCode>
                parameter for accessing a specific page of items.
              </p>
              <h4 id="paging-resources">Paging resources</h4>
              <p>
                Links will be provided in the response to navigate the
                resources.
              </p>
              <h5 id="example-request">Example request</h5>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies?page=1&size=1" -i`
                }
              </EuiCodeBlock>
              <h5 id="example-response">Example response</h5>
              <EuiCodeBlock language="json" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `HTTP/1.1 200 OK
Content-Type: application/json

{
"_links" : {
"first" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies?page=0&size=1"
},
"prev" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies?page=0&size=1"
},
"self" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies"
},
"next" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies?page=2&size=1"
},
"last" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies?page=140&size=1"
}
},
"_embedded" : {
...
},
"page" : {
"size" : 1,
"totalElements" : 141,
"totalPages" : 141,
"number" : 1
}
}`
                }
              </EuiCodeBlock>
              <h5 id="response-structure">Response structure</h5>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Path" },
                  { field: "c2", name: "Type" },
                  {
                    field: "c3", name: "Description",
                    textOnly: false
                  }
                ]}
                items={[
                  {
                    c1: "_links",
                    c2: "Object",
                    c3: "Links to other resources"
                  },
                  {
                    c1: "_embedded",
                    c2: "Object",
                    c3: "The list of resources"
                  },
                  {
                    c1: "page.size",
                    c2: "Number",
                    c3: "The number of resources in this page"
                  },
                  {
                    c1: "page.totalElements",
                    c2: "Number",
                    c3: "The total number of resources"
                  },
                  {
                    c1: "page.totalPages",
                    c2: "Number",
                    c3: "The total number of pages"
                  },
                  {
                    c1: "page.number",
                    c2: "Number",
                    c3: "The page number"
                  }
                ]}
              />
              <h5 id="links">Links</h5>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Relation" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "self",
                    c2: "This resource list"
                  },
                  {
                    c1: "first",
                    c2: "The first page in the resource list"
                  },
                  {
                    c1: "next",
                    c2: "The next page in the resource list"
                  },
                  {
                    c1: "prev",
                    c2: "The previous page in the resource list"
                  },
                  {
                    c1: "last",
                    c2: "The last page in the resource list"
                  }
                ]}
              />
              <h2 id="resources">Resources</h2>{" "}
              <h3 id="api">API</h3>
              <p>
                The api endpoint provides the entry point into the
                service.
              </p>
              <h4 id="accessing-the-api">Accessing the API</h4>
              <p>
                A <EuiCode>GET</EuiCode> request is used to access the API.
              </p>
              <h5 id="example-request-2">Example request</h5>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/ols/api" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <h5 id="example-response-2">Example response</h5>
              <EuiCodeBlock language="json" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 432

{
"_links" : {
"ontologies" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies"
},
"individuals" : {
  "href" : "https://semanticlookup.zbmed.de/api/individuals"
},
"terms" : {
  "href" : "https://semanticlookup.zbmed.de/api/terms"
},
"properties" : {
  "href" : "https://semanticlookup.zbmed.de/api/properties"
},
"profile" : {
  "href" : "https://semanticlookup.zbmed.de/api/profile"
}
}
}`
                }
              </EuiCodeBlock>
              <h5 id="response-structure-">Response structure</h5>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Path" },
                  { field: "c2", name: "Type" },
                  {
                    field: "c3", name: "Description",
                    textOnly: false
                  }
                ]}
                items={[
                  {
                    c1: "_links",
                    c2: "Object",
                    c3: "Links to other resources"
                  }
                ]}
              />
              <h5 id="links-2">Links</h5>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Relation" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontologies",
                    c2: "Link to the ontologies in SemLookP"
                  },
                  {
                    c1: "terms",
                    c2: "Link to all the terms in SemLookP"
                  },
                  {
                    c1: "properties",
                    c2: "Link to all the properties in SemLookP"
                  },
                  {
                    c1: "individuals",
                    c2: "Link to all the individuals in SemLookP"
                  }
                ]}
              />
              <h3 id="ontologies">Ontologies</h3>
              <p>
                The Ontologies resources is used to list ontologies in
                SemLookP
              </p>
              <h4 id="listing-ontologies">Listing ontologies</h4>
              <p>
                A <EuiCode>GET</EuiCode> request will list all of the
                SemLookP ontologies.
              </p>
              <h5 id="example-request-3">Example request</h5>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <h5 id="response-structure-3">Response structure</h5>
              <p>
                The response is {" "}
                <EuiLink href={"#listing-resources"}>paginated</EuiLink>
                {" "}where the individual ontology resources are in the
                <EuiCode>_embedded.ontologies</EuiCode> field.
              </p>
              <h3 id="ontology">Ontology</h3>
              <h4 id="retrieve-an-ontology">Retrieve an ontology</h4>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/ontologies/{ontology_id}`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology_id",
                    c2: "The ontology id in SemLookP"
                  }
                ]}
              />
              <h5 id="example-request-4">Example request</h5>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/efo" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <h5 id="example-response-4">Example response</h5>
              <EuiCodeBlock language="json" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 5202

{
"ontologyId" : "efo",
"loaded" : "2020-03-17T10:41:22.329+0000",
"updated" : "2020-03-17T10:41:22.329+0000",
"status" : "LOADED",
"message" : "",
"version" : null,
"numberOfTerms" : 26817,
"numberOfProperties" : 205,
"numberOfIndividuals" : 0,
"config" : {
"id" : "http://www.ebi.ac.uk/efo/efo.owl",
"versionIri" : "http://www.ebi.ac.uk/efo/releases/v3.15.0/efo.owl",
"title" : "Experimental Factor Ontology",
"namespace" : "efo",
"preferredPrefix" : "EFO",
"description" : "The Experimental Factor Ontology (EFO) provides a systematic description of many experimental variables available in EBI databases, and for external projects such as the NHGRI GWAS catalogue. It combines parts of several biological ontologies, such as anatomy, disease and chemical compounds. The scope of EFO is to support the annotation, analysis and visualization of data handled by many groups at the EBI and as the core ontology for the Centre for Therapeutic Validation (CTTV)",
"homepage" : "http://www.ebi.ac.uk/efo",
"version" : "3.15.0",
"mailingList" : "efo-users@lists.sourceforge.net",
"creators" : [ ],
"annotations" : {
  "license" : [ "www.apache.org/licenses/LICENSE-2.0" ],
  "creator" : [ "Gautier Koscielny", "Simon Jupp", "Jon Ison", "Laura Huerta Martinez", "Helen Parkinson", "Eleanor Williams", "James Malone", "Zoe May Pendlington", "Trish Whetzel", "Sirarat Sarntivijai", "Catherine Leroy", "Ele Holloway", "Tomasz Adamusiak", "Emma Kate Hastings", "Olamidipupo Ajigboye", "Paola Roncaglia", "Natalja Kurbatova", "Dani Welter", "Drashtti Vasant" ],
  "rights" : [ "Copyright [2014] EMBL - European Bioinformatics Institute \\nLicensed under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \\"AS IS\\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the \\nLicense. " ],
  "format-version" : [ "1.4" ],
  "comment" : [ "2020-02-17" ]
},
"fileLocation" : "http://www.ebi.ac.uk/efo/efo.owl",
"reasonerType" : "OWL2",
"oboSlims" : false,
"labelProperty" : "http://www.w3.org/2000/01/rdf-schema#label",
"definitionProperties" : [ "http://purl.obolibrary.org/obo/IAO_0000115" ],
"synonymProperties" : [ "http://www.geneontology.org/formats/oboInOwl#hasExactSynonym" ],
"hierarchicalProperties" : [ "http://purl.obolibrary.org/obo/RO_0002202", "http://purl.obolibrary.org/obo/BFO_0000050" ],
"baseUris" : [ "http://www.ebi.ac.uk/efo/EFO_" ],
"hiddenProperties" : [ "http://www.ebi.ac.uk/efo/has_flag" ],
"preferredRootTerms" : [ ],
"internalMetadataProperties" : [ "http://www.w3.org/2002/07/owl#versionInfo" ],
"skos" : false
},
"_links" : {
"self" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/efo"
},
"terms" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/efo/terms"
},
"properties" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/efo/properties"
},
"individuals" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/efo/individuals"
}
}
}`
                }
              </EuiCodeBlock>
              <h5 id="links-4">Links</h5>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Relation" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "self",
                    c2: "This ontology"
                  },
                  {
                    c1: "terms",
                    c2: "Paginated list of terms in the ontology"
                  },
                  {
                    c1: "properties",
                    c2: "Paginated list of properties in the ontology"
                  },
                  {
                    c1: "individuals",
                    c2: "Paginated list of individuals in the ontology"
                  }
                ]}
              />
              <h5 id="root-terms">Root terms</h5>
              <p>
                You can access the root terms or properties in an ontology hierarchy with the following:
              </p>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/ontologies/{ontology_id}/terms/roots`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology_id",
                    c2: "The ontology id in SemLookP"
                  }
                ]}
              />
              <h3 id="terms">Terms</h3>
              <p>
                The terms resources is used to list terms (or classes)
                in SemLookP from a particular ontology
              </p>
              <h4 id="listing-ontology-terms">Listing ontology terms</h4>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/ontologies/{ontology_id}/terms`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology_id",
                    c2: "The ontology id in SemLookP"
                  }
                ]}
              />
              <h5 id="optional-parameters">Optional parameters</h5>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "iri",
                    c2: "Filter by IRI, when using IRI the result will " +
                      "always be one"
                  },
                  {
                    c1: "short_form",
                    c2: "Filter by IRI short form, these values aren’t " +
                      "guaranteed to be unique e.g. GO_0098743"
                  },
                  {
                    c1: "obo_id",
                    c2: "Filter by OBO id. This is OBO style id that " +
                      "aren’t guaranteed to be unique within a given " +
                      "ontology e.g. GO:0098743"
                  }
                ]}
              />
              <h5 id="example-request-5">Example request</h5>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/efo/terms" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <h5 id="response-structure-5">Response structure</h5>
              <p>
                The response is {" "}
                <EuiLink href={"#listing-resources"}>paginated</EuiLink>
                {" "}where the individual{" "}
                <EuiLink href={"#term"}>
                  term resources
                </EuiLink>
                {" "}are in the
                <EuiCode>_embedded.terms</EuiCode> field.
              </p>
              <h3 id="term">Term</h3>
              <h4 id="retrieve-a-term">Retrieve a term</h4>
              <h5 id="example-request-6">Example request</h5>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/ontologies/{ontology}/terms/{iri}`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology",
                    c2: "The SemLookP ontology id e.g. go"
                  },
                  {
                    c1: "iri",
                    c2: "The IRI of the terms, this value must be double " +
                      "URL encoded"
                  }
                ]}
              />
              <h5 id="example-request-7">Example request</h5>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <h5 id="example-response-7">Example response</h5>
              <EuiCodeBlock language="json" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `HTTP/1.1 200 OK
Content-Disposition: inline;filename=f.txt
Content-Type: application/json
Content-Length: 3657

{
"iri" : "http://purl.obolibrary.org/obo/GO_0043226",
"label" : "organelle",
"description" : [ "Organized structure of distinctive morphology and function. Includes the nucleus, mitochondria, plastids, vacuoles, vesicles, ribosomes and the cytoskeleton, and prokaryotic structures such as anammoxosomes and pirellulosomes. Excludes the plasma membrane." ],
"annotation" : {
"database_cross_reference" : [ "NIF_Subcellular:sao1539965131", "Wikipedia:Organelle" ],
"has_obo_namespace" : [ "cellular_component" ],
"id" : [ "GO:0043226" ]
},
"synonyms" : null,
"ontology_name" : "go",
"ontology_prefix" : "GO",
"ontology_iri" : "http://purl.obolibrary.org/obo/go.owl",
"is_obsolete" : false,
"term_replaced_by" : null,
"is_defining_ontology" : true,
"has_children" : true,
"is_root" : false,
"short_form" : "GO_0043226",
"obo_id" : "GO:0043226",
"in_subset" : [ "goslim_chembl", "goslim_generic", "goslim_pir" ],
"obo_definition_citation" : [{"definition":"Organized structure of distinctive morphology and function. Includes the nucleus, mitochondria, plastids, vacuoles, vesicles, ribosomes and the cytoskeleton, and prokaryotic structures such as anammoxosomes and pirellulosomes. Excludes the plasma membrane.","oboXrefs":[{"database":"GOC","id":"go_curators","description":null,"url":null}]}],
"obo_xref" : [{"database":"Wikipedia","id":"Organelle","description":null,"url":"http://en.wikipedia.org/wiki/Organelle"}, {"database":"NIF_Subcellular","id":"sao1539965131","description":null,"url":"http://www.neurolex.org/wiki/sao1539965131"}],
"obo_synonym" : null,
"is_preferred_root" : false,
"_links" : {
"self" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226"
},
"parents" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/parents"
},
"ancestors" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/ancestors"
},
"hierarchicalParents" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/hierarchicalParents"
},
"hierarchicalAncestors" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/hierarchicalAncestors"
},
"jstree" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/jstree"
},
"children" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/children"
},
"descendants" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/descendants"
},
"hierarchicalChildren" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/hierarchicalChildren"
},
"hierarchicalDescendants" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/hierarchicalDescendants"
},
"graph" : {
  "href" : "https://semanticlookup.zbmed.de/api/ontologies/go/terms/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FGO_0043226/graph"
}
}
}`
                }
              </EuiCodeBlock>
              <h5 id="links-7">Links</h5>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Relation" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "self",
                    c2: "Link to this resource"
                  },
                  {
                    c1: "parents",
                    c2: "Link to the direct parent resources for this term"
                  },
                  {
                    c1: "hierarchicalParents",
                    c2: "Link to the direct hierarchical parent " +
                      "resources for this term. Hierarchical parents " +
                      "include is-a and other related parents, such as " +
                      "part-of/develops-from, that imply a " +
                      "hierarchical relationship"
                  },
                  {
                    c1: "hierarchicalAncestors",
                    c2: "Link to all hierarchical ancestors " +
                      "(all parents’s parents) resources for this " +
                      "term. Hierarchical ancestors include is-a and " +
                      "other related parents, such as " +
                      "part-of/develops-from, that imply a " +
                      "hierarchical relationship"
                  },
                  {
                    c1: "ancestors",
                    c2: "Link to all parent resources for this term"
                  },
                  {
                    c1: "children",
                    c2: "Link to the direct children resources for this " +
                      "term"
                  },
                  {
                    c1: "hierarchicalChildren",
                    c2: "Link to the direct hierarchical children " +
                      "resources for this term. Hierarchical children " +
                      "include is-a and other related children, such " +
                      "as part-of/develops-from, that imply a " +
                      "hierarchical relationship"
                  },
                  {
                    c1: "hierarchicalDescendants",
                    c2: "Link to all hierarchical children resources " +
                      "for this term. Hierarchical children include " +
                      "is-a and other related children, such as " +
                      "part-of/develops-from, that imply a " +
                      "hierarchical relationship"
                  },
                  {
                    c1: "descendants",
                    c2: "Link to all child resources for this term"
                  },
                  {
                    c1: "jstree",
                    c2: "A JSON tree structure of the term hierarchy"
                  },
                  {
                    c1: "graph",
                    c2: "A JSON graph structure of the immediately " +
                      "related nodes"
                  }
                ]}
              />
              <h4 id="parent-child-relationships-for-terms">Parent/Child relationships for terms</h4>
              <p>
                The RESTful way to retrieve direct parent/child or all
                parent/child (ancestors/descendant) terms is to follow
                the _links URL on a given term. There are cases where
                it is convenient to request parent/child terms for a
                given term when you only have the URI or short id. For
                these cases we have implemented a convenient endpoint for
                these that takes a term id as a parameter. There are
                methods for all parent/child relationships as documented
                in the links sections for term resources.
              </p>
              <h5 id="example-request-8">Example request</h5>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/ontologies/{ontology}/parents`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology",
                    c2: "The SemLookP ontology id e.g. go"
                  },
                  {
                    c1: "id",
                    c2: "The id of the term, can be IRI, short form or " +
                      "obo id"
                  }
                ]}
              />
              <h5 id="example-requests">Example requests</h5>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/go/parents?id=GO:0043226" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/go/children?id=GO:0043226" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/go/ancestors?id=GO:0043226" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/go/descendants?id=GO:0043226" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/go/hierarchicalDescendants?id=GO:0043226" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <EuiCodeBlock language="shellsession" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `$ curl -L "https://semanticlookup.zbmed.de/api/ontologies/go/hierarchicalAncestors?id=GO:0043226" -i -H "Accept: application/json"`
                }
              </EuiCodeBlock>
              <h4 id="other-related-terms">Other related terms</h4>
              <p>
                In cases where a term has a direct relation to another
                term (single existential to a named class in OBO), for
                example a &quot;part of&quot; relation, the related terms
                can be accessed directly with this API.
              </p>
              <h5 id="example-request-9">Example request</h5>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /api/ontologies/{ontology_id}/terms/{term_iri}/{property_iri}`
                }
              </EuiCodeBlock>
              <h3 id="properties-and-individuals">Properties and individuals</h3>
              <p>
                You can access property (relationships) and ontology
                individuals (instances) following similar methods to
                terms.
              </p>
              <h4 id="retrieve-a-property">Retrieve a property</h4>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/ontologies/{ontology}/properties/{iri}`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology",
                    c2: "The SemLookP ontology id e.g. go"
                  },
                  {
                    c1: "iri",
                    c2: "The IRI of the relation, this value must be " +
                      "double URL encoded"
                  }
                ]}
              />
              <h4 id="retrieve-an-individual">Retrieve an individual</h4>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/ontologies/{ontology}/individuals/{iri}`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology",
                    c2: "The SemLookP ontology id e.g. go"
                  },
                  {
                    c1: "iri",
                    c2: "The IRI of the individual, this value must be " +
                      "double URL encoded"
                  }
                ]}
              />
              <h2 id="search">Search</h2>
              <h3 id="search-terms">Search terms</h3>
              <p>
                The search API is independent of the REST API and
                supports free text search over the ontologies. The
                default search is across all textual fields in the
                ontology, but results are ranked towards hits in labels,
                then synonyms, then definitions, then annotations.
              </p>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /api/search?q={query}`
                }
              </EuiCodeBlock>
              <h4 id="search-parameters">Search parameters</h4>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "query",
                    c2: "The terms to search. By default the search is " +
                      "performed over term labels, synonyms, " +
                      "descriptions, identifiers and annotation " +
                      "properties."
                  }
                ]}
              />
              <br></br>
              <p>
                You can override the fields that are searched by
                supplying a {" "}
                <EuiCode>queryFields</EuiCode>
                {" "} argument. For example, to query on labels and
                synonyms use
              </p>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/search?q={query}&queryFields={label,synonym}`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology",
                    c2: "Restrict a search to a set of ontologies e.g. " +
                      "ontology=uberon,mesh"
                  },
                  {
                    c1: "type",
                    c2: "Restrict a search to an entity type, one of " +
                      "{class,property,individual,ontology}"
                  },
                  {
                    c1: "slim",
                    c2: "Restrict a search to an particular set of slims" +
                      " by name"
                  },
                  {
                    c1: "fieldList",
                    c2: "Specifcy the fields to return, the defaults are" +
                      " {iri,label,short_form,obo_id,ontology_name," +
                      "ontology_prefix,description,type}"
                  },
                  {
                    c1: "queryFields",
                    c2: "Specifcy the fields to query, the defaults are " +
                      "{label, synonym, description, short_form, " +
                      "obo_id, annotations, logical_description, iri}"
                  },
                  {
                    c1: "exact",
                    c2: "Set to true for exact matches"
                  },
                  {
                    c1: "groupField",
                    c2: "Set to true to group results by unique id (IRI)"
                  },
                  {
                    c1: "obsoletes",
                    c2: "Set to true to include obsoleted terms in the " +
                      "results"
                  },
                  {
                    c1: "local",
                    c2: "Set to true to only return terms that are in " +
                      "a defining ontology e.g. Only return matches " +
                      "to gene ontology terms in the gene ontology, " +
                      "and exclude ontologies where those terms are " +
                      "also referenced"
                  },
                  {
                    c1: "childrenOf",
                    c2: "You can restrict a search to children of a " +
                      "given term. Supply a list of IRI for the terms " +
                      "that you want to search under"
                  },
                  {
                    c1: "allChildrenOf",
                    c2: "You can restrict a search to all children of " +
                      "a given term. Supply a list of IRI for the " +
                      "terms that you want to search under " +
                      "(subclassOf/is-a plus any hierarchical" +
                      "/transitive properties like \"part of\" " +
                      "or \"develops from\")"
                  },
                  {
                    c1: "rows",
                    c2: "How many results per page"
                  },
                  {
                    c1: "start",
                    c2: "The results page number"
                  }
                ]}
              />
              <h3 id="select-terms">Select terms</h3>
              <p>
                We provide an additional search endpoint that is
                designed specifically for selecting ontology terms.
                This has been tuned specifically to support applications
                such as autocomplete.
              </p>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/select?q={query}`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology",
                    c2: "Restrict a search to a set of ontologies e.g. " +
                      "ontology=uberon,mesh"
                  },
                  {
                    c1: "type",
                    c2: "Restrict a search to an entity type, one of " +
                      "{class,property,individual,ontology}"
                  },
                  {
                    c1: "slim",
                    c2: "Restrict a search to an particular set of slims" +
                      " by name"
                  },
                  {
                    c1: "fieldList",
                    c2: "Specifcy the fields to return, the defaults are" +
                      " {iri,label,short_form,obo_id,ontology_name," +
                      "ontology_prefix,description,type}"
                  },
                  {
                    c1: "obsoletes",
                    c2: "Set to true to include obsoleted terms in the " +
                      "results"
                  },
                  {
                    c1: "local",
                    c2: "Set to true to only return terms that are in " +
                      "a defining ontology e.g. Only return matches " +
                      "to gene ontology terms in the gene ontology, " +
                      "and exclude ontologies where those terms are " +
                      "also referenced"
                  },
                  {
                    c1: "childrenOf",
                    c2: "You can restrict a search to children of a " +
                      "given term. Supply a list of IRI for the terms " +
                      "that you want to search under"
                  },
                  {
                    c1: "allChildrenOf",
                    c2: "You can restrict a search to all children of " +
                      "a given term. Supply a list of IRI for the " +
                      "terms that you want to search under " +
                      "(subclassOf/is-a plus any hierarchical" +
                      "/transitive properties like \"part of\" " +
                      "or \"develops from\")"
                  },
                  {
                    c1: "rows",
                    c2: "How many results per page"
                  },
                  {
                    c1: "start",
                    c2: "The results page number"
                  }
                ]}
              />
              <h3 id="suggest-terms">Suggest terms</h3>
              <p>
                We also provide a generic suggester endpoint. This
                endpoint aims to provide traditional autosuggest based
                on all the vocabulary in SemLookP (all class labels or
                synonyms). All results from this endpoint are unique and
                are not coupled to any particular ontology, however,
                searches can be restricted by ontology.
              </p>
              <EuiCodeBlock language="http" fontSize="m"
                            paddingSize="m" isCopyable={true}>
                {
                  `GET /ols/api/suggest?q={query}`
                }
              </EuiCodeBlock>
              <EuiBasicTable
                columns={[
                  { field: "c1", name: "Parameter" },
                  { field: "c2", name: "Description" }
                ]}
                items={[
                  {
                    c1: "ontology",
                    c2: "Restrict a search to a set of ontologies e.g. " +
                      "ontology=uberon,mesh"
                  },
                  {
                    c1: "rows",
                    c2: "How many results per page"
                  },
                  {
                    c1: "start",
                    c2: "The results page number"
                  }
                ]}
              />

            </EuiText>

          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
      <Helmet>
        <title> API Guide &gt; SemLookP </title>
        <meta
          name="description"
          content="API Guide for the Terminology Service - SemLookP"
        />
      </Helmet>
    </div>
  );
}
