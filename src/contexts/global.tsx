import { Accessor, Component, ComponentProps, createContext, createSignal, ParentComponent, useContext } from "solid-js"

interface GlobalContextType {
  sideOpen: (
    | Accessor<boolean>
    | {
        toggle(): void
      }
  )[]
  container?: HTMLElement
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalContextProvider: ParentComponent<{ container?: HTMLElement }> = (props) => {
  const [isSideOpen, setSideOpen] = createSignal(false)
  const sideOpen = [
    isSideOpen,
    {
      toggle() {
        setSideOpen(!isSideOpen())
      },
    },
  ]

  return (
    <GlobalContext.Provider value={{ sideOpen, container: props.container }}>{props.children}</GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider")
  }
  return context
}
