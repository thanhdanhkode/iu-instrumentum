import { createShadowRootUi, defineContentScript } from "#imports"
import { APP_NAME, MATCH_URL } from "@/constants"
import "@/styles/base.css"
import { fontLoader } from "@/utils/font"
import { addShadowRootUIStyle, removeShadowRootUIAttributes, removeShadowRootUIStyle } from "@/utils/shadow-root"
import { kebabCase } from "case-anything"
import { render } from "solid-js/web"
import App from "./App"

export default defineContentScript({
  matches: MATCH_URL,
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: `${kebabCase(APP_NAME)}-app`,
      position: "overlay",
      anchor: "html",
      onMount: (container, shadow, shadowHost) => {
        const unmount = render(() => <App container={container} shadow={shadow} />, container)

        fontLoader(["Nunito.ttf", "Roboto.ttf"])

        container.classList.add("select-none", "font-sans", "antialiased")

        removeShadowRootUIAttributes(shadowHost)
        removeShadowRootUIStyle(shadowHost)

        addShadowRootUIStyle()

        return unmount
      },
      onRemove: (unmount) => {
        unmount?.()
      },
    })

    ui.mount()
  },
})
