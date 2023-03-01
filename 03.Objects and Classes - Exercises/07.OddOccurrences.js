function solve(input) {
  let text = input.split(" ").map((x) => x.toLowerCase());
  let result = [];

  text.forEach((word) => {
    let counter = text.filter((currentEle) => currentEle === word).length;
    if (counter % 2 != 0 && !result.includes(word)) {
      result.push(word);
    }
  });
  console.log(result.join(" "));
}
