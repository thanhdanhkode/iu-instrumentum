import { useSideContext } from "@/contexts/side"
import { cn } from "@/utils/tailwind"
import { Button } from "./ui/button"
import { Logo } from "./ui/logo"

const FloatingButton = () => {
  const [state, { toggle }] = useSideContext().sideOpen
  return (
    <div class={cn(state() && "hidden", "fixed right-4 bottom-4 z-50")}>
      <Button
        size={"icon"}
        onClick={toggle}
        class="border-ring bg-background shadow-muted flex size-10 cursor-pointer items-center justify-center rounded-full border shadow-md transition-all duration-100 ease-in-out [&_svg]:size-8"
      >
        <Logo />
      </Button>
    </div>
  )
}

export default FloatingButton
