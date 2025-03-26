import { DecorationFactory } from "./DecorationFactory";
import { HalloweenTableclothPatternProvider } from "./holiday/Halloween/HalloweenTableclothPatternProvider";
import { HalloweenWallHangingProvider } from "./holiday/Halloween/HalloweenWallHangingProvider";
import { HalloweenYardOrnamentProvider } from "./holiday/Halloween/HalloweenYardOrnamentProvider";
import { TableclothPatternProviderInterface } from "./holiday/TableclothPatternProviderInterface";
import { WallHangingProviderInterface } from "./holiday/WallHangingProviderInterface";
import { YardOrnamentProviderInterface } from "./holiday/YardOrnamentProviderInterface";

export class HalloweenDecorationFactory implements DecorationFactory {
  createTableClothPatternProvider(): TableclothPatternProviderInterface {
    return new HalloweenTableclothPatternProvider();
  }
  createWallHangingProvider(): WallHangingProviderInterface {
    return new HalloweenWallHangingProvider();
  }
  createYardOrnamentProvider(): YardOrnamentProviderInterface {
    return new HalloweenYardOrnamentProvider();
  }
}
