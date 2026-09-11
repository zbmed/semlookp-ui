/**
 * Maps the host of an OntoPortal-based provider to its API key. Replaced at
 * build time by vite.config.js, where the keys are read from the environment.
 * Providers without a configured key are mapped to an empty string.
 */
declare const __ONTOPORTAL_API_KEYS__: Record<string, string>;

/**
 * Returns the API key of the OntoPortal instance serving the given API, needed by widgets querying an OntoPortal provider
 * @param apiUrl    the base URL of the provider API, e.g. "https://data.agroportal.eu/"
 * @returns         the API key, or an empty string if none is configured for that provider
 */
export function getOntoportalApiKey(apiUrl: string): string {
  try {
    return __ONTOPORTAL_API_KEYS__[new URL(apiUrl).hostname] || "";
  } catch {
    return "";
  }
}
