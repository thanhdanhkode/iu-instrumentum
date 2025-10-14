import { defineBackground, browser } from "#imports"

export default defineBackground(() => {
  // browser.action.onClicked.addListener(async (tab) => {
  //   await browser.sidePanel.open({ windowId: tab.windowId })
  // })

  browser.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error))

  browser.tabs.onUpdated.addListener(async (tabId, info, tab) => {
    if (!tab.url) return

    const url = new URL(tab.url)

    console.log(url.origin)

    if (url.origin === "https://edusoftweb.hcmiu.edu.vn") {
      await browser.sidePanel.setOptions({
        tabId,
        path: "sidepanel.html",
        enabled: true,
      })
    } else {
      await browser.sidePanel.setOptions({
        tabId,
        enabled: false,
      })
    }
  })
})
