const chars = document.querySelectorAll(".character");

chars.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const selected = document.querySelector(".select");
    character.classList.add("select");
    selected.classList.remove("select");

    const imageSelected = document.querySelector(".character-main");

    const idChars = character.attributes.id.value;
    console.log(idChars);
    imageSelected.src = `./src/img/character/character-${idChars}.png`;

    const nameCharacter = document.getElementById("character-name");
    nameCharacter.innerText = character.getAttribute("data-name");
  });
});
