import { HalloweenTableclothPatternProvider } from "../holiday/Halloween/HalloweenTableclothPatternProvider";
import { HalloweenWallHangingProvider } from "../holiday/Halloween/HalloweenWallHangingProvider";
import { HalloweenYardOrnamentProvider } from "../holiday/Halloween/HalloweenYardOrnamentProvider";
import { TableclothPatternProviderInterface } from "../holiday/TableclothPatternProviderInterface";
import { WallHangingProviderInterface } from "../holiday/WallHangingProviderInterface";

export class DecorationPlacer {
  // FIXME use dependency inversion to remove these hard-coded dependencies
  private tableclothPattern: TableclothPatternProviderInterface;
  private wallHanging: WallHangingProviderInterface;
  private yardOrnament: HalloweenYardOrnamentProvider =
    new HalloweenYardOrnamentProvider();
  
  public constructor(tableclothPattern: TableclothPatternProviderInterface, wallHanging: WallHangingProviderInterface) {
    this.tableclothPattern = tableclothPattern;
    this.wallHanging = wallHanging;
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
