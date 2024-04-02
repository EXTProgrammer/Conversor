function converterMoeda(){
    const valor = document.getElementById("valor").value;
    const conversor = valor / 5;
    document.getElementById("convertido").textContent = conversor;
}