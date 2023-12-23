import { useEffect } from "react";

/*
* This hook is to generate the graph data
* It returns nodes and links arrays

* Nodes array contains id, label, PageRank, Random x & y coordinates, Random color and size of the node
* Size of the node depends on the PageRank (multiplying it with 1000 for a bigger size)

* Links array contains source and target for each node link
*/

export const useGraphData = ({ data, setData, isLoading }) => {
  useEffect(() => {
    if (!isLoading) {
      let nodes = [];
      let links = [];
      let { graphData } = data;
      for (let item in graphData) {
        nodes.push({
          id: item,
          label: `
              Name: ${item}
              PageRank: ${graphData[item].pageRank}
              `,
          x: Math.random() * 500,
          y: Math.random() * 500,
          color: graphData[item].nodeColor,
          size: parseInt(graphData[item].pageRank) * 1000,
        });

        graphData[item]?.links?.forEach((link) => {
          links.push({
            source: item,
            target: link,
          });
        });
      }

      setData({ nodes, links });
    }
  }, [data]);

  return { data };
};
