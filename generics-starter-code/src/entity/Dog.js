"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./abstract/Animal");
class Dog extends Animal_1.Animal {
    constructor(name, trainingPriority, chasesCats, jumpsOnPeople) {
        super(name, trainingPriority);
        this.chasesCats = chasesCats;
        this.jumpsOnPeople = jumpsOnPeople;
    }
    static getDogsSummary(dogListNotSorted) {
        let dogList = Dog.getSorted(dogListNotSorted);
        let easiestDog = dogList[0];
        let mostDifficultDog = dogList[dogList.length - 1];
        let easiestDogString = easiestDog.name +
            " needs the least training" +
            (easiestDog.chasesCats
                ? ", but will need to be watched closely since it likes to chase cats."
                : ", and does not even chase cats") +
            (easiestDog.jumpsOnPeople
                ? " It is friendly and enjoys jumping on people."
                : " It is well behaved and does not jump on people.");
        let mostDifficultDogString = mostDifficultDog.name +
            " needs the most training." +
            (easiestDog.chasesCats
                ? " It chases cats and must be watched closely."
                : " Surprisingly, it does not chase cats.") +
            (easiestDog.jumpsOnPeople
                ? " It jumps at people and sometimes bites."
                : " It does not jump on people but is mean in more subtle ways.");
        let dogTrainingPriorities = this.getPriorityList(dogList);
        return (dogTrainingPriorities +
            "\n" +
            easiestDogString +
            "\n" +
            mostDifficultDogString);
    }
}
exports.Dog = Dog;
