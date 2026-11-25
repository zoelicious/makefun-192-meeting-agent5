import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");
const text = "The meeting about having too many meetings ended by scheduling a meeting about the meeting.";

try {
  mkdirSync(outDir, { recursive: true });
} catch (e) {
  // Directory may already exist; continue to the write below.
}

try {
  writeFileSync(outPath, text, "utf8");
} catch (e) {
  console.error("failed to write entry:", e);
  process.exit(1);
}

console.log("wrote " + outPath + " (" + text.length + " chars) from " + here);
