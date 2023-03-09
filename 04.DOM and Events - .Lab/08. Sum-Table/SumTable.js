function sumTable() {
  let products = document.getElementsByTagName("tr");
  let sum = 0;
  for (let i = 1; i < products.length; i++) {
    sum += Number(products[i].children[1].innerText);
  }

  let result = (document.getElementById("sum").innerText = sum);
}
