import { defineConfig } from "wxt";
import type { WxtDirFileEntry } from "wxt";
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  imports: false,
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "IU Ryenne",
    description: "A browser extension for HCMIU students.",
    web_accessible_resources: [
      {
        resources: ["content-scripts/*.css"],
        matches: ["*://edusoftweb.hcmiu.edu.vn/*"],
      },
    ],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  webExt: {
    startUrls: ["https://edusoftweb.hcmiu.edu.vn"],
  },
  hooks: {
    "prepare:publicPaths": (wxt, path) => {
      path.push("content-scripts/host.css");
      path.push("content-scripts/course.css");
    },
    "prepare:types": (wxt, entries) => {},
    "build:manifestGenerated": (wxt, manifest) => {
      if (wxt.config.mode === "development") {
        manifest.name += " (Dev)";
      }
    },
  },
});
