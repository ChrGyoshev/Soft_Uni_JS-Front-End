function solve(arr) {
  let newArray = arr.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < newArray.length; i++) {
    console.log(`${i+1}.${arr[i]}`);
  }
}

solve(["John", "Bob", "Christina", "Ema"]);
