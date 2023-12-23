import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { fetchNodesData } from "../apis/apis";
import { useQuery } from "react-query";
import { useGraphData } from "../hooks/useGrapghData";

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
