function solve(number, first, second, third, fourth, fifth) {
  let operations = [first, second, third, fourth, fifth];
  let num = Number(number);
  let result = num;

  for (const operation of operations) {
    if (operation === "chop") {
      console.log((num = num / 2));
    } else if (operation === "dice") {
      console.log((num = Math.sqrt(num)));
    } else if (operation === "spice") {
      console.log((num = num + 1));
    } else if (operation === "bake") {
      console.log((num = num * 3));
    } else if (operation === "fillet") {
      console.log((num = num * 0.8));
    }
  }
}

solve("9", "dice", "spice", "chop", "bake", "fillet");
