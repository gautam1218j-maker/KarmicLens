import type { ChartMetadata } from "../shared/types/chart-metadata.ts";

const metadata: ChartMetadata = {
    chartId: "test-chart-001",
    schemaVersion: "1.0.0",
    generatedAt: new Date("2026-08-16T12:00:00Z"),
    engine: "KarmicLens-ChartEngine",
    engineVersion: "1.0.0",
    language: "en",
};

console.log("Chart metadata model test:");
console.log(metadata);