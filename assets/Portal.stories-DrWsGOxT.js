import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-DQwmcauy.js";import{P as b}from"./Portal-Buiq1k_x.js";import{B as j}from"./Button-r7Kxqflo.js";import{I as B}from"./Icon-BSJg9_bB.js";import{C as o}from"./Card-BvDC_Zfi.js";import{S as l}from"./Stack-DxnhnMJF.js";import{T as P}from"./Textarea-CP1vKEqk.js";import{B as z}from"./Badge-DZs2rG0J.js";import{C as I}from"./Container-kARQ7XJ_.js";import{B as s}from"./Box-B8PXs6oF.js";import{G as T}from"./Grid-BLJ5DYz9.js";import{S as H}from"./SimpleGrid-DG475_ue.js";import{A as N}from"./Alert-CqV1h50P.js";import{u as S}from"./useTranslation-CZ9vchf1.js";const A={title:"Components/Utilities/Portal",component:b,parameters:{layout:"centered"},tags:[]},y={render:function(){const[a,i]=d.useState(!1),{t:e}=S(["docs","common","components"]);return n.jsx(o,{variant:"outline",padding:"lg",style:{width:"100%",maxWidth:"400px",height:"250px",padding:"32px",position:"relative",overflow:"hidden"},children:n.jsxs(o.Body,{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"16px"},children:[n.jsx("p",{dangerouslySetInnerHTML:{__html:e("story_portal_desc_overflow")}}),n.jsx("p",{children:e("story_portal_desc_escape")})]}),n.jsx(j,{onClick:()=>i(!a),label:e(a?"story_portal_btn_hide":"story_portal_btn_show"),priority:"primary"}),a&&n.jsx(b,{children:n.jsxs(o,{variant:"elevated",padding:"lg",style:{position:"fixed",bottom:"40px",right:"40px",width:"280px",maxWidth:"calc(100vw - 80px)",zIndex:1e4,animation:"popUp 0.3s ease-out"},children:[n.jsx("style",{children:`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              `}),n.jsxs(l,{gap:"xs",children:[n.jsx("h4",{style:{margin:"0 0 8px 0",color:"var(--wim-primary)"},children:e("story_portal_power_title")}),n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.5"},dangerouslySetInnerHTML:{__html:e("story_portal_power_desc")}}),n.jsx(s,{mt:"md",textAlign:"right",children:n.jsx(j,{size:"small",label:e("story_portal_btn_ok"),onClick:()=>i(!1)})})]})]})})]})})}},f={render:function(){const[a,i]=d.useState(null),{t:e}=S(["docs","common","components"]);return n.jsxs(I,{size:"md",children:[n.jsx("p",{children:e("story_portal_container_desc")}),n.jsxs(H,{cols:{base:1,sm:2},spacing:"lg",style:{marginTop:"24px"},children:[n.jsxs(o,{variant:"outline",children:[n.jsx(o.Header,{children:n.jsx("strong",{children:e("story_portal_source_title")})}),n.jsxs(o.Body,{children:[n.jsx("p",{style:{fontSize:"12px"},children:e("story_portal_source_desc")}),n.jsx(s,{mt:"md",style:{display:"flex",justifyContent:"center"},children:n.jsx(b,{container:a,children:n.jsx(N,{variant:"success",icon:n.jsx(B,{name:"CheckCircleIcon"}),style:{width:"fit-content"},children:e("story_portal_sent_success")})})})]})]}),n.jsx(s,{ref:i,bg:"var(--wim-neutral-50, #f8fafc)",style:{border:"2px dashed var(--wim-primary, #3b82f6)",minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px"},children:!a&&n.jsx(s,{textAlign:"center",color:"primary",children:e("story_portal_loading")})})]})]})}},_={render:function(){const[a,i]=d.useState(null),[e,v]=d.useState([]),{t}=S(["docs","common","components"]),C=(r,c="info")=>{const h=Math.random().toString(36).slice(2,9);v(p=>[{id:h,msg:r,type:c},...p].slice(0,10))},m=({name:r,type:c,color:h,displayName:p})=>{const[x,k]=d.useState(!1);return n.jsx(o,{variant:"outline",padding:"sm",children:n.jsxs(l,{gap:"xs",children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:n.jsx("strong",{children:p})}),n.jsx(j,{size:"small",priority:x?"secondary":"primary",onClick:()=>{const u=!x;k(u),C(`${p}${t(u?"story_portal_log_started":"story_portal_log_stopped")}`,u?"success":"warning")},label:t(x?"story_portal_btn_stop":"story_portal_btn_start")}),x&&n.jsx(b,{container:a,children:n.jsxs("div",{style:{padding:"8px 12px",marginBottom:"8px",borderRadius:"4px",fontSize:"12px",background:h,border:"1px solid rgba(0,0,0,0.1)",animation:"slideIn 0.2s ease-out"},children:[n.jsx("style",{children:"@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }"}),n.jsxs("strong",{children:["[",p,"]"]})," ",t("story_portal_status_desc")]})})]})})};return n.jsx(I,{size:"xl",children:n.jsxs(T,{cols:{base:1,md:"1fr 300px"},gap:"xl",children:[n.jsxs(l,{gap:"md",children:[n.jsx("h4",{children:t("story_portal_panel_title")}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:t("story_portal_panel_desc")}),n.jsxs(H,{cols:{base:1,sm:2},spacing:"md",children:[n.jsx(m,{name:"A",displayName:t("story_portal_sensor_a"),color:"#ecfdf5"}),n.jsx(m,{name:"B",displayName:t("story_portal_sensor_b"),color:"#eff6ff"}),n.jsx(m,{name:"C",displayName:t("story_portal_camera"),color:"#fff7ed"}),n.jsx(m,{name:"D",displayName:t("story_portal_alarm"),color:"#fef2f2"})]})]}),n.jsxs(o,{variant:"flat",style:{background:"#1e293b",color:"#f8fafc",minHeight:"400px",display:"flex",flexDirection:"column"},children:[n.jsx(o.Header,{style:{borderBottom:"1px solid #334155",color:"#94a3b8"},children:n.jsxs(l,{direction:"row",justify:"between",align:"center",children:[n.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:t("story_portal_monitor_title")}),n.jsx(z,{content:t("story_portal_monitor_live"),color:"error",size:"small"})]})}),n.jsxs(o.Body,{style:{flex:1,overflowY:"auto",padding:"12px"},children:[n.jsx(s,{ref:i,style:{marginBottom:"16px",borderBottom:"1px solid #334155",paddingBottom:"16px",minHeight:"20px"}}),n.jsxs("div",{style:{fontSize:"11px",fontFamily:"monospace"},children:[n.jsx("div",{style:{color:"#64748b",marginBottom:"8px"},children:t("story_portal_history_title")}),e.map(r=>n.jsx("div",{style:{marginBottom:"4px",color:r.type==="success"?"#4ade80":r.type==="warning"?"#fbbf24":"#94a3b8"},children:`> ${r.msg}`},r.id)),e.length===0&&n.jsx("div",{style:{color:"#475569"},children:t("story_portal_waiting")})]})]})]})]})})}},g={parameters:{layout:"fullscreen"},render:function(){const[a,i]=d.useState(null),[e,v]=d.useState(null),{t}=S(["docs","common","components"]),C=[{id:1,title:t("story_portal_task1_title"),detail:t("story_portal_task1_detail")},{id:2,title:t("story_portal_task2_title"),detail:t("story_portal_task2_detail")},{id:3,title:t("story_portal_task3_title"),detail:t("story_portal_task3_detail")}],m=({task:r,isSelected:c,onSelect:h,container:p})=>{const[x,k]=d.useState("");return n.jsxs("div",{onClick:()=>h(r.id),style:{padding:"16px",border:"1px solid",borderColor:c?"#3b82f6":"#e2e8f0",marginBottom:"12px",cursor:"pointer",background:c?"#eff6ff":"white",borderRadius:"8px",transition:"all 0.2s"},children:[n.jsxs(l,{direction:"row",justify:"between",align:"center",children:[n.jsx("strong",{children:r.title}),n.jsx(B,{name:"ChevronRightIcon",style:{color:c?"#3b82f6":"#cbd5e1"}})]}),c&&n.jsx(b,{container:p,children:n.jsxs("div",{style:{animation:"fadeInUp 0.3s ease-out"},children:[n.jsx("style",{children:"@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }"}),n.jsx(z,{content:`TASK-00${r.id}`,variant:"outline",size:"small",style:{marginBottom:"12px"}}),n.jsx("h3",{style:{margin:"0 0 16px 0"},children:r.title}),n.jsx(o,{variant:"flat",style:{background:"#f8fafc",marginBottom:"20px"},children:n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6",color:"#334155"},children:r.detail})}),n.jsxs(l,{direction:{base:"column",sm:"column",md:"column",lg:"column"},gap:"xs",children:[n.jsx("label",{style:{fontSize:"13px",fontWeight:"bold",color:"#64748b"},children:t("story_portal_task_memo")}),n.jsx(P,{value:x,onChange:u=>k(u.target.value),placeholder:t("story_portal_memo_placeholder"),rows:5,fullWidth:!0}),n.jsx("p",{style:{fontSize:"11px",color:"#94a3b8"},children:t("story_portal_memo_note")})]})]})})]})};return n.jsx(I,{size:"xl",className:"portal-side-container",children:n.jsxs(o,{variant:"outline",padding:"none",className:"side-panel-card",style:{overflow:"hidden"},children:[n.jsx("style",{children:`
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
          `}),n.jsxs(l,{direction:{base:"column",sm:"row"},gap:"none",align:"stretch",style:{height:"100%",width:"100%",flex:1},children:[n.jsxs(s,{w:{base:"100%",sm:350},className:"sidebar-border",style:{display:"flex",flexDirection:"column",background:"#fcfcfd",height:"100%",flexShrink:0,overflowX:"hidden"},children:[n.jsx(s,{p:"md",style:{borderBottom:"1px solid var(--wim-neutral-200, #e2e8f0)"},children:n.jsx("h4",{style:{margin:0},children:t("story_portal_task_mgmt")})}),n.jsx(s,{p:"md",style:{flex:1,overflowY:"auto",overflowX:"hidden"},children:C.map(r=>n.jsx(m,{task:r,isSelected:e===r.id,onSelect:v,container:a},r.id))})]}),n.jsxs(s,{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[n.jsxs(s,{p:"md",bg:"var(--wim-neutral-50, #f8fafc)",style:{borderBottom:"1px solid var(--wim-neutral-200, #e2e8f0)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"14px",fontWeight:"bold",color:"#64748b"},children:t("story_portal_preview_title")}),e&&n.jsx(j,{size:"small",label:t("story_visuallyhidden_close"),priority:"secondary",onClick:()=>v(null)})]}),n.jsx(s,{ref:i,p:"xl",display:"flex",style:{flex:1,flexDirection:"column",overflowY:"auto",position:"relative",minHeight:"400px"},children:!e&&n.jsxs(l,{direction:"row",align:"center",justify:"center",gap:"xs",style:{flex:1,minHeight:"100%",color:"#94a3b8"},children:[n.jsx(B,{name:"InfoCircleIcon",style:{width:"20px",height:"20px",opacity:.8}}),n.jsx("p",{style:{margin:0},children:t("story_portal_select_task")})]})})]})]})]})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Card variant="outline" padding="lg" style={{
      width: "100%",
      maxWidth: "400px",
      height: "250px",
      padding: "32px",
      position: "relative",
      overflow: "hidden"
    }}>\r
        <Card.Body style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>\r
          <div style={{
          textAlign: "center",
          marginBottom: "16px"
        }}>\r
            <p dangerouslySetInnerHTML={{
            __html: t("story_portal_desc_overflow")
          }} />\r
            <p>{t("story_portal_desc_escape")}</p>\r
          </div>\r
\r
          <Button onClick={() => setShow(!show)} label={show ? t("story_portal_btn_hide") : t("story_portal_btn_show")} priority="primary" />\r
\r
          {show && <Portal>\r
              <Card variant="elevated" padding="lg" style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "280px",
            maxWidth: "calc(100vw - 80px)",
            zIndex: 10000,
            animation: "popUp 0.3s ease-out"
          }}>\r
                <style>{\`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              \`}</style>\r
                <Stack gap="xs">\r
                  <h4 style={{
                margin: "0 0 8px 0",
                color: "var(--wim-primary)"
              }}>\r
                    {t("story_portal_power_title")}\r
                  </h4>\r
                  <p style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "1.5"
              }} dangerouslySetInnerHTML={{
                __html: t("story_portal_power_desc")
              }} />\r
                  <Box mt="md" textAlign="right">\r
                    <Button size="small" label={t("story_portal_btn_ok")} onClick={() => setShow(false)} />\r
                  </Box>\r
                </Stack>\r
              </Card>\r
            </Portal>}\r
        </Card.Body>\r
      </Card>;
  }
}`,...y.parameters?.docs?.source},description:{story:"overflow: hidden な親要素を突き抜ける例",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Container size="md">\r
        <p>{t("story_portal_container_desc")}</p>\r
\r
        <SimpleGrid cols={{
        base: 1,
        sm: 2
      }} spacing="lg" style={{
        marginTop: "24px"
      }}>\r
          <Card variant="outline">\r
            <Card.Header>\r
              <strong>{t("story_portal_source_title")}</strong>\r
            </Card.Header>\r
            <Card.Body>\r
              <p style={{
              fontSize: "12px"
            }}>\r
                {t("story_portal_source_desc")}\r
              </p>\r
              <Box mt="md" style={{
              display: "flex",
              justifyContent: "center"
            }}>\r
                <Portal container={container}>\r
                  <Alert variant="success" icon={<Icon name="CheckCircleIcon" />} style={{
                  width: "fit-content"
                }}>\r
                    {t("story_portal_sent_success")}\r
                  </Alert>\r
                </Portal>\r
              </Box>\r
            </Card.Body>\r
          </Card>\r
\r
          <Box ref={setContainer} bg="var(--wim-neutral-50, #f8fafc)" style={{
          border: "2px dashed var(--wim-primary, #3b82f6)",
          minHeight: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px"
        }}>\r
            {/* ここに Portal の 中身が表示される */}\r
            {!container && <Box textAlign="center" color="primary">\r
                {t("story_portal_loading")}\r
              </Box>}\r
          </Box>\r
        </SimpleGrid>\r
      </Container>;
  }
}`,...f.parameters?.docs?.source},description:{story:"特定の DOM 要素へのレンダリング例",...f.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [logContainer, setLogContainer] = useState<HTMLDivElement | null>(null);
    const [logs, setLogs] = useState<{
      id: string;
      msg: string;
      type: any;
    }[]>([]);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const addLog = (msg: string, type: any = "info") => {
      const id = Math.random().toString(36).slice(2, 9);
      setLogs(prev => [{
        id,
        msg,
        type
      }, ...prev].slice(0, 10));
    };
    const SenderComponent = ({
      name,
      type,
      color,
      displayName
    }: any) => {
      const [active, setActive] = useState(false);
      return <Card variant="outline" padding="sm">\r
          <Stack gap="xs">\r
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>\r
              <strong>{displayName}</strong>\r
            </div>\r
            <Button size="small" priority={active ? "secondary" : "primary"} onClick={() => {
            const newState = !active;
            setActive(newState);
            addLog(\`\${displayName}\${newState ? t("story_portal_log_started") : t("story_portal_log_stopped")}\`, newState ? "success" : "warning");
          }} label={active ? t("story_portal_btn_stop") : t("story_portal_btn_start")} />\r
            {active && <Portal container={logContainer}>\r
                <div style={{
              padding: "8px 12px",
              marginBottom: "8px",
              borderRadius: "4px",
              fontSize: "12px",
              background: color,
              border: "1px solid rgba(0,0,0,0.1)",
              animation: "slideIn 0.2s ease-out"
            }}>\r
                  <style>{\`@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }\`}</style>\r
                  <strong>[{displayName}]</strong> {t("story_portal_status_desc")}\r
                </div>\r
              </Portal>}\r
          </Stack>\r
        </Card>;
    };
    return <Container size="xl">\r
        <Grid cols={{
        base: 1,
        md: "1fr 300px"
      }} gap="xl">\r
          <Stack gap="md">\r
            <h4>{t("story_portal_panel_title")}</h4>\r
            <p style={{
            fontSize: "14px",
            color: "#666"
          }}>\r
              {t("story_portal_panel_desc")}\r
            </p>\r
            <SimpleGrid cols={{
            base: 1,
            sm: 2
          }} spacing="md">\r
              <SenderComponent name="A" displayName={t("story_portal_sensor_a")} color="#ecfdf5" />\r
              <SenderComponent name="B" displayName={t("story_portal_sensor_b")} color="#eff6ff" />\r
              <SenderComponent name="C" displayName={t("story_portal_camera")} color="#fff7ed" />\r
              <SenderComponent name="D" displayName={t("story_portal_alarm")} color="#fef2f2" />\r
            </SimpleGrid>\r
          </Stack>\r
\r
          <Card variant="flat" style={{
          background: "#1e293b",
          color: "#f8fafc",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column"
        }}>\r
            <Card.Header style={{
            borderBottom: "1px solid #334155",
            color: "#94a3b8"
          }}>\r
              <Stack direction="row" justify="between" align="center">\r
                <span style={{
                fontSize: "12px",
                fontWeight: "bold"
              }}>\r
                  {t("story_portal_monitor_title")}\r
                </span>\r
                <Badge content={t("story_portal_monitor_live")} color="error" size="small" />\r
              </Stack>\r
            </Card.Header>\r
            <Card.Body style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px"
          }}>\r
              <Box ref={setLogContainer} style={{
              marginBottom: "16px",
              borderBottom: "1px solid #334155",
              paddingBottom: "16px",
              minHeight: "20px"
            }}>\r
                {/* ここに Portal からの「稼働中メッセージ」が表示される */}\r
              </Box>\r
              <div style={{
              fontSize: "11px",
              fontFamily: "monospace"
            }}>\r
                <div style={{
                color: "#64748b",
                marginBottom: "8px"
              }}>\r
                  {t("story_portal_history_title")}\r
                </div>\r
                {logs.map(log => <div key={log.id} style={{
                marginBottom: "4px",
                color: log.type === "success" ? "#4ade80" : log.type === "warning" ? "#fbbf24" : "#94a3b8"
              }}>\r
                    {\`> \${log.msg}\`}\r
                  </div>)}\r
                {logs.length === 0 && <div style={{
                color: "#475569"
              }}>{t("story_portal_waiting")}</div>}\r
              </div>\r
            </Card.Body>\r
          </Card>\r
        </Grid>\r
      </Container>;
  }
}`,..._.parameters?.docs?.source},description:{story:`具体的なユースケース 1: 通知センター (ログ出力)\r
ページ内の特定のエリアを「通知受取用」として定義し、様々なコンポーネントから\r
情報を Portal で送り込む例です。`,..._.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: function Render() {
    const [panelContainer, setPanelContainer] = useState<HTMLDivElement | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    }: any) => {
      const [note, setNote] = useState("");
      return <div onClick={() => onSelect(task.id)} style={{
        padding: "16px",
        border: "1px solid",
        borderColor: isSelected ? "#3b82f6" : "#e2e8f0",
        marginBottom: "12px",
        cursor: "pointer",
        background: isSelected ? "#eff6ff" : "white",
        borderRadius: "8px",
        transition: "all 0.2s"
      }}>\r
          <Stack direction="row" justify="between" align="center">\r
            <strong>{task.title}</strong>\r
            <Icon name="ChevronRightIcon" style={{
            color: isSelected ? "#3b82f6" : "#cbd5e1"
          }} />\r
          </Stack>\r
\r
          {isSelected && <Portal container={container}>\r
              <div style={{
            animation: "fadeInUp 0.3s ease-out"
          }}>\r
                <style>{\`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\`}</style>\r
                <Badge content={\`TASK-00\${task.id}\`} variant="outline" size="small" style={{
              marginBottom: "12px"
            }} />\r
                <h3 style={{
              margin: "0 0 16px 0"
            }}>{task.title}</h3>\r
\r
                <Card variant="flat" style={{
              background: "#f8fafc",
              marginBottom: "20px"
            }}>\r
                  <p style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#334155"
              }}>\r
                    {task.detail}\r
                  </p>\r
                </Card>\r
\r
                <Stack direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column"
            }} gap="xs">\r
                  <label style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#64748b"
              }}>\r
                    {t("story_portal_task_memo")}\r
                  </label>\r
                  <Textarea value={note} onChange={e => setNote(e.target.value)} placeholder={t("story_portal_memo_placeholder")} rows={5} fullWidth />\r
                  <p style={{
                fontSize: "11px",
                color: "#94a3b8"
              }}>\r
                    {t("story_portal_memo_note")}\r
                  </p>\r
                </Stack>\r
              </div>\r
            </Portal>}\r
        </div>;
    };
    return <Container size="xl" className="portal-side-container">\r
        <Card variant="outline" padding="none" className="side-panel-card" style={{
        overflow: "hidden"
      }}>\r
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
          \`}</style>\r
          <Stack direction={{
          base: "column",
          sm: "row"
        }} gap="none" align="stretch" style={{
          height: "100%",
          width: "100%",
          flex: 1
        }}>\r
            {/* Sidebar */}\r
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
          }}>\r
              <Box p="md" style={{
              borderBottom: "1px solid var(--wim-neutral-200, #e2e8f0)"
            }}>\r
                <h4 style={{
                margin: 0
              }}>{t("story_portal_task_mgmt")}</h4>\r
              </Box>\r
              <Box p="md" style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden"
            }}>\r
                {tasks.map(task => <TaskItem key={task.id} task={task} isSelected={selectedId === task.id} onSelect={setSelectedId} container={panelContainer} />)}\r
              </Box>\r
            </Box>\r
\r
            {/* Content Area */}\r
            <Box style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0
          }}>\r
              <Box p="md" bg="var(--wim-neutral-50, #f8fafc)" style={{
              borderBottom: "1px solid var(--wim-neutral-200, #e2e8f0)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>\r
                <span style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#64748b"
              }}>\r
                  {t("story_portal_preview_title")}\r
                </span>\r
                {selectedId && <Button size="small" label={t("story_visuallyhidden_close")} priority="secondary" onClick={() => setSelectedId(null)} />}\r
              </Box>\r
              <Box ref={setPanelContainer} p="xl" display="flex" style={{
              flex: 1,
              flexDirection: "column",
              overflowY: "auto",
              position: "relative",
              minHeight: "400px"
            }}>\r
                {!selectedId && <Stack direction="row" align="center" justify="center" gap="xs" style={{
                flex: 1,
                minHeight: "100%",
                color: "#94a3b8"
              }}>\r
                    <Icon name="InfoCircleIcon" style={{
                  width: "20px",
                  height: "20px",
                  opacity: 0.8
                }} />\r
                    <p style={{
                  margin: 0
                }}>{t("story_portal_select_task")}</p>\r
                  </Stack>}\r
              </Box>\r
            </Box>\r
          </Stack>\r
        </Card>\r
      </Container>;
  }
}`,...g.parameters?.docs?.source},description:{story:`具体的なユースケース 2: サイドパネル詳細表示\r
複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が\r
「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。`,...g.parameters?.docs?.description}}};const D=["OverflowEscape","CustomContainer","NotificationCenter","SidePanelDetail"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:f,NotificationCenter:_,OverflowEscape:y,SidePanelDetail:g,__namedExportsOrder:D,default:A},Symbol.toStringTag,{value:"Module"}));export{f as C,_ as N,y as O,Q as P,g as S};
