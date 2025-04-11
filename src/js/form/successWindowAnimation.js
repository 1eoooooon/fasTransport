const checkmarkAnimationElements = document.querySelectorAll("animate");
const circleAnimation = document.querySelector("circle");

export const initializeSuccessAnimation = () => {
circleAnimation.style.animation = "drawCircle 1.5s ease-in-out forwards";
  circleAnimation.style.opacity = "1";

  setTimeout(() => {
    checkmarkAnimationElements.forEach(element => element.beginElement())
  }, 1000)
}
