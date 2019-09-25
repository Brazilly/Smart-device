"use strict";
var body = document.querySelector("body");
var introLinkMobile = document.querySelector(".main-intro__link--mobile");
var introLinkTablet = document.querySelector(".main-intro__link--tablet");
var callLink = document.querySelector(".page-header__link--call");
var modalCallTemplate = document.querySelector("#modal-call").content.querySelector(".modal-call");

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Открытие модального окна
var openModalCall = function () {
  var modalCall = modalCallTemplate.cloneNode(true);
  body.appendChild(modalCall);

  var firstInput = modalCall.querySelector(".modal-call__input--first");
  firstInput.focus();

  var buttonClose = modalCall.querySelector(".modal-call__button-close");

  // Скрытие окна при нажатии на кнопку-крестик клавишей ENTER
  var onButtonCloseEnterPress = function () {
    if (event.keyCode === ENTER_KEYCODE) {
      body.removeChild(modalCall);
    }
    buttonClose.removeEventListener("keydown", onButtonCloseEnterPress);
    document.removeEventListener("keydown", onDocumentEscPress);
  };
  buttonClose.addEventListener("keydown", onButtonCloseEnterPress);

  // Скрытие окна при нажатии ESC
  var onDocumentEscPress = function () {
    if (event.keyCode === ESC_KEYCODE) {
      body.removeChild(modalCall);
    }
    document.removeEventListener("keydown", onDocumentEscPress);
  };
  document.addEventListener("keydown", onDocumentEscPress);

// Скрытие окна при нажатии на область вне окна
  var wrapper = document.querySelector(".modal-call__wrapper");

  var onWrapperClick = function () {
    body.removeChild(modalCall);
    wrapper.removeEventListener("click", onWrapperClick);
    document.removeEventListener("keydown", onDocumentEscPress);
  };
  wrapper.addEventListener("click", onWrapperClick);

// Скрытие окна при нажатии на кнопку-крестик мышью
var onButtonClose = function () {
  body.removeChild(modalCall);
  buttonClose.removeEventListener("click", onButtonClose);
  document.removeEventListener("keydown", onDocumentEscPress);
};
buttonClose.addEventListener("click", onButtonClose);
};

callLink.addEventListener("click", openModalCall);
introLinkMobile.addEventListener("click", openModalCall);
introLinkTablet.addEventListener("click", openModalCall);
