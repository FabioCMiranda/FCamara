function calcular()
{   
    var salarioBase = 1000;
    var salario = salarioBase * 1.015;          // Salário no ano 2006
    var salAtual = 0;
    var tax = 0.015;
    var anoAtual = document.getElementById("ano").value;
    while(anoAtual >= 2007)                     // Loop para cálculo da reajuste
    {                                           // salarial
        tax *= 2;
        salario = salarioBase + (salarioBase * tax);
        anoAtual--;
        salAtual = salario;
    }

    salAtual = parseFloat(salAtual);
    document.getElementById("salarioAtual").value = salAtual.toFixed(2);
    
}
