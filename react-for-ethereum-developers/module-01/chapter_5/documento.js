//document object model

//to query some element from the dom
//we need to create a reference to it
//by storing it into a variable

/*const para = document.querySelector('body > h1');
console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(para=>{
    console.log(para);
});

//get an element by ID
const elem1 = document.getElementById('page-title');
console.log(elem1);
const elem2 = document.getElementById('hello-text');
console.log(elem2);

//get elements by their class name
const errors = document.getElementsByClassName("error");
console.log(errors[0]);

//get elements by their tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);*/

/* const para = document.querySelector('p');
//cambio el texto interno de ese objeto
para.innerText += ' ninjas are awesome!'; */

/* const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText = 'new text';
}); */

//const content = document.querySelector('.content');
/*content.innerHTML += '<h2> This is a new h2 </h2>'; */

//HTML template
/* const people = ['mario', 'luigi', 'ana'];
people.forEach(person=>{
    content.innerHTML += `<p>${person}</p>`
})

const domTitle = document.getElementById('page-title');
console.log(domTitle);
domTitle.style.margin = '50px';
domTitle.style.color = 'orange';
domTitle.style.fontSize = '40px';

const link = document.querySelector('a');
link.setAttribute('href', 'https://www.netninja.co.uk');
link.innerText = 'The net ninja web';


const mssg =  document.getElementById('lorem-text');
mssg.setAttribute('class', 'success');
mssg.classList.add('ejemplo');
console.log(mssg.classList);
mssg.classList.remove('success');
 */

const allparas = document.querySelectorAll('p');
allparas.forEach(para =>{
    if(para.textContent.includes('success')){
        para.classList.add('class', 'success');
    }else if(para.textContent.includes('error')){
        para.classList.add('class', 'error');
    }
});

//toggle classess
const title = document.querySelector('.title');
title.classList.toggle('test');