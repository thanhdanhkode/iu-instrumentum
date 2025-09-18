import React from "react";
import FloatingButton from "@/components/FloatingButton";
import Panel from "@/components/Panel";

const App = () => {
  const [isPanelOpen, setPanelOpen] = React.useState(false);

  return (
    <>
      <div
        className={`${
          isPanelOpen
            ? "tw:-translate-x-0"
            : "tw:translate-x-full"
        } tw:fixed tw:w-96 tw:h-screen tw:top-0 tw:right-0 tw:transition-all tw:duration-300 tw:z-[2147483647]`}
      >
        <FloatingButton hidden={isPanelOpen} onClick={() => setPanelOpen(!isPanelOpen)} />
        <Panel onClose={() => setPanelOpen(false)} />
      </div>
    </>
  );
};

export default App;
