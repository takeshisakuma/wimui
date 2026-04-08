import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_DIR = path.resolve(__dirname, "../src/icon");
const OUTPUT_FILE = path.join(ICON_DIR, "index.ts");

function toPascalCase(str) {
  return (
    str
      .replace(/\.svg$/, "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") + "Icon"
  );
}

function generate() {
  if (!fs.existsSync(ICON_DIR)) {
    console.error(`Directory not found: ${ICON_DIR}`);
    return;
  }

  const files = fs
    .readdirSync(ICON_DIR)
    .filter((file) => file.endsWith(".svg"))
    .sort();

  const imports = [];
  const exports = [];
  const iconNames = [];

  files.forEach((file) => {
    const componentName = toPascalCase(file);
    imports.push(`import ${componentName} from "./${file}?react";`);
    exports.push(`  ${componentName},`);
    iconNames.push(componentName);
  });

  const content = `// This file is auto-generated. Do not edit manually.
${imports.join("\n")}

export {
${exports.join("\n")}
};

export const ALL_ICONS = {
${iconNames.map((name) => `  ${name},`).join("\n")}
} as const;

export type IconName = keyof typeof ALL_ICONS;
`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`Successfully generated ${OUTPUT_FILE}`);
}

generate();
