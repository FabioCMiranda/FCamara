class Retangulo{

    constructor(ladoA, ladoB){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
    }

    getLadoA(){
        return this.ladoA;
    }

    getLadoB(){
        return this.ladoB;
    }


    alterarLadoA(value){
        this.ladoA = value;
    }

    alterarLadoB(value){
        this.ladoB = value;
    }

    calcularArea(){
        return this.ladoA * this.ladoB;
    }

    calcularPerimetro(){
        return ((this.ladoA * 2) + (this.ladoB * 2));
    }
}
    function Calcular()
    {
    var ladoA = document.getElementById("ladoA").value;
    var ladoB = document.getElementById("ladoB").value;
    var local = new Retangulo(ladoA, ladoB);  // objeto criado com as medidas

    var perimetro = local.calcularPerimetro();
    document.getElementById("perimetro").value = perimetro;

    var area = local.calcularArea();
    document.getElementById("piso").value = area;



  

    
    }
    
    
    
