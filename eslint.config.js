import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      simpleImportSort,
      reactHooks,
      reactRefresh,
    },
    rules: {
      /** react */
      "reactHooks/exhaustive-deps": "error",
      "reactHooks/rules-of-hooks": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "reactRefresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      /** typescript */
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "error",

      /** import */
      "simpleImportSort/imports": "error",
      "simpleImportSort/exports": "error",
    },
  },
];
