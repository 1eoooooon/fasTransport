import {initializeSuccessAnimation} from './successWindowAnimation.js'

const successWindowBody = document.querySelector(".order__form-success-body");
const formBody = document.querySelector(".order__form-body");
const formBackground = document.querySelector(".order");
const successFormButtonCancel = document.querySelector(".order__form-success-body-button-cancel");

export const initializeSuccessFormWindow = () => {
  initializeSuccessAnimation()
  formBackground.addEventListener('click', closeFormOnBackgroundClick)
  successFormButtonCancel.addEventListener('click', closeSuccessFormOnButtonCancelClick)

formBody.style.opacity = "0";
  successWindowBody.classList.add("open")
}

function closeFormOnBackgroundClick() {
  formBackground.classList.remove('form-open')
}

function closeSuccessFormOnButtonCancelClick() {
  formBackground.classList.remove('form-open')
}
