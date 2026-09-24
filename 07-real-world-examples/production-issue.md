# Production Issue — Real Examples

## 1. First alert (incident channel)
> "🚨 Investigating: elevated error rate (~12%) on checkout API since 14:10 IST. Looking into it — will update in 15 min."

## 2. Progress update
> "Update 14:25: Errors started right after the 14:05 deploy (v2.4.0). Suspect the new coupon validation. Rolling back to v2.3.1 now."

## 3. Mitigated
> "Update 14:35: Rollback complete. Error rate back to normal (<0.1%). Monitoring for 30 min. Root cause investigation in progress."

## 4. Resolved
> "✅ Resolved. Root cause: null coupon field from older mobile clients wasn't handled. Fix in PR #218 with a test. RCA doc to follow by tomorrow EOD."

## Update format
Every update should have: **time, status, impact, what we're doing, next update time.**

## RCA / Postmortem template
```markdown
# RCA: Checkout errors — 24 Sep 2026

**Severity:** Sev2
**Duration:** 14:10 – 14:35 IST (25 min)
**Impact:** ~12% of checkout requests failed (~1,800 orders)

## Timeline
- 14:05 v2.4.0 deployed
- 14:10 Error-rate alert fired
- 14:25 Deploy identified as cause, rollback started
- 14:35 Rollback complete, errors normal

## Root cause
Older mobile clients send `coupon: null`; new validation assumed a string.

## What went well
- Alert fired within 5 minutes
- Rollback was quick

## What went wrong
- No test for null coupon
- Staging doesn't use old mobile clients

## Action items
| Action | Owner | Due |
|--------|-------|-----|
| Add null-handling test | Ashutosh | 26 Sep |
| Add contract tests for mobile payloads | Neha | 3 Oct |
```

## Tone
- Blameless: "the deploy introduced..." not "X broke prod".
- Facts over guesses: say "suspect" until confirmed.
- Frequent short updates beat one long update.
