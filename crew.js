document.addEventListener('DOMContentLoaded',function(){
 const butoes = document.querySelectorAll('.but');
 for(var i in butoes){
    butoes[i].addEventListener('click',diplayeTel);
 }

 function diplayNone(){
    document.querySelectorAll('.div__geral').forEach((item) => item.style.display = 'none')
 }

 function diplayeTel(e){
    var btValor = e.target.id;
    switch(btValor){
        case 'icomander':
            diplayNone();
            document.getElementById('divComander').style.display = 'block';
            document.querySelectorAll('.but').forEach((bts) => bts.style.backgroundColor = '');
            document.getElementById('icomander').style.backgroundColor = 'white';
            break;
        case 'ienginner':
            diplayNone();
            document.getElementById('divEnginner').style.display = 'block';
            document.querySelectorAll('.but').forEach((bts) => bts.style.backgroundColor = '');
            document.getElementById('ienginner').style.backgroundColor = 'white';
            break;
        case 'ipilot':
            diplayNone();
            document.getElementById('divPilot').style.display = 'block';
            document.querySelectorAll('.but').forEach((bts) => bts.style.backgroundColor = '');
            document.getElementById('ipilot').style.backgroundColor = 'white';
            break;
        case 'ispecial':
            diplayNone();
            document.getElementById('divSpecial').style.display = 'block';
            document.querySelectorAll('.but').forEach((bts) => bts.style.backgroundColor = '');
            document.getElementById('ispecial').style.backgroundColor = 'white';
            break;
        default:
            alert('[ERROR], Carrege la pagina novamente!!')

    }
 }
})