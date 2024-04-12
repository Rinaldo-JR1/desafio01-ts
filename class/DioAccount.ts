export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (valorDepositado: number): void => {
    if (this.validateStatus()) {
      this.balance += valorDepositado;
      console.log(`Voce depositou R$ ${valorDepositado}`);
      console.log(`Seu novo saldo é R$ ${this.balance}`);
    } else {
      console.log(`Usuario desabilitado para realizar operações`);
    }
  };
  withdraw = (valorRetirado: number): void => {
    if (this.validateStatus()) {
      if (valorRetirado < this.balance) {
        this.balance -= valorRetirado;
        console.log(`Voce sacou R$ ${valorRetirado}`);
        console.log(`Seu novo saldo é R$ ${this.balance}`);
      } else {
        console.log(`Saldo insuficiente para realizar a operação`);
      }
    } else {
      console.log(`Usuario desabilitado para realizar operações`);
    }
  };

  getBalance = (): void => {
    console.log(`Seu saldo é R$${this.balance}`);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta inválida");
  };
}
