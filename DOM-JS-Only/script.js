
let body = document.querySelector('body');
let cardbox = document.createElement('div');
let buttonAdd = document.createElement('button');
let buttonDel = document.createElement('button');

buttonAdd.id = 'add';
body.append(buttonAdd);

buttonAdd.innerHTML = "Add Card";
buttonAdd.style.padding = '10px';
buttonAdd.style.margin = '10px';
buttonAdd.style.backgroundColor = 'blue';
buttonAdd.style.color = 'white';
buttonAdd.style.borderRadius = '5px';
buttonAdd.style.border = 'none';
buttonAdd.style.display = 'flex';

body.append(cardbox);
cardbox.classList.add('card');


body.style.justifyItems = 'center';
let card = document.querySelector('.card');

card.style.width = "15vw"
card.style.height = "30vh";
card.style.border = "none"
card.style.borderRadius = "10px";
card.style.padding = "10px";
card.style.marginTop = "10px";
card.style.boxShadow = "0 5px 10px rgb(88, 86, 86)"
card.style.fontSize = "1.5rem";
let title = document.createElement('h1');


title.classList.add = 'title';
card.append(title);

title.innerHTML = 'Product name';
title.style.fontSize = "3.5rem";
title.style.fontFamily = "sans-serif";
title.style.color = "gray";

let sub = document.createElement('p');
sub.classList.add('subtext');

card.appendChild(sub);

sub.style.fontFamily = "sans-serif";
sub.innerHTML = 'This is the subText'

card.appendChild(buttonDel);
buttonDel.innerHTML = "Delete Card";
buttonDel.style.padding = '10px';
buttonDel.style.marginTop = '40px';
buttonDel.style.backgroundColor = 'Red';
buttonDel.style.color = 'white';
buttonDel.style.borderRadius = '5px';
buttonDel.style.border = 'none';
buttonDel.style.display = 'flex';


