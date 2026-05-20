import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
  return {
    server: {
      open: true,
    },
    build: {
      outDir: "build",
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
