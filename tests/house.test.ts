import type { House } from "../shared/types/house.ts";
import { Rashi } from "../shared/enums/rashi.ts";

const firstHouse: House = {
    houseNumber: 1,
    rashi: Rashi.Mesha,
    signIndex: 0,
    startLongitude: 0,
    endLongitude: 30,
    cuspLongitude: 15,
};

console.log("House model test:");
console.log(firstHouse);