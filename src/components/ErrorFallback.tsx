import { APP_NAME } from "@/constants"
import { CircleX, RotateCcw } from "lucide-solid"
import { Button } from "./ui/button"

const ErrorFallback = (props: { error?: Error | null; reset?: () => void }) => {
  return (
    <div class="fixed right-2 bottom-2 z-[1315131] flex items-center justify-center gap-2 rounded-md border-2 border-red-500 bg-white p-2 shadow-md has-[svg]:[&_svg]:p-1">
      <CircleX class="text-red-500 size-8" />
      <div class="flex flex-col gap-1">
        <div class="flex w-full items-center justify-between">
          <span class="text-sm font-bold text-red-500">{APP_NAME} Error</span>
          <Button variant={"secondary"} size={"icon"} onClick={props.reset} class="bg-transparent text-xs size-auto [&_svg]:size-6">
            <RotateCcw />
          </Button>
        </div>
        <span class="text-xs">{props.error?.message}</span>
      </div>
    </div>
  )
}

export default ErrorFallback
