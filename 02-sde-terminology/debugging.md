# Debugging Terminology

| Term | Meaning |
|------|---------|
| Reproduce (repro) | Make the bug happen again reliably |
| Steps to reproduce | Exact steps that trigger the bug |
| Expected vs actual | What should happen vs what happens |
| Stack trace | Chain of function calls at the error |
| Logs | Recorded runtime messages |
| Breakpoint | Point where the debugger pauses |
| Flaky | Fails sometimes, passes sometimes |
| Intermittent | Happens occasionally |
| Isolate | Narrow down where the problem is |
| Root cause | The underlying reason |
| Workaround | Temporary way around it |

## How it's said
- "I'm able to reproduce it locally."
- "I can't repro on staging — can you share the steps?"
- "The test is flaky; it fails about 1 in 10 runs."
- "I've isolated it to the date-parsing util."
- "Expected: order confirmed. Actual: 500 error."
