import {changeLanguage} from "../languageSwitcher.js";

const langBody = document.querySelector(".header__lang");
const langButton = document.querySelector(".header__lang-button");
const langButtonText = document.querySelector(".header__lang-button-text")
const langDropdownButtons = document.querySelectorAll(".header__lang-dropdown-link");

export const initializeLanguageDropdown = () => {
  langBody.addEventListener('mouseenter', menuOpen);
  langBody.addEventListener('mouseleave', menuClose);
  langDropdownButtons.forEach(button => button.addEventListener("click", handleSelectItemClick))
}

function menuOpen() {
  langButton.classList.add('open');
  langBody.classList.add("open");
}

function menuClose() {
  langButton.classList.remove('open');
  langBody.classList.remove("open");
}

function handleSelectItemClick(event) {
  langButtonText.innerText = event.target.innerText;
  changeLanguage(langButtonText.innerText.toLowerCase());
}
