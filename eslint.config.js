import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      "plugin:prettier/recommended",
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: ["simple-import-sort", "react-hooks", "react-refresh"],
    rules: {
      /** react */
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      /** typescript */
      "@typescript-eslint/consistent-type-definitions": "error",

      /** import */
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  }
);
