# Code Review — Real Examples

## PR description template
```markdown
## What
Adds coupon validation to checkout.

## Why
Users could apply expired coupons (JIRA-231).

## How
- Added `validateCoupon()` in `checkout.service.ts`
- Returns 400 with error code `COUPON_EXPIRED`

## Testing
- Unit tests added
- Tested manually on staging with expired/valid coupons

## Screenshots
<before/after>
```

## Requesting review
> "Hi team, PR #142 is ready for review — it adds coupon validation. Should be a quick one (~120 lines). PTAL when you get a chance 🙏"

## Reviewer comments — how to phrase them
| Harsh | Better |
|-------|--------|
| "This is wrong." | "I think this might fail when `items` is empty — could you check?" |
| "Why did you do this?" | "Could you help me understand the reasoning behind this approach?" |
| "Bad naming." | "nit: `x` → `retryCount` might be clearer." |
| "Rewrite this." | "Have you considered using a map here? It might simplify the lookup." |
| "This code is bad." | "I think we could improve this implementation by..." |

## Labelling comments
- **`nit:`** optional, minor
- **`blocking:`** must fix before merge
- **`question:`** just asking
- **`suggestion:`** optional improvement

## Responding as the author
- "Good catch, fixed in `a1b2c3d`."
- "Done ✅"
- "I kept it this way because the API can return `null` here. Let me add a comment to make that clear."
- "Agreed, but it's out of scope for this PR — I've created JIRA-245 to track it."

## Approving
- "LGTM 🚀"
- "Approved with a couple of nits — feel free to merge after addressing them."
