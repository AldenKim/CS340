import { WallHangingProviderInterface } from "../WallHangingProviderInterface";

export class HalloweenWallHangingProvider implements WallHangingProviderInterface{

    getHanging(): string {
        return "spider-web";
    }
}
