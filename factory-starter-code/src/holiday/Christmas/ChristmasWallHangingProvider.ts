import { WallHangingProviderInterface } from "../WallHangingProviderInterface";

export class ChristmasWallHangingProvider implements WallHangingProviderInterface{
    getHanging(): string {
        return "stocking";
    }
}