function solve(integer) {
    
    let sum = 0
  arr = Array.from(String(integer), Number);

  for (const num of arr) {
    sum += num
    
  }
  console.log(arr.every( (val, i, arr) => val === arr[0] ) )
  console.log(sum);

}

solve(2222222);
