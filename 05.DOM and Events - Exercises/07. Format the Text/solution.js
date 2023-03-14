function solve() {
  let textArea = document
    .getElementById("input")
    .value.split(".")
    .filter((e) => e !== "");

  let output = document.getElementById("output");

  while (textArea.length > 0) {
    debugger;
    let text = textArea.splice(0, 3).join(".") + ".";
    let p = document.createElement("p");
    p.textContent = text;
    output.appendChild(p);
  }
}
