import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import json from "@eslint/json"
import css from "@eslint/css"
import { defineConfig } from "eslint/config"
// import prettierEslint from "eslint-plugin-prettier"
import prettierEslintConfig from "eslint-config-prettier"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  prettierEslintConfig,
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
])
