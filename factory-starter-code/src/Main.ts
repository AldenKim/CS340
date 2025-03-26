import { ChristmasDecorationFactory } from "./ChristmasDecorationFactory";
import { DecorationPlacer } from "./decoration/DecorationPlacer";
import { HalloweenDecorationFactory } from "./HalloweenDecorationFactory";

main();

function main(): void {
  let decorationPlacer = new DecorationPlacer(
    new HalloweenDecorationFactory()
  );

  let decorationPlacer1 = new DecorationPlacer(
    new ChristmasDecorationFactory()
  );

  console.log(decorationPlacer.placeDecorations());
  console.log();
  console.log(decorationPlacer1.placeDecorations());

}
