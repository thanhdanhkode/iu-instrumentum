/**
 * Remove UI-related attributes from the shadow root host element
 * @param shadowHost - The shadow root host element
 */
export const removeShadowRootUIAttributes = (shadowHost: HTMLElement) => {
  const attributeList = Array.from(shadowHost.attributes)

  for (const attribute of attributeList) {
    if (attribute.name.startsWith("data-wxt") || attribute.name.startsWith("wxt"))
      shadowHost.removeAttribute(attribute.name)
  }
}

/**
 * Remove inline styles from the shadow root host element
 * @param shadowHost - The shadow root host element
 */
export const removeShadowRootUIStyle = (shadowHost: HTMLElement) => {
  shadowHost.removeAttribute("style")
}

/**
 * Add necessary styles for the shadow root UI
 */
export const addShadowRootUIStyle = () => {
  const style = document.createElement("style")
  style.innerText = `
    iu-instrumentum-app {
      overflow: visible;
      position: relative;
      width: 0px;
      height: 0px;
      display: block;
    }
  `
  document.head.appendChild(style)
}
