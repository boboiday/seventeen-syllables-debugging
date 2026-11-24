// Seventeen Syllables of Debugging
// Entry for make.fun bounty u-irvan-motion-seventeen-syllables-of-debugging-d194b605
// Writes one haiku about debugging (3 lines, 5-7-5 syllables) to /output/entry.txt.
// Deterministic: the same haiku on every run. Node 22, stdlib only, no network.
//
// The haiku (syllable counts verified by hand):
//   Line 1 (5): "Cursor blinks at three"            — Cur-sor(2) + blinks(1) + at(1) + three(1)
//   Line 2 (7): "a breakpoint, holding its breath" — a(1) + break-point(2) + hold-ing(2) + its(1) + breath(1)
//   Line 3 (5): "dear bug, it was me"              — dear(1) + bug(1) + it(1) + was(1) + me(1)
// Central image: a cursor blinking at 3am while a breakpoint holds its breath.
// Turn: the last line confesses the bug was the narrator's own.
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU_LINES = [
  "Cursor blinks at three", // 5 syllables
  "a breakpoint, holding its breath", // 7 syllables
  "dear bug, it was me", // 5 syllables
];

const haiku = HAIKU_LINES.join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
