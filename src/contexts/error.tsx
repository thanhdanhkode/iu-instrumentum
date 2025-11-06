import { Accessor, createContext, createSignal, ParentComponent, useContext } from "solid-js"

interface ErrorContextType {
  error: Accessor<Error | null>
  setError: (error: Error | null) => void
}

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined)

export const ErrorContextProvider: ParentComponent<{ error: ErrorContextType }> = (props) => {
  const [error, setError] = createSignal<Error | null>(null)
  return <ErrorContext.Provider value={{ error: error, setError: setError }}>{props.children}</ErrorContext.Provider>
}

export const useErrorContext = () => {
  const context = useContext(ErrorContext)
  if (!context) {
    throw new Error("useErrorContext must be used within an ErrorContextProvider")
  }
  return context
}
