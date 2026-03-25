import React from "react";
import { T } from "./T";
import { PlatformIcons } from "./PlatformIcons";
import "./componentDashboard.scss";

interface ComponentEntry {
  name: string;
  descKey: string;
  pc: boolean;
  mobile: boolean;
}

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
      <h1><T k="dashboard_title" /></h1>
      <p style={{ marginBottom: '16px' }}><T k="dashboard_intro" /></p>
      
      <div className="wim-component-dashboard__stat-box">
        <span className="wim-component-dashboard__stat-label">
          <T k="dashboard_total_components" />
        </span>
        <div className="wim-component-dashboard__stat-value">
          {totalComponents}
        </div>
      </div>

      <p className="wim-component-dashboard__note-box">
        <T k="dashboard_tokens_link" />
      </p>

      <h2><T k="dashboard_progress" /></h2>
      <table>
        <thead>
          <tr>
            <th><T k="table_header_category" /></th>
            <th><T k="table_header_progress" /></th>
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
          <PlatformIcons pc mobile /> <span><T k="legend_all_devices" /></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PlatformIcons pc /> <span><T k="legend_pc_only" /></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PlatformIcons mobile /> <span><T k="legend_mobile_only" /></span>
        </div>
      </div>

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
                <T k="guide_usage" />
              </a>
            )}
          </h2>
          <table>
            <thead>
              <tr>
                <th><T k="table_header_component" /></th>
                <th><T k="table_header_description" /></th>
                <th><T k="table_header_platform" /></th>
              </tr>
            </thead>
            <tbody>
              {cat.components.map((comp) => (
                <tr key={comp.name}>
                  <td>{comp.name}</td>
                  <td><p><T k={comp.descKey} /></p></td>
                  <td><PlatformIcons pc={comp.pc} mobile={comp.mobile} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </div>
  );
};
