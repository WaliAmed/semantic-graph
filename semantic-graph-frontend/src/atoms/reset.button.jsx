import PropTypes from "prop-types";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGraphContext } from "../context/graph.provider";

const Reset = ({ setKey, customClass }) => {
  const { setOpenDrawer, nodeData, setNodeData } = useGraphContext();

  const getRandomPosition = () => Math.random() * 500;
  const resetZoom = () => {
    setOpenDrawer(false);
    const updatedNodes = nodeData.nodes.map((node) => ({
      ...node,
      x: getRandomPosition(),
      y: getRandomPosition(),
    }));

    const updatedData = {
      ...nodeData,
      nodes: updatedNodes,
    };

    setNodeData(updatedData);
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="group relative">
      <button
        title="Reset Nodes Position"
        className={`text-xs bg-slate-600 group-hover:bg-slate-800 p-3 rounded-lg font-bold text-white ${customClass}`}
        onClick={resetZoom}
      >
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faArrowRotateRight}
            size="lg"
            className="transition-all group-hover:rotate-180"
          />
          <span className="ml-2">Reset Nodes Position</span>
        </div>
      </button>
    </div>
  );
};

// Prop type validation
Reset.propTypes = {
  setKey: PropTypes.func.isRequired,
  customClass: PropTypes.object,
};

export default Reset;
