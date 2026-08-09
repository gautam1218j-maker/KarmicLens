import { PlanetName } from "../shared/enums/planet.ts";
import type { Planet } from "../shared/types/planet.ts";
import { Rashi } from "../shared/enums/rashi.ts";
import { Nakshatra } from "../shared/enums/nakshatra.ts";
const sun: Planet = {
    identity: {
        name: PlanetName.Sun,
        sanskritName: "Surya",
    },

    astronomical: {
        longitude: 123.456,
        latitude: 0.001,
        distance: 1.0,
        speedLongitude: 0.98,
        speedLatitude: 0.01,
        speedDistance: 0.02,
    },

    rashi: {
        sign: Rashi.Simha,
        signIndex: 5,
        degree: 3,
        minute: 27,
        second: 21,
        absoluteLongitude: 123.456,
    },

    nakshatra: {
        name: Nakshatra.Magha,
        index: 10,
        pada: 1,
        degreeInNakshatra: 0.95,
    },

    house: {
        houseNumber: 1,
        houseSign: Rashi.Simha,
        houseDegree: 3.45,
    },

    motion: {
        retrograde: false,
        combust: false,
        stationary: false,
    },

    dignity: {
        exalted: false,
        debilitated: false,
        ownSign: true,
        moolatrikona: true,
    },
};

console.log("Planet model test passed:", sun);