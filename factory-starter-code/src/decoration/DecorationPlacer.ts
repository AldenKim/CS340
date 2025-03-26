import { DecorationFactory } from "../DecorationFactory";
import { TableclothPatternProviderInterface } from "../holiday/TableclothPatternProviderInterface";
import { WallHangingProviderInterface } from "../holiday/WallHangingProviderInterface";
import { YardOrnamentProviderInterface } from "../holiday/YardOrnamentProviderInterface";

export class DecorationPlacer {
  // FIXME use dependency inversion to remove these hard-coded dependencies
  private tableclothPattern: TableclothPatternProviderInterface;
  private wallHanging: WallHangingProviderInterface;
  private yardOrnament: YardOrnamentProviderInterface;

  public constructor(factory: DecorationFactory) {
    this.tableclothPattern = factory.createTableClothPatternProvider();
    this.wallHanging = factory.createWallHangingProvider();
    this.yardOrnament = factory.createYardOrnamentProvider();
  }

  placeDecorations(): string {
    return (
      "Everything was ready for the party. The " +
      this.yardOrnament.getOrnament() +
      " was in front of the house, the " +
      this.wallHanging.getHanging() +
      " was hanging on the wall, and the tablecloth with " +
      this.tableclothPattern.getTablecloth() +
      " was spread over the table."
    );
  }
}
