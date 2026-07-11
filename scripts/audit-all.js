/**
 * Comprehensive Audit Script for WIM UI.
 * Integrates MDX audit, asChild compliance, and i18n consistency checks.
 */

import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const checks = [
  {
    name: "MDX Structure and Placeholders",
    command: "node scripts/audit-mdx.js",
  },
  {
    name: "Polymorphic asChild Compliance",
    command: "node scripts/check-aschild.js",
  },
  {
    name: "I18n Consistency and File Size",
    command: "node scripts/check-i18n.js",
  },
  {
    name: "MDX Hardcoded Text Detection",
    command: "node scripts/check-mdx-hardcoded.js",
  },
  {
    name: "Storybook Hierarchy Depth",
    command: "node scripts/check_hierarchy.js",
  },
  {
    name: "Hardcoded Values (colors / px ratchet)",
    command: "node scripts/check-hardcoded-values.js",
  },
  {
    name: "Hardcoded UI Text in Stories (i18n)",
    command: "node scripts/check-stories-hardcoded.js --all",
  },
  {
    name: "Public API Surface (npm freeze guard)",
    command: "node scripts/check-public-api.js",
  },
  {
    name: "Root override hooks (wim-<name> stability)",
    command: "node scripts/check-root-hooks.js",
  },
  {
    name: "Design token surface (theming freeze guard)",
    command: "node scripts/check-tokens.js",
  }
];

let failed = false;

console.log("=== WIM UI Pre-expansion Audit ===\n");

for (const check of checks) {
  console.log(`Running: ${check.name}...`);
  try {
    execSync(check.command, { stdio: "inherit", cwd: path.join(__dirname, "..") });
    console.log(`✓ ${check.name} passed.\n`);
  } catch (error) {
    console.error(`✗ ${check.name} failed.\n`);
    failed = true;
  }
}

if (failed) {
  console.error("=== Audit FAILED ===");
  console.error("Please resolve the issues above before proceeding with large-scale component addition.");
  process.exit(1);
} else {
  console.log("=== Audit PASSED ===");
  console.log("All systems go! You are ready to add new components.");
}
