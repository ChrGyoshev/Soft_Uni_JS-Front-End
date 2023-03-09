function focused() {
  let data = Array.from(document.getElementsByTagName("input"));

  data.forEach((element) => {
    element.addEventListener("focus", function () {
      element.parentElement.classList.toggle("focused");
    });

    element.addEventListener("blur", function () {
      element.parentElement.classList.remove("focused");
    });
  });
}
