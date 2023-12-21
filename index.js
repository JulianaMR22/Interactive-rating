let mainSection = document.getElementById("mainSection");
let secondSection = document.getElementById("secondSection");
let btn__submit = document.getElementById("btn__submit");
let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let btnFive = document.getElementById("btnFive");
let punctuation = document.getElementById("punctuation");
let calificacionBaja = parseInt(btnOne.textContent);
let calificacionMediobaja = parseInt(btnTwo.textContent);
let calificacionRegular = parseInt(btnThree.textContent);
let calificacionBuena = parseInt(btnFour.textContent);
let calificacionExcelente = parseInt(btnFive.textContent);

btn__submit.addEventListener("click", () => {
  mainSection.classList.add("subsection__hidden");
  mainSection.classList.remove("subsection__visible");
  secondSection.classList.add("subsection__visible");
  secondSection.classList.remove("subsection__hidden");
});

btnOne.addEventListener("click", () => {
  btnOne.style.backgroundColor = "hsl(25, 97%, 53%)";
  punctuation.textContent = `you selected ${calificacionBaja} out of 5`;
});
btnTwo.addEventListener("click", () => {
  btnTwo.style.backgroundColor = "hsl(25, 97%, 53%)";
  punctuation.textContent = `you selected ${calificacionMediobaja} out of 5`;
});
btnThree.addEventListener("click", () => {
  btnThree.style.backgroundColor = "hsl(25, 97%, 53%)";
  punctuation.textContent = `you selected ${calificacionRegular} out of 5`;
});
btnFour.addEventListener("click", () => {
  btnFour.style.backgroundColor = "hsl(25, 97%, 53%)";
  punctuation.textContent = `you selected ${calificacionBuena} out of 5`;
});
btnFive.addEventListener("click", () => {
  btnFive.style.backgroundColor = "hsl(25, 97%, 53%)";
  punctuation.textContent = `you selected ${calificacionExcelente} out of 5`;
});
