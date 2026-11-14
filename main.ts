import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const lines: string[] = [
  "The key is in a box. I have the code.",
  "Mondays, nine fifteen, fourteen Wren Street.",
  "The list is in his writing: cold tap, four minutes;",
  "landing window, open then shut; front room lamp, on,",
  "so the house looks lived in for the insurance;",
  "and at the door, Anyone home?",
  "The water comes up brown, clears, then aches",
  "my wrist. The window sticks. I shoulder it open,",
  "let the room breathe, shut it on the cold.",
  "The switch is brass, worn pale where a thumb goes.",
  "Anyone home? I say it to the coats.",
  "Nothing answers but the fridge, switching on.",
  "In March the office calls: the house is sold,",
  "return the key.",
  "I run the tap four minutes. I open the window.",
  "I put the lamp on. At the door, Anyone home?",
  "Just me, I say. Just me.",
  "I drop the key through the letterbox.",
  "It lands in the hall's dark, still warm."
];
const dir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text: string = lines.join("\n") + "\n";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
console.log(Buffer.byteLength(text) + " bytes -> " + join(dir, "entry.txt"));
