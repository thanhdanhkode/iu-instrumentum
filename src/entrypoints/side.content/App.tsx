import ErrorFallback from "@/components/ErrorFallback"
import FloatingButton from "@/components/FloatingButton"
import { GlobalContextProvider } from "@/contexts/global"
import { SideContextProvider } from "@/contexts/side"
import { ThemeContextProvider } from "@/contexts/theme"
import { createSignal, ErrorBoundary } from "solid-js"
import Side from "./components/side"

const App = (props: Record<string, unknown>) => {
  const [target, setTarget] = createSignal<HTMLElement | undefined>()

  // useClickOutside(target, () => {
  //   console.log("clicked outside", target())
  // })

  return (
    <ErrorBoundary fallback={(error, reset) => <ErrorFallback error={error} reset={reset} />}>
      <GlobalContextProvider container={props.container as HTMLElement}>
        <ThemeContextProvider shadow={props.shadow as unknown as ShadowRoot}>
          <SideContextProvider>
            <Side ref={setTarget} />
            <FloatingButton />
          </SideContextProvider>
        </ThemeContextProvider>
      </GlobalContextProvider>
    </ErrorBoundary>
  )
}

export default App
