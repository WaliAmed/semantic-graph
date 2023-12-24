import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { fetchNodesData, generateRandomNodeData } from "../apis/apis";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useGraphData } from "../hooks/useGrapghData";
import { toast } from "sonner";

const GraphContext = createContext();

export const useGraphContext = () => useContext(GraphContext);

export const GraphProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [nodeData, setNodeData] = useState(null);
  const [login, setLogin] = useState(false);
  const [guest, setGuest] = useState(false);

  // Key helps in resetting the position of nodes on the screen
  const [key, setKey] = useState(0);

  // Fetching graph data
  const { data, isLoading } = useQuery("data", fetchNodesData);

  // Custom hook to generate graph data
  useGraphData({ data, setData: setNodeData, isLoading });

  // -- To generate random nodes data - Start
  const queryClient = useQueryClient();
  const generateRandomData = () => {
    mutation.mutate();
  };

  const mutation = useMutation(generateRandomNodeData, {
    onSuccess: (data) => {
      if (data.status === "ok") {
        queryClient.invalidateQueries("data");
        toast.success("Random data added!");
        setOpenDrawer(false);
      }
    },
  });
  // -- To generate random nodes data - End

  const contextValue = {
    openDrawer,
    setOpenDrawer,
    nodeData,
    setNodeData,
    isLoading,
    login,
    setLogin,
    guest,
    setGuest,
    key,
    setKey,
    generateRandomData,
  };

  return (
    <GraphContext.Provider value={contextValue}>
      {children}
    </GraphContext.Provider>
  );
};

GraphProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
