/**
 * KarmicLens
 * Yoga Domain Model
 *
 * Version: 1.0.0
 *
 * Represents a classical Jyotisha yoga identified
 * by the Rule Engine from deterministic chart data.
 */

import type { PlanetName } from "../enums/planet.ts";

export interface Yoga {
    /**
     * Unique identifier for the yoga definition.
     */
    id: string;

    /**
     * Classical name of the yoga.
     */
    name: string;

    /**
     * Planets involved in forming the yoga.
     */
    planets: PlanetName[];

    /**
     * Houses involved in the yoga, when applicable.
     */
    houses: number[];

    /**
     * Whether the defining conditions of the yoga
     * are currently satisfied.
     */
    active: boolean;

    /**
     * Reference to the classical rule used
     * to evaluate this yoga.
     */
    ruleId: string;
}