document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    
    
    if (valor1 > valor2) {
      resultado = "Formulário inválido o valor 1 é maior que o valor 2.";
      
    } else if (valor2 >= valor1) {
      resultado = "O formulário e válido pois o valor 2 é maior ou igual ao valor 1.";
  
    } 
      
    var resultadoElemento = alert(resultado)
    
  });
  