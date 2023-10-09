const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    character.classList.add("selected-action");
    const characterSelected = document.querySelector("selected-action");
    characterSelected.classList.remove("selected-action");
  });
});
