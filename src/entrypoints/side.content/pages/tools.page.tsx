import { createSignal, Index } from "#imports"
import { Separator } from "@/components/ui/separator"
import { Tool, ToolDescription, ToolIcon, ToolInfo, ToolName, ToolToggle } from "@/components/ui/tool"
import { Book, Captions, Key } from "lucide-solid"
import { JSX } from "solid-js"

export default function ToolPage() {
  const [functions, setFunctions] = createSignal<{ id: number; name: string; enabled: boolean; icon?: JSX.Element }[]>([
    {
      id: 1,
      name: "Auto Login",
      enabled: true,
      icon: <Key />,
    },
    {
      id: 2,
      name: "Bypass Captcha",
      enabled: true,
      icon: <Captions />,
    },
    {
      id: 4,
      name: "Course Registration",
      enabled: true,
      icon: <Book />,
    },
  ])

  return (
    <div class="px-3">
      <div class="my-10 flex w-full flex-col items-center justify-center">
        <h3 class="text-lg font-bold">Tools</h3>
        <p class="text-muted-foreground text-xs">Toggle tool functions</p>
      </div>
      <div class="scrollbar-background border-ring shadow-muted my-10 overflow-x-hidden overflow-y-auto rounded-md border shadow">
        <Index each={functions()}>
          {(item, index) => {
            return (
              <>
                <Tool class="shadow-none">
                  <ToolIcon icon={item().icon} />
                  <ToolInfo class="">
                    <ToolName>{item().name}</ToolName>
                    <ToolDescription>This is the description for </ToolDescription>
                  </ToolInfo>
                  <ToolToggle
                    state={item().enabled}
                    toggle={() => {
                      setFunctions((prev) => prev.map((f) => (f.id === item().id ? { ...f, enabled: !f.enabled } : f)))
                    }}
                  />
                </Tool>
                <Separator class="border-ring last:hidden" />
              </>
            )
          }}
        </Index>
      </div>
    </div>
  )
}
