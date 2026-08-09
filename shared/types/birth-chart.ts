import type { ChartMetadata } from "./chart-metadata";
import type { BirthDetails } from "./birth-details";
import type { CalculationMetadata } from "./calculation-metadata";
import type { Ascendant } from "./ascendant";
import type { Planet } from "./planet";
import type { House } from "./house";
import type { aspects } from "./aspect";
import type { Yoga } from "./yoga";
import type { Dasha } from "./dasha";
import type { DivisionalChart } from "./divisional-chart";
import type { StrengthAnalysis } from "./strength-analysis";
import type { Prediction } from "./prediction";
import type { Evidence } from "./evidence";
import type { AuditInformation } from "./audit-information";

export interface BirthChart {
    metadata: ChartMetadata;
    birth: BirthDetails;
    calculation: CalculationMetadata;

    ascendant: Ascendant;

    planets: Planet[];

    houses: House[];

    aspects: aspects[];

    yogas: Yoga[];

    dashas: Dasha[];

    divisionalCharts: DivisionalChart[];

    strengths: StrengthAnalysis;

    predictions: Prediction[];

    evidence: Evidence[];

    audit: AuditInformation;
}