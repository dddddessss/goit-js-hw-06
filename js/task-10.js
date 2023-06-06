const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;
  let html = '';

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const color = getRandomHexColor();
    html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }

  boxesContainer.innerHTML = html;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}