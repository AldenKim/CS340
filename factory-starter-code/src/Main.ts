import { DecorationPlacer } from "./decoration/DecorationPlacer";
import { HalloweenTableclothPatternProvider } from "./holiday/Halloween/HalloweenTableclothPatternProvider";

main();

function main(): void {
  let decorationPlacer = new DecorationPlacer(new HalloweenTableclothPatternProvider());

  console.log(decorationPlacer.placeDecorations());
}
