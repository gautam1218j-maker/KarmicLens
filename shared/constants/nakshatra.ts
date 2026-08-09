/**
 * KarmicLens
 * Nakshatra Metadata Registry
 *
 * Version: 1.0.0
 *
 * Canonical geometric metadata for the 27 Nakshatras
 * used by the Jyotisha calculation layer.
 *
 * Each Nakshatra spans 13°20' and contains 4 Padas.
 * Each Pada spans 3°20'.
 */

import { Nakshatra } from "../enums/nakshatra.ts";

export interface NakshatraDefinition {
    nakshatra: Nakshatra;

    index: number;

    spanDegrees: number;

    padaCount: number;

    padaSpanDegrees: number;

    startingLongitude: number;

    endingLongitude: number;
}

const NAKSHATRA_SPAN = 13 + 20 / 60;
const PADA_SPAN = 3 + 20 / 60;

export const NAKSHATRA_DEFINITIONS: readonly NakshatraDefinition[] = [
    {
        nakshatra: Nakshatra.Ashwini,
        index: 1,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 0,
        endingLongitude: 13 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.Bharani,
        index: 2,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 13 + 20 / 60,
        endingLongitude: 26 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.Krittika,
        index: 3,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 26 + 40 / 60,
        endingLongitude: 40,
    },
    {
        nakshatra: Nakshatra.Rohini,
        index: 4,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 40,
        endingLongitude: 53 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.Mrigashira,
        index: 5,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 53 + 20 / 60,
        endingLongitude: 66 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.Ardra,
        index: 6,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 66 + 40 / 60,
        endingLongitude: 80,
    },
    {
        nakshatra: Nakshatra.Punarvasu,
        index: 7,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 80,
        endingLongitude: 93 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.Pushya,
        index: 8,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 93 + 20 / 60,
        endingLongitude: 106 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.Ashlesha,
        index: 9,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 106 + 40 / 60,
        endingLongitude: 120,
    },
    {
        nakshatra: Nakshatra.Magha,
        index: 10,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 120,
        endingLongitude: 133 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.PurvaPhalguni,
        index: 11,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 133 + 20 / 60,
        endingLongitude: 146 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.UttaraPhalguni,
        index: 12,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 146 + 40 / 60,
        endingLongitude: 160,
    },
    {
        nakshatra: Nakshatra.Hasta,
        index: 13,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 160,
        endingLongitude: 173 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.Chitra,
        index: 14,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 173 + 20 / 60,
        endingLongitude: 186 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.Swati,
        index: 15,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 186 + 40 / 60,
        endingLongitude: 200,
    },
    {
        nakshatra: Nakshatra.Vishakha,
        index: 16,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 200,
        endingLongitude: 213 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.Anuradha,
        index: 17,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 213 + 20 / 60,
        endingLongitude: 226 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.Jyeshtha,
        index: 18,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 226 + 40 / 60,
        endingLongitude: 240,
    },
    {
        nakshatra: Nakshatra.Mula,
        index: 19,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 240,
        endingLongitude: 253 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.PurvaAshadha,
        index: 20,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 253 + 20 / 60,
        endingLongitude: 266 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.UttaraAshadha,
        index: 21,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 266 + 40 / 60,
        endingLongitude: 280,
    },
    {
        nakshatra: Nakshatra.Shravana,
        index: 22,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 280,
        endingLongitude: 293 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.Dhanishtha,
        index: 23,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 293 + 20 / 60,
        endingLongitude: 306 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.Shatabhisha,
        index: 24,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 306 + 40 / 60,
        endingLongitude: 320,
    },
    {
        nakshatra: Nakshatra.PurvaBhadrapada,
        index: 25,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 320,
        endingLongitude: 333 + 20 / 60,
    },
    {
        nakshatra: Nakshatra.UttaraBhadrapada,
        index: 26,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 333 + 20 / 60,
        endingLongitude: 346 + 40 / 60,
    },
    {
        nakshatra: Nakshatra.Revati,
        index: 27,
        spanDegrees: NAKSHATRA_SPAN,
        padaCount: 4,
        padaSpanDegrees: PADA_SPAN,
        startingLongitude: 346 + 40 / 60,
        endingLongitude: 360,
    },
];