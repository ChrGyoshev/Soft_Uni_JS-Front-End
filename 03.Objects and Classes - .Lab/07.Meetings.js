function solve(data) {
  let schedule = {};
  for (const element of data) {
    [day, person] = element.split(" ");
    if (day in schedule) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      schedule[day] = person;
    }
  }

  for (const [day,person] of Object.entries(schedule)) {
    console.log(`${day} -> ${person}`)
    
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
