import type { Dasha } from "../shared/types/dasha.ts";
import { PlanetName } from "../shared/enums/planet.ts";

const dasha: Dasha = {
    planet: PlanetName.Jupiter,
    level: "Mahadasha",
    startDate: new Date("2026-01-01T00:00:00Z"),
    endDate: new Date("2042-01-01T00:00:00Z"),
    active: true,
};

console.log("Dasha model test:");
console.log(dasha);