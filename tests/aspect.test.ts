import type { Aspect } from "../shared/types/aspect.ts";
import { PlanetName } from "../shared/enums/planet.ts";

const aspect: Aspect = {
    sourcePlanet: PlanetName.Sun,
    targetPlanet: PlanetName.Mars,
    angle: 120,
    actualSeparation: 119.7,
    orb: 0.3,
    exact: true,
};

console.log("Aspect model test:");
console.log(aspect);