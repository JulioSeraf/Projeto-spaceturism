// menu-------------------------------------------------
const menu = document.getElementsByTagName('nav')[0];
const cierre = document.getElementById('cierre');
const openn = document.getElementById('open');    
cierre.addEventListener('click', ()=>{
    cierre.style.display = 'none';
    openn.style.display = 'block';
    menu.style.top = '-320px';
});

openn.addEventListener('click', ()=>{
    cierre.style.display = 'block';
    openn.style.display = 'none';
    menu.style.top = '0%';
});

function explore(){
    const explore = document.querySelector('.explore');
    explore.style.transition = '1s all'
}





