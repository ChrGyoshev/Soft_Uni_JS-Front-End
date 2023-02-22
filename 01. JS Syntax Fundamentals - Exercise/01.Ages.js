function ages(age) {
  let result = null;
  if (0 <= age && 2 >= age) {
    result = "baby";
  } else if (3 <= age && 13 >= age) {
    result = "child";
  } else if (14 <= age && 19 >= age) {
    result = 'teenager'
  } else if (20 <= age && 65 >= age) {
    result = 'adult'
  } else if (age >= 66) {
    result = 'elder'
  } else {
    result = 'out of bounds'
  }

  console.log(result);
}

ages(100);
