import { TableclothPatternProviderInterface } from "./holiday/TableclothPatternProviderInterface";
import { WallHangingProviderInterface } from "./holiday/WallHangingProviderInterface";
import { YardOrnamentProviderInterface } from "./holiday/YardOrnamentProviderInterface";

export interface DecorationFactory {
    createTableClothPatternProvider(): TableclothPatternProviderInterface;
    createWallHangingProvider(): WallHangingProviderInterface;
    createYardOrnamentProvider(): YardOrnamentProviderInterface;
}