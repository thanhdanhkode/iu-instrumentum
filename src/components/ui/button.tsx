import { cn } from "@/utils/tailwind"
import type { ButtonRootProps } from "@kobalte/core/button"
import { Button as ButtonPrimitive } from "@kobalte/core/button"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

export const buttonVariants = cva(
  "cursor-pointer flex items-center border-none [&_svg]:pointer-events-none p-0 [&_svg:not([class*=\'size-\'])]:size-4 justify-center rounded-md text-sm font-medium transition-all duration-100 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 hover:bg-neutral-800 text-white",
      },
      size: {
        default: "h-8 px-3 py-2",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type buttonProps<T extends ValidComponent = "button"> = ButtonRootProps<T> &
  VariantProps<typeof buttonVariants> & {
    class?: string
  }

export const Button = <T extends ValidComponent = "button">(props: PolymorphicProps<T, buttonProps<T>>) => {
  const [local, rest] = splitProps(props as buttonProps, ["class", "variant", "size"])

  return (
    <ButtonPrimitive
      class={cn(
        buttonVariants({
          size: local.size,
          variant: local.variant,
        }),
        local.class
      )}
      {...rest}
    />
  )
}
