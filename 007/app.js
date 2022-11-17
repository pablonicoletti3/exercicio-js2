function Exibir(){
    let valor1 = document.getElementById('n1').value 
    let valor2 = document.getElementById('n2').value 
     let valor3 = document.getElementById('n3').value 

    document.getElementById('resposta1').innerHTML = 'O número informado foi ' +valor1 + '.'
    document.getElementById('resposta2').innerHTML = 'O número informado foi ' +valor2 + '.'
    document.getElementById('resposta3').innerHTML = 'O número informado foi ' +valor3 + '.'

    }