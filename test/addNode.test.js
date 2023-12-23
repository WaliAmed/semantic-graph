const { expect } = require("chai");
const Graph = require("../services/graph");

describe("addNode", () => {
  let graphClassInstance;

  beforeEach(() => {
    graphClassInstance = new Graph();
  });

  it("should add a new node to nodesObject", () => {
    graphClassInstance.addNode("node1");

    // Expecting return value
    expect(graphClassInstance.nodesObject).to.have.property("node1");
    expect(graphClassInstance.nodesObject.node1).to.deep.equal({
      links: [],
      pageRank: 0,
      nodeColor: graphClassInstance.nodesObject.node1.nodeColor,
    });
  });

  it("should not add a node if it already exists", () => {
    graphClassInstance.addNode("node2");
    graphClassInstance.addNode("node2");

    // Expecting return value
    expect(graphClassInstance.nodesObject).to.have.property("node2");
    expect(Object.keys(graphClassInstance.nodesObject)).to.have.lengthOf(1);
  });
});
