import peerMap from "@/data/peer-imports.json";

export interface ImportInfo {
  packagePath: string;
  peers: string[];
}

type PeerMap = Record<string, { packagePath: string; peers?: string[] }>;

const PEER_MAP = peerMap as PeerMap;

/**
 * Canonical consumer import path (+ optional peers) for a component.
 * Charts category → wimui/charts; named peer-heavy entries → their subpath;
 * everything else → root wimui.
 */
export function resolveImportInfo(
  componentName: string,
  category: string,
): ImportInfo {
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

/** Build the copy-paste snippet shown in Docgen Import. */
export function formatImportSnippet(
  componentName: string,
  info: ImportInfo,
): string {
  const lines: string[] = [];
  if (info.peers.length > 0) {
    lines.push(`// requires: npm install ${info.peers.join(" ")}`);
  }
  lines.push(`import { ${componentName} } from "${info.packagePath}";`);
  return lines.join("\n");
}
