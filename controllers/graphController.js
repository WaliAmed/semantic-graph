const Graph = require("../services/graph");

const graph = new Graph();

const graphController = {
  /*
  @desc Add a node to the graph
  @route POST /api/graph/addNode
  @access public
  */
  addNode: (req, res) => {
    const { node } = req.body;

    try {
      graph.addNode(node);
      res
        .status(201)
        .json({ message: "Node added successfully", status: "ok" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  /*
  @desc Add an link between nodes
  @route POST /api/graph/addLink
  @access public
  */
  addLink: (req, res) => {
    const { node1, node2 } = req.body;

    try {
      graph.addLink(node1, node2);

      res.status(201).json({
        message: `Link added between ${node1} and ${node2}`,
        status: "ok",
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  /*
  @desc Get data of a specified node
  @route GET /api/graph/singleNode/:node
  @access public
  */
  getSingleNode: (req, res) => {
    const { node } = req.params;

    const data = graph.getSingleNode(node);

    if (data) {
      return res
        .status(404)
        .json({ error: "Node not found or has no neighbors" });
    }

    res.json({ node, neighbors: neighboringNodes });
  },

  /*
  @desc Remove a node from the graph
  @route DELETE /api/graph/removeNode/:node
  @access public
  */
  removeNode: (req, res) => {
    const { node } = req.params;

    try {
      graph.removeNode(node);
      res.status(201).json({
        message: `Node ${node} removed from the graph`,
        status: "ok",
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  /*
  @desc Remove an link between nodes
  @route DELETE /api/graph/removeLink/:node1/:node2
  @access public
  */
  removeLink: (req, res) => {
    const { node1, node2 } = req.params;

    try {
      graph.removeLink(node1, node2);
      res.status(200).json({
        message: `Link removed between ${node1} and ${node2}`,
        status: "ok",
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  /*
  @desc Print the graph structure
  @route GET /api/graph/printGraph
  @access public
  */
  printGraph: (req, res) => {
    const graphData = graph.printGraph();
    res.json({ graphData });
  },

  /*
  @desc It will generate random data for 20 nodes
  @route GET /api/graph/generateRandomData
  @access public
  */
  generateRandomNodeData: (req, res) => {
    graph.addRandomData();
    res.status(200).json({
      message: `Random data added!`,
      status: "ok",
    });
  },
};

module.exports = graphController;
