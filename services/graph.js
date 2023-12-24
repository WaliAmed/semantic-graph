class Graph {
  constructor() {
    // node object that contains all node data
    this.nodesObject = {};
  }

  // to add a new node
  // ? new node contains a links array to contain connections and pageRank and random node color to display on the graph
  addNode(node) {
    if (!this.nodesObject[node]) {
      this.nodesObject[node] = {
        links: [],
        pageRank: 0,
        nodeColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };
    }
  }

  // Add link of node1 in node2
  // ? Node1 pageRank will improve as node2 is redirecting to node1
  addLink(node1, node2) {
    if (!this.nodesObject[node1] || !this.nodesObject[node2]) {
      throw new Error("Nodes do not exist in the graph");
    }

    if (!this.nodesObject[node1].links.includes(node2)) {
      this.nodesObject[node1].links.push(node2);
    }
  }

  // get a single node data
  getSingleNode(node) {
    return this.nodesObject[node] || [];
  }

  // remove a node and that node from other node's links
  removeNode(node) {
    if (!this.nodesObject[node]) {
      throw new Error("Node does not exist in the graph");
    }

    delete this.nodesObject[node];

    for (let n of Object.keys(this.nodesObject)) {
      this.nodesObject[n].links = this.nodesObject[n].links.filter(
        (item) => item !== node
      );
    }
  }

  // remove link between two nodes
  removeLink(node1, node2) {
    if (!this.nodesObject[node1] || !this.nodesObject[node2]) {
      throw new Error("Nodes do not exist in the graph");
    }

    this.nodesObject[node1].links = this.nodesObject[node1].links.filter(
      (item) => item !== node2
    );
    this.nodesObject[node2].links = this.nodesObject[node2].links.filter(
      (item) => item !== node1
    );
  }

  // To get all nodes data
  printGraph() {
    this.calculatePageRank();
    return this.nodesObject;
  }

  //calculate page rank mapping through the object
  calculatePageRank() {
    for (let items in this.nodesObject) {
      this.nodesObject[items].pageRank =
        this.nodesObject[items] && this.nodesObject[items].links.length;
    }
  }

  // to add a random node data
  addRandomData() {
    function generateRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    function generateRandomNodes(numNodes) {
      const nodesObject = {};

      for (let i = 1; i <= numNodes; i++) {
        const nodeName = `node${i}`;
        const links = [];

        for (let j = 1; j <= numNodes; j++) {
          if (i !== j && Math.random() < 0.3) {
            links.push(`node${j}`);
          }
        }

        nodesObject[nodeName] = {
          links,
          pageRank: Math.floor(Math.random() * 5) + 1,
          nodeColor: generateRandomColor(),
        };
      }

      return nodesObject;
    }

    // Generate data for 20 nodes and assign it to this.nodesObject
    this.nodesObject = generateRandomNodes(20);
  }
}

module.exports = Graph;
