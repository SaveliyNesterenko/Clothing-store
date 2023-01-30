"use strict";
//ОТОБРАЖЕНИЕ СТОЛБЦА ВЫБОРА ПАРАМЕТРОВ////////////
let arrows = document.querySelectorAll(".arrow");

if (arrows.length > 0) {
  for (let index = 0; index < arrows.length; index++) {
    const arrow = arrows[index];
    arrow.addEventListener("click", function (e) {
      arrow.parentElement.classList.toggle("_active");
    });
  }
}
document.addEventListener("click", function (e) {
  if (!document.querySelector(".header-info__parametrs").contains(e.target)) {
    //  console.log("клик вне блока параметров");
    let parametrs = document.querySelectorAll(".header-info__parametr");
    parametrs.forEach((elem) => elem.classList.remove("_active"));
  } else {
    //  console.log("клик по блоку");
  }
});

// потеря фокуса/////////////////////////////

//ПЕРЕМЕННЫЕ
let parametrElements = document.querySelectorAll(".header-info__parametrs li ");
let ru = document.querySelector("#ru");
let en = document.querySelector("#en");
let dollar = document.querySelector("#dollar");
let rubl = document.querySelector("#rubl");
let language = document.querySelectorAll("._language");
let currency = document.querySelectorAll("._currency");
const parametrGroups = document.querySelectorAll(".header-info__parametr");

//ОБРАБОТЧИКИ СОБЫТИЙ
if (parametrElements.length > 0) {
  for (let index = 0; index < parametrElements.length; index++) {
    const element = parametrElements[index];
    element.addEventListener("click", function (e) {
      parametrGroups.forEach((el) => {
        el.classList.remove("_active");
      });
      switch (element.id) {
        case "rus":
          if (language.length > 0) {
            language.forEach((elem) => elem.classList.remove("_active"));
          }
          ru.classList.add("_active");
          break;
        case "eng":
          if (language.length > 0) {
            language.forEach((elem) => elem.classList.remove("_active"));
          }
          en.classList.add("_active");
          break;
        case "usd":
          if (currency.length > 0) {
            currency.forEach((elem) => elem.classList.remove("_active"));
          }
          dollar.classList.add("_active");
          break;
        case "rub":
          if (currency.length > 0) {
            currency.forEach((elem) => elem.classList.remove("_active"));
          }
          rubl.classList.add("_active");
      }
    });
  }
}
////////////////////////// МОДАЛЬНЫЕ ОКНА//////////////

//Переменные
let openModals = document.querySelectorAll(".open-modal");
let modals = document.querySelectorAll(".modal");

//обработчики событий
document.addEventListener("click", function (e) {
  let clickArray = [];
  for (let index = 0; index < openModals.length; index++) {
    const openModalButton = openModals[index];
    const el = openModalButton.contains(e.target);
    clickArray.push(el);
  }
  if (clickArray.includes(true) == false) {
    closeOpenModal();
  }
});

for (let index = 0; index < openModals.length; index++) {
  const openModalButton = openModals[index];
  openModalButton.addEventListener("click", function (e) {
    const modalElement = e.currentTarget.querySelector(".modal");
    if (!openModalButton.querySelector(".open")) {
      closeOpenModal();
    }
    openModal(modalElement);
    openModalButton.querySelector(".arrow").classList.toggle("_active");
  });
}

//Функции
function closeOpenModal() {
  for (let index = 0; index < openModals.length; index++) {
    const openModalButton = openModals[index];
    openModalButton.querySelector(".arrow").classList.remove("_active");
  }

  let opens = document.querySelectorAll(".open");
  for (let index = 0; index < opens.length; index++) {
    const open = opens[index];
    open.classList.remove("open");
  }
}
function openModal(modalElement) {
  modalElement.classList.toggle("open");
}

//СКРЫТИЕ И ОТОБРАЖЕНИЕ СЧЕТЧИКА УВЕДОМЛЕНИЯ//////
let quantitys = document.querySelectorAll(".quantity");
quantitys.forEach((el) => {
  if (el.innerHTML == 0) {
    el.parentElement.classList.add("none");
  }
});
