function addItem() {
  const text = document.getElementById("newItemText").value;
  const value = document.getElementById("newItemValue").value;

  if (text.length <= 0 || value.length <= 0) {
    return;
  }

  let option = document.createElement("option");
  option.className = "menu";
  option.textContent = text;
  option.value = value;
  console.log(option);

  let select = document.getElementById("menu");
  select.appendChild(option);

  document.getElementById("newItemText").value = "";
  document.getElementById("newItemValue").value = "";
}
