const buttons = document.querySelectorAll(".button-open-order-form");
const formBackground = document.querySelector(".order");
const form = document.querySelector(".order__form-body");
const formButtonCancel = document.querySelector(".order__form-button-cancel");
const body = document.querySelector("body")

export const initializeForm = () => {
  buttons.forEach(button => button.addEventListener('click', toggleForm))
  formBackground.addEventListener('click', closeFormOnBackgroundClick)
  form.addEventListener('click', event => event.stopPropagation())
  formButtonCancel.addEventListener("click", closeFormOnButtonCancelClick)
}

function toggleForm() {
  formBackground.classList.toggle('form-open');
  body.style.overflow = formBackground.classList.contains('form-open') ? 'hidden' : 'visible';
}

function closeFormOnBackgroundClick() {
  formBackground.classList.remove('form-open');
  document.body.style.overflow = 'visible';
}

function closeFormOnButtonCancelClick() {
  formBackground.classList.remove('form-open');
  document.body.style.overflow = 'visible';
}
