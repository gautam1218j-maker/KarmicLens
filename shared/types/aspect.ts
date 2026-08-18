/**
 * KarmicLens
 * Aspect Domain Model
 *
 * Version: 1.0.0
 *
 * Represents a deterministic angular relationship
 * between two planetary bodies in a Jyotisha chart.
 */

import type { PlanetName } from "../enums/planet.ts";

export interface Aspect {
    /**
     * Planet producing the aspect.
     */
    sourcePlanet: PlanetName;

    /**
     * Planet receiving the aspect.
     */
    targetPlanet: PlanetName;

    /**
     * Nominal angular separation of the aspect.
     *
     * Example:
     * 180 = opposition
     * 120 = trine
     * 90  = square
     */
    angle: number;

    /**
     * Actual angular separation between the two planets.
     */
    actualSeparation: number;

    /**
     * Difference between the actual separation
     * and the nominal aspect angle.
     */
    orb: number;

    /**
     * Whether the aspect is exact within
     * the configured tolerance.
     */
    exact: boolean;
}