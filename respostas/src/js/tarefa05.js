class ContaCorrente{
    
    constructor(numeroConta, nomeCorrentista){
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = 0;
    }

    alterarNome(value){
        this.nomeCorrentista = value;
    }

    deposito(value){
        this.saldo = saldo + value;
    }

    saque(value){
        if(value > 0 && value <= this.saldo){
            this.saldo = saldo - value;
    }
        }
}


