function solve(num) {
  for (let index = 0; index < num; index++) {
    let output = "";
    for (let j = 0; j < num; j++) {
      output += num.toString() + " ";
    }
     console.log(output);
  }
 
}

solve(3);
