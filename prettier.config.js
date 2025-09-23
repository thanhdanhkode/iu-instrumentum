// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
}

export default config
