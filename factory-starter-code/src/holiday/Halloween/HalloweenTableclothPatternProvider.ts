import { TableclothPatternProviderInterface } from "../TableclothPatternProviderInterface";

export class HalloweenTableclothPatternProvider implements TableclothPatternProviderInterface {
    getTablecloth(): string {
        return "ghosts and skeletons";
    }
}
