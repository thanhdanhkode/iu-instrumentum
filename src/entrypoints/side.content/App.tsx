import ErrorFallback from "@/components/ErrorFallback"
import FloatingButton from "@/components/FloatingButton"
import SidePanel from "@/components/SidePanel"
import { createSignal, ErrorBoundary } from "solid-js"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(false)
  return (
    <div>
      <ErrorBoundary fallback={(error, reset) => <ErrorFallback error={error} reset={reset} />}>
        <SidePanel isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(!isSidebarOpen())} />
      </ErrorBoundary>
      <FloatingButton hidden={isSidebarOpen} openSidebar={() => setIsSidebarOpen(!isSidebarOpen())} />
    </div>
  )
}

export default App
