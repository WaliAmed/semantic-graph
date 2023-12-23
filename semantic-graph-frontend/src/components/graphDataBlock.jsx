import { useGraphContext } from "../context/graph.provider";

const GraphDataBlock = () => {
  const { nodeData } = useGraphContext();

  if (nodeData.nodes.length === 0) {
    return <p className="p-3 text-xs">No Data!</p>;
  }

  return (
    <div className="max-h-[200px] overflow-auto">
      {JSON.stringify(nodeData.nodes)}

      <div className="border-b border-gray-300"></div>

      {JSON.stringify(nodeData.links)}
    </div>
  );
};

export default GraphDataBlock;
