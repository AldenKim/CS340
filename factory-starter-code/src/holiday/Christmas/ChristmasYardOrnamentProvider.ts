import { YardOrnamentProviderInterface } from "../YardOrnamentProviderInterface";

export class ChristmasYardOrnamentProvider implements YardOrnamentProviderInterface {

    getOrnament(): string {
        return "reindeer";
    }
}