import { cn } from "@/utils/tailwind"
import { splitProps, type ComponentProps } from "solid-js"

export const Container = (props: ComponentProps<"div">) => {
  const [locale, rest] = splitProps(props, ["class"])
  return <div class={cn("h-full w-full p-2", locale.class)} {...rest}></div>
}
