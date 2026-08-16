/**
 * KarmicLens
 * Birth Details Domain Model
 *
 * Version: 1.0.0
 *
 * Represents the raw birth information supplied to the
 * Jyotisha calculation engine.
 *
 * This model contains input data only.
 * Calculated planetary positions, houses, dashas, yogas,
 * and other derived information do not belong here.
 */

export interface BirthDetails {
    /**
     * Calendar date of birth.
     *
     * ISO-style date string:
     * YYYY-MM-DD
     */
    date: string;

    /**
     * Local clock time at the place of birth.
     *
     * 24-hour format:
     * HH:mm:ss
     */
    time: string;

    /**
     * Name of the birthplace.
     */
    placeName: string;

    /**
     * Geographic latitude of the birthplace.
     *
     * Valid range:
     * -90 <= latitude <= 90
     */
    latitude: number;

    /**
     * Geographic longitude of the birthplace.
     *
     * Valid range:
     * -180 <= longitude <= 180
     */
    longitude: number;

    /**
     * IANA timezone identifier.
     *
     * Example:
     * Asia/Kolkata
     */
    timezone: string;
}