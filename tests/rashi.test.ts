import { Rashi } from "../shared/enums/rashi.ts";
import type { RashiPlacement } from "../shared/types/rashi.ts";

const simha: RashiPlacement = {
    rashi: Rashi.Simha,

    index: 4,

    degree: 3,
    minute: 27,
    second: 21,

    absoluteLongitude: 123.456,

};

console.log("Rashi placement test:");
console.log(simha);