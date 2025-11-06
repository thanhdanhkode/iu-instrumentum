import { Tabs, TabsContent } from "@/components/ui/tabs"
import { useSideContext } from "@/contexts/side"
import { cn } from "@/utils/tailwind"
import SettingPage from "../pages/setting.page"
import ToolPage from "../pages/tools.page"
import { Dock } from "./dock"
import { Header } from "./header"
import { ComponentProps, splitProps } from "solid-js"

const Side = (props: ComponentProps<"div">) => {
  const [state, { toggle }] = useSideContext().sideOpen
  const [local, rest] = splitProps(props, ["class"])

  return (
    <div
      class={cn(
        state() && "translate-x right-4",
        !state() && "right-0 translate-x-full",
        "bg-background border-ring dark:text-foreground fixed top-[calc(1rem)] z-[1315131] flex h-full max-h-[calc(100vh-2rem)] w-96 flex-1 flex-col overflow-hidden rounded-md border shadow-md transition-all duration-300"
      )}
      {...rest}
    >
      <Header />
      <Tabs defaultValue="home" class="relative w-full flex-1">
        <TabsContent value="tools">
          <ToolPage />
        </TabsContent>
        <TabsContent value="settings">
          <SettingPage />
        </TabsContent>
        <Dock class="absolute bottom-0" />
      </Tabs>
    </div>
  )
}

export default Side
