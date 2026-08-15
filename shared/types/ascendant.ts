/**
 * KarmicLens
 * Ascendant Domain Model
 *
 * Version: 1.0.0
 *
 * Represents the Lagna (Ascendant) of a
 * Jyotisha birth chart.
 */

import type { Nakshatra } from "../enums/nakshatra.ts";
import type { RashiPlacement } from "./rashi.ts";

export interface Ascendant {
    /**
     * Rashi occupied by the Ascendant.
     */
    rashi: RashiPlacement;

    /**
     * Nakshatra occupied by the Ascendant.
     */
    nakshatra: {
        name: Nakshatra;

        /**
         * Zero-based Nakshatra index.
         */
        index: number;

        /**
         * Pada number.
         * Valid range: 1–4.
         */
        pada: number;

        /**
         * Degrees elapsed within the Nakshatra.
         */
        degreeInNakshatra: number;
    };
}