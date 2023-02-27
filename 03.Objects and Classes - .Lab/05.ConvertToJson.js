function solve(firstName, secondName, hairColor) {
  let person = { name: firstName, lastName: secondName, hairColor: hairColor };
  console.log(JSON.stringify(person));
}

solve("George", "Jones", "Brown");
