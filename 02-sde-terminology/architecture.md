# Architecture Terminology

| Term | Meaning |
|------|---------|
| Monolith | One deployable application |
| Microservices | Many small, independently deployed services |
| Scalability | Handling more load (horizontal = more machines, vertical = bigger machine) |
| Availability | % of time the system is up |
| Single point of failure (SPOF) | One component whose failure brings everything down |
| Load balancer | Distributes traffic across servers |
| Event-driven | Services communicate via events |
| Trade-off | Gaining one thing at the cost of another |
| Coupling / Cohesion | How dependent modules are / how focused a module is |
| HLD / LLD | High-level design / low-level design |
| Design doc / RFC | Written proposal for a technical change |
| Source of truth | The authoritative place for a piece of data |

## How it's said
- "What's the trade-off between consistency and latency here?"
- "This introduces tight coupling between order and inventory."
- "I'll write a design doc and share it for feedback."
- "The DB is a single point of failure — we need a replica."
