function colorize() {
  let items = document.getElementsByTagName("tr");

  for (let i = 1; i < items.length; i++) {
    if (i % 2 !== 0) {
      items[i].style.backgroundColor = "Teal";
    }
  }
}
