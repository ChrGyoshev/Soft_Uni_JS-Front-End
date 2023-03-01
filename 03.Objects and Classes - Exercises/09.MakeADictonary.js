function dictonary(input) {
  let library = {};
  input.forEach((element) => {
    currentObject = JSON.parse(element);
    library[Object.keys(currentObject)] = Object.values(currentObject);
  });
  let sorted = Object.keys(library).sort();

  for (const element of sorted) {
    console.log(`Term: ${element} => Definition: ${library[element]}`);
  }
}
