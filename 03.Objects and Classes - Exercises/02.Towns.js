function solve(data) {
  let obj = {};

  for (const element of data) {
    token = element.split(" | ");
    obj.town = token[0];
    obj.latitude = Number(token[1]).toFixed(2);
    obj.longitude = Number(token[2]).toFixed(2);
    console.log(obj);
  }
}
