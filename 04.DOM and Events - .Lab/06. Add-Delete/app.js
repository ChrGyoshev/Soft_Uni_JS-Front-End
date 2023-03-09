function addItem() {
  let newElement = document.getElementById("newItemText");
  let items = document.getElementById("items");

  newLi = document.createElement("li");
  newLi.innerText = newElement.value;

  let removed = document.createElement("a");
  removed.innerText = "[Deleted]";
  removed.href = "#";
  removed.addEventListener("click", (e) => e.currentTarget.parentNode.remove());

  newLi.appendChild(removed);
  items.appendChild(newLi);
}
