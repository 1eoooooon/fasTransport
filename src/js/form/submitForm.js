import {initializeSuccessFormWindow} from './formSuccessWindow.js'

const button = document.querySelector(".order__form-button");
const orderForm = document.forms.orderForm;
const orderFormUploadLocationInput = orderForm.uploadLocation;
const orderFormEmailInput = orderForm.email;
const invalidErrorBody = document.querySelector(".order-form-submit-error");
const invalidErrorButton = document.querySelector(".order-form-submit-error__button");
const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const invalidEmailErrorText = document.querySelector(".order__form-email-invalid");
let invalid = false;

export const initializeSubmitForm = () => {
  button.addEventListener("click", validateFormFields)
  orderFormUploadLocationInput.addEventListener("input", removeFieldInvalidColorUploadLocation)
  orderFormEmailInput.addEventListener("input", removeFieldInvalidColorEmail)
  invalidErrorButton.addEventListener("click", closeWarningWindowOnButtonClick)
}

function validateFormFields() {
  invalid = false;
  emptyFormFieldUploadLocation()
  emptyFormFieldEmail()
  if (invalid) {
    initializeWarningWindow()
  } else {
    successValidateForm()
  }
  closeWarningWindowOnButtonClick()
}

function emptyFormFieldUploadLocation() {
  if (!orderFormUploadLocationInput.value) {
    orderFormUploadLocationInput.classList.add("input-invalid")
    invalid = true;
  }
}

function emptyFormFieldEmail() {
  if (!orderFormEmailInput.value || !validateEmail.test(orderFormEmailInput.value)) {
    orderFormEmailInput.classList.add("input-invalid");
    invalidEmailErrorText.style.opacity = "1";
    invalid = true;
  }
}

function initializeWarningWindow(event) {
    invalidErrorBody.style.opacity = "1";
    invalidErrorBody.style.pointerEvents = "auto";
    setTimeout(() => {
      invalidErrorBody.style.opacity = "0";
      invalidErrorBody.style.pointerEvents = "none";
    }, 4000)
    event.preventDefault();
}

function successValidateForm(event) {
  if (orderFormUploadLocationInput.value && orderFormEmailInput.value) {
    // orderForm.submit()
    invalidErrorBody.style.opacity = "0";
    initializeSuccessFormWindow()
    event.preventDefault()
  }
}

function removeFieldInvalidColorUploadLocation() {
  orderFormUploadLocationInput.classList.remove("input-invalid")
}

function removeFieldInvalidColorEmail() {
  orderFormEmailInput.classList.remove("input-invalid")
  invalidEmailErrorText.style.opacity = "0";
}

function closeWarningWindowOnButtonClick(event) {
  event.stopPropagation()
  invalidErrorBody.style.opacity = "0";
}
