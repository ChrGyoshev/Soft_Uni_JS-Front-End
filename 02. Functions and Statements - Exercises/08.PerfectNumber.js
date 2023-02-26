function perfectNum(number) {
  let divisors = [];
  let sum = 0;

  for (let index = 1; index < number; index++) {
    if (number % index === 0) {
      divisors.push(index);
    }
  }
  divisors.map((x) => (sum += x));
  console.log(
    sum === number ? "We have a perfect number!" : "It's not so perfect."
  );
}

perfectNum(1236498);
