// Write your code below:
const heading = document.createElement('h3');
const text = document.createTextNode('Buy high quality organic fruits online');

heading.appendChild(text);
heading.style.fontStyle = 'italic';

const para = document.createElement('p');
const content = document.createTextNode('Total fruits: 4');


const fruits = document.querySelector('.fruits');






const divs = document.getElementsByTagName('Div');

const firstdiv = divs[0];
firstdiv.appendChild(heading);

const seconddiv = divs[1];
para.appendChild(content);
seconddiv.insertBefore(para, fruits);
para.id = 'fruits-total';




