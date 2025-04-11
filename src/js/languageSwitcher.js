export const changeLanguage = (lang) => {
  fetch(`./locale/${lang}.json`)
    .then(response => response.json())
    .then(strings => {
      const elements = document.querySelectorAll("[data-string-id]")
      elements.forEach(element => {
        const stringId = element.getAttribute("data-string-id")
        element.textContent = strings[stringId];
      })
      const placeholderElements = document.querySelectorAll("[data-placeholder-string-id]")
      placeholderElements.forEach(element => {
        const stringId = element.getAttribute("data-placeholder-string-id")
        element.placeholder = strings[stringId];
      })
      const html = document.querySelector("html")
      html.lang = lang;
    })
}
