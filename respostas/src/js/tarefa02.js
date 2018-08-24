function mostrarPrimos()
{
   var num1 = document.getElementById("n1").value;
   var num2 = document.getElementById("n2").value;
   var count = 0;
   
   if(num1 > 0)
   {     if(num1 < num2)
         {
           for(i = num1;i <= num2;i++) // percorre o intervalo dado
           {
               count = 0;
               for(j = 1;j <= i;j++)    // percorre de 1 até o número a ser verificado
               {
                    if(i % j == 0) count++; // verifica se o número é divisível 
               }
               if(count == 2) document.getElementById("res").value = document.getElementById("res").value + i + " "; // exibir que i é primo
           }
         }
         else alert("O primeiro número deve ser menor que o segundo.");   
    }
   else alert("O número inicial deve ser maior que zero.");   
}