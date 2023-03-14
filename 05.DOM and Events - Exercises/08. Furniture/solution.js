function solve() {
  genBtn = document
    .querySelectorAll("button")[0]
    .addEventListener("click", generate);

  buyBtn = document
    .querySelectorAll("button")[1]
    .addEventListener("click", buy);

  function generate() {
    let data = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let table = document.querySelector("tbody");

    for (let furniture of data) {
      let tr = document.createElement("tr");

      // Image

      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = furniture.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      // name
      let td2 = document.createElement("td");
      let p1 = document.createElement("p");
      p1.textContent = furniture.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      // price

      let td3 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.textContent = furniture.price;
      td3.appendChild(p2);
      tr.appendChild(td3);
      // decFactor

      let td4 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.textContent = furniture.decFactor;
      td4.appendChild(p3);
      tr.appendChild(td4);
      // mark

      let td5 = document.createElement("td");
      let inputBox = document.createElement("input");
      inputBox.type = "checkbox";
      td5.appendChild(inputBox);
      tr.appendChild(td5);

      table.appendChild(tr);
    }
  }

  function buy() {
    let checked = Array.from(
      document.querySelectorAll("tbody tr td input")
    ).filter((e) => e.checked);
    let output = document.querySelectorAll("textarea")[1];
    let boughtItems = [];
    let totalPrice = 0;
    let avgDec = 0;

    checked.forEach((element) => {
      let currElement = element.parentElement.parentElement;
      boughtItems.push(currElement.querySelectorAll("td")[1].innerText);
      totalPrice += Number(currElement.querySelectorAll("td")[2].innerText);
      avgDec += Number(currElement.querySelectorAll("td")[3].innerText);
    });
    output.textContent = `Bought furniture: ${boughtItems.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
      avgDec / boughtItems.length
    }`;
  }
}
