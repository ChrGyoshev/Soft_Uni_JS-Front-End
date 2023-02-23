function solve(text) {
  textArr = text.split(" ");

  for (let word of textArr) {
    if (word.startsWith("#") && word.length > 1) {
      let flag = true;
      let wordToLower = word.toLowerCase();
      for (let i = 1; i < wordToLower.length; i++) {
        if (wordToLower.charCodeAt(i) < 97 || wordToLower.charCodeAt(i) > 122) {
          flag = false;
          break;
        }
      }
      if (flag) {
        console.log(word.split("#")[1]);
      }
    }
  }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
