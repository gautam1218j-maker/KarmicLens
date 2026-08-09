# KarmicLens Architecture

Version: 1.0

---

## Vision

KarmicLens is an explainable Jyotisha analysis platform that combines deterministic astronomical calculations, classical Vedic astrology, and AI-assisted explanations.

The platform is designed to produce professional astrological reports while remaining transparent about how each conclusion is generated.

---

## Core Principles

### 1. Deterministic Calculations

Planetary positions are always calculated using astronomical libraries.

AI never calculates planetary positions.

---

### 2. Explainable Predictions

Every prediction must reference one or more classical astrological rules.

Users should always be able to understand why a conclusion was generated.

---

### 3. Modular Architecture

Every system has a single responsibility.

Examples:

- Chart Engine
- Rule Engine
- Report Engine
- AI Engine

---

### 4. Type Safety

All data models must use strict TypeScript types.

Avoid `any`.

---

### 5. Separation of Responsibilities

Calculation

↓

Rule Evaluation

↓

AI Explanation

↓

Report Generation

These stages must remain independent.

---

## High-Level Architecture

Frontend

↓

Supabase Backend

↓

Chart Engine

↓

Rule Engine

↓

Knowledge Base

↓

AI Explanation Engine

↓

Report Generator

---

## Technologies

Frontend:
- Lovable
- React
- TypeScript

Backend:
- Supabase
- Deno Edge Functions

AI:
- Google Gemini Pro

Astronomical Calculations:
- VedAstro
- Swiss Ephemeris (future)

Database:
- PostgreSQL

Authentication:
- Supabase Auth

Storage:
- Supabase Storage

Version Control:
- Git + GitHub

---

End of Document