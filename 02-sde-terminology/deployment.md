# Deployment Terminology

| Term | Meaning |
|------|---------|
| Deployment | Putting code onto a server/environment |
| Release | Making a version available to users |
| Environment | dev → QA/staging → UAT → production |
| CI/CD | Continuous integration / continuous delivery pipeline |
| Build | Compiling/bundling code into a deployable artifact |
| Pipeline | Automated build → test → deploy steps |
| Hotfix | Urgent fix shipped directly to production |
| Rollback | Revert to the previous working version |
| Feature flag | Toggle a feature on/off without deploying |
| Canary release | Roll out to a small % of users first |
| Blue-green deployment | Switch traffic between two identical environments |
| Rolling deployment | Update servers gradually |
| Release notes / Changelog | What changed in the release |
| Code freeze | No new changes before a release |

## How it's said
- "The build is failing on CI — looking into it."
- "Deployed to staging; ready for QA."
- "We're behind a feature flag, so we can turn it off if needed."
- "Code freeze starts Wednesday EOD."
