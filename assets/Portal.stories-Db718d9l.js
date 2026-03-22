import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as c,A as j}from"./iframe-B7RtKuM4.js";import{P as b}from"./Portal-B2xfA_q5.js";import{B as v}from"./Button-Bo9crcFn.js";import{I}from"./Icon-CKW6V6dp.js";import{C as r}from"./Card-Crd5extg.js";import{S as d}from"./Stack-Bdz_20ya.js";import{T as N}from"./Textarea-BEH40P36.js";import{B as A}from"./Badge-BFD4dgoe.js";import{C as z}from"./Container-EP5GWFQo.js";import{B as s}from"./Box-Cz7tbUrY.js";import{G as P}from"./Grid-CEeBijGf.js";import{S as H}from"./SimpleGrid-B2alHryT.js";import{A as L}from"./Alert-CAFaT33O.js";import{u as w}from"./useTranslation-BRrcRHvL.js";const T={title:"Components/Internal/Portal",component:b,parameters:{layout:"centered"},tags:[]},_={render:function(){const[a,i]=c.useState(!1),{t:e}=w(j);return n.jsx(r,{variant:"outline",padding:"lg",style:{width:"100%",maxWidth:"400px",height:"250px",padding:"32px",position:"relative",overflow:"hidden"},children:n.jsxs(r.Body,{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"16px"},children:[n.jsx("p",{dangerouslySetInnerHTML:{__html:e("story_portal_desc_overflow")}}),n.jsx("p",{children:e("story_portal_desc_escape")})]}),n.jsx(v,{onClick:()=>i(!a),label:e(a?"story_portal_btn_hide":"story_portal_btn_show"),priority:"primary"}),a&&n.jsx(b,{children:n.jsxs(r,{variant:"elevated",padding:"lg",style:{position:"fixed",bottom:"40px",right:"40px",width:"280px",maxWidth:"calc(100vw - 80px)",zIndex:1e4,animation:"popUp 0.3s ease-out"},children:[n.jsx("style",{children:`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              `}),n.jsxs(d,{gap:"xs",children:[n.jsx("h4",{style:{margin:"0 0 8px 0",color:"var(--wim-primary)"},children:e("story_portal_power_title")}),n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.5"},dangerouslySetInnerHTML:{__html:e("story_portal_power_desc")}}),n.jsx(s,{mt:"md",textAlign:"right",children:n.jsx(v,{size:"small",label:e("story_portal_btn_ok"),onClick:()=>i(!1)})})]})]})})]})})}},g={render:function(){const[a,i]=c.useState(null),{t:e}=w(j);return n.jsxs(z,{size:"md",children:[n.jsx("p",{children:e("story_portal_container_desc")}),n.jsxs(H,{cols:{base:1,sm:2},spacing:"lg",style:{marginTop:"24px"},children:[n.jsxs(r,{variant:"outline",children:[n.jsx(r.Header,{children:n.jsx("strong",{children:e("story_portal_source_title")})}),n.jsxs(r.Body,{children:[n.jsx("p",{style:{fontSize:"12px"},children:e("story_portal_source_desc")}),n.jsx(s,{mt:"md",style:{display:"flex",justifyContent:"center"},children:n.jsx(b,{container:a,children:n.jsx(L,{status:"success",icon:n.jsx(I,{name:"CheckCircleIcon"}),style:{width:"fit-content"},children:e("story_portal_sent_success")})})})]})]}),n.jsx(s,{ref:i,bg:"var(--wim-neutral-50, #f8fafc)",style:{border:"2px dashed var(--wim-primary, #3b82f6)",minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px"},children:!a&&n.jsx(s,{textAlign:"center",color:"primary",children:e("story_portal_loading")})})]})]})}},h={render:function(){const[a,i]=c.useState(null),[e,S]=c.useState([]),{t}=w(j),k=(o,p="info")=>{const y=Math.random().toString(36).slice(2,9);S(m=>[{id:y,msg:o,type:p},...m].slice(0,10))},x=({name:o,type:p,color:y,displayName:m})=>{const[f,B]=c.useState(!1);return n.jsx(r,{variant:"outline",padding:"sm",children:n.jsxs(d,{gap:"xs",children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:n.jsx("strong",{children:m})}),n.jsx(v,{size:"small",priority:f?"secondary":"primary",onClick:()=>{const l=!f;B(l),k(`${m}${t(l?"story_portal_log_started":"story_portal_log_stopped")}`,l?"success":"warning")},label:t(f?"story_portal_btn_stop":"story_portal_btn_start")}),f&&n.jsx(b,{container:a,children:n.jsxs("div",{style:{padding:"8px 12px",marginBottom:"8px",borderRadius:"4px",fontSize:"12px",background:y,border:"1px solid rgba(0,0,0,0.1)",animation:"slideIn 0.2s ease-out"},children:[n.jsx("style",{children:"@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }"}),n.jsxs("strong",{children:["[",m,"]"]})," ",t("story_portal_status_desc")]})})]})})};return n.jsx(z,{size:"xl",children:n.jsxs(P,{cols:{base:1,md:"1fr 300px"},gap:"xl",children:[n.jsxs(d,{gap:"md",children:[n.jsx("h4",{children:t("story_portal_panel_title")}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:t("story_portal_panel_desc")}),n.jsxs(H,{cols:{base:1,sm:2},spacing:"md",children:[n.jsx(x,{name:"A",displayName:t("story_portal_sensor_a"),color:"#ecfdf5"}),n.jsx(x,{name:"B",displayName:t("story_portal_sensor_b"),color:"#eff6ff"}),n.jsx(x,{name:"C",displayName:t("story_portal_camera"),color:"#fff7ed"}),n.jsx(x,{name:"D",displayName:t("story_portal_alarm"),color:"#fef2f2"})]})]}),n.jsxs(r,{variant:"flat",style:{background:"#1e293b",color:"#f8fafc",minHeight:"400px",display:"flex",flexDirection:"column"},children:[n.jsx(r.Header,{style:{borderBottom:"1px solid #334155",color:"#94a3b8"},children:n.jsxs(d,{direction:"row",justify:"between",align:"center",children:[n.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:t("story_portal_monitor_title")}),n.jsx(A,{content:t("story_portal_monitor_live"),color:"error",size:"small"})]})}),n.jsxs(r.Body,{style:{flex:1,overflowY:"auto",padding:"12px"},children:[n.jsx(s,{ref:i,style:{marginBottom:"16px",borderBottom:"1px solid #334155",paddingBottom:"16px",minHeight:"20px"}}),n.jsxs("div",{style:{fontSize:"11px",fontFamily:"monospace"},children:[n.jsx("div",{style:{color:"#64748b",marginBottom:"8px"},children:t("story_portal_history_title")}),e.map(o=>n.jsx("div",{style:{marginBottom:"4px",color:o.type==="success"?"#4ade80":o.type==="warning"?"#fbbf24":"#94a3b8"},children:`> ${o.msg}`},o.id)),e.length===0&&n.jsx("div",{style:{color:"#475569"},children:t("story_portal_waiting")})]})]})]})]})})}},u={parameters:{layout:"fullscreen"},render:function(){const[a,i]=c.useState(null),[e,S]=c.useState(null),{t}=w(j),k=[{id:1,title:t("story_portal_task1_title"),detail:t("story_portal_task1_detail")},{id:2,title:t("story_portal_task2_title"),detail:t("story_portal_task2_detail")},{id:3,title:t("story_portal_task3_title"),detail:t("story_portal_task3_detail")}],x=({task:o,isSelected:p,onSelect:y,container:m})=>{const[f,B]=c.useState("");return n.jsxs("div",{role:"button",tabIndex:0,onClick:()=>y(o.id),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&y(o.id)},style:{padding:"16px",border:"1px solid",borderColor:p?"#3b82f6":"#e2e8f0",marginBottom:"12px",cursor:"pointer",background:p?"#eff6ff":"white",borderRadius:"8px",transition:"all 0.2s"},children:[n.jsxs(d,{direction:"row",justify:"between",align:"center",children:[n.jsx("strong",{children:o.title}),n.jsx(I,{name:"ChevronRightIcon",style:{color:p?"#3b82f6":"#cbd5e1"}})]}),p&&n.jsx(b,{container:m,children:n.jsxs("div",{style:{animation:"fadeInUp 0.3s ease-out"},children:[n.jsx("style",{children:"@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }"}),n.jsx(A,{content:`TASK-00${o.id}`,variant:"outline",size:"small",style:{marginBottom:"12px"}}),n.jsx("h3",{style:{margin:"0 0 16px 0"},children:o.title}),n.jsx(r,{variant:"flat",style:{background:"#f8fafc",marginBottom:"20px"},children:n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6",color:"#334155"},children:o.detail})}),n.jsxs(d,{direction:{base:"column",sm:"column",md:"column",lg:"column"},gap:"xs",children:[n.jsx("label",{style:{fontSize:"13px",fontWeight:"bold",color:"#64748b"},children:t("story_portal_task_memo")}),n.jsx(N,{value:f,onChange:l=>B(l.target.value),placeholder:t("story_portal_memo_placeholder"),rows:5,fullWidth:!0}),n.jsx("p",{style:{fontSize:"11px",color:"#94a3b8"},children:t("story_portal_memo_note")})]})]})})]})};return n.jsx(z,{size:"xl",className:"portal-side-container",children:n.jsxs(r,{variant:"outline",padding:"none",className:"side-panel-card",style:{overflow:"hidden"},children:[n.jsx("style",{children:`
            .portal-side-container { margin-top: 20px; margin-bottom: 20px; }
            .side-panel-card { height: auto; min-height: 550px; }
            @media (min-width: 576px) {
              .portal-side-container { height: calc(100vh - 40px); }
              .side-panel-card { height: 100%; border-radius: 12px; }
              .sidebar-border { border-right: 1px solid var(--wim-neutral-200, #e2e8f0); border-bottom: none !important; }
            }
            @media (max-width: 575px) {
              .sidebar-border { border-bottom: 1px solid var(--wim-neutral-200, #e2e8f0); border-right: none !important; }
            }
          `}),n.jsxs(d,{direction:{base:"column",sm:"row"},gap:"none",align:"stretch",style:{height:"100%",width:"100%",flex:1},children:[n.jsxs(s,{w:{base:"100%",sm:350},className:"sidebar-border",style:{display:"flex",flexDirection:"column",background:"#fcfcfd",height:"100%",flexShrink:0,overflowX:"hidden"},children:[n.jsx(s,{p:"md",style:{borderBottom:"1px solid var(--wim-neutral-200, #e2e8f0)"},children:n.jsx("h4",{style:{margin:0},children:t("story_portal_task_mgmt")})}),n.jsx(s,{p:"md",style:{flex:1,overflowY:"auto",overflowX:"hidden"},children:k.map(o=>n.jsx(x,{task:o,isSelected:e===o.id,onSelect:S,container:a},o.id))})]}),n.jsxs(s,{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[n.jsxs(s,{p:"md",bg:"var(--wim-neutral-50, #f8fafc)",style:{borderBottom:"1px solid var(--wim-neutral-200, #e2e8f0)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"14px",fontWeight:"bold",color:"#64748b"},children:t("story_portal_preview_title")}),e&&n.jsx(v,{size:"small",label:t("story_visuallyhidden_close"),priority:"secondary",onClick:()=>S(null)})]}),n.jsx(s,{ref:i,p:"xl",display:"flex",style:{flex:1,flexDirection:"column",overflowY:"auto",position:"relative",minHeight:"400px"},children:!e&&n.jsxs(d,{direction:"row",align:"center",justify:"center",gap:"xs",style:{flex:1,minHeight:"100%",color:"#94a3b8"},children:[n.jsx(I,{name:"InfoCircleIcon",style:{width:"20px",height:"20px",opacity:.8}}),n.jsx("p",{style:{margin:0},children:t("story_portal_select_task")})]})})]})]})]})})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Card variant="outline" padding="lg" style={{
      width: "100%",
      maxWidth: "400px",
      height: "250px",
      padding: "32px",
      position: "relative",
      overflow: "hidden"
    }}>
        <Card.Body style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
          <div style={{
          textAlign: "center",
          marginBottom: "16px"
        }}>
            <p dangerouslySetInnerHTML={{
            __html: t("story_portal_desc_overflow")
          }} />
            <p>{t("story_portal_desc_escape")}</p>
          </div>

          <Button onClick={() => setShow(!show)} label={show ? t("story_portal_btn_hide") : t("story_portal_btn_show")} priority="primary" />

          {show && <Portal>
              <Card variant="elevated" padding="lg" style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "280px",
            maxWidth: "calc(100vw - 80px)",
            zIndex: 10000,
            animation: "popUp 0.3s ease-out"
          }}>
                <style>{\`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              \`}</style>
                <Stack gap="xs">
                  <h4 style={{
                margin: "0 0 8px 0",
                color: "var(--wim-primary)"
              }}>
                    {t("story_portal_power_title")}
                  </h4>
                  <p style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "1.5"
              }} dangerouslySetInnerHTML={{
                __html: t("story_portal_power_desc")
              }} />
                  <Box mt="md" textAlign="right">
                    <Button size="small" label={t("story_portal_btn_ok")} onClick={() => setShow(false)} />
                  </Box>
                </Stack>
              </Card>
            </Portal>}
        </Card.Body>
      </Card>;
  }
}`,..._.parameters?.docs?.source},description:{story:"overflow: hidden な親要素を突き抜ける例",..._.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [container, setContainer] = useState<HTMLElement | null>(null);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="md">
        <p>{t("story_portal_container_desc")}</p>

        <SimpleGrid cols={{
        base: 1,
        sm: 2
      }} spacing="lg" style={{
        marginTop: "24px"
      }}>
          <Card variant="outline">
            <Card.Header>
              <strong>{t("story_portal_source_title")}</strong>
            </Card.Header>
            <Card.Body>
              <p style={{
              fontSize: "12px"
            }}>
                {t("story_portal_source_desc")}
              </p>
              <Box mt="md" style={{
              display: "flex",
              justifyContent: "center"
            }}>
                <Portal container={container}>
                  <Alert status="success" icon={<Icon name="CheckCircleIcon" />} style={{
                  width: "fit-content"
                }}>
                    {t("story_portal_sent_success")}
                  </Alert>
                </Portal>
              </Box>
            </Card.Body>
          </Card>

          <Box ref={setContainer} bg="var(--wim-neutral-50, #f8fafc)" style={{
          border: "2px dashed var(--wim-primary, #3b82f6)",
          minHeight: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px"
        }}>
            {/* ここに Portal の 中身が表示される */}
            {!container && <Box textAlign="center" color="primary">
                {t("story_portal_loading")}
              </Box>}
          </Box>
        </SimpleGrid>
      </Container>;
  }
}`,...g.parameters?.docs?.source},description:{story:"特定の DOM 要素へのレンダリング例",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [logContainer, setLogContainer] = useState<HTMLElement | null>(null);
    const [logs, setLogs] = useState<{
      id: string;
      msg: string;
      type: string;
    }[]>([]);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const addLog = (msg: string, type: string = "info") => {
      const id = Math.random().toString(36).slice(2, 9);
      setLogs(prev => [{
        id,
        msg,
        type
      }, ...prev].slice(0, 10));
    };
    const SenderComponent = ({
      name: _name,
      type: _type,
      color,
      displayName
    }: {
      name?: string;
      type?: string;
      color: string;
      displayName: string;
    }) => {
      const [active, setActive] = useState(false);
      return <Card variant="outline" padding="sm">
          <Stack gap="xs">
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
              <strong>{displayName}</strong>
            </div>
            <Button size="small" priority={active ? "secondary" : "primary"} onClick={() => {
            const newState = !active;
            setActive(newState);
            addLog(\`\${displayName}\${newState ? t("story_portal_log_started") : t("story_portal_log_stopped")}\`, newState ? "success" : "warning");
          }} label={active ? t("story_portal_btn_stop") : t("story_portal_btn_start")} />
            {active && <Portal container={logContainer}>
                <div style={{
              padding: "8px 12px",
              marginBottom: "8px",
              borderRadius: "4px",
              fontSize: "12px",
              background: color,
              border: "1px solid rgba(0,0,0,0.1)",
              animation: "slideIn 0.2s ease-out"
            }}>
                  <style>{\`@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }\`}</style>
                  <strong>[{displayName}]</strong> {t("story_portal_status_desc")}
                </div>
              </Portal>}
          </Stack>
        </Card>;
    };
    return <Container size="xl">
        <Grid cols={{
        base: 1,
        md: "1fr 300px"
      }} gap="xl">
          <Stack gap="md">
            <h4>{t("story_portal_panel_title")}</h4>
            <p style={{
            fontSize: "14px",
            color: "#666"
          }}>
              {t("story_portal_panel_desc")}
            </p>
            <SimpleGrid cols={{
            base: 1,
            sm: 2
          }} spacing="md">
              <SenderComponent name="A" displayName={t("story_portal_sensor_a")} color="#ecfdf5" />
              <SenderComponent name="B" displayName={t("story_portal_sensor_b")} color="#eff6ff" />
              <SenderComponent name="C" displayName={t("story_portal_camera")} color="#fff7ed" />
              <SenderComponent name="D" displayName={t("story_portal_alarm")} color="#fef2f2" />
            </SimpleGrid>
          </Stack>

          <Card variant="flat" style={{
          background: "#1e293b",
          color: "#f8fafc",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column"
        }}>
            <Card.Header style={{
            borderBottom: "1px solid #334155",
            color: "#94a3b8"
          }}>
              <Stack direction="row" justify="between" align="center">
                <span style={{
                fontSize: "12px",
                fontWeight: "bold"
              }}>
                  {t("story_portal_monitor_title")}
                </span>
                <Badge content={t("story_portal_monitor_live")} color="error" size="small" />
              </Stack>
            </Card.Header>
            <Card.Body style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px"
          }}>
              <Box ref={setLogContainer} style={{
              marginBottom: "16px",
              borderBottom: "1px solid #334155",
              paddingBottom: "16px",
              minHeight: "20px"
            }}>
                {/* ここに Portal からの「稼働中メッセージ」が表示される */}
              </Box>
              <div style={{
              fontSize: "11px",
              fontFamily: "monospace"
            }}>
                <div style={{
                color: "#64748b",
                marginBottom: "8px"
              }}>
                  {t("story_portal_history_title")}
                </div>
                {logs.map(log => <div key={log.id} style={{
                marginBottom: "4px",
                color: log.type === "success" ? "#4ade80" : log.type === "warning" ? "#fbbf24" : "#94a3b8"
              }}>
                    {\`> \${log.msg}\`}
                  </div>)}
                {logs.length === 0 && <div style={{
                color: "#475569"
              }}>{t("story_portal_waiting")}</div>}
              </div>
            </Card.Body>
          </Card>
        </Grid>
      </Container>;
  }
}`,...h.parameters?.docs?.source},description:{story:`具体的なユースケース 1: 通知センター (ログ出力)
ページ内の特定のエリアを「通知受取用」として定義し、様々なコンポーネントから
情報を Portal で送り込む例です。`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: function Render() {
    const [panelContainer, setPanelContainer] = useState<HTMLElement | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tasks = [{
      id: 1,
      title: t("story_portal_task1_title"),
      detail: t("story_portal_task1_detail")
    }, {
      id: 2,
      title: t("story_portal_task2_title"),
      detail: t("story_portal_task2_detail")
    }, {
      id: 3,
      title: t("story_portal_task3_title"),
      detail: t("story_portal_task3_detail")
    }];
    const TaskItem = ({
      task,
      isSelected,
      onSelect,
      container
    }: {
      task: {
        id: number;
        title: string;
        detail: string;
      };
      isSelected: boolean;
      onSelect: (id: number) => void;
      container: HTMLElement | null;
    }) => {
      const [note, setNote] = useState("");
      return <div role="button" tabIndex={0} onClick={() => onSelect(task.id)} onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") onSelect(task.id);
      }} style={{
        padding: "16px",
        border: "1px solid",
        borderColor: isSelected ? "#3b82f6" : "#e2e8f0",
        marginBottom: "12px",
        cursor: "pointer",
        background: isSelected ? "#eff6ff" : "white",
        borderRadius: "8px",
        transition: "all 0.2s"
      }}>
          <Stack direction="row" justify="between" align="center">
            <strong>{task.title}</strong>
            <Icon name="ChevronRightIcon" style={{
            color: isSelected ? "#3b82f6" : "#cbd5e1"
          }} />
          </Stack>

          {isSelected && <Portal container={container}>
              <div style={{
            animation: "fadeInUp 0.3s ease-out"
          }}>
                <style>{\`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\`}</style>
                <Badge content={\`TASK-00\${task.id}\`} variant="outline" size="small" style={{
              marginBottom: "12px"
            }} />
                <h3 style={{
              margin: "0 0 16px 0"
            }}>{task.title}</h3>

                <Card variant="flat" style={{
              background: "#f8fafc",
              marginBottom: "20px"
            }}>
                  <p style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#334155"
              }}>
                    {task.detail}
                  </p>
                </Card>

                <Stack direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column"
            }} gap="xs">
                  <label style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#64748b"
              }}>
                    {t("story_portal_task_memo")}
                  </label>
                  <Textarea value={note} onChange={e => setNote(e.target.value)} placeholder={t("story_portal_memo_placeholder")} rows={5} fullWidth />
                  <p style={{
                fontSize: "11px",
                color: "#94a3b8"
              }}>
                    {t("story_portal_memo_note")}
                  </p>
                </Stack>
              </div>
            </Portal>}
        </div>;
    };
    return <Container size="xl" className="portal-side-container">
        <Card variant="outline" padding="none" className="side-panel-card" style={{
        overflow: "hidden"
      }}>
          <style>{\`
            .portal-side-container { margin-top: 20px; margin-bottom: 20px; }
            .side-panel-card { height: auto; min-height: 550px; }
            @media (min-width: 576px) {
              .portal-side-container { height: calc(100vh - 40px); }
              .side-panel-card { height: 100%; border-radius: 12px; }
              .sidebar-border { border-right: 1px solid var(--wim-neutral-200, #e2e8f0); border-bottom: none !important; }
            }
            @media (max-width: 575px) {
              .sidebar-border { border-bottom: 1px solid var(--wim-neutral-200, #e2e8f0); border-right: none !important; }
            }
          \`}</style>
          <Stack direction={{
          base: "column",
          sm: "row"
        }} gap="none" align="stretch" style={{
          height: "100%",
          width: "100%",
          flex: 1
        }}>
            {/* Sidebar */}
            <Box w={{
            base: "100%",
            sm: 350
          }} className="sidebar-border" style={{
            display: "flex",
            flexDirection: "column",
            background: "#fcfcfd",
            height: "100%",
            flexShrink: 0,
            overflowX: "hidden"
          }}>
              <Box p="md" style={{
              borderBottom: "1px solid var(--wim-neutral-200, #e2e8f0)"
            }}>
                <h4 style={{
                margin: 0
              }}>{t("story_portal_task_mgmt")}</h4>
              </Box>
              <Box p="md" style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden"
            }}>
                {tasks.map(task => <TaskItem key={task.id} task={task} isSelected={selectedId === task.id} onSelect={setSelectedId} container={panelContainer} />)}
              </Box>
            </Box>

            {/* Content Area */}
            <Box style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0
          }}>
              <Box p="md" bg="var(--wim-neutral-50, #f8fafc)" style={{
              borderBottom: "1px solid var(--wim-neutral-200, #e2e8f0)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
                <span style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#64748b"
              }}>
                  {t("story_portal_preview_title")}
                </span>
                {selectedId && <Button size="small" label={t("story_visuallyhidden_close")} priority="secondary" onClick={() => setSelectedId(null)} />}
              </Box>
              <Box ref={setPanelContainer} p="xl" display="flex" style={{
              flex: 1,
              flexDirection: "column",
              overflowY: "auto",
              position: "relative",
              minHeight: "400px"
            }}>
                {!selectedId && <Stack direction="row" align="center" justify="center" gap="xs" style={{
                flex: 1,
                minHeight: "100%",
                color: "#94a3b8"
              }}>
                    <Icon name="InfoCircleIcon" style={{
                  width: "20px",
                  height: "20px",
                  opacity: 0.8
                }} />
                    <p style={{
                  margin: 0
                }}>{t("story_portal_select_task")}</p>
                  </Stack>}
              </Box>
            </Box>
          </Stack>
        </Card>
      </Container>;
  }
}`,...u.parameters?.docs?.source},description:{story:`具体的なユースケース 2: サイドパネル詳細表示
複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が
「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。`,...u.parameters?.docs?.description}}};const E=["OverflowEscape","CustomContainer","NotificationCenter","SidePanelDetail"],V=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:g,NotificationCenter:h,OverflowEscape:_,SidePanelDetail:u,__namedExportsOrder:E,default:T},Symbol.toStringTag,{value:"Module"}));export{g as C,h as N,_ as O,V as P,u as S};
