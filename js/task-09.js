function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const elements = {
  textColor: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
  body: document.body
};

elements.changeColorBtn.addEventListener('click', handlerChangeColor);

function handlerChangeColor() {
  elements.textColor.textContent = elements.body.style.backgroundColor = getRandomHexColor();
};