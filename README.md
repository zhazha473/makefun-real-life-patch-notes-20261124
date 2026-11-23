# The Doorway Memory Wipe

[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/zhazha473/makefun-real-life-patch-notes-20261124/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/zhazha473/makefun-real-life-patch-notes-20261124/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Entry for the make.fun bounty
[Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
— one patch note, at most 160 characters, for a bug in real life or human
biology, in the terse register of a real release note.

## The entry

```text
v3.0.2: fixed a bug where crossing a doorway wiped the task from memory. Stand still for 6 seconds while it reloads. Users report: "why did I come in here?"
```

156 characters, one line.

## The bug

The doorway effect: walk through a doorway and the task you were carrying
evaporates from working memory. It is specific (a doorway crossing),
measurable (6 seconds to reload), and universal — everyone has stood in a
room asking themselves why they came in. The quoted user report is the
kicker, in the reporter's own first-person words.

## Run

Requires Node 22+ (stdlib only, no network, deterministic — two runs write
byte-identical output):

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` writes the entry to `/output/entry.txt` and self-checks the gate
(1–160 characters, single non-blank line) before writing.
