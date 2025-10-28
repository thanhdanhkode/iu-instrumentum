import { browser } from "#imports"
import { capitalCase } from "case-anything"
import { PublicPath } from "wxt/browser"

type FontLoaderProps = {
  fontName: string
  fontType: "woff" | "woff2" | "ttf" | "otf"
  parent?: Element
}

/**
 * Load custom fonts dynamically
 * @param fontName - The name of the font to load
 * @param fontType - The type of the font file
 *
 * @returns A style element that loads the specified font
 */
export const fontLoader = (fontName: string, fontType: "woff" | "woff2" | "ttf" | "otf") => {
  const fontUrl = browser.runtime.getURL(`/fonts/${fontName}.${fontType}` as PublicPath)
  const fontStyleElement = document.createElement("style")

  fontStyleElement.textContent = `
    @font-face {
      font-family: ${capitalCase(fontName)};
      src: url('${fontUrl}') format('truetype');
      font-weight: 400;
      font-style: normal;
    }

    // @keyframes collapsible-up {
    //   0% {
    //     height: var(--kb-collapsible-content-height);
    //   }
    //   100% {
    //     height: 0;
    //   }
    // }

    // @keyframes collapsible-down {
    //   0% {
    //     height: 0;
    //   }
    //   100% {
    //     height: var(--kb-collapsible-content-height);
    //   }
    // }
  `

  return fontStyleElement
}
