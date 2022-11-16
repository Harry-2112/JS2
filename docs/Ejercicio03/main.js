function calcular() {
    let general = document.getElementById("general").value;
    let mayores = document.getElementById("mayores").value;
    let menores = document.getElementById("menores").value;

    let Rgeneral = document.getElementById("Rgeneral");
    let Rmayores = document.getElementById("Rmayores");
    let Rmenores = document.getElementById("Rmenores");
    let total = document.getElementById("total");
    Rgeneral.innerHTML=general+" entradas"+" = "+(parseInt(general)*150)+" soles";
    Rmayores.innerHTML=mayores+" entradas"+" = "+(parseInt(mayores)*50)+" soles";
    Rmenores.innerHTML=menores+" entradas"+" = "+(parseInt(menores)*80)+" soles";
    total.innerHTML=(parseInt(general)*150)+(parseInt(mayores)*50)+(parseInt(menores)*80)+" soles";


}