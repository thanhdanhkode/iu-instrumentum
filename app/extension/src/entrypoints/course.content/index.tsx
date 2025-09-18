import { browser, createIntegratedUi, defineContentScript } from "#imports";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/base.css";

export default defineContentScript({
  matches: ["*://edusoftweb.hcmiu.edu.vn/*"],
  cssInjectionMode: "manifest",

  async main(ctx) {
    // cSpell:disable-next-line
    const wrapper = document.getElementById("pnlDSMonhocDK");

    if (wrapper) {
      const ui = createIntegratedUi(ctx, {
        position: "inline",
        anchor: wrapper,
        append: "after",
        onMount: async (container) => {
          const wrap = document.createElement("div");
          wrap.className = "tw:font-inter tw:w-full tw:p-1";
          wrap.setAttribute("data-iuryenne-style", "");
          const style = document.createElement("style");

          const dataStyle = await fetch(
            browser.runtime.getURL(`/content-scripts/course.css`)
          )
            .then((response) => response.text())
            .then((css) => css)
            .catch((error) => console.error(error));
          style.textContent = dataStyle as unknown as string;

          container.appendChild(style);
          container.appendChild(wrap);

          const root = ReactDOM.createRoot(wrap);
          root.render(<App />);

          return root;
        },
        onRemove: async (root) => {
          (await root)?.unmount();
        },
      });

      ui.mount();
    }
  },
});
