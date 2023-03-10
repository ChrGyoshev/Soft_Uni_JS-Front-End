function create(words) {
  let section = words;
  let content = document.getElementById("content");

  section.forEach((element) => {
    let word = document.createTextNode(element);
    console.log(word);
    let p = document.createElement("p");
    p.style.display = "none";
    p.appendChild(word);
    let div = document.createElement("div");
    div.appendChild(p);
    content.appendChild(div);
    div.addEventListener("click", (e) => {
      e.currentTarget.children[0].style.display = "block";
    });
  });
}
