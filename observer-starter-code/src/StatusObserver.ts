import { Flight } from "./entity/Flight";
import { Observer } from "./Subject";

export class StatusObserver implements Observer {
    update(flight: Flight | null): void {
        console.log("------------------");
        console.log("Status Updates");
        console.log("Transponder ID: " + flight?.icao24);
        console.log("Call sign: " + flight?.callsign);
        console.log("Country of Origin: " + flight?.origin_country);
        console.log("Longitude: " + flight?.longitude);
        console.log("Latitude: " + flight?.velocity);
        console.log("Velocity: " + flight?.velocity);
        console.log("Altitude: " + flight?.geo_altitude);
        console.log();
    }
}   