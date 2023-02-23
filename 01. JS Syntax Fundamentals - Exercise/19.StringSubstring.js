function solve(word, text) {
  textArray = text.split(" ");
  word_found = false;

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].toLowerCase() === word) {
      console.log(word);
      word_found = true;
      break;
    }
  }
  if (!word_found) {
    console.log(`${word} not found!`);
  }
}
