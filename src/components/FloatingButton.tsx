import { cn } from "@/utils/tailwind"
import { Accessor } from "solid-js"

const FloatingButton = (props: { hidden: Accessor<boolean>; openSidebar: () => void }) => {
  return (
    <div class={cn(props.hidden() && "hidden", "fixed right-4 bottom-4 z-50")}>
      <button
        onClick={props.openSidebar}
        class="flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white p-1 shadow-md transition-all duration-100 ease-in-out hover:-translate-y-1"
      >
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
      </button>
    </div>
  )
}

export default FloatingButton
