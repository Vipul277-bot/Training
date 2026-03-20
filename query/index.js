// Write the code as shown in the video below:

// Write answer to the questions asked below:
const header = document.querySelector('#header');
header.style.textAlign = 'right';
header.style.borderRadius = '3px';
header.style.leftMargin = '20px';

const heading2 = document.querySelector('#basket-heading');
heading2.style.color = 'brown';
heading2.style.marginLeft = '30px';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '70%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruit = document.querySelectorAll('.fruit');

for (let i = 0; i < fruit.length; i++){
    fruit[i].style.backgroundColor = 'lightgray';
    fruit[i].style.padding = '10px';
    fruit[i].style.margin = '10px';
    fruit[i].style.borderRadius = '5px';
}

const oddfruit = document.querySelectorAll('.fruit:nth-child(even)');

for (let i = 0; i < oddfruit.length; i++){
    oddfruit[i].style.backgroundColor = 'brown';
    oddfruit[i].style.color = 'white';
}

