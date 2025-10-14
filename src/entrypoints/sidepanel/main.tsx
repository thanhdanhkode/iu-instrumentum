import { render } from "solid-js/web"
import { HashRouter, Route } from "@solidjs/router"

import "@/styles/base.css"
import Layout from "./Layout"
import { SettingPage } from "./pages/Settings"
import { StatPage } from "./pages/Stats"
import { CoursePage } from "./pages/Courses"
import { HomePage } from "./pages/Home"

render(
  () => (
    <HashRouter root={Layout}>
      <Route path={"/"} component={HomePage} />
      <Route path={"/courses"} component={CoursePage} />
      <Route path={"/stats"} component={StatPage} />
      <Route path={"/settings"} component={SettingPage} />
    </HashRouter>
  ),
  document.getElementsByTagName("body")[0]!
)
