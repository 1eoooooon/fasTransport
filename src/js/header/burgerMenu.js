const burgerBody = document.querySelector(".header__burger")
const burgerButton = burgerBody.querySelector(".header__burger-button")
const burgerButtonNavigation = burgerBody.querySelectorAll(".header__nav-link")

export const initializeBurger = () => {
  document.addEventListener("click", closeBurger)
  burgerBody.addEventListener("click", event => event.stopPropagation())
  burgerButton.addEventListener("click", toggleBurgerMenu)
  burgerButtonNavigation.forEach(button => button.addEventListener("click", closeBurgerNavClick))
}

function closeBurger() {
  burgerBody.classList.remove('burger-open')
}

function toggleBurgerMenu() {
  burgerBody.classList.toggle('burger-open')
}

function closeBurgerNavClick() {
  burgerBody.classList.remove('burger-open')
}
