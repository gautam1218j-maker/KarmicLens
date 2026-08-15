/**
 * KarmicLens
 * House Domain Model
 *
 * Version: 1.0.0
 *
 * Represents a single Bhava (house) within
 * a Jyotisha birth chart.
 */

import type { Rashi } from "../enums/rashi.ts";

export interface House {
    /**
     * House number.
     *
     * Valid range: 1–12.
     */
    houseNumber: number;

    /**
     * Rashi associated with the house.
     */
    rashi: Rashi;

    /**
     * Zero-based zodiac index.
     *
     * Mesha = 0 ... Meena = 11.
     */
    signIndex: number;

    /**
     * Beginning of the house in absolute
     * sidereal longitude.
     */
    startLongitude: number;

    /**
     * Ending of the house in absolute
     * sidereal longitude.
     */
    endLongitude: number;

    /**
     * Central longitude / cusp of the house.
     */
    cuspLongitude: number;
}