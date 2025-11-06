import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { APP_NAME } from "@/constants"
import { useSideContext } from "@/contexts/side"
import { cn } from "@/utils/tailwind"
import { X } from "lucide-solid"

export const Header = () => {
  const [state, { toggle }] = useSideContext().sideOpen

  return (
    <header class={cn("flex w-full items-center p-3 select-none")}>
      <div class="flex items-center grow gap-2 text-lg font-medium">
        <div class="flex items-center justify-center [&_svg]:size-6">
          <Logo />
        </div>
        <span class="font-nunito font-bold">{APP_NAME}</span>
      </div>
      <Button size={"icon"} onclick={toggle} class="cursor-pointer">
        <X />
      </Button>
    </header>
  )
}
