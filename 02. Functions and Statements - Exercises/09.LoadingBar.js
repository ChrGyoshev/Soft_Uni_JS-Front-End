function solve(num) {
  let percentage = num / 10;
  let arrPerc = [];
  if (percentage === 10) {
    console.log("100% completed");
  } else {
     arrPerc = `[${"%".repeat(percentage) + ".".repeat(10 - percentage)}]`;
  }
  console.log(`${num}% ${arrPerc}`)
  console.log('Still loading...');
}

solve(30);
