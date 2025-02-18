"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./abstract/Animal");
// import { AnimalEntity } from "./abstract/AnimalEntity";
class Cat extends Animal_1.Animal {
    constructor(name, trainingPriority, purrs, climbsFurniture) {
        super(name, trainingPriority);
        this.purrs = purrs;
        this.climbsFurniture = climbsFurniture;
    }
    static getCatsSummary(catListNotSorted) {
        let catList = Cat.getSorted(catListNotSorted);
        let easiestCat = catList[0];
        let mostDifficultCat = catList[catList.length - 1];
        let easiestCatString = easiestCat.name +
            " needs the least training" +
            (easiestCat.purrs
                ? ", and purrs a lot."
                : ", although it rarely purrs.") +
            (easiestCat.climbsFurniture
                ? " It unfortunately climbs furniture a lot, leaving scratches."
                : " It fortunately does not climb furniture.");
        let mostDifficultCatString = mostDifficultCat.name +
            " needs the most training." +
            (easiestCat.purrs
                ? "It is friendly and purrs a lot"
                : " It is grumpy and rarely purrs.") +
            (easiestCat.climbsFurniture
                ? " It unfortunately climbs furniture a lot, leaving scratches."
                : " It fortunately does not climb furniture.");
        let catTrainingPriorities = this.getPriorityList(catList);
        return (catTrainingPriorities +
            "\n" +
            easiestCatString +
            "\n" +
            mostDifficultCatString);
    }
}
exports.Cat = Cat;
