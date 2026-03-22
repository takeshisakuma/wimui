import React from "react";
import { T } from "./T";
import { PlatformIcons } from "./PlatformIcons";

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
      
      <div style={{
        marginBottom: '32px',
        padding: '16px 24px',
        background: 'var(--wim-color-surface)',
        borderRadius: '12px',
        border: '1px solid var(--wim-color-border)',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '4px',
        minWidth: '200px'
      }}>
        <span style={{ fontSize: '14px', color: 'var(--wim-color-text-secondary)' }}>
          <T k="dashboard_total_components" />
        </span>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--wim-color-primary)' }}>
          {totalComponents}
        </div>
      </div>
      
      <p style={{ marginBottom: '32px', padding: '12px', background: 'var(--wim-color-surface)', borderRadius: '8px', border: '1px solid var(--wim-color-border)', color: 'var(--wim-color-text-primary)' }}>
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
