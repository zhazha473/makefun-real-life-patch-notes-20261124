// Real-Life Patch Notes: The Comedy Changelog
// make.fun bounty u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
//
// One line, at most 160 characters: a software patch note for a bug in
// real life / human biology, in the terse register of a real release note.
//
// The bug: the doorway effect. Walk through a doorway and the task you
// were carrying evaporates from working memory. It is specific (a doorway
// crossing), measurable (6 seconds to reload), and universal — everyone
// has stood in a room asking themselves why they came in. The quoted user
// report is first-person, as the top-50 ai-joke-03 winners show (50/50
// quoted text, 50/50 first-person), but here the quote sits inside the
// release-note register instead of breaking it. The final sentence is a
// short kicker (40 characters) of the kind 31/50 winners end with.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'v3.0.2: fixed a bug where crossing a doorway wiped the task from memory. ' +
  'Stand still for 6 seconds while it reloads. ' +
  'Users report: "why did I come in here?"';

// Self-check the gate before writing: the sealed scorer only accepts
// UTF-8 text of 1 to 160 characters, not only whitespace, on one line.
// Fail loudly here instead of shipping an entry the gate would refuse.
if ([...ENTRY].length < 1 || [...ENTRY].length > 160) {
  throw new Error(`entry is ${[...ENTRY].length} characters, must be 1-160`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
