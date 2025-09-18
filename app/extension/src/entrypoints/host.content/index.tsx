import { browser, createShadowRootUi, defineContentScript } from "#imports";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/base.css";

export default defineContentScript({
  matches: ["*://edusoftweb.hcmiu.edu.vn/*"],
  cssInjectionMode: "manifest",

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: "iuryenne-app",
      position: "inline",
      anchor: "html",
      onMount: async (container, shadow, shadowHost) => {
        const wrapper = document.createElement("div");
        wrapper.id = "iuryenne-root";
        wrapper.className = "tw:font-inter";
        wrapper.setAttribute("data-iuryenne-style", "");

        const style = document.createElement("style");
        style.id = "iuryenne-style";

        const dataStyle = await fetch(
          browser.runtime.getURL(`/content-scripts/host.css`)
        )
          .then((response) => response.text())
          .then((css) => css)
          .catch((error) => console.error(error));
        style.textContent = dataStyle as unknown as string;

        shadow.innerHTML = "";
        shadow.appendChild(style);
        shadow.appendChild(wrapper);

        const root = ReactDOM.createRoot(wrapper);
        root.render(<App />);

        return root;
      },
      onRemove: async (root) => {
        (await root)?.unmount();
      },
    });

    ui.mount();

    console.log(`
   ___    _   _             ___     _  _
  |_ _|  | | | |    o O O  | _ \\   | || |   ___    _ _     _ _      ___
   | |   | |_| |   o       |   /    \\_, |  / -_)  | ' \\   | ' \\    / -_)
  |___|   \\___/   TS__[O]  |_|_\\   _|__/   \\___|  |_||_|  |_||_|   \\___|
_|"""""|_|"""""| {======|_|"""""|_| """"|_|"""""|_|"""""|_|"""""|_|"""""|
"\`-0-0-'"\`-0-0-'./o--000'"\`-0-0-'"\`-0-0-'"\`-0-0-'"\`-0-0-'"\`-0-0-'

-------------------------------------------------------
Hey there! What are you want to do here? This is a dangerous place! :>
    `);
  },
});
