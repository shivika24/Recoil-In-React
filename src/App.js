import React, { useEffect } from "react";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import { ErrorBoundary } from "react-error-boundary";
import TodoList from "./components/toDoList";
import ErrorFallback from "./components/errorFallback";

/** for debugging  */
function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

function App() {
  return (
    <RecoilRoot>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <DebugObserver />
          <TodoList />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}
export default App;
