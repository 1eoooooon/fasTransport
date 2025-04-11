const select = document.querySelector(".order__form-type-of-transport-select");
const selectHeader = select.querySelector(".order__form-type-of-transport-select__header");
const formBody = document.querySelector(".order__form-body")
const selectItem = select.querySelectorAll(".order__form-type-of-transport-select__item")
const transportInput = document.querySelector("#type-of-transport-input");
const currentItem = document.querySelector('.order__form-type-of-transport-select__current')

export const initializeFormDropdown = () => {
  document.addEventListener("click", closeSelectDropdown)
  select.addEventListener("click", event => event.stopPropagation())
  selectHeader.addEventListener("click", toggleSelectDropdown)
  formBody.addEventListener("click", closeSelectDropdownOnFormClick)
  selectItem.forEach(item => item.addEventListener("click", handleSelectItemClick))
}

function closeSelectDropdown() {
  select.classList.remove("open");
}

function toggleSelectDropdown() {
  select.classList.toggle("open");
}

function closeSelectDropdownOnFormClick() {
  select.classList.remove("open");
}

function handleSelectItemClick(event) {
  currentItem.innerText = event.target.innerText;
  transportInput.value = event.target.dataset.value;
  select.classList.remove("open");
}
