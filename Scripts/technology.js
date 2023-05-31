const butoes = document.querySelectorAll('.but');
for(var i in butoes){
    butoes[i].addEventListener('click', diplayTela);
}
function colorBts(){
    document.querySelectorAll('.but').forEach((item) => {
    item.style.backgroundColor = ''
    item.style.color = ''
})
}

function diplayNone(){
    document.querySelectorAll('.div__geral').forEach((item)=> item.style.display = 'none');
}

function diplayTela(e){
 let btValor = e.target.id;
    switch(btValor){
        case 'tech__but1':
            diplayNone();
            document.getElementById('tech-1').style.display = 'block';  
            colorBts()
            document.getElementById('tech__but1').style.cssText = 'color:black; background-color:white;'
        break
        case 'tech__but2':
            diplayNone();
            document.getElementById('tech-2').style.display = 'block';
            colorBts()
            document.getElementById('tech__but2').style.cssText = 'color:black; background-color:white;'
        break
        case 'tech__but3':
            diplayNone();
            document.getElementById('tech-3').style.display = 'block'; 
            colorBts()
            document.getElementById('tech__but3').style.cssText = 'color:black; background-color:white;' 
        break

    }
}