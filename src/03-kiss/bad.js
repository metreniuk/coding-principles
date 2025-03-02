function doStuff(arr) {
  const items = [];
  for (let i = 0; i < arr.length; i++) {
    if (!items.includes(arr[i])) {
      items.push(arr[i]);
    }
  }
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[i]) {
        [items[i], items[j]] = [items[j], items[i]];
      }
    }
  }
  return items;
}
