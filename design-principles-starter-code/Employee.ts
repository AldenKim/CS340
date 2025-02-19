// 1. Explain how this program violates the High-Quality Abstraction principle.
/* The Retirement calculator relies too much on the employee class information. 
some of the functions should more likely be handled by the Employee class  */
// 2. Explain how you would refactor the code to improve its design.
/* I would move the functions getTotalYearsOfService and getMonthsInLastPosition into the
employee class, the retirenment class should only be calculating retirenment and shouldn't worry about 
these other functions. This would also allow retirementCalculator to not rely on one instance of employee when calculating
retirement. */

class Employee {
	public employmentStartDate: Date;
	public employmentEndDate: Date;
}

class RetirementCalculator {
	private employee: Employee;

	public constructor(emp: Employee) {
		this.employee = emp;
	}

	public calculateRetirement(payPeriodStart: Date, payPeriodEnd: Date): number { … }

	private getTotalYearsOfService(startDate: Date, endDate: Date): number { … }

	private getMonthsInLastPosition(startDate: Date, endDate: Date): number { … }
	
    ...
}
