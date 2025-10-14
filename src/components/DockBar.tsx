import { A } from "@solidjs/router"
import { BookText, ChartArea, House, Settings, Wrench } from "lucide-solid"
import { type Component, createSignal, Index } from "solid-js"

type DockBarNavigationProps = {
  id: number
  href: string
  title: string
  icon?: Component
}

const DockBarNavigationList: DockBarNavigationProps[] = [
  {
    id: 1,
    href: "/",
    title: "Home",
    icon: House,
  },
  {
    id: 2,
    href: "/courses",
    title: "Courses",
    icon: BookText,
  },
  {
    id: 3,
    href: "/tools",
    title: "Tools",
    icon: Wrench,
  },
  {
    id: 4,
    href: "/stats",
    title: "Statistics",
    icon: ChartArea,
  },
  {
    id: 5,
    href: "/settings",
    title: "Settings",
    icon: Settings,
  },
]

export const DockBar = () => {
  const [dockBarNavigation, setDockBarNavigation] = createSignal(DockBarNavigationList)
  return (
    <div class="fixed inset-x-0 bottom-0 w-full p-2 select-none">
      <div class="relative grid h-12 grid-cols-6 gap-1 overflow-hidden rounded-xl bg-neutral-300 p-1.5">
        <Index each={dockBarNavigation()}>
          {(item, index) => {
            const Icon = item().icon
            return (
              <A
                href={item().href}
                class="contents"
                activeClass="*:col-span-2 *:bg-blue-500 *:text-white"
                inactiveClass="[&_span]:hidden"
                end
              >
                <div class="flex h-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-100 [&_svg]:size-5">
                  {Icon && <Icon />}
                  <span>{item().title}</span>
                </div>
              </A>
            )
          }}
        </Index>
        <div class="absolute w-1/4"></div>
      </div>
    </div>
  )
}
