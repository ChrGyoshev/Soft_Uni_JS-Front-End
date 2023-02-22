function area(input) {
  if (typeof input === "number") {
    let pi = 3.14159265358979323846;
    let result = pi * input * input;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}

area(5);
