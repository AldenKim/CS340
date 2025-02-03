import { DeltaObserver } from "./DeltaObserver";
import { FlightFeed } from "./FlightFeed";
import { StatusObserver } from "./StatusObserver";

main();

function main() {
  let feed = new FlightFeed();
  feed.attach(new StatusObserver);
  feed.attach(new DeltaObserver);
  feed.start();
}
