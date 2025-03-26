import { DecorationFactory } from "./DecorationFactory";
import { ChristmasTableclothPatterProvider } from "./holiday/Christmas/ChristmasTableclothPatternProvider";
import { ChristmasWallHangingProvider } from "./holiday/Christmas/ChristmasWallHangingProvider";
import { ChristmasYardOrnamentProvider } from "./holiday/Christmas/ChristmasYardOrnamentProvider";
import { TableclothPatternProviderInterface } from "./holiday/TableclothPatternProviderInterface";
import { WallHangingProviderInterface } from "./holiday/WallHangingProviderInterface";
import { YardOrnamentProviderInterface } from "./holiday/YardOrnamentProviderInterface";

export class ChristmasDecorationFactory implements DecorationFactory {
  createTableClothPatternProvider(): TableclothPatternProviderInterface {
    return new ChristmasTableclothPatterProvider();
  }
  createWallHangingProvider(): WallHangingProviderInterface {
    return new ChristmasWallHangingProvider();
  }
  createYardOrnamentProvider(): YardOrnamentProviderInterface {
    return new ChristmasYardOrnamentProvider();
  }
}