export abstract class Animal {
  name: string;
  trainingPriority: number;

  constructor(name: string, trainingPriority: number) {
    this.trainingPriority = trainingPriority;
    this.name = name;
  }

  public static getSorted<T extends Animal>(animalList: T[]): T[] {
    return animalList.sort((animal1, animal2) =>
      animal1.trainingPriority < animal2.trainingPriority ? -1 : 1
    );
  }

  public static getPriorityList<T extends Animal>(animalList: T[]): string {
    return animalList
      .map(
        (animal) =>
          animal.name + "'s training priority: " + animal.trainingPriority + "\n"
      )
      .join("");
  }
}
