function addItem() {
  let read = document.getElementById("newItemText").value;

  let newItem = document.createElement("li");
  newItem.innerText = read;

  let items = document.getElementById("items");
  items.appendChild(newItem);
}
