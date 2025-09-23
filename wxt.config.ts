import { defineConfig } from "wxt"
import tailwindcss from "@tailwindcss/vite"

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-solid"],
  imports: false,
  srcDir: "src",
  webExt: {
    startUrls: ["https://edusoftweb.hcmiu.edu.vn"],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    name: "IU Ryenne",
  },
  hooks: {
    "build:manifestGenerated": (wxt, manifest) => {
      if (wxt.config.mode === "development") {
        manifest.name += " (DEV)"
      }
    },
  },
})
