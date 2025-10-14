import { DockBar } from "@/components/DockBar"
import type { Component, ParentProps } from "solid-js"

const Layout: Component<ParentProps> = (props) => {
  return (
    <>
      <header class="w-full p-2 select-none">
        <div class="flex w-full items-center gap-2 text-xl font-black text-[#495ec1] [&_svg]:size-6">
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
          <span>IU Ryenne</span>
        </div>
      </header>
      <div class="h-full w-full p-2 select-none">{props.children}</div>
      <DockBar />
    </>
  )
}

export default Layout
