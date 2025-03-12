export function buildIri(iriParam, shortForm, ontologyId) {
  if (iriParam) {
    return decodeURIComponent(decodeURIComponent(iriParam));
  }

  // build IRI for special cases of Maelstrom and Foodex2
  if (shortForm) {
    if (ontologyId === "foodex2") {
      return `http://id.zbmed.de/foodex2/en/${shortForm}`;
    } else if (ontologyId === "maelstrom") {
      return `http://semanticlookup.zbmed.de/km/MAELSTROM/${shortForm}`;
    } else {
      return null;
    }
  }
  return null;
}
