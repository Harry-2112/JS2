function calcular() {
    let monto = document.getElementById("monto").value;
    let respuestas = document.getElementById("respuestas");
    let avenidaLM=parseInt(monto)*0.35;
    let avenidaAb=parseInt(monto)*0.25;
    let avenida28=parseInt(monto)*0.10;
    let avenidaAv=parseInt(monto)*0.15;
    let con = avenidaLM+avenidaAv+avenida28+avenidaAb;
    let avenidaTacna=parseInt(monto)-con;

    respuestas.innerHTML ="<ol>"+
    "<li>Avenida La Mar - 35% del monto ="+"<span>"+avenidaLM+" soles</span>"+"</li>"+
    "<li>Avenida Abancay - 25% del monto ="+"<span>"+avenidaAb+"soles </span>"+"</li>"+
    "<li>Avenida 28 de Julio - 10% del monto ="+"<span>"+avenida28+"soles </span>"+"</li>"+
    "<li>Avenida Aviación - 15% del monto= "+"<span>"+avenidaAv+"soles </span>"+"</li>"+
    "<li> Avenida Tacna - restante del monto ="+"<span>"+avenidaTacna+"soles </span>"+"</li>"
"</ol>";

}