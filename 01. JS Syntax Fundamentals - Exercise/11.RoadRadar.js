function solve(speed, area) {
  const motorway = 130;
  const interstate = 90;
  const city = 50;
  const residential = 20;

  let status = "";
  let speed_over = 0;

  if (area === "motorway") {
    if (speed <= 130) {
      console.log(`Driving ${speed} km/h in a ${motorway} zone`);
    } else {
      speed_over = speed - motorway;
      if (speed - motorway <= 20) {
        status = "speeding";
      } else if (speed - motorway <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${speed_over} km/h faster than the allowed speed of ${motorway} - ${status}`
      );
    }
  }

  if (area === "interstate") {
    if (speed <= 90) {
      console.log(`Driving ${speed} km/h in a ${interstate} zone`);
    } else {
      speed_over = speed - interstate;
      if (speed - interstate <= 20) {
        status = "speeding";
      } else if (speed - interstate <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${speed_over} km/h faster than the allowed speed of ${interstate} - ${status}`
      );
    }
  }

  if (area === "city") {
    if (speed <= 50) {
      console.log(`Driving ${speed} km/h in a ${city} zone`);
    } else {
      speed_over = speed - city;
      if (speed - city <= 20) {
        status = "speeding";
      } else if (speed - city <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${speed_over} km/h faster than the allowed speed of ${city} - ${status}`
      );
    }
  }

  if (area === "residential") {
    if (speed <= 20) {
      console.log(`Driving ${speed} km/h in a ${residential} zone`);
    } else {
      speed_over = speed - residential;
      if (speed - residential <= 20) {
        status = "speeding";
      } else if (speed - residential <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${speed_over} km/h faster than the allowed speed of ${residential} - ${status}`
      );
    }
  }
}

solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
