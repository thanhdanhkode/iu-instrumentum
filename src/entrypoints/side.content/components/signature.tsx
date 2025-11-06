import { APP_AUTHOR, APP_NAME, APP_VERSION } from "@/constants"

export const SignatureMark = () => {
  return (
    <div class="my-20 flex w-full flex-col items-center justify-center">
      <span class="text-muted-foreground text-sm font-medium">{APP_NAME + " " + APP_VERSION}</span>
      <span class="text-muted-foreground text-xs">by {APP_AUTHOR}</span>
    </div>
  )
}
