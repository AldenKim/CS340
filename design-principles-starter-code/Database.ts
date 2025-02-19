
// 1. What design principle(s) does this code violate?

/* Answer 1: I think this class violates single responsibility principle. The class is responsible for 
representing the Course, and doing operations in the Database. It also violates separation of responsibility in this case */

// 2. Explain how you would refactor this code to improve its design.

/* Answer 2: I would have the Course class just simple represent the basic variables in the course
then I would move the functions for creating finding and updating to a separate class to handle database operations*/ 

export class Course {

	name: string;
	credits: number;

	constructor(name: string, credits: number) {
		this.name = name;
		this.credits = credits;
	}

	static async create(name: string, credits: number): Promise<Course> {

		// ... Code to insert a new Course object into the database ...

	}

	static async find(name: string): Promise<Course | undefined> {

		// ... Code to find a Course object in the database ...

	}

	async update(): Promise<void> {

		// ... Code to update a Course object in the database ...

	}

}
