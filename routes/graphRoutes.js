const express = require("express");
const router = express.Router();
const graphController = require("../controllers/graphController");

// Route for adding a node to the graph
router.route("/addNode").post(graphController.addNode);

// Route for adding an link between nodes
router.route("/addLink").post(graphController.addLink);

// Route for getting neighboring nodes of a specified node
router.route("/singleNode/:node").get(graphController.getSingleNode);

// Route for removing a node from the graph
router.route("/removeNode/:node").delete(graphController.removeNode);

// Route for removing an link between nodes
router.route("/removeLink/:node1/:node2").delete(graphController.removeLink);

// Route for printing the graph structure (for debugging purposes)
router.route("/printGraph").get(graphController.printGraph);

module.exports = router;
