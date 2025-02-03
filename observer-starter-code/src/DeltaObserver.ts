import { Flight } from "./entity/Flight";
import { Observer } from "./Subject";

export class DeltaObserver implements Observer {
    currentFlight: (Flight | null) = new Flight();

    public update(flight:Flight | null) {
        console.log("Delta Updates (Changes)")
        console.log("Longitude: " + (flight!.longitude - this.currentFlight!.longitude));
        console.log("Latitude: " + (flight!.latitude - this.currentFlight!.latitude));
        console.log("Velocity: " + (flight!.velocity - this.currentFlight!.velocity));
        console.log("Altitude: " + (flight!.geo_altitude - this.currentFlight!.baro_altitude));
        console.log("------------------");
        console.log();
        this.currentFlight = flight;
    }
}