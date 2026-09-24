# Git Terminology

| Term | Meaning | How it's said |
|------|---------|---------------|
| Commit | Saved snapshot of changes | "I've committed the fix." |
| Branch | Separate line of development | "I'll create a feature branch." |
| Push / Pull | Upload / download commits | "Pull the latest main before you start." |
| PR | Pull request to merge a branch | "Raised a PR for the login fix." |
| Review | Teammates checking your PR | "Could you review my PR when free?" |
| Approval | Reviewer OKs the PR | "Got two approvals, merging now." |
| Requested changes | Reviewer blocks until fixes are made | "Rahul requested changes on the error handling." |
| Merge | Combine a branch into another | "Merged to main after approval." |
| Rebase | Replay your commits on top of another branch | "Please rebase on main — there are conflicts." |
| Conflict | Same lines changed in two branches | "Resolving merge conflicts in `package.json`." |
| Cherry-pick | Apply a specific commit to another branch | "Let's cherry-pick the fix into the release branch." |
| Rollback / Revert | Undo a change | "Reverting the commit that broke checkout." |
| Squash | Combine commits into one | "Squash and merge to keep history clean." |
| Stash | Temporarily shelve changes | "I stashed my WIP to test main." |
| Tag | Named pointer to a commit (often a release) | "Tagged `v1.4.0`." |

## Common branch names
`main`, `develop`, `feature/login-page`, `bugfix/cart-total`, `hotfix/payment-crash`, `release/1.4.0`

## Commit message style (Conventional Commits)
```
feat: add coupon validation to checkout
fix: handle null user in profile page
chore: bump axios to 1.7.2
refactor: extract price calculation helper
docs: update local setup steps
```
