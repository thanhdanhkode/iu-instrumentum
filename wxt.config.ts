import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "wxt"
import { MATCH_URL } from "./src/constants"

export default defineConfig({
  modules: ["@wxt-dev/module-solid", "@wxt-dev/i18n/module", "@wxt-dev/auto-icons"],
  imports: false,
  srcDir: "src",
  webExt: {
    startUrls: ["https://edusoftweb.hcmiu.edu.vn"],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    name: "__MSG_extName__",
    description: "__MSG_extDescription__",
    default_locale: "en",
    web_accessible_resources: [
      { resources: ["fonts/*"], matches: MATCH_URL },
      { resources: ["edusoft.gif", "blackboard.png"], matches: MATCH_URL },
      { resources: [".gif", "blackboard.png"], matches: MATCH_URL },
      { resources: ["content-scripts/integration.css"], matches: MATCH_URL },
    ],
    permissions: ["storage"],
  },
  hooks: {
    "build:manifestGenerated": (wxt, manifest) => {
      if (wxt.config.mode === "development") {
        manifest.name += " (DEV)"
      }
    },
  },
})
