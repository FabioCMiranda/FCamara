function calcCustos()
{
    var areaInformada = document.querySelector("#area").value;
    var qtdeLitros = (areaInformada / 3); // Qtde em litros para
                                        // cobrir a área informada
        
    var latasTinta = Math.ceil(qtdeLitros / 18); // Cálculo da qtde de 
                                                 // latas de tinta

    document.querySelector("#qtdeLatas").value = latasTinta;
    document.querySelector("#vlrTotal").value = (latasTinta * 80).toFixed(2); // Valor total 
                                                                              // das latas

}