/**
 * Shared peer-import map for Docgen, unify-imports, and check:imports.
 * Charts category uses wimui/charts + recharts; named entries live in
 * src/data/peer-imports.json.
 */

const path = require("path");
const fs = require("fs");

const PEER_MAP = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../src/data/peer-imports.json"), "utf8"),
);

/** @type {ReadonlySet<string>} */
const PEER_COMPONENT_NAMES = new Set(Object.keys(PEER_MAP));

/**
 * @param {string} componentName
 * @param {string} [category] docgen / folder category (e.g. "charts")
 * @returns {{ packagePath: string, peers: string[] }}
 */
function resolveImportInfo(componentName, category) {
  if (category === "charts") {
    return { packagePath: "wimui/charts", peers: ["recharts"] };
  }
  const entry = PEER_MAP[componentName];
  if (entry) {
    return {
      packagePath: entry.packagePath,
      peers: entry.peers ? [...entry.peers] : [],
    };
  }
  return { packagePath: "wimui", peers: [] };
}

/**
 * @param {string} componentName
 * @param {string} [category]
 * @returns {boolean}
 */
function isPeerHeavy(componentName, category) {
  if (category === "charts") return true;
  return PEER_COMPONENT_NAMES.has(componentName);
}

module.exports = {
  PEER_MAP,
  PEER_COMPONENT_NAMES,
  resolveImportInfo,
  isPeerHeavy,
};
