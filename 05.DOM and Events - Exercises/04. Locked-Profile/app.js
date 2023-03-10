function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((btn) =>
    btn.addEventListener("click", onClick)
  );

  function onClick(e) {
    let profile = e.target.parentElement;
    let isActive = profile.querySelector('input[value="unlock"]').checked;

    if (isActive) {
      let paragraph = profile.querySelector("div");
      if (e.target.textContent === "Show more") {
        e.target.textContent = "Hide it";
        paragraph.style.display = "block";
      } else {
        e.target.textContent = "Show more";
        paragraph.style.display = "none";
      }
    }
  }
}
