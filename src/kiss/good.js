function doStuff(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
