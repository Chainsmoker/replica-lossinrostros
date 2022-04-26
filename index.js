const abrir = document.querySelector('#btnAbrir');
const cerrar = document.querySelector('#btnCerrar');
const menu = document.querySelector('.navegacion-enlaces');

abrir.addEventListener('click', function(){
    menu.style.transform = 'translateX(0)';
});

cerrar.addEventListener('click', function(){
    menu.style.transform = 'translateX(100%)';
});