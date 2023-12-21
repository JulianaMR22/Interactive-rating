let mainSection = document.getElementById("mainSection");
let secondSection = document.getElementById("secondSection");
let btn__submit = document.getElementById("btn__submit");
let punctuation = document.getElementById("punctuation");
const buttons = document.querySelectorAll(
  ".main__container__circles .main__section__circle"
);
let calificacionBaja = parseInt(buttons[0].textContent);
let calificacionMediobaja = parseInt(buttons[1].textContent);
let calificacionRegular = parseInt(buttons[2].textContent);
let calificacionBuena = parseInt(buttons[3].textContent);
let calificacionExcelente = parseInt(buttons[4].textContent);

btn__submit.addEventListener("click", () => {
  mainSection.classList.add("subsection__hidden");
  mainSection.classList.remove("subsection__visible");
  secondSection.classList.add("subsection__visible");
  secondSection.classList.remove("subsection__hidden");
});

buttons[0].addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active__states");
  });
  buttons[0].classList.add("active__states");
  // btnTwo.classList.remove("active__states");
  // btnThree.classList.remove("active__states");
  // btnFour.classList.remove("active__states");
  // btnFive.classList.remove("active__states");
  punctuation.textContent = `you selected ${calificacionBaja} out of 5`;
});
buttons[1].addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active__states");
  });
  buttons[1].classList.add("active__states");
  punctuation.textContent = `you selected ${calificacionMediobaja} out of 5`;
});
buttons[2].addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active__states");
  });
  buttons[2].classList.add("active__states");
  punctuation.textContent = `you selected ${calificacionRegular} out of 5`;
});
buttons[3].addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active__states");
  });
  buttons[3].classList.add("active__states");
  punctuation.textContent = `you selected ${calificacionBuena} out of 5`;
});
buttons[4].addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active__states");
  });
  buttons[4].classList.add("active__states");
  punctuation.textContent = `you selected ${calificacionExcelente} out of 5`;
});
