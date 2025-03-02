function createRoute({ onGet, onPost, onPut, onDelete }) {
  // some code to create a route
  const route = {};
  return route;
}

// You are forced to implement all methods even if you don't need them
createRoute({
  onGet: () => console.log("GET"),
  onPost: () => console.log("POST"),
  onPut: () => console.log("PUT"),
  onDelete: () => console.log("DELETE"),
});
