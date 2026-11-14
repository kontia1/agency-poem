import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const lines: string[] = [
  "5:40. The flatwork ironer has been hot an hour.",
  "She has fed it sheets for eleven years, and her forearms",
  "are smooth to the elbow, burnt smooth, the hair gone.",
  "Palms flat, she says. Never the fingertips.",
  "A sheet goes in and comes off the drum",
  "flat as a held breath,",
  "folded, stacked, warm.",
  "Then she takes my wrist, lays my palm on the moving cloth,",
  "and does not let go.",
  "Heat through the cotton like blood coming back into a hand.",
  "I want my hand back. She holds.",
  "Then lets go.",
  "The sheet goes and takes my hands with it, almost,",
  "and I am still standing.",
  "Her coat. The door. The cold let in.",
  "All night I feed it. It never says my name.",
  "At seven the day girl comes in with her hair tied back.",
  "I take her wrist and do not let go."
];
const dir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text: string = lines.join("\n") + "\n";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
console.log(Buffer.byteLength(text) + " bytes -> " + join(dir, "entry.txt"));
