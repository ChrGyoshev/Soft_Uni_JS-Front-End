function solve(currentStock, orderedStock) {
  let obj = {};

  for (let i = 0; i < currentStock.length; i += 2) {
    obj[currentStock[i]] = Number(currentStock[i + 1]);
  }

  for (let i = 0; i < orderedStock.length; i += 2) {
    let product = orderedStock[i];
    let quantity = Number(orderedStock[i + 1]);

    if (product in obj) {
      obj[product] += quantity;
    } else {
      obj[product] = quantity;
    }
  }

  for (const [product, quantity] of Object.entries(obj)) {
    console.log(`${product} -> ${quantity}`);
  }
}
