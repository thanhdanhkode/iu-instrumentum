import { cn } from "@/utils/tailwind"
import { Accessor } from "solid-js"
import { X } from "lucide-solid"
import { Button } from "./ui/button"

const SidePanel = (props: { isSidebarOpen: Accessor<boolean>; onClose: () => void }) => {
  return (
    <div
      class={cn(
        props.isSidebarOpen() && "translate-x-0",
        !props.isSidebarOpen() && "translate-x-full",
        "fixed top-0 right-0 z-[1315131] flex h-screen w-96 transition-all duration-300"
      )}
    >
      <div class="m-auto mr-3 h-49/50 w-full rounded-md border border-neutral-300 bg-white p-3 shadow-md">
        <div class="flex h-12 w-full items-center">
          <div class="flex items-center gap-2 text-lg font-medium">
            <div class="flex items-center justify-center [&_svg]:size-6">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                <g fill="none">
                  <circle cx={16} cy={16} r={16} fill="#495ec1"></circle>
                  <g fill="#fff">
                    <path fill-opacity={0.304} d="m9 7.281l11.114 5.383l2.845-1.282L11.891 6z"></path>
                    <path
                      fill-opacity={0.646}
                      d="m20.114 12.651l2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z"
                    ></path>
                    <path d="M9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.373v-2.874l-7.548-3.671l7.548-3.881v-2.865z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <span class="font-new-rocker">IU Ryenne</span>
          </div>
          <div class="flex-1"></div>
          <Button size={"icon"} onclick={props.onClose}>
            <X />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SidePanel
