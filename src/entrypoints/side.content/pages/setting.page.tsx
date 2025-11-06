import { browser, createSignal } from "#imports"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { TextField, TextFieldLabel, TextFieldRoot } from "@/components/ui/text-field"
import { Tool, ToolIcon, ToolInfo, ToolName, ToolToggle } from "@/components/ui/tool"
import { useGlobalContext } from "@/contexts/global"
import { useThemeContext } from "@/contexts/theme"
import { cn } from "@/utils/tailwind"
import {
  ChevronDown,
  ExternalLink,
  Eye,
  EyeOff,
  Globe,
  MessageSquareHeart,
  Moon,
  Palette,
  RotateCcw,
  Save,
  SquarePen
} from "lucide-solid"
import { Index, Match, Switch as SwitchMatch } from "solid-js"
import { PublicPath } from "wxt/browser"
import { SignatureMark } from "../components/signature"

export default function SettingPage() {
  const [data, setData] = createSignal([
    { id: 1, name: "Edusoftweb", icon: "edusoft.gif", isOpen: false, isEditable: false, isVisible: false },
  ])
  const container = useGlobalContext().container
  const { theme, setTheme } = useThemeContext()

  return (
    <div class="px-3">
      <div class="my-10 flex w-full flex-col items-center justify-center">
        <h3 class="text-lg font-bold">Settings</h3>
        <p class="text-muted-foreground text-xs">Configure your preferences and settings.</p>
      </div>

      <div class="scrollbar-background border-ring my-10 h-160 overflow-x-hidden overflow-y-auto">
        <div class="w-full font-bold">
          <span>HCMIU Accounts</span>
        </div>

        <div class="border-ring mt-3 rounded-md border shadow">
          <Index each={data()}>
            {(item, Index) => (
              <>
                <Collapsible
                  open={item().isOpen}
                  onOpenChange={() =>
                    setData((prev) => prev.map((f) => (f.id === item().id ? { ...f, isOpen: !f.isOpen } : f)))
                  }
                  class="w-full"
                >
                  <CollapsibleTrigger class="flex w-full items-center justify-between p-3 has-[svg]:[&_svg]:size-4 data-[expanded]:[&_svg]:rotate-180">
                    <div class="flex items-center gap-3 text-sm font-medium [&_img]:h-4">
                      <img
                        src={browser.runtime.getURL(item().icon as PublicPath)}
                        alt={`${item().name}_icon`}
                        sizes="32"
                      />
                      <span>{item().name}</span>
                    </div>
                    <ChevronDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent class="border-ring overflow-hidden p-3">
                    <div class="mb-4 flex items-center gap-2">
                      <Button
                        onClick={() => {
                          if (item().isEditable) {
                            console.log(item().id + " Saved")
                          }
                          setData((prev) =>
                            prev.map((f) => (f.id === item().id ? { ...f, isEditable: !f.isEditable } : f))
                          )
                        }}
                        class={cn(item().isEditable && "bg-emerald-600 text-white hover:bg-emerald-600/80")}
                      >
                        <SwitchMatch>
                          <Match when={item().isEditable}>
                            <Save />
                            <span class="sr-only">Save</span>Save
                          </Match>
                          <Match when={!item().isEditable}>
                            <SquarePen />
                            <span class="sr-only">Edit</span>Edit
                          </Match>
                        </SwitchMatch>
                      </Button>
                      <Button variant={"destructive"}>
                        <RotateCcw />
                        <span class="sr-only">Reset</span>Reset
                      </Button>
                      <Button
                        onClick={() =>
                          setData((prev) =>
                            prev.map((f) => (f.id === item().id ? { ...f, isVisible: !f.isVisible } : f))
                          )
                        }
                      >
                        <SwitchMatch>
                          <Match when={item().isVisible}>
                            <EyeOff />
                            <span class="sr-only">Hidden border-ring</span>Hide
                          </Match>
                          <Match when={!item().isVisible}>
                            <Eye />
                            <span class="sr-only">Show</span>Show
                          </Match>
                        </SwitchMatch>
                      </Button>
                    </div>
                    <TextFieldRoot variant={"horizontal"} class="my-2 flex items-center gap-2 space-y-0">
                      <TextFieldLabel class="min-w-1/3 align-middle">Username</TextFieldLabel>
                      <TextField
                        type={item().isEditable || item().isVisible ? "text" : "password"}
                        disabled={!item().isEditable}
                        class="disabled:bg-muted px-1 text-xs"
                        value={
                          item().name === "Edusoftweb"
                            ? import.meta.env.WXT_EDUSOFTWEB_ACCOUNT_USERNAME
                            : item().name === "Blackboard"
                              ? import.meta.env.WXT_BLACKBOARD_ACCOUNT_USERNAME
                              : ""
                        }
                      />
                    </TextFieldRoot>
                    <Separator class="border-ring" />
                    <TextFieldRoot variant={"horizontal"} class="my-2 flex items-center gap-2 space-y-0">
                      <TextFieldLabel class="min-w-1/3 align-middle">Password</TextFieldLabel>
                      <TextField
                        type={item().isEditable || item().isVisible ? "text" : "password"}
                        disabled={!item().isEditable}
                        class="disabled:bg-muted px-1 text-xs"
                        value={
                          item().name === "Edusoftweb"
                            ? import.meta.env.WXT_EDUSOFTWEB_ACCOUNT_PASSWORD
                            : item().name === "Blackboard"
                              ? import.meta.env.WXT_BLACKBOARD_ACCOUNT_PASSWORD
                              : ""
                        }
                      />
                    </TextFieldRoot>
                  </CollapsibleContent>
                </Collapsible>
                <Separator class="border-ring last:hidden" />
              </>
            )}
          </Index>
        </div>

        <div class="mt-10 w-full font-bold">
          <span>General</span>
        </div>

        <div class="border-ring mt-3 rounded-md border shadow">
          <div class="flex items-center justify-between p-3">
            <div class="flex items-center gap-2 [&_svg]:size-4">
              <Globe />
              <span class="text-sm font-medium">Language</span>
            </div>
            <Select
              options={["English", "Tiếng Việt"]}
              placeholder="Select a language"
              itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
              defaultValue={"English"}
            >
              <SelectTrigger class="w-[180px]">
                <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
              </SelectTrigger>
              <SelectContent mount={container} />
            </Select>
          </div>

          <Separator class="border-ring last:hidden" />

          <Tool class="p-3 py-5 shadow-none">
            <ToolIcon icon={<Moon />} class="p-0" />
            <ToolInfo class="mx-2">
              <ToolName>Dark Mode</ToolName>
            </ToolInfo>
            <ToolToggle state={theme() === "dark"} toggle={() => setTheme(theme() === "dark" ? "light" : "dark")} />
          </Tool>

          <Separator class="border-ring last:hidden" />
        </div>

        <div class="mt-10 w-full font-bold">
          <span>Others</span>
        </div>

        <div class="border-ring mt-3 rounded-md border shadow">
          <div class="flex items-center justify-between p-3">
            <div class="flex items-center gap-2 [&_svg]:size-4">
              <MessageSquareHeart />
              <span class="text-sm font-medium">Feedback</span>
            </div>
            <Button as="a" href="" class="flex items-center">
              <span class="sr-only">Open Feedback</span>
              <span>Open Link</span>
              <ExternalLink />
            </Button>
          </div>

          <Separator class="border-ring last:hidden" />
        </div>

        <SignatureMark />
      </div>
    </div>
  )
}
