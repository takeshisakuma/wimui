"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Q as c,bt as l,lt as u,t as d}from"./src-Ssuy8lr7.js";import{t as f}from"./Box--bAE-pUN.js";import{t as p}from"./Text-DzblcqZm.js";import{a as m,i as h,l as g,o as _,s as v,u as y}from"./ThoughtProcess-esVODyeM.js";import{i as b,n as x,r as S,t as C}from"./AuditUtils-Cal9MsZq.js";import{g as w,t as T}from"./charts-C9-Maezk.js";var E,D,O,k,A;e((()=>{E=t(n(),1),o(),i(),d(),T(),D=a(),b(),O={title:`Audit/ViewportFamily`,parameters:{layout:`fullscreen`}},k={render:()=>{let{t:e}=r([...s,`audit`]),t=[{id:`1`,label:e(`audit:viewport_project_planning`),startDate:new Date(2026,4,1),endDate:new Date(2026,4,5)},{id:`2`,label:e(`audit:viewport_design_phase`),startDate:new Date(2026,4,4),endDate:new Date(2026,4,15)},{id:`3`,label:`Implementation`,startDate:new Date(2026,4,12),endDate:new Date(2026,4,28),progress:45},{id:`4`,label:`Review`,startDate:new Date(2026,4,25),endDate:new Date(2026,5,5)}],n=[{date:`2026-05-01`,count:2},{date:`2026-05-05`,count:8},{date:`2026-05-10`,count:5},{date:`2026-05-15`,count:12}],[i,a]=E.useState({todo:[`c1`,`c2`,`c3`],doing:[`c4`],done:[`c5`,`c6`],backlog:[]}),o={c1:`Research UI Patterns`,c2:`Setup Audit Stories`,c3:`Review Tokens`,c4:`Implementing Viewport Audit`,c5:`Interaction Audit`,c6:`Input Audit`},d=(e,t,n)=>{a(r=>{let i={...r};return i[t]&&i[n]&&(i[t]=r[t].filter(t=>t!==e),i[n]=[...r[n],e]),i})},b=[{key:`id`,title:`ID`,width:100,fixed:`left`},{key:`name`,title:e(`audit:viewport_col_full_name`),width:250},{key:`email`,title:e(`audit:viewport_col_email`),width:300},{key:`role`,title:`Role`,width:150},{key:`status`,title:`Status`,width:120},{key:`lastLogin`,title:e(`audit:viewport_col_last_login`),width:200},{key:`action`,title:`Action`,width:100,fixed:`right`}],T=Array.from({length:30},(e,t)=>({id:`USR-${1e3+t}`,name:`User Name ${t+1}`,email:`user${t+1}@example.com`,role:t%3==0?`Admin`:`Editor`,status:t%2==0?`Active`:`Inactive`,lastLogin:`2026-05-05 14:20`,action:`Edit`}));return(0,D.jsxs)(C,{title:e(`audit:viewport_family_title`),children:[(0,D.jsxs)(x,{title:`${e(`audit:scrollbar_design_check`)} & ${e(`audit:masking_fade_check`)}`,children:[(0,D.jsx)(S,{label:e(`audit:label_gantt_chart`),noStack:!0,children:(0,D.jsx)(`div`,{style:{height:`320px`},children:(0,D.jsx)(w,{tasks:t,startDate:new Date(2026,4,1),endDate:new Date(2026,5,30),viewMode:`day`})})}),(0,D.jsx)(S,{label:e(`audit:label_calendar_heatmap`),noStack:!0,width:`fit-content`,children:(0,D.jsx)(c,{data:n,year:2026})}),(0,D.jsx)(S,{label:e(`audit:label_kanban`),noStack:!0,children:(0,D.jsxs)(u,{style:{maxWidth:`100%`},onCardMove:d,children:[(0,D.jsx)(u.Column,{id:`todo`,title:e(`audit:viewport_todo`),cardCount:i.todo.length,children:i.todo.map(e=>(0,D.jsx)(u.Card,{id:e,children:o[e]},e))}),(0,D.jsx)(u.Column,{id:`doing`,title:e(`audit:viewport_in_progress`),cardCount:i.doing.length,children:i.doing.map(e=>(0,D.jsx)(u.Card,{id:e,children:o[e]},e))}),(0,D.jsx)(u.Column,{id:`done`,title:e(`audit:viewport_col_done`),cardCount:i.done.length,children:i.done.map(e=>(0,D.jsx)(u.Card,{id:e,children:o[e]},e))}),(0,D.jsx)(u.Column,{id:`backlog`,title:e(`audit:viewport_backlog`),cardCount:i.backlog.length,children:i.backlog.map(e=>(0,D.jsx)(u.Card,{id:e,children:o[e]},e))})]})})]}),(0,D.jsxs)(x,{title:e(`audit:sticky_boundary_check`),children:[(0,D.jsx)(S,{label:e(`audit:label_viewport_grid`),noStack:!0,children:(0,D.jsx)(f,{style:{height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,D.jsx)(l,{columns:b,data:T,height:400,stickyHeader:!0})})}),(0,D.jsx)(S,{label:e(`audit:label_timeline`),noStack:!0,children:(0,D.jsx)(f,{style:{height:`350px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`auto`,padding:`var(--wim-spacing-lg)`,background:`var(--wim-color-surface)`},children:(0,D.jsxs)(h,{align:`left`,children:[(0,D.jsxs)(v,{children:[(0,D.jsxs)(y,{children:[(0,D.jsx)(g,{intent:`success`}),(0,D.jsx)(m,{})]}),(0,D.jsxs)(_,{children:[(0,D.jsx)(p,{weight:`bold`,children:e(`audit:viewport_req_analysis`)}),(0,D.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_req_analysis_desc`)})]})]}),(0,D.jsxs)(v,{children:[(0,D.jsxs)(y,{children:[(0,D.jsx)(g,{intent:`primary`}),(0,D.jsx)(m,{})]}),(0,D.jsxs)(_,{children:[(0,D.jsx)(p,{weight:`bold`,children:e(`audit:viewport_design_spec`)}),(0,D.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_design_spec_desc`)})]})]}),(0,D.jsxs)(v,{children:[(0,D.jsxs)(y,{children:[(0,D.jsx)(g,{intent:`primary`}),(0,D.jsx)(m,{})]}),(0,D.jsxs)(_,{children:[(0,D.jsx)(p,{weight:`bold`,children:e(`audit:viewport_dev_start`)}),(0,D.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_dev_start_desc`)})]})]}),(0,D.jsxs)(v,{children:[(0,D.jsx)(y,{children:(0,D.jsx)(g,{})}),(0,D.jsxs)(_,{children:[(0,D.jsx)(p,{weight:`bold`,children:e(`audit:viewport_testing`)}),(0,D.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_testing_desc`)})]})]})]})})})]})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);

    // Sample data for Gantt
    const ganttTasks = [{
      id: "1",
      label: t("audit:viewport_project_planning"),
      startDate: new Date(2026, 4, 1),
      endDate: new Date(2026, 4, 5)
    }, {
      id: "2",
      label: t("audit:viewport_design_phase"),
      startDate: new Date(2026, 4, 4),
      endDate: new Date(2026, 4, 15)
    }, {
      id: "3",
      label: "Implementation",
      startDate: new Date(2026, 4, 12),
      endDate: new Date(2026, 4, 28),
      progress: 45
    }, {
      id: "4",
      label: "Review",
      startDate: new Date(2026, 4, 25),
      endDate: new Date(2026, 5, 5)
    }];

    // Sample data for Heatmap
    const heatmapData = [{
      date: "2026-05-01",
      count: 2
    }, {
      date: "2026-05-05",
      count: 8
    }, {
      date: "2026-05-10",
      count: 5
    }, {
      date: "2026-05-15",
      count: 12
    }];

    // Kanban state
    const [kanbanColumns, setKanbanColumns] = React.useState<Record<string, string[]>>({
      todo: ["c1", "c2", "c3"],
      doing: ["c4"],
      done: ["c5", "c6"],
      backlog: []
    });
    const kanbanLabels: Record<string, string> = {
      c1: "Research UI Patterns",
      c2: "Setup Audit Stories",
      c3: "Review Tokens",
      c4: "Implementing Viewport Audit",
      c5: "Interaction Audit",
      c6: "Input Audit"
    };
    const handleKanbanMove = (cardId: string, fromCol: string, toCol: string) => {
      setKanbanColumns(prev => {
        const next = {
          ...prev
        };
        if (next[fromCol] && next[toCol]) {
          next[fromCol] = prev[fromCol].filter(id => id !== cardId);
          next[toCol] = [...prev[toCol], cardId];
        }
        return next;
      });
    };

    // Sample data for DataGrid
    const gridColumns = [{
      key: "id",
      title: "ID",
      width: 100,
      fixed: "left" as const
    }, {
      key: "name",
      title: t("audit:viewport_col_full_name"),
      width: 250
    }, {
      key: "email",
      title: t("audit:viewport_col_email"),
      width: 300
    }, {
      key: "role",
      title: "Role",
      width: 150
    }, {
      key: "status",
      title: "Status",
      width: 120
    }, {
      key: "lastLogin",
      title: t("audit:viewport_col_last_login"),
      width: 200
    }, {
      key: "action",
      title: "Action",
      width: 100,
      fixed: "right" as const
    }];
    const gridData = Array.from({
      length: 30
    }, (_, i) => ({
      id: \`USR-\${1000 + i}\`,
      name: \`User Name \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? "Admin" : "Editor",
      status: i % 2 === 0 ? "Active" : "Inactive",
      lastLogin: "2026-05-05 14:20",
      action: "Edit"
    }));
    return <AuditPage title={t("audit:viewport_family_title")}>
        {/* Scrollbar & Masking Audit */}
        <ComparisonGrid title={\`\${t("audit:scrollbar_design_check")} & \${t("audit:masking_fade_check")}\`}>
          <ComponentGroup label={t("audit:label_gantt_chart")} noStack>
             <div style={{
            height: "320px"
          }}>
               <GanttChart tasks={ganttTasks} startDate={new Date(2026, 4, 1)} endDate={new Date(2026, 5, 30)} viewMode="day" />
             </div>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_calendar_heatmap")} noStack width="fit-content">
            <CalendarHeatmap data={heatmapData} year={2026} />
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_kanban")} noStack>
            <KanbanBoard style={{
            maxWidth: "100%"
          }} onCardMove={handleKanbanMove}>
              <KanbanBoard.Column id="todo" title={t("audit:viewport_todo")} cardCount={kanbanColumns.todo.length}>
                {kanbanColumns.todo.map(id => <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>)}
              </KanbanBoard.Column>
              <KanbanBoard.Column id="doing" title={t("audit:viewport_in_progress")} cardCount={kanbanColumns.doing.length}>
                {kanbanColumns.doing.map(id => <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>)}
              </KanbanBoard.Column>
              <KanbanBoard.Column id="done" title={t("audit:viewport_col_done")} cardCount={kanbanColumns.done.length}>
                {kanbanColumns.done.map(id => <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>)}
              </KanbanBoard.Column>
              <KanbanBoard.Column id="backlog" title={t("audit:viewport_backlog")} cardCount={kanbanColumns.backlog.length}>
                {kanbanColumns.backlog.map(id => <KanbanBoard.Card key={id} id={id}>{kanbanLabels[id]}</KanbanBoard.Card>)}
              </KanbanBoard.Column>
            </KanbanBoard>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Sticky & Boundary Audit */}
        <ComparisonGrid title={t("audit:sticky_boundary_check")}>
          <ComponentGroup label={t("audit:label_viewport_grid")} noStack>
            <Box style={{
            height: "400px",
            border: "1px solid var(--wim-color-border)",
            borderRadius: "var(--wim-radius-md)"
          }}>
              <DataGrid columns={gridColumns} data={gridData} height={400} stickyHeader />
            </Box>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_timeline")} noStack>
             <Box style={{
            height: "350px",
            border: "1px solid var(--wim-color-border)",
            borderRadius: "var(--wim-radius-md)",
            overflow: "auto",
            padding: "var(--wim-spacing-lg)",
            background: "var(--wim-color-surface)"
          }}>
                <Timeline align="left">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint intent="success" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_req_analysis")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_req_analysis_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint intent="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_design_spec")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_design_spec_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint intent="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_dev_start")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_dev_start_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelinePoint />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Text weight="bold">{t("audit:viewport_testing")}</Text>
                      <Text size="xs" color="text-secondary">{t("audit:viewport_testing_desc")}</Text>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
             </Box>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Overview`]}))();export{k as Overview,A as __namedExportsOrder,O as default};