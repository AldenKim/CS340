import { DecorationPlacer } from "./decoration/DecorationPlacer";
import { HalloweenTableclothPatternProvider } from "./holiday/Halloween/HalloweenTableclothPatternProvider";
import { HalloweenWallHangingProvider } from "./holiday/Halloween/HalloweenWallHangingProvider";

main();

function main(): void {
  let decorationPlacer = new DecorationPlacer(new HalloweenTableclothPatternProvider(), new HalloweenWallHangingProvider());

  console.log(decorationPlacer.placeDecorations());
}
