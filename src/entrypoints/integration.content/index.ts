import { createIntegratedUi, createShadowRootUi, defineContentScript } from "#imports"
import { APP_NAME, MATCH_URL } from "@/constants"
import { sendMessage } from "@/utils/message"
import { removeShadowRootUIAttributes } from "@/utils/shadow-root"
import { kebabCase } from "case-anything"
import { auth } from "./modules/login"
import { courseController } from "./modules/course"
import { CSSLoader } from "@/utils/style"
import "./course.css"

export default defineContentScript({
  matches: MATCH_URL,

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: `${kebabCase(APP_NAME)}-integration`,
      position: "inline",
      anchor: "html",
      onMount: (container, shadow, shadowHost) => {
        const wrapper = document.createElement("div")
        wrapper.id = `${kebabCase(APP_NAME)}-integration-controller`

        removeShadowRootUIAttributes(shadowHost)

        shadow.innerHTML = ``
        shadow.appendChild(wrapper)
      },
    })

    ui.mount()

    const isAutoLogin = await sendMessage("getAutoLogin")

    if (isAutoLogin) {
      auth.login(import.meta.env.WXT_EDUSOFTWEB_ACCOUNT_USERNAME, import.meta.env.WXT_EDUSOFTWEB_ACCOUNT_PASSWORD)
      auth.logout("")
    }

    const params = new URLSearchParams(window.location.search)
    // cSpell:disable-next-line
    const courseList = document.querySelectorAll("#pnlDSMonhocDK")[0]
    const course_ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: courseList,
      append: "after",
      onMount: (container) => {
        const wrapper = document.createElement("div")
        const title = document.createElement("h3")
        title.innerText = "Auto Course Registration (IU Instrumentum Add-on)"
        const course = courseController.render(true, wrapper)
        const description = document.createElement("span")

        description.innerText =
          "Add courses you want to auto register here. You have to add completely before the registration time open (recommended at least 24H before)."

        wrapper.appendChild(title)
        if (course) wrapper.appendChild(course)
        wrapper.appendChild(description)

        CSSLoader()

        container.appendChild(wrapper)
      },
    })

    // cSpell:disable-next-line
    if (params.get("page") === "dkmonhoc") {
      course_ui.mount()
    }

    courseController.add()
  },
})
