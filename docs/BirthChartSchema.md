# BirthChart Schema v1.0

## Purpose

The BirthChart is the central domain model of KarmicLens. It stores all deterministic calculations, derived astrological structures, and AI-generated interpretations in a structured, versioned format. All backend services and frontend components consume this model rather than communicating directly with calculation engines.
---

## Design Principles

The BirthChart object follows these principles:

### 1. Single Source of Truth

All calculated astrological information originates from one BirthChart instance.

### 2. Immutable Calculations

Once generated, planetary positions and astronomical calculations are never modified manually.

### 3. Explainability

Every prediction should reference supporting astrological rules and classical texts.

### 4. Versioning

The schema must support future extensions without breaking compatibility.

### 5. Engine Independence

The BirthChart model is independent of any calculation engine (VedAstro, Swiss Ephemeris, etc.).

### 6. Separation of Data

Birth input, calculated data, and AI-generated interpretations are stored separately.
## BirthChart Components

The BirthChart domain model consists of the following top-level components:

- Metadata
- Birth
- Calculation
- Ascendant
- Planets
- Houses
- Nakshatras
- Aspects
- Yogas
- Dashas
- Divisional Charts
- Strengths
- Predictions
- Evidence
- Audit