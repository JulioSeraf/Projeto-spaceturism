document.addEventListener('DOMContentLoaded', function(){
    const telas = document.querySelectorAll('.telas');
    for(var i in telas){
        telas[i].addEventListener('click', displayTela)
    }
    function displayTela(e){
        let btValor = e.target.id;
        switch(btValor){
            case 'imoon':
                document.querySelectorAll('.div-geral').forEach((item)=> item.style.display = 'none')
                document.getElementById('divmoon').style.display = 'block';
                document.querySelectorAll('.telas').forEach((item)=> item.style.borderBottom = 'none');
                document.getElementById('imoon').style.borderBottom = '1px solid white';
                break;
            case 'imars':
                document.querySelectorAll('.div-geral').forEach((item)=> item.style.display = 'none')
                document.getElementById('divmars').style.display = 'block';
                document.querySelectorAll('.telas').forEach((item)=> item.style.borderBottom = 'none');
                document.getElementById('imars').style.borderBottom = '1px solid white';
    
                break;
            case 'ititan':
                document.querySelectorAll('.div-geral').forEach((item)=> item.style.display = 'none')
                document.getElementById('divtitan').style.display = 'block';
                document.querySelectorAll('.telas').forEach((item)=> item.style.borderBottom = 'none');
                document.getElementById('ititan').style.borderBottom = '1px solid white';
                break;
            case 'ieuropa':
                document.querySelectorAll('.div-geral').forEach((item)=> item.style.display = 'none')
                document.getElementById('diveuropa').style.display = 'block';
                document.querySelectorAll('.telas').forEach((item)=> item.style.borderBottom = 'none');
                document.getElementById('ieuropa').style.borderBottom = '1px solid white';
                break;
            default:
                alert('Error a Carregar Pagina!!')
                 
        }
    }
})