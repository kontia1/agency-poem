import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const lines: string[] = [
  "The aide brings the forms on a clipboard,", "the pen on a beaded chain.",
  "Since March my mother's name has been mine", "to write in every box marked SIGN.",
  "She watches me do it, her hands", "flat on the lap blanket, palms down.",
  "Therapy. Diet. The dose at eight.", "The line that says she may not leave.",
  "Then one hand lifts, slow", "as a crane taking the strain,",
  "and opens, palm up.", "I give her the pen. She does not",
  "write her name. She draws one line", "through my name, down through the carbon.",
  "\"Another form,\" she says.",
  "I slide a clean one under the clip.", "She signs it herself, wrong,",
  "one letter leaning on the last,", "the way she taught me mine."
];
const dir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text: string = lines.join("\n") + "\n";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
console.log(Buffer.byteLength(text) + " bytes -> " + join(dir, "entry.txt"));
