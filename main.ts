// Seventeen Syllables of Debugging
// Entry for make.fun bounty u-irvan-motion-seventeen-syllables-of-debugging-d194b605
// Writes one haiku about debugging (3 lines, 5-7-5 syllables) to /output/entry.txt.
// Deterministic: the same haiku on every run. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Cursor blinks at three",
  "a breakpoint, holding its breath",
  "dear bug, it was me",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
