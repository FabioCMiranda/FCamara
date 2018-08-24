function calcSalario()
{
    var qtdeHoras = document.getElementById("hTrab").value;
    var salMin = document.getElementById("salMin").value;
    var vHora = salMin * 0.1;                  // Valor da Hora = 10% do salário mínimo
    var salBruto = (qtdeHoras * vHora) * 0.97; // Desconto dos impostos (3%)
    
    document.getElementById("salBru").value = salBruto.toFixed(2);


}