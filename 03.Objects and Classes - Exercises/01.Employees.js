function employees(data) {
  let collection = {};

  for (const element of data) {
    console.log(`Name:${element} -- Personal Number: ${element.length}`);
  }
}
