function solve(arr, step) {
  let newArray = [];
   for (let i = 0; i < arr.length; i+=step) {
    newArray.push(arr[i])
   }
   return newArray
}

solve(["5", "20", "31", "4", "20"], 2);
