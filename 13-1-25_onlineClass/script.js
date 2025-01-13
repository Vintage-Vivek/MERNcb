// const heading = document.getElementById('heading');
// console.log(heading);

// const paraclass = document.getElementsByClassName('paraclass')
// console.log(paraclass[0]);

// const heading = document.getElementById('heading');
// console.log(heading.textContent); // textContent linkhte hain print karwane k liye

// const anything = document.getElementById('newId');
// console.log(newID);

// const paraclass = document.getElementsByClassName('paraclass');
// console.log(paraclass.textContent);
// for(let i = 0; i < paraclass.length; i++){
//     console.log(paraclass[i].textContent);
// }

// const tagName = document.getElementsByTagName('p');


// for(let i = 0;i < tagName.length; i++){
//     console.log(tagName[i].textContent);
// }

// const heading = document.querySelector('#heading');
// console.log(heading.textContent);

// // const paraclass = document.querySelectorAll('.paracalss');

// const paraclass = document.querySelectorAll('p');

// for(let i = 0; i < paraclass.length; i++){
//     console.log(paraclass[i].textContent);
// }

// to change text in html by js
// const heading = document.querySelector('#heading');
// heading.textContent = 'new heading';

// const divHead = document.getElementsByClassName('divHead');

// console.log(divHead);
// divHead[0].innerHTML = '<h1>this is new heading</h1>'


// const paraclass = document.querySelectorAll('.paraclass');
// paraclass[2].innerHTML = '<h1>this is new heading</h1>'

// ek tag k andar tag likhne k liye inner html use karte hain

// const divHead = document.querySelectorAll('.divHead');
// divHead[0].removeschild(paraclass[2]);

// const paraclass = document.querySelectorAll('.paraclass');
// paraclass[2].remove();

// const para4 = document.createElement('p');
// const para4 = document.createElement('marquee');


// para4.textContent = 'this is new para 4';

// console.log(para4.textContent);

// const divHead = document.querySelector('.divHead');
// divHead.appendChild(para4)

// document.body.appendChild(para4);

// upar add karne k liye

// divHead.insertAdjacentElement('beforebegin',para4);
// divHead.insertAdjacentElement('afterbegin',para4);
// divHead.insertAdjacentElement('afterend',para4);
// divHead.insertAdjacentElement('beforeend',para4);


const divHead = document.querySelector('#divHead'); // sir jaisa code bas for onv]ce baki miane ise class di thi aur sir ne id

// divHead.style.backgroundColor='aqua';
// divHead.style.color='blue';
// divHead.style.height='100px';
// divHead.style.width='100px';
// divHead.style.borderRadius = '50px';
// divHead.style.paddingTop= '20px';
// divHead.style.boxSizing= 'border-Box';
// divHead.style.textAlign= 'center';


divHead.style.cssText = 'background-color:red; color:white; height:200px; width:100px;'


// const divHead = document.querySelector('#divHead')