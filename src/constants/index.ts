import packageJson from "../../package.json"

export const APP_NAME = "IU Instrumentum"
export const APP_VERSION = "v" + packageJson.version
export const APP_DESCRIPTION = packageJson.description
export const APP_AUTHOR = packageJson.author.name || "thanhdanhkode"

export const MATCH_URL = ["*://edusoftweb.hcmiu.edu.vn/*", "*://blackboard.hcmiu.edu.vn/*"]
