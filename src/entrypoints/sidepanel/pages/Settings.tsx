import { Container } from "@/components/ui/container"
import { Switch, SwitchControl, SwitchThumb } from "@/components/ui/switch"

export const SettingPage = () => {
  return (
    <Container>
      <div>
        <div class="mb-3 flex items-center text-xs font-medium text-neutral-500">
          <span>General</span>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex w-full items-center justify-between">
            <span>Appearance</span>
            <div class="w-max">
              <Switch class="flex items-center space-x-2">
                <SwitchControl class="bg-[#b0bfff]">
                  <SwitchThumb class="bg-[#495ec1]" />
                </SwitchControl>
              </Switch>
            </div>
          </div>
          <div class="flex w-full items-center justify-between">
            <span>Auto Login</span>
            <div class="w-max">
              <Switch class="flex items-center space-x-2">
                <SwitchControl class="bg-[#b0bfff]">
                  <SwitchThumb class="bg-[#495ec1]" />
                </SwitchControl>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
