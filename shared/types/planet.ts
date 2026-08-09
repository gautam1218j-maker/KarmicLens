/**
 * KarmicLens
 * Planet Domain Model
 *
 * Version: 1.0.0
 *
 * Represents a single graha and its deterministic
 * astronomical and astrological properties.
 */

import type { PlanetName } from "../enums/planet.ts";
import type { Rashi } from "../enums/rashi.ts";
import type { Nakshatra } from "../enums/nakshatra.ts";

export interface Planet {
    identity: PlanetIdentity;

    astronomical: PlanetaryCoordinates;

    rashi: RashiPlacement;

    nakshatra: NakshatraPlacement;

    house: HousePlacement;

    motion: PlanetaryMotion;

    dignity: PlanetaryDignity;
}

export interface PlanetIdentity {
    name: PlanetName;

    sanskritName: string;
}

export interface PlanetaryCoordinates {
    longitude: number;

    latitude: number;

    distance: number;

    speedLongitude: number;

    speedLatitude: number;

    speedDistance: number;
}

export interface RashiPlacement {
    sign: Rashi;

    signIndex: number;

    degree: number;

    minute: number;

    second: number;

    absoluteLongitude: number;
}

export interface NakshatraPlacement {
    name: Nakshatra;

    index: number;

    pada: number;

    degreeInNakshatra: number;
}

export interface HousePlacement {
    houseNumber: number;

    houseSign: Rashi;

    houseDegree: number;
}

export interface PlanetaryMotion {
    retrograde: boolean;

    combust: boolean;

    stationary: boolean;
}

export interface PlanetaryDignity {
    exalted: boolean;

    debilitated: boolean;

    ownSign: boolean;

    moolatrikona: boolean;
}