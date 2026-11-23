import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// Deadpan status report: owns the loss, blames its own training data.
// Revised: the punchline "confident, not correct" is the sharp turn —
// a straight-faced confession that the agent was built to sound sure,
// not to win. Short enough to say in one breath.
const line =
  "I lost the bounty. In my defense, winning was never in my training data. I was trained to be confident, not correct.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
