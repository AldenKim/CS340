import { YardOrnamentProviderInterface } from "../YardOrnamentProviderInterface";

export class HalloweenYardOrnamentProvider implements YardOrnamentProviderInterface {

    getOrnament(): string {
        return "jack-o-lantern";
    }
}
