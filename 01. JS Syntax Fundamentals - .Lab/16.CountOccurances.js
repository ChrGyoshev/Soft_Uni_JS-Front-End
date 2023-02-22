function solve(text, word) {
  let counter = 0;
  text = text.split(" ");
  for (const x of text) {
    if (x === word) {
        counter += 1
    }
    
  }
  console.log(counter);
}

solve(
  "This is a word and it also is a sentence",

  "is"
);
