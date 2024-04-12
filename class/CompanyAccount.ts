import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valorEMprestimo: number): void => {
    if (this.validateStatus()) {
      console.log("Voce pegou um empréstimo");
      this.balance += valorEMprestimo;
      console.log(`Seu novo saldo é R$ ${this.balance}`);
    }
  };
}
