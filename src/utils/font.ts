import { browser } from "#imports"
import { capitalCase } from "case-anything"
import { PublicPath } from "wxt/browser"

type FontLoaderFn = {
  (fontName: string | string[]): void
  (fontName: string | string[], parent: Element): void
}

/**
 * Load custom fonts dynamically
 * @param fontName - The name of the font to load
 * @param parent - Optional parent element to append the style to
 */
export const fontLoader: FontLoaderFn = (fontName: string | string[], parent?: Element) => {
  const fontStyleElement = document.createElement("style")
  const target = parent ?? document.head
  let fontContent = ""

  if (Array.isArray(fontName)) {
    for (const font of fontName) {
      for (let index = 1; index < 10; index++) {
        fontContent += `
          @font-face {
            font-family: '${capitalCase(font.replace(/\.(?:ttf|otf|woff2?|woff|eot|svg)(?:\?.*)?$/i, ""))}';
            src: url('${browser.runtime.getURL(`/fonts/${font}` as PublicPath)}') format('truetype');
            font-weight: ${index * 100};
            font-style: normal;
          }
      `
      }
    }
  } else {
    for (let index = 1; index < 10; index++) {
      fontContent = `
      @font-face {
        font-family: '${capitalCase(fontName.replace(/\.(?:ttf|otf|woff2?|woff|eot|svg)(?:\?.*)?$/i, ""))}';
        src: url('${browser.runtime.getURL(`/fonts/${fontName}` as PublicPath)}') format('truetype');
        font-weight: 100 900;
        font-style: normal;
      }
    `
    }
  }

  fontStyleElement.innerText = fontContent
  target.appendChild(fontStyleElement)
}
