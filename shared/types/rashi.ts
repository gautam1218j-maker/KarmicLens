/**
 * KarmicLens
 * Rashi Domain Model
 *
 * Version: 1.0.0
 *
 * Represents the astrological placement and metadata
 * associated with a single Rashi.
 */

import type { Rashi } from "../enums/rashi.ts";

export interface RashiPlacement {
    rashi: Rashi;

    /**
     * Zero-based zodiac index.
     * Mesha = 0 ... Meena = 11.
     */
    index: number;

    /**
     * Position within the Rashi.
     */
    degree: number;
    minute: number;
    second: number;

    /**
     * Absolute sidereal longitude.
     * Expected range: 0 <= longitude < 360.
     */
    absoluteLongitude: number;
}

export interface RashiCharacteristics {
    element: "Agni" | "Prithvi" | "Vayu" | "Jala";

    modality: "Chara" | "Sthira" | "Dvisvabhava";

    ruler: string;
}

export interface RashiDefinition {
    name: Rashi;

    sanskritName: string;
    englishName: string;

    index: number;

    characteristics: RashiCharacteristics;

    longitudeStart: number;
    longitudeEnd: number;
}