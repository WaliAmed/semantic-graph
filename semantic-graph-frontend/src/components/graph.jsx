import { useState } from "react";
import { Graph } from "react-d3-graph";
import Reset from "../atoms/reset.button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useGraphContext } from "../context/graph.provider";

// Initial graph settings
const initialConfig = {
  nodeHighlightBehavior: true,
  node: {
    highlightStrokeColor: "blue",
    labelProperty: "label",
    renderLabel: true,
  },
};

function GraphComponent() {
  const { nodeData, isLoading } = useGraphContext();

  // Key helps in resetting the position of nodes on the screen
  const [key, setKey] = useState(0);

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen">
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        className="text-blue-500 text-4xl"
      />
    </div>
  );

  // Empty Data Component
  const EmptyData = () => (
    <div className="flex items-center justify-center h-screen">
      Please add nodes!
    </div>
  );

  return (
    <div>
      {/* Loading or Null NodeData */}
      {isLoading || nodeData === null ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Checking if graphData is empty */}
          {Object.keys(nodeData.nodes).length === 0 ? (
            <EmptyData />
          ) : (
            <>
              <Reset setKey={setKey} />
              <Graph
                key={key}
                id="graph-id"
                data={nodeData}
                config={initialConfig}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default GraphComponent;
