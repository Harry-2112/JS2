function calcular(){
    let hombre = document.getElementById("hombres").value;
    let mujeres = document.getElementById("mujeres").value;
    let total = document.getElementById("total");
    let phombres = document.getElementById("phombres");
    let pmujeres = document.getElementById("pmujeres");

    let totalA= parseInt(hombre)+parseInt(mujeres);
    let porhombres = (parseInt(hombre)*100)/totalA;
    let pormujeres = (parseInt(mujeres)*100)/totalA;

    total.innerHTML = totalA;
    phombres.innerHTML = porhombres+"%";
    pmujeres.innerHTML = pormujeres+"%";

}