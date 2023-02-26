function solve(arr) {
  arr.forEach((element) => {
        ele = element.toString().split('')
        eleReversed = [...ele].reverse()
        console.log(ele.every((value, index) => value === eleReversed[index])); 
  });
}

solve([123, 323, 421, 121]);
