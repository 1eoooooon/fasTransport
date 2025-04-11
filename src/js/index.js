import {changeLanguage} from './languageSwitcher.js'
import {initializeLanguageDropdown} from './header/languageDropdown.js'
import {initializeBurger} from './header/burgerMenu.js'
import {initializeForm} from './form/form.js'
import {initializeFormDropdown} from './form/formDropdownField.js'
import {initializeSubmitForm} from "./form/submitForm.js";
import {swiper} from "./slider/initializeSlider.js";

initializeLanguageDropdown()
initializeBurger()
initializeForm()
initializeFormDropdown()
initializeSubmitForm()
changeLanguage("en")
