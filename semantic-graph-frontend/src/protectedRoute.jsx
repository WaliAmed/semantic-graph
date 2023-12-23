import Login from "./components/login";
import { useGraphContext } from "./context/graph.provider";
import { Toaster } from "sonner";

const ProtectedRoute = ({ children }) => {
  const { login } = useGraphContext();

  if (!login) {
    return <Login />;
  }

  return (
    <div className="min-h-screen">
      <Toaster />
      {children}
    </div>
  );
};

export default ProtectedRoute;
