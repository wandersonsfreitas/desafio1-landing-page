function exibirAlerta() {
    var nome = window.document.getElementById("nome").value;
    alert("Olá, " + nome + "! Entraremos em contato em breve!"); 
    return false; //Impede o envio do formulário
}