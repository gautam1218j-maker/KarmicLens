import type { Yoga } from "../shared/types/yoga.ts";
import { PlanetName } from "../shared/enums/planet.ts";

const yoga: Yoga = {
    id: "yoga-test-001",
    name: "Test Yoga",
    planets: [
        PlanetName.Jupiter,
        PlanetName.Venus,
    ],
    houses: [1, 5, 9],
    active: true,
    ruleId: "rule-test-001",
};

console.log("Yoga model test:");
console.log(yoga);