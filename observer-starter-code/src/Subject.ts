import { Flight } from "./entity/Flight";

export interface Observer {
    update(flight:Flight | null): void;
}

export abstract class Subject {
    private observers: Observer[] = [];

    public attach(observer: Observer) {
        this.observers.push(observer);
    } 

    public notify(flight:Flight | null) {
        for (const observer of this.observers) {
            observer.update(flight);
        }
    }
}