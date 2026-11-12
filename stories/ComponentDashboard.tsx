import React from "react";
import { T } from "./T";
import { PlatformIcons } from "./PlatformIcons";
import { VisuallyHidden } from "../src/components/layout/VisuallyHidden/VisuallyHidden";
import responsiveData from "../src/data/component-responsive.json";
import "./componentDashboard.scss";

interface ComponentEntry {
  name: string;
  descKey: string;
  pc: boolean;
  mobile: boolean;
}

type WidthKind = "media" | "container" | "js";

// 実装（SCSS のクエリと ResizeObserver）から生成した値。手で書かない
// （`npm run generate:responsive`。ずれは `--check` が落とす）。
const responsive = responsiveData as Record<string, WidthKind[]>;

const WIDTH_KINDS: WidthKind[] = ["container", "media", "js"];

const WidthBasis = ({ name }: { name: string }) => {
  const kinds = responsive[name];
  if (!kinds) return null;
  if (kinds.length === 0) {
    return (
      <>
        <span aria-hidden="true">—</span>
        <VisuallyHidden><T k="doc.registry_width_none" /></VisuallyHidden>
      </>
    );
  }
  return (
    <>
      {kinds.map((kind, i) => (
        <React.Fragment key={kind}>
          {i > 0 && " / "}
          <T k={`doc.registry_width_${kind}`} />
        </React.Fragment>
      ))}
    </>
  );
};

interface Category {
  id: string;
  nameKey: string;
  guideUrl: string | null;
  components: ComponentEntry[];
}

export const ComponentDashboard = ({ data }: { data: Category[] }) => {
  // Calculate progress for each category
  const progressData = data.map((cat) => {
    const total = cat.components.length;
    // For simplicity, we assume components in the list are 100% implemented
    // In a real scenario, we might have a 'status' field in components.json
    return {
      id: cat.id,
      nameKey: cat.nameKey,
      count: total,
      total: total,
      percentage: 100,
    };
  });

  const totalComponents = data.reduce((acc, cat) => acc + cat.components.length, 0);

  return (
    <div className="component-dashboard">
      <h1><T k="dashboard.title" /></h1>
      <p style={{ marginBottom: '16px' }}><T k="dashboard.intro" /></p>
      
      <div className="wim-component-dashboard__stat-box">
        <span className="wim-component-dashboard__stat-label">
          <T k="dashboard.total_components" />
        </span>
        <div className="wim-component-dashboard__stat-value">
          {totalComponents}
        </div>
      </div>

      <p className="wim-component-dashboard__note-box">
        <T k="dashboard.tokens_link" />
      </p>

      <h2><T k="dashboard.progress" /></h2>
      <table>
        <thead>
          <tr>
            <th><T k="table.header_category" /></th>
            <th><T k="table.header_progress" /></th>
          </tr>
        </thead>
        <tbody>
          {progressData.map((prog) => (
            <tr key={prog.id}>
              <td><a href={`#${prog.id}`}><T k={prog.nameKey} /></a></td>
              <td>{prog.percentage}% ({prog.count}/{prog.total})</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PlatformIcons pc mobile /> <span><T k="legend.all_devices" /></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PlatformIcons pc /> <span><T k="legend.pc_only" /></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PlatformIcons mobile /> <span><T k="legend.mobile_only" /></span>
        </div>
      </div>

      <h2><T k="doc.registry_width_header" /></h2>
      <p><T k="doc.registry_width_legend" /></p>
      <table>
        <thead>
          <tr>
            <th><T k="doc.registry_width_header" /></th>
            <th><T k="table.header_description" /></th>
          </tr>
        </thead>
        <tbody>
          {WIDTH_KINDS.map((kind) => (
            <tr key={kind}>
              <th scope="row"><T k={`doc.registry_width_${kind}`} /></th>
              <td><T k={`doc.registry_width_${kind}_desc`} /></td>
            </tr>
          ))}
          <tr>
            <th scope="row">—</th>
            <td><T k="doc.registry_width_none" /></td>
          </tr>
        </tbody>
      </table>

      {data.map((cat) => (
        <React.Fragment key={cat.id}>
          <h2 id={cat.id}>
            <T k={cat.nameKey} />
            {cat.guideUrl && (
              <a 
                href={cat.guideUrl} 
                target="_top" 
                style={{ fontSize: "14px", fontWeight: "normal", marginLeft: "12px" }}
              >
                <T k="guide.usage" />
              </a>
            )}
          </h2>
          <table>
            <thead>
              <tr>
                <th><T k="doc.std_column_component" /></th>
                <th><T k="table.header_description" /></th>
                <th><T k="table.header_platform" /></th>
                <th><T k="doc.registry_width_header" /></th>
              </tr>
            </thead>
            <tbody>
              {cat.components.map((comp) => (
                <tr key={comp.name}>
                  <td>{comp.name}</td>
                  <td><p><T k={comp.descKey} /></p></td>
                  <td><PlatformIcons pc={comp.pc} mobile={comp.mobile} /></td>
                  <td><WidthBasis name={comp.name} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </div>
  );
};
