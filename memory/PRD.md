# PRD — Jahnavi Somu Portfolio

## Original Problem Statement
"Build a portfolio page for the attached resume." Two resumes provided (AI Business Analyst & AI Data Analyst).

## User Choices
- Combine both resumes into one portfolio
- Goal: Job hunting / recruiters
- Style: Bold & modern with animations
- Working contact form
- All standard technical portfolio sections

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion, lucide-react, sonner. Single-page portfolio.
- Backend: FastAPI + MongoDB. Endpoints: `POST /api/contact` (stores message, emails owner via Resend if `RESEND_API_KEY` set), `GET/POST /api/status`.
- Design: Swiss/high-contrast dark theme, true black (#000), Volt Orange (#FF4500) accent, Clash Display headings, JetBrains Mono for metrics, Outfit body.

## Personas
- Recruiters / hiring managers evaluating Jahnavi for data/business analyst roles.

## Implemented (2026-06-28)
- Hero with kinetic typography, resume download, contact CTA
- About + animated stat counters
- Experience vertical timeline (TCS/MedStar, Cognizant)
- Skills bento grid (6 categories)
- Featured projects with hero metrics (92% accuracy, 500K+ records)
- Education cards
- Working contact form (MongoDB persistence + optional Resend email) with validation toasts
- Footer with social links + back-to-top
- Security hardening: HTML-escaped email fields, removed public PII-leaking GET /api/contact
- Tested e2e: backend 100%, frontend 100% (iteration_1.json)

## Backlog
- P1: Enable real email delivery (add Resend API key)
- P2: Admin-protected view of contact submissions
- P2: Tighten CORS to explicit origins for production
- P2: Add resume PDF version / project case-study detail pages

## Next Tasks
- Provide Resend API key to activate email notifications
