function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let info = Array.from(document.querySelectorAll("tbody tr td"));
    let searched = document.getElementById("searchField");

    info.forEach((element) => {
      element.parentElement.classList.remove("select");
    });

    info.forEach((element) => {
      if (element.textContent.includes(searched.value)) {
        element.parentElement.classList.add("select");
      }
    });
    searched.value = "";
  }
}
