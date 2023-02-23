function reveal(words, text) {
  let wordsArr = words.split(", ");
  let textArr = text.split(" ");

  a = 2;

  for (const word of wordsArr) {
    for (const element of textArr) {
      if (element.includes("*") && element.length === word.length) {
        text = text.replace(element, word);
      }
    }
  }
  console.log(text);
}

reveal(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
