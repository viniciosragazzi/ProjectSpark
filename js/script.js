
let areaLogin = document.querySelector('.tela-login');
let areaRegistro = document.querySelector('.tela-registro');



document.querySelector('.criar-area').addEventListener('click', function(){
    areaLogin.style.display = 'none'
    areaRegistro.style.display = 'flex'
});
document.querySelector('.logar-area').addEventListener('click', function(){
    areaLogin.style.display = 'flex'
    areaRegistro.style.display = 'none'
});