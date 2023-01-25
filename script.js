
 function insert(num){/*aqui foi criado uma função para inserir os dados*/
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
 }

 function clean(){/*aqui foi criado uma função botao "C" para apagar os dados*/
    document.getElementById('resultado').innerHTML = "";
 }

 function back(){/*aqui foi criado uma função botao "<" para apagar os dados da direita*/
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
 }

 function calcular(){/*aqui foi criado uma função para gerar o resultado*/
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML= "Nada..."
    }
 }
 