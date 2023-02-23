function PascalCase(text) {
  let regex = "[A-Z][a-z]*";

  let matches = text.matchAll(regex);
  let arr = [];

  for (word of matches) {
    arr.push(word);
  }
  console.log(arr.join(", "));
}

PascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
