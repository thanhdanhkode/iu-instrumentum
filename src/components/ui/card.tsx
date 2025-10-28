import { cn } from "@/utils/tailwind"
import { ComponentProps, splitProps } from "solid-js"

export const Card = (props: ComponentProps<"div">) => {
  const [locale, rest] = splitProps(props, ["class"])
  return <div class={cn("rounded-md shadow p-2", locale.class)} {...rest}></div>
}

export const CardHeader = (props: ComponentProps<"div">) => {
  const [locale, rest] = splitProps(props, ["class"])
  return <div class={cn("font-bold p-2", locale.class)} {...rest}></div>
}

export const CardTitle = (props: ComponentProps<"h1">) => {
  const [locale, rest] = splitProps(props, ["class"])
  return <div class={cn("text-lg font-medium p-2", locale.class)} {...rest}></div>
}

export const CardContent = (props: ComponentProps<"div">) => {
  const [locale, rest] = splitProps(props, ["class"])
  return <div class={cn("p-2", locale.class)} {...rest}></div>
}

export const CardFooter = (props: ComponentProps<"div">) => {
  const [locale, rest] = splitProps(props, ["class"])
  return <div class={cn("p-2", locale.class)} {...rest}></div>
}
