/**
 * KarmicLens
 * Rashi Metadata Registry
 *
 * Version: 1.0.0
 *
 * Canonical metadata for the twelve Rashis used
 * by the Jyotisha calculation layer.
 */

import { Rashi } from "../enums/rashi.ts";

export interface RashiDefinition {
    name: Rashi;
    index: number;

    sanskritName: string;
    englishName: string;

    element: "Agni" | "Prithvi" | "Vayu" | "Jala";

    modality: "Chara" | "Sthira" | "Dvisvabhava";

    ruler: string;

    startLongitude: number;
    endLongitude: number;
}

export const RASHI_DEFINITIONS: Record<Rashi, RashiDefinition> = {
    [Rashi.Mesha]: {
        name: Rashi.Mesha,
        index: 0,
        sanskritName: "Mesha",
        englishName: "Aries",
        element: "Agni",
        modality: "Chara",
        ruler: "Mars",
        startLongitude: 0,
        endLongitude: 30,
    },

    [Rashi.Vrishabha]: {
        name: Rashi.Vrishabha,
        index: 1,
        sanskritName: "Vrishabha",
        englishName: "Taurus",
        element: "Prithvi",
        modality: "Sthira",
        ruler: "Venus",
        startLongitude: 30,
        endLongitude: 60,
    },

    [Rashi.Mithuna]: {
        name: Rashi.Mithuna,
        index: 2,
        sanskritName: "Mithuna",
        englishName: "Gemini",
        element: "Vayu",
        modality: "Dvisvabhava",
        ruler: "Mercury",
        startLongitude: 60,
        endLongitude: 90,
    },

    [Rashi.Karka]: {
        name: Rashi.Karka,
        index: 3,
        sanskritName: "Karka",
        englishName: "Cancer",
        element: "Jala",
        modality: "Chara",
        ruler: "Moon",
        startLongitude: 90,
        endLongitude: 120,
    },

    [Rashi.Simha]: {
        name: Rashi.Simha,
        index: 4,
        sanskritName: "Simha",
        englishName: "Leo",
        element: "Agni",
        modality: "Sthira",
        ruler: "Sun",
        startLongitude: 120,
        endLongitude: 150,
    },

    [Rashi.Kanya]: {
        name: Rashi.Kanya,
        index: 5,
        sanskritName: "Kanya",
        englishName: "Virgo",
        element: "Prithvi",
        modality: "Dvisvabhava",
        ruler: "Mercury",
        startLongitude: 150,
        endLongitude: 180,
    },

    [Rashi.Tula]: {
        name: Rashi.Tula,
        index: 6,
        sanskritName: "Tula",
        englishName: "Libra",
        element: "Vayu",
        modality: "Chara",
        ruler: "Venus",
        startLongitude: 180,
        endLongitude: 210,
    },

    [Rashi.Vrischika]: {
        name: Rashi.Vrischika,
        index: 7,
        sanskritName: "Vrischika",
        englishName: "Scorpio",
        element: "Jala",
        modality: "Sthira",
        ruler: "Mars",
        startLongitude: 210,
        endLongitude: 240,
    },

    [Rashi.Dhanu]: {
        name: Rashi.Dhanu,
        index: 8,
        sanskritName: "Dhanu",
        englishName: "Sagittarius",
        element: "Agni",
        modality: "Dvisvabhava",
        ruler: "Jupiter",
        startLongitude: 240,
        endLongitude: 270,
    },

    [Rashi.Makara]: {
        name: Rashi.Makara,
        index: 9,
        sanskritName: "Makara",
        englishName: "Capricorn",
        element: "Prithvi",
        modality: "Chara",
        ruler: "Saturn",
        startLongitude: 270,
        endLongitude: 300,
    },

    [Rashi.Kumbha]: {
        name: Rashi.Kumbha,
        index: 10,
        sanskritName: "Kumbha",
        englishName: "Aquarius",
        element: "Vayu",
        modality: "Sthira",
        ruler: "Saturn",
        startLongitude: 300,
        endLongitude: 330,
    },

    [Rashi.Meena]: {
        name: Rashi.Meena,
        index: 11,
        sanskritName: "Meena",
        englishName: "Pisces",
        element: "Jala",
        modality: "Dvisvabhava",
        ruler: "Jupiter",
        startLongitude: 330,
        endLongitude: 360,
    },
};