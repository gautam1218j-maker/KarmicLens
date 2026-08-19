/**
 * KarmicLens
 * Dasha Domain Model
 *
 * Version: 1.0.0
 *
 * Represents a calculated planetary time period
 * within the Jyotisha dasha system.
 */

import type { PlanetName } from "../enums/planet.ts";

export interface Dasha {
    /**
     * Planet governing this dasha period.
     */
    planet: PlanetName;

    /**
     * Dasha level in the hierarchy.
     *
     * Example:
     * Mahadasha
     * Antardasha
     * Pratyantardasha
     */
    level: DashaLevel;

    /**
     * Start of the dasha period.
     */
    startDate: Date;

    /**
     * End of the dasha period.
     */
    endDate: Date;

    /**
     * Whether this period is currently active.
     */
    active: boolean;
}

export type DashaLevel =
    | "Mahadasha"
    | "Antardasha"
    | "Pratyantardasha";