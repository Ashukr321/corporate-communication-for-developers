# Code Review Terminology

| Term | Meaning |
|------|---------|
| PR (Pull Request) / MR (Merge Request) | Request to merge your branch |
| Review | Teammates reading and commenting on your code |
| Reviewer | Person reviewing |
| Approval | Reviewer says it's good to merge |
| Requested changes | Reviewer wants fixes before approval |
| LGTM | "Looks good to me" — approval |
| Nit / Nitpick | Minor, optional suggestion (style, naming) |
| Blocking comment | Must be fixed before merge |
| Non-blocking comment | Suggestion; can merge without it |
| Suggestion | Proposed code change you can apply |
| Resolve | Mark a comment as addressed |
| Self-review | Reviewing your own diff before requesting review |

## As an author
- "PR is ready for review — would appreciate a look when you get a chance."
- "Addressed all comments, please take another look."
- "Good catch! Fixed in the latest commit."
- "I've kept this as-is because X — happy to change if you feel strongly."

## As a reviewer
- "nit: could we rename `data` to `orderItems` for clarity?"
- "Blocking: this will throw if `user` is null."
- "Non-blocking: we could extract this into a helper later."
- "LGTM 🚀"

See also: [07-real-world-examples/code-review.md](../07-real-world-examples/code-review.md)
