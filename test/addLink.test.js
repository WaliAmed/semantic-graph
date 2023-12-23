const { expect } = require("chai");
const Graph = require("../services/graph");

describe("addLink", () => {
  let graphClassInstance;

  beforeEach(() => {
    graphClassInstance = new Graph();
  });

  it("should have nodes & should add a link of node1 in node2 to nodesObject", () => {
    graphClassInstance.addNode("node1");
    graphClassInstance.addNode("node2");

    // Expecting return value
    expect(graphClassInstance.nodesObject).to.have.property("node1");
    expect(graphClassInstance.nodesObject.node1).to.deep.equal({
      links: [],
      pageRank: 0,
      nodeColor: graphClassInstance.nodesObject.node1.nodeColor,
    });

    graphClassInstance.addLink("node1", "node2");

    // Expecting return value
    expect(graphClassInstance.nodesObject.node1.links).to.include("node2");
  });

  it("should have nodes & should not add a link of node1 in node2 to nodesObject if already exist", () => {
    graphClassInstance.addNode("node1");
    graphClassInstance.addNode("node2");

    // Expecting return value
    expect(graphClassInstance.nodesObject).to.have.property("node1");
    expect(graphClassInstance.nodesObject.node1).to.deep.equal({
      links: [],
      pageRank: 0,
      nodeColor: graphClassInstance.nodesObject.node1.nodeColor,
    });

    graphClassInstance.addLink("node1", "node2");

    // Expecting return value
    expect(graphClassInstance.nodesObject.node1.links).to.include("node2");
    expect(graphClassInstance.nodesObject.node1.links).to.include("node2");
    expect(graphClassInstance.nodesObject.node1.links).to.have.lengthOf(1);
  });
});
