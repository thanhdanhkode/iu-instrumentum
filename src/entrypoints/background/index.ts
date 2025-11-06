import { defineBackground } from "#imports"
import { onMessage } from "@/utils/message"

export default defineBackground(() => {
  onMessage("getAutoLogin", (message) => {
    return true
  })
})
