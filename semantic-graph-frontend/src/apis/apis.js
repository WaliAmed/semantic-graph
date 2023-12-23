const apiUrl = import.meta.env.VITE_APP_API_URL;
console.log(apiUrl);
/**
 * Function to fetch nodes data from the API.
 * @returns {Promise} A promise that resolves to the fetched nodes data in JSON format.
 */
export const fetchNodesData = async () => {
  const response = await fetch(`${apiUrl}/graph/printGraph`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

/**
 * Function to add a node using provided node data to the API.
 * @param {Object} nodeData - The data of the node to be added.
 * @returns {Promise} A promise that resolves to the response JSON after adding the node.
 */
export const addNode = async (nodeData) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nodeData),
  };

  try {
    const response = await fetch(`${apiUrl}/graph/addNode`, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

/**
 * Function to add a link between nodes via the API.
 * @param {Object} nodes - The nodes between which the link needs to be added.
 * @returns {Promise} A promise that resolves to the response JSON after adding the link.
 */
export const addLink = async (nodes) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nodes),
  };

  try {
    const response = await fetch(`${apiUrl}/graph/addLink`, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

/**
 * Function to delete a node from the API.
 * @param {Object} node - The node to be deleted.
 * @returns {Promise} A promise that resolves to the response JSON after deleting the node.
 */
export const deleteNode = async ({ node }) => {
  const requestOptions = {
    method: "DELETE",
  };

  try {
    const response = await fetch(
      `${apiUrl}/graph/removeNode/` + node,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

/**
 * Function to remove a link between two nodes via the API.
 * @param {Object} node1 - The first node of the link to be removed.
 * @param {Object} node2 - The second node of the link to be removed.
 * @returns {Promise} A promise that resolves to the response JSON after removing the link.
 */
export const removeLink = async ({ node1, node2 }) => {
  const requestOptions = {
    method: "DELETE",
  };

  try {
    const response = await fetch(
      `${apiUrl}/graph/removeLink/${node1}/${node2}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
