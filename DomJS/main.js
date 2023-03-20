const form = document.getElementById('form-deposito');
function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    if (!validaNome(nomeBeneficiario.value)) {
        alert("O nome não está completo!");
    } else {
        alert("Tudo certo!");
    }
})


console.log(form);