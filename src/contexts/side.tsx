import { Accessor, Component, ComponentProps, createContext, createSignal, ParentComponent, useContext } from "solid-js"

type SideContextType = {
  sideOpen: [
    state: Accessor<boolean>,
    {
      toggle(): void
    },
  ]
}

export const SideContext = createContext<SideContextType | undefined>(undefined)

export const SideContextProvider: ParentComponent = (props) => {
  const [isSideOpen, setSideOpen] = createSignal(false)
  const sideOpen: SideContextType["sideOpen"] = [
    isSideOpen,
    {
      toggle() {
        setSideOpen(!isSideOpen())
      },
    },
  ]

  return <SideContext.Provider value={{ sideOpen }}>{props.children}</SideContext.Provider>
}

export const useSideContext = () => {
  const context = useContext(SideContext)
  if (!context) {
    throw new Error("useSideContext must be used within a SideProvider")
  }
  return context
}
