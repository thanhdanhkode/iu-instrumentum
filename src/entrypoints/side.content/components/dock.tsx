import { TabsIndicator, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/utils/tailwind"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import type { TabsListProps } from "@kobalte/core/tabs"
import { Settings, Wrench } from "lucide-solid"
import type { ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

type tabsListProps<T extends ValidComponent = "div"> = TabsListProps<T> & {
  class?: string
}

export const Dock = <T extends ValidComponent = "div">(props: PolymorphicProps<T, tabsListProps<T>>) => {
  const [local, rest] = splitProps(props as tabsListProps, ["class"])

  return (
    <TabsList class={cn("rounded-none", local.class)} {...rest}>
      <TabsTrigger value="tools" class="cursor-pointer [&_svg]:size-4 h-11">
        <Wrench />
      </TabsTrigger>
      <TabsTrigger value="settings" class="cursor-pointer [&_svg]:size-4 h-9">
        <Settings />
      </TabsTrigger>
      <TabsIndicator />
    </TabsList>
  )
}
