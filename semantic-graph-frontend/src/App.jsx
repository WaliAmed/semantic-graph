import Drawer from "./components/drawer";
import GraphComponent from "./components/graph";
import { ReactQueryProvider } from "./context/reactQuery.provider";
import { GraphProvider } from "./context/graph.provider";
import ProtectedRoute from "./protectedRoute";

function App() {
  return (
    <ReactQueryProvider>
      <GraphProvider>
        <ProtectedRoute>
          <Drawer />
          <GraphComponent />
        </ProtectedRoute>
      </GraphProvider>
    </ReactQueryProvider>
  );
}

export default App;
