const gridContainer = document.querySelector('.grid-container');
const button = document.querySelector('#button')
const button2 = document.querySelector('#button2')
let num
let num2 = 16

for (let i = 0; i < num2 * num2; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.style.cssText = `width: calc(100% / ${num2});`

  gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('hovered') 
  })

  button2.addEventListener('click', () => {
    gridItem.classList.remove('hovered')
  })
  
  gridContainer.appendChild(gridItem);
}

function drawSecondGrid() {
for (let i = 0; i < num2 * num2; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.style.cssText = `width: calc(100% / ${num2});`

  gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('hovered') 
  })

  button2.addEventListener('click', () => {
    gridItem.classList.remove('hovered')
  })
  
  gridContainer.appendChild(gridItem);
}}

button.addEventListener('click', () => {
    gridContainer.innerHTML = ''
    num = prompt('Enter a number: ')
    num2 = 0
    num2 = parseInt(num, 10)
    drawSecondGrid()
  })