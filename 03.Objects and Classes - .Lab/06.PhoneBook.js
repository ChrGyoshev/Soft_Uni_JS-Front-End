function solve(data) {
  let phoneBook = {};

  for (const iterator of data) {
    [username, phone] = iterator.split(" ");
    phoneBook[username] = phone;
  }
  for (const [key, value] of Object.entries(phoneBook)) {
    console.log(`${key} -> ${value}`)
  }
}

solve([
  "Tim 0834212554",
  "Tim 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
