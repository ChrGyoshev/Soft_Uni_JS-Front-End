function ticket(day, age) {
  if (age < 0 || age > 122) {
    console.log("Error!");
    return;
  }

  if (day === "Weekday") {
    if (0 <= age && 18 >= age) {
      console.log("12$");
    } else if (18 < age && 64 >= age) {
      console.log("18$");
    } else if (64 < age && 122 >= age) {
      console.log("12$");
    }
  }

  if (day === "Weekend") {
    if (0 <= age && 18 >= age) {
      console.log("15$");
    } else if (18 < age && 64 >= age) {
      console.log("20$");
    } else if (64 < age && 122 >= age) {
      console.log("15$");
    }
  }


  if (day === "Holiday") {
    if (0 <= age && 18 >= age) {
      console.log("5$");
    } else if (18 < age && 64 >= age) {
      console.log("12$");
    } else if (64 < age && 122 >= age) {
      console.log("10$");
    }
  }
}

