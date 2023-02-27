function solve(data) {
  let adressBook = {};

  for (const ele of data) {
    [name, adress] = ele.split(":");

    adressBook[name] = adress;
  }

  let sorted = Object.keys(adressBook)
    .sort()
    .reduce(function (result, key) {
      result[key] = adressBook[key];
      return result;
    }, {});
  

 for (const [name,adress] of Object.entries(sorted)) {
    console.log(`${name} -> ${adress}`);

    
 }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
