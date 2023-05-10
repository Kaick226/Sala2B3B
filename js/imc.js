document.querySelector("#btnCalcular").addEventListener("click", function(){
    var altura = parseFloat(document.querySelector("#altura").value);
    var peso = parseFloat(document.querySelector("#peso").value);
    var imc = peso / (altura * altura);
    document.querySelector("#resultado").value = imc;
});