import { Switch, SwitchControl, SwitchThumb } from "@/components/ui/switch"
import { cn } from "@/utils/tailwind"
import { ComponentProps, JSX, splitProps } from "solid-js"

export const Tool = (props: ComponentProps<"div">) => {
  const [local, rest] = splitProps(props, ["class"])

  return <div class={cn("flex items-center p-2 [&_svg]:size-4", local.class)} {...rest} />
}

export const ToolInfo = (props: ComponentProps<"div">) => {
  const [local, rest] = splitProps(props, ["class"])

  return <div class={cn("flex grow flex-col", local.class)} {...rest} />
}

export const ToolName = (props: ComponentProps<"div">) => {
  const [local, rest] = splitProps(props, ["class"])

  return <div class={cn("order-1 text-sm font-medium", local.class)} {...rest} />
}

export const ToolDescription = (props: ComponentProps<"div">) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <div class={cn("text-muted-foreground order-2 text-xs", local.class)} {...rest}/>
  )
}

export const ToolIcon = (props: ComponentProps<"div"> & { icon: JSX.Element }) => {
  const [local, rest] = splitProps(props, ["class", "icon"])

  return (
    <div class={cn("px-3", local.class)} {...rest}>
      {local.icon}
    </div>
  )
}

export const ToolToggle = (props: ComponentProps<"div"> & { state: boolean; toggle: () => void }) => {
  const [local, rest] = splitProps(props, ["class", "state", "toggle"])

  return (
    <div class={cn("px-2", local.class)} {...rest}>
      <Switch checked={local.state} onChange={local.toggle}>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
      </Switch>
    </div>
  )
}
