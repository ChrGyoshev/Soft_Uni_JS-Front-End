function solve(input) {
  let parking = new Set();

  for (let line of input) {
    [command, plate] = line.split(", ");
    if (command === "IN") {
      parking.add(plate);
    } else {
      parking.delete(plate);
    }
  }

  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let parkingSorted = Array.from(parking).sort();
    console.log(parkingSorted.join("\n"));
  }
}
