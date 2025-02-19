// 1. What design principles does this code violate?

/* Answer 1: Violates decomposition because we decompse the if statement 
into function calls and even decompose into client class */

// 2. Refactor the code to improve its design.

class Client {
  private score: number;
  private income: number;
  private authorize: boolean;

  public constructor(score: number, income: number, authorized: boolean) {
    this.score = score;
    this.income = income;
    this.authorize = authorized;
  }

  public scoreCheck(num: number): boolean {
    return this.score > num;
  }

  public incomeCheck(): boolean {
    return this.income >= 40000 && this.income <= 100000;
  }

  public incomeCheckHigh(): boolean {
    return this.income > 100000;
  }

  public isAuthorized() : boolean {
	return this.authorize;
  }
}

export class RiskChecker {
  public isLowRiskClient(client: Client): boolean {
	if (client.scoreCheck(700)) {
		return true;
	} else if (client.incomeCheck() && client.isAuthorized() && client.scoreCheck(500)) {
		return true;
	} else if (client.incomeCheckHigh()) {
		return true;
	} 

	return false;
  }
}

const client = new Client(550, 50000, true);
const riskcheck = new RiskChecker();

riskcheck.isLowRiskClient(client);
