function Exibir(){
    let valor3 = document.getElementById('nome1').value 
    let valor1 = document.getElementById('nome3').value 

    document.getElementById('resposta').innerHTML = 'O nome informado foi ' +valor3 + '.'
    document.getElementById('resposta2').innerHTML = 'O nome informado foi ' +valor1 + '.'
}