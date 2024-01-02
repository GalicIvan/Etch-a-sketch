const gridItem = document.createElement('div');
const gridContainer = document.querySelector('.grid-container');
const gridContainer2 = document.querySelector('.grid-container2');
const button = document.querySelector('#button')


  // Create a 16x16 grid
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add('hovered') 
    })
    
    gridContainer.appendChild(gridItem);
}

let num

function clickedButton() {

  // TODO: overrideat gornji grid i vidit zasto tek iz treceg radi

  button.addEventListener('click', () => {
    num = prompt('Enter a number: ')
  })
  let num2 = parseInt(num, 10)
  
  for (let i = 0; i < num2 * num2; i++) {
    const gridItem = document.createElement('div');
    gridItem.style.cssText = `width: calc(100% / ${num2} )`;
    gridItem.classList.add('grid-item')
    
    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add('hovered') 
    })
    
    gridContainer2.appendChild(gridItem);
  }
}

