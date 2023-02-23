function vacation(groupOfPeople, groupType, dayOfTheWeek) {
  let total_price = 0;

  if (groupType === "Students") {
    if (dayOfTheWeek === "Friday") {
      total_price = groupOfPeople * 8.45;
    } else if (dayOfTheWeek === "Saturday") {
      total_price = groupOfPeople * 9.8;
    } else if (dayOfTheWeek === "Sunday") {
      total_price = groupOfPeople * 10.46;
    }
    if (groupOfPeople >= 30) {
      total_price = total_price * 0.85;
    }
  } else if (groupType === "Business") {
    if (groupOfPeople >= 100) {
      groupOfPeople -= 10;
    }
    if (dayOfTheWeek === "Friday") {
      total_price = groupOfPeople * 10.9;
    } else if (dayOfTheWeek === "Saturday") {
      total_price = groupOfPeople * 15.6;
    } else if (dayOfTheWeek === "Sunday") {
      total_price = groupOfPeople * 16;
    }
  } else if (groupType === "Regular") {
    if (dayOfTheWeek === "Friday") {
      total_price = groupOfPeople * 15;
    } else if (dayOfTheWeek === "Saturday") {
      total_price = groupOfPeople * 20;
    } else if (dayOfTheWeek === "Sunday") {
      total_price = groupOfPeople * 22.5;
    }
    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
      total_price = total_price * 0.95;
    }
  }

  console.log(`Total price: ${total_price.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
    );
