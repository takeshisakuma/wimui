"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Box-BNJo1pMu.js";import{n as u,t as d}from"./Button-DSrkNfg0.js";import{n as f,t as p}from"./Text-1X1ZsZfu.js";import{n as m,t as h}from"./DataGrid-TuB_nnXS.js";import{n as g,r as _}from"./Kanban-D9uArYWc.js";import{c as v,i as y,n as b,o as x,r as S,s as C,t as w}from"./Timeline-DJklBW06.js";import{n as T,t as E}from"./CalendarHeatmap-D4eal5wW.js";import{i as D,n as O,r as k,t as A}from"./AuditUtils-DQd41XyN.js";import{n as j,t as M}from"./GanttChart-CVIODmZi.js";var N,P,F,I,L;function R(){return(R=t((()=>{N=e(n(),1),i(),a(),T(),_(),v(),m(),u(),f(),c(),j(),P=s(),D(),F={title:`Audit/ViewportFamily`,parameters:{layout:`fullscreen`}},I={render:()=>{let{t:e}=r([...o,`audit`]),t=[{id:`1`,label:e(`audit:viewport_project_planning`),startDate:new Date(2026,4,1),endDate:new Date(2026,4,5)},{id:`2`,label:e(`audit:viewport_design_phase`),startDate:new Date(2026,4,4),endDate:new Date(2026,4,15)},{id:`3`,label:`Implementation`,startDate:new Date(2026,4,12),endDate:new Date(2026,4,28),progress:45},{id:`4`,label:`Review`,startDate:new Date(2026,4,25),endDate:new Date(2026,5,5)}],n=[{date:`2026-05-01`,count:2},{date:`2026-05-05`,count:8},{date:`2026-05-10`,count:5},{date:`2026-05-15`,count:12}],[i,a]=N.useState({todo:[`c1`,`c2`,`c3`],doing:[`c4`],done:[`c5`,`c6`],backlog:[]}),s={c1:`Research UI Patterns`,c2:`Setup Audit Stories`,c3:`Review Tokens`,c4:`Implementing Viewport Audit`,c5:`Interaction Audit`,c6:`Input Audit`},c=(e,t,n)=>{a(r=>{let i={...r};return i[t]&&i[n]&&(i[t]=r[t].filter(t=>t!==e),i[n]=[...r[n],e]),i})},u=[{key:`id`,title:`ID`,width:100,fixed:`left`},{key:`name`,title:e(`audit:viewport_col_full_name`),width:250},{key:`email`,title:e(`audit:viewport_col_email`),width:300},{key:`role`,title:`Role`,width:150},{key:`status`,title:`Status`,width:120},{key:`lastLogin`,title:e(`audit:viewport_col_last_login`),width:200},{key:`action`,title:e(`audit:viewport_col_action`),width:100,fixed:`right`,render:(t,n)=>(0,P.jsx)(d,{size:`sm`,variant:`ghost`,"aria-label":e(`audit:viewport_action_edit_row`,{name:n.name}),children:e(`audit:viewport_action_edit`)})}],f=Array.from({length:30},(e,t)=>({id:`USR-${1e3+t}`,name:`User Name ${t+1}`,email:`user${t+1}@example.com`,role:t%3==0?`Admin`:`Editor`,status:t%2==0?`Active`:`Inactive`,lastLogin:`2026-05-05 14:20`}));return(0,P.jsxs)(A,{title:e(`audit:viewport_family_title`),children:[(0,P.jsxs)(O,{title:`${e(`audit:scrollbar_design_check`)} & ${e(`audit:masking_fade_check`)}`,children:[(0,P.jsx)(k,{label:e(`audit:label_gantt_chart`),noStack:!0,children:(0,P.jsx)(`div`,{style:{height:`320px`},children:(0,P.jsx)(M,{tasks:t,startDate:new Date(2026,4,1),endDate:new Date(2026,5,30),viewMode:`day`})})}),(0,P.jsx)(k,{label:e(`audit:label_calendar_heatmap`),noStack:!0,width:`fit-content`,children:(0,P.jsx)(E,{data:n,year:2026})}),(0,P.jsx)(k,{label:e(`audit:label_kanban`),noStack:!0,children:(0,P.jsxs)(g,{style:{maxWidth:`100%`},onCardMove:c,children:[(0,P.jsx)(g.Column,{id:`todo`,title:e(`audit:viewport_todo`),cardCount:i.todo.length,children:i.todo.map(e=>(0,P.jsx)(g.Card,{id:e,children:s[e]},e))}),(0,P.jsx)(g.Column,{id:`doing`,title:e(`audit:viewport_in_progress`),cardCount:i.doing.length,children:i.doing.map(e=>(0,P.jsx)(g.Card,{id:e,children:s[e]},e))}),(0,P.jsx)(g.Column,{id:`done`,title:e(`audit:viewport_col_done`),cardCount:i.done.length,children:i.done.map(e=>(0,P.jsx)(g.Card,{id:e,children:s[e]},e))}),(0,P.jsx)(g.Column,{id:`backlog`,title:e(`audit:viewport_backlog`),cardCount:i.backlog.length,children:i.backlog.map(e=>(0,P.jsx)(g.Card,{id:e,children:s[e]},e))})]})})]}),(0,P.jsxs)(O,{title:e(`audit:sticky_boundary_check`),children:[(0,P.jsx)(k,{label:e(`audit:label_viewport_grid`),noStack:!0,children:(0,P.jsx)(l,{style:{height:`400px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,P.jsx)(h,{columns:u,data:f,height:400,stickyHeader:!0})})}),(0,P.jsx)(k,{label:e(`audit:label_timeline`),noStack:!0,children:(0,P.jsx)(l,{style:{height:`350px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`auto`,padding:`var(--wim-spacing-lg)`,background:`var(--wim-color-surface)`},children:(0,P.jsxs)(w,{align:`left`,children:[(0,P.jsxs)(y,{children:[(0,P.jsxs)(C,{children:[(0,P.jsx)(x,{intent:`success`}),(0,P.jsx)(b,{})]}),(0,P.jsxs)(S,{children:[(0,P.jsx)(p,{weight:`bold`,children:e(`audit:viewport_req_analysis`)}),(0,P.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_req_analysis_desc`)})]})]}),(0,P.jsxs)(y,{children:[(0,P.jsxs)(C,{children:[(0,P.jsx)(x,{intent:`primary`}),(0,P.jsx)(b,{})]}),(0,P.jsxs)(S,{children:[(0,P.jsx)(p,{weight:`bold`,children:e(`audit:viewport_design_spec`)}),(0,P.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_design_spec_desc`)})]})]}),(0,P.jsxs)(y,{children:[(0,P.jsxs)(C,{children:[(0,P.jsx)(x,{intent:`primary`}),(0,P.jsx)(b,{})]}),(0,P.jsxs)(S,{children:[(0,P.jsx)(p,{weight:`bold`,children:e(`audit:viewport_dev_start`)}),(0,P.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_dev_start_desc`)})]})]}),(0,P.jsxs)(y,{children:[(0,P.jsx)(C,{children:(0,P.jsx)(x,{})}),(0,P.jsxs)(S,{children:[(0,P.jsx)(p,{weight:`bold`,children:e(`audit:viewport_testing`)}),(0,P.jsx)(p,{size:`xs`,color:`text-secondary`,children:e(`audit:viewport_testing_desc`)})]})]})]})})})]})]})}},L=[`Overview`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
      title: t("audit:viewport_col_action"),
      width: 100,
      fixed: "right" as const,
      render: (_: unknown, record: Record<string, unknown>) => <Button size="sm" variant="ghost" aria-label={t("audit:viewport_action_edit_row", {
        name: record.name
      })}>
            {t("audit:viewport_action_edit")}
          </Button>
    }];
    const gridData = Array.from({
      length: 30
    }, (_, i) => ({
      id: \`USR-\${1000 + i}\`,
      name: \`User Name \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? "Admin" : "Editor",
      status: i % 2 === 0 ? "Active" : "Inactive",
      lastLogin: "2026-05-05 14:20"
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
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as Overview,L as __namedExportsOrder,F as default};