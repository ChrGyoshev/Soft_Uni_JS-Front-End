function solve(a, b) {
  let firstAscii = a.charCodeAt(0);
  let secondAscii = b.charCodeAt(0);
  let result = []

  if (firstAscii < secondAscii) {
    for (let i = firstAscii + 1; i < secondAscii; i++) {
      result.push((String.fromCharCode(i)));
    }
  } else {
    for (let i = secondAscii + 1; i < firstAscii; i++) {
      result.push((String.fromCharCode(i)));
    }
  }
  console.log(result.join(' '));
}
solve('a',
'd'
);
