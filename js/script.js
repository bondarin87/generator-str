
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let letras = 'abcdefghijklmnopqrstuvwxyz';
let numero = 0;
let sum = '';
btn.addEventListener('click', function func() {
    
    for (let i=0; i<8; i++) {
      numero=Math.floor(Math.random()*(letras.length)) 
      sum = sum + letras[numero];
    } 
    inp.value = sum;
})





