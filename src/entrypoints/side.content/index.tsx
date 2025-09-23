import { defineContentScript, createShadowRootUi } from "#imports";
import App from "./App";
import "./styles/base.css";
import { render } from "solid-js/web";

export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: "iu-ryenne-app",
      position: "overlay",
      anchor: "body",
      onMount: (container, shadow, shadowHost) => {
        const unmount = render(() => <App />, container);

        return unmount;
      },
      onRemove: (unmount) => {
        unmount?.();
      },
    });

    ui.mount();
  },
});
