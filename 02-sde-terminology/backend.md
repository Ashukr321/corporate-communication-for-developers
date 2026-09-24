# Backend Terminology

| Term | Meaning |
|------|---------|
| API / Endpoint | Interface other systems call / a specific URL + method |
| Contract | Agreed request/response shape of an API |
| Payload | Data sent in a request or response |
| Schema | Structure of data (DB table or API body) |
| Migration | Script that changes the DB schema |
| Idempotent | Calling it multiple times has the same effect as once |
| Rate limiting | Restricting how often a client can call |
| Caching | Storing results to serve faster |
| Queue | Buffer for async jobs (SQS, Kafka, RabbitMQ) |
| Auth (AuthN / AuthZ) | Who you are / what you're allowed to do |
| Pagination | Returning data in pages |
| Timeout / Retry | Max wait time / trying again on failure |

## How it's said
- "Can we finalize the API contract before frontend starts?"
- "The endpoint should be idempotent — payments get retried."
- "The migration is backward compatible, so we can deploy without downtime."
- "We're hitting the rate limit on the third-party API."
