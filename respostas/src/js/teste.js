function calcular()
{   
    var salarioBase = 1000;
    var salario = salarioBase * 1.015;
    var salAtual = 0;
    var tax = 0.015;
    var anoAtual = document.getElementById("ano").value;
    while(anoAtual >= 2007)
    {
        tax *= 2;
        salario = salarioBase + (salarioBase * tax);
        anoAtual--;
        salAtual = salario;
        alert(tax);
    }

    //document.querySelector("#salarioAtual").value = salAtual;
    salAtual = parseFloat(salAtual);
    document.getElementById("salarioAtual").value = salAtual.toFixed(2);
    
}
