const { expect } = require("chai");
const Graph = require("../services/graph");

describe("calculatePageRank", () => {
  let graphInstance;

  beforeEach(() => {
    graphInstance = new Graph();
  });

  it("It should correctly calculate page rank for nodes with links", () => {
    // test data
    graphInstance.nodesObject = {
      node1: { links: ["node2", "node3"] },
      node2: { links: ["node1", "node3"] },
      node3: { links: ["node1"] },
    };

    graphInstance.calculatePageRank();

    // Expecting return value
    expect(graphInstance.nodesObject.node1.pageRank).to.equal(2);
    expect(graphInstance.nodesObject.node2.pageRank).to.equal(2);
    expect(graphInstance.nodesObject.node3.pageRank).to.equal(1);
  });

  it("should handle nodes without links properly", () => {
    // test data
    graphInstance.nodesObject = {
      node1: { links: [] },
      node2: { links: [] },
    };

    graphInstance.calculatePageRank();

    // Expecting return value
    expect(graphInstance.nodesObject.node1.pageRank).to.equal(0);
    expect(graphInstance.nodesObject.node2.pageRank).to.equal(0);
  });
});
