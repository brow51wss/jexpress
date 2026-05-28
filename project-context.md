# jexpress — Project Context (Sentinel)

> Read by Sentinel on every audit pass. Update this file when sensitive fields,
> roles, compliance requirements, or high-risk features change.
> Last updated: 2026-05-28 (initialized via sentinel_init)

---

## SENSITIVE_FIELDS

<!-- List fields that contain sensitive data. Format:
     `qualified.field_name` — category — rules

Replace these examples with the real fields in this project. The MCP auto-loads
declared fields and adds project-specific checks (AsyncStorage misuse for fields
requiring SecureStore; sensitive fields appearing in analytics/error reporters; etc.).

Examples:
- `users.email` — GDPR/PII — never logged, never in analytics events, never in a URL
- `users.password` — credential — server-side hash only, never returned in API responses
- `session.access_token` — auth credential — SecureStore only, never AsyncStorage, never logged
- `payments.card_number` — FINANCIAL — never logged, must be tokenized via Stripe.js or equivalent
- `analytics.event_payloads` — PII risk — scrub email/display_name before send
- `sentry.error_context` — PII risk — scrub PII from breadcrumbs and error messages
-->

---

## USER_ROLES

<!-- List user roles and what each can do. Examples:
- `user` — default, self-data access only (Row-Level Security enforced)
- `admin` — full data access, audit log access
- `support` — read-only access to user data for support tickets
-->

---

## COMPLIANCE_REQUIREMENTS

<!-- List compliance frameworks that apply. Examples:
- GDPR — EU users have right to export and right to deletion
- Apple App Store Privacy Labels — must be completed before first TestFlight
- Google Play Data Safety Form — must be completed before first Play Console
- PCI-DSS — if handling card data
- HIPAA — if handling health data
- SOC 2 — if handling enterprise customer data
-->

---

## HIGH_RISK_FEATURES

<!-- List features requiring extra scrutiny. Examples:
- Auth flow — login, signup, password reset, OAuth, SSO
- Payment processing
- File uploads from users
- Deep links / URL schemes / Universal Links
- WebView usage
- Third-party SDK integrations (analytics, crash reporters, payment processors)
- Background location, camera, microphone, contacts access
-->

---

## AUDIT HISTORY

| Date | Trigger | Findings | Status |
|---|---|---|---|
| 2026-05-28 | initialized | _(pending first Sentinel scan)_ | _(pending verdict)_ |
