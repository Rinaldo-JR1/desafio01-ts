import { DioAccount } from "./DioAccount";

export class ExtraAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  deposit = (valorDepositado: number): void => {
    if (this.validateStatus()) {
      this.balance += valorDepositado + 10;
      console.log(`Voce depositou R$ ${valorDepositado}`);
      console.log(`Seu novo saldo é R$ ${this.balance}`);
    } else {
      console.log(`Usuario desabilitado para realizar operações`);
    }
  };
}
