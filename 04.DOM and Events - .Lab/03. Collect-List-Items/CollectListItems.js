function extractText() {
  let items = document.getElementById("items").children;
  let textArea = document.getElementById("result");
  for (const item of items) {
    textArea.value += item.innerText + "\n";
  }
}
