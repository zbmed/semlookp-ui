import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

/**
 * OntoPortal-based backends require an API key per instance. The keys are
 * injected at build time (from the repository secrets in CI, from a local .env
 * file during development).
 */
const ONTOPORTAL_API_KEY_ENV_VARS = {
  "data.agroportal.eu": "AGROPORTAL_API_KEY",
  "data.earthportal.eu": "EARTHPORTAL_API_KEY",
  "data.biodivportal.gfbio.org": "BIODIVPORTAL_API_KEY",
  "data.ecoportal.lifewatch.eu": "ECOPORTAL_API_KEY",
  "data.lovportal.lirmm.fr": "LOVPORTAL_API_KEY",
  "data.bioontology.org": "BIOPORTAL_API_KEY",
};

export default defineConfig(({ mode }) => {
  // the empty prefix is needed because the API key variables are not prefixed with "VITE_"
  const env = loadEnv(mode, process.cwd(), "");

  const ontoportalApiKeys = Object.fromEntries(
    Object.entries(ONTOPORTAL_API_KEY_ENV_VARS).map(([host, envVar]) => [
      host,
      env[envVar] || "",
    ]),
  );

  return {
    server: {
      open: true,
    },
    build: {
      outDir: "build",
    },
    define: {
      __ONTOPORTAL_API_KEYS__: JSON.stringify(ontoportalApiKeys),
    },
    plugins: [
      eslint({
        emitWarning: true,
        emitError: false,
      }),
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
    ],
  };
});
