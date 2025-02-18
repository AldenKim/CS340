"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, trainingPriority) {
        this.trainingPriority = trainingPriority;
        this.name = name;
    }
    static getSorted(animalList) {
        return animalList.sort((animal1, animal2) => animal1.trainingPriority < animal2.trainingPriority ? -1 : 1);
    }
    static getPriorityList(animalList) {
        return animalList
            .map((animal) => animal.name + "'s training priority: " + animal.trainingPriority + "\n")
            .join("");
    }
}
exports.Animal = Animal;
