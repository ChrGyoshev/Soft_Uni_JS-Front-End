function wordTracker(input) {
  let words = input.shift().split(" ");
  let result = [];

  words.forEach((word) => {
    let count = input.filter((currentElement) => currentElement == word).length;
    result.push({ word, count });
  });

  result.sort((a, b) => b.count - a.count);

  result.forEach((word) => {
    console.log(`${word.word} - ${word.count}`);
  });
}
