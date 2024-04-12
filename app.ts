import { CompanyAccount } from "./class/CompanyAccount";
import { ExtraAccount } from "./class/ExtraAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.info(`People account \n`)
peopleAccount.withdraw(5);
peopleAccount.deposit(100);
peopleAccount.withdraw(5);
peopleAccount.getBalance();
console.log(`\n`)

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.info(`Company account \n`)
companyAccount.withdraw(5);
companyAccount.deposit(100);
companyAccount.withdraw(5);
companyAccount.getBalance();
console.log(`\n`)

const extraAccount: ExtraAccount = new ExtraAccount("Nath", 30);
console.info(`Extra account \n`)
extraAccount.withdraw(5);
extraAccount.deposit(100);
extraAccount.withdraw(5);
extraAccount.getBalance();