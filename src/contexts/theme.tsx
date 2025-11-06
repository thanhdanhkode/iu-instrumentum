import { Accessor, createContext, createEffect, createSignal, ParentComponent, useContext } from "solid-js"

interface ThemeContextType {
  theme: Accessor<string>
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>()

export const ThemeContextProvider: ParentComponent<{ shadow: ShadowRoot }> = (props) => {
  const [theme, setTheme] = createSignal("light")

  createEffect(() => {
    const themeValue = theme()
    props.shadow.host?.setAttribute("data-theme", themeValue)
    props.shadow.querySelector("html")?.setAttribute("data-theme", themeValue)
  })

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider")
  }

  return context
}
