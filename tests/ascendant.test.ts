import type { Ascendant } from "../shared/types/ascendant.ts";
import { Rashi } from "../shared/enums/rashi.ts";
import { Nakshatra } from "../shared/enums/nakshatra.ts";

const ascendant: Ascendant = {
    rashi: {
        rashi: Rashi.Simha,
        index: 4,
        degree: 3,
        minute: 27,
        second: 21,
        absoluteLongitude: 123.456,
    },

    nakshatra: {
        name: Nakshatra.Magha,
        index: 9,
        pada: 1,
        degreeInNakshatra: 0.95,
    },
};

console.log("Ascendant model test:");
console.log(ascendant);