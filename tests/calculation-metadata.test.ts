import type { CalculationMetadata } from "../shared/types/calculation-metadata.ts";

const calculationMetadata: CalculationMetadata = {
    ayanamsa: "Lahiri",
    calculationEngine: "KarmicLens-ChartEngine",
    ephemeris: "VedAstro",
    houseSystem: "Whole Sign",
    coordinateSource: "Geographic coordinates",
    timezoneSource: "IANA timezone database",
};

console.log("Calculation metadata model test:");
console.log(calculationMetadata);