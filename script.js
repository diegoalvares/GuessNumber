const num = document.getElementById('num')
const jogar = document.getElementById('jogar')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const aviso = document.getElementById('aviso')
const pensou = Math.round(Math.random()*10)
const tentativas = document.getElementById('tentativas')
let tentativa = 0


jogar.addEventListener('click', function(e){
    e.preventDefault();

    if (num.value > 10 || num.value < 0 || num.value ==''){
       alert('Jogue um número entre 0 e 10!')
    }
    
    else if (pensou > num.value){
        console.log('O número é maior!')
        result.style.background='red'
        result.style.color = 'white'
        aviso.innerHTML = 'O número é maior!'
        tentativa++;
        tentativas.innerHTML = tentativa
    }

    else if (pensou < num.value){
        console.log('O número é menor!')
        result.style.background='red'
        result.style.color = 'white'
        aviso.innerHTML = 'O número é menor!'
        tentativa++;
        tentativas.innerHTML = tentativa
    }
    
    else if (num.value == pensou){
        console.log('Você acertou!')
        result.style.background='green'
        result.style.color = 'white'
        aviso.innerHTML = 'Parabéns, você acertou! 🤩'
        tentativa++;
        tentativas.innerHTML = tentativa
        restart.style.display='flex'
    }
})

function restartgame(){
    document.location.reload(true);
}