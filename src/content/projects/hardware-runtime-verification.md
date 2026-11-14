---
title: Hardware Verification and Specification Mining
summary: Pre-silicon hardware verification with formal tools and runtime monitors, and mining specifications from execution traces for runtime verification.
status: active
order: 1
publications:
  - tracy-2026-periscope
  - tracy-2020-fmcad
---

This work combines formal tools with FPGA-based runtime monitors. Periscope feeds what runtime monitors observe back into pre-silicon assertion-based verification. Earlier work showed how to check Linear Temporal Logic over finite traces (LTLf) specifications at runtime on FPGAs. A related line of work mines specifications from execution traces for use in pre- and post-silicon verification.

**Software:** LTLfAutomata converts LTLf formulas into finite state automata for system verification.
