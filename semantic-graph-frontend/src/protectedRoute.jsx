import Login from "./components/login";
import { useGraphContext } from "./context/graph.provider";

const ProtectedRoute = ({ children }) => {
  const { login } = useGraphContext();

  if (!login) {
    return <Login />;
  }

  return <div className="min-h-screen">{children}</div>;
};

export default ProtectedRoute;
