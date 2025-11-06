import { defineExtensionMessaging } from "@webext-core/messaging"

interface ProtocolMap {
  getAutoLogin(): boolean
}

export const { sendMessage, onMessage } = defineExtensionMessaging<ProtocolMap>()
