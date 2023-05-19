// menu-------------------------------------------------
const openn = document.getElementById('open');
const cierre = document.getElementById('cierre');
const menu = document.getElementsByTagName('nav')[0];
const explore = document.querySelector('.explore');
menu.addEventListener('touchend',()=>{
    cierre.style.display='none';
    openn.style.display = 'block';
    menu.style.top = '-320px'});

openn.addEventListener('click', ()=>{
    cierre.style.display = 'block';
    openn.style.display = 'none';
    menu.style.top = '0%';
});

explore.addEventListener('click',()=>{
    if(menu.style.top == '0%'){
        menu.style.top = '-320px';
    }else{
        menu.style.top = '0%';
        menu.style.transition = '1s all';
    }
});

// Destination------------------------------------------

const moon = document.querySelector('.div__moon');
const europa = document.querySelector('.div__europa');
const titan = document.querySelector('.div__titan');
const mars = document.querySelector('.div__mars');
const butMars = document.getElementById('imars');
const butMoon = document.getElementById('imoon');
const butEuropa = document.getElementById('ieuropa');
const butTitan = document.getElementById('ititan');

moon.addEventListener()