import { TableclothPatternProviderInterface } from "../TableclothPatternProviderInterface";

export class ChristmasTableclothPatterProvider implements TableclothPatternProviderInterface {
    getTablecloth(): string {
        return "ornaments and candy canes";
    }
}