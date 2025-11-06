import { browser } from "#imports"
import { PublicPath } from "wxt/browser"

export const CSSLoader = async (parent?: Element) => {
  const target = parent || document.head
  const style = document.createElement("style")
  const styleData = await fetch(browser.runtime.getURL("/content-scripts/integration.css" as PublicPath))
  style.innerText = await styleData.text()
  target.appendChild(style)
}
