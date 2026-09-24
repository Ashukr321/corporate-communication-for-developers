# Production Terminology

| Term | Meaning |
|------|---------|
| Production (prod) | The live environment real users use |
| Deployment | Shipping code to an environment |
| Release | A version made available to users |
| Hotfix | Urgent production fix |
| Rollback | Reverting to the last good version |
| Incident | Unplanned event affecting users/service |
| Outage | Service is unavailable |
| Downtime | Period the service is unavailable |
| Monitoring | Watching system health (Grafana, Datadog, New Relic) |
| Alert | Automated notification when a metric breaches a threshold |
| On-call | Engineer responsible for responding to alerts |
| Root cause | The underlying reason for the incident |
| RCA | Root Cause Analysis — document explaining why it happened |
| Postmortem | Blameless review after an incident: timeline, cause, fixes |
| SLA | Service Level Agreement — promise to customers (e.g. 99.9% uptime) |
| SLO | Service Level Objective — internal target (e.g. p99 < 300 ms) |
| SLI | Service Level Indicator — the measured metric |
| Error rate | % of requests that fail |
| Latency | Time to respond (p50, p95, p99) |
| Throughput | Requests handled per second (RPS/QPS) |
| Severity (Sev1 / P1) | How critical the incident is |
| Mitigation | Reducing impact before a full fix |

## How it's said
- "We're seeing elevated error rates on checkout since 2:10 PM."
- "p99 latency jumped from 200 ms to 2 s after the deploy."
- "We've mitigated by rolling back; root cause is still being investigated."
- "I'll share the RCA by tomorrow."

See also: [07-real-world-examples/production-issue.md](../07-real-world-examples/production-issue.md)
