import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DEBOWsqM.js";import{P as b}from"./Portal-CZiYVijF.js";import{B as j}from"./Button-DvhHoJsr.js";import{I as B}from"./Icon-0PxP3fzr.js";import{C as s}from"./Card-B-CKIyiV.js";import{S as d}from"./Stack-CfUUt4Va.js";import{T as P}from"./Textarea-CTfhgqEy.js";import{B as I}from"./Badge-MU8uOJR7.js";import{C as z}from"./Container-X2gv7N2r.js";import{B as o}from"./Box-CFs51jrL.js";import{G as T}from"./Grid-Dwk7KGz5.js";import{S as H}from"./SimpleGrid-Oe6WRS0C.js";import{A}from"./Alert-CKqOAT1F.js";import{u as S}from"./useTranslation-C_sUcuQ0.js";const R={title:"Components/Utilities/Portal",component:b,parameters:{layout:"centered"},tags:[]},y={render:function(){const[a,l]=c.useState(!1),{t:e}=S(["docs","common","components"]);return t.jsx(s,{variant:"outline",style:{width:"100%",maxWidth:"400px",height:"200px",position:"relative",overflow:"hidden"},children:t.jsxs(s.Body,{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"16px"},children:[t.jsx("p",{dangerouslySetInnerHTML:{__html:e("story_portal_desc_overflow")}}),t.jsx("p",{children:e("story_portal_desc_escape")})]}),t.jsx(j,{onClick:()=>l(!a),label:e(a?"story_portal_btn_hide":"story_portal_btn_show"),priority:"primary"}),a&&t.jsx(b,{children:t.jsxs(s,{variant:"elevated",padding:"lg",style:{position:"fixed",bottom:"40px",right:"40px",width:"280px",maxWidth:"calc(100vw - 80px)",zIndex:1e4,animation:"popUp 0.3s ease-out"},children:[t.jsx("style",{children:`
                                  @keyframes popUp {
                                      from { transform: translateY(20px); opacity: 0; }
                                      to { transform: translateY(0); opacity: 1; }
                                  }
                              `}),t.jsxs(d,{gap:"xs",children:[t.jsx("h4",{style:{margin:"0 0 8px 0",color:"var(--wim-primary)"},children:e("story_portal_power_title")}),t.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.5"},dangerouslySetInnerHTML:{__html:e("story_portal_power_desc")}}),t.jsx(o,{mt:"md",textAlign:"right",children:t.jsx(j,{size:"small",label:e("story_portal_btn_ok"),onClick:()=>l(!1)})})]})]})})]})})}},_={render:function(){const[a,l]=c.useState(null),{t:e}=S(["docs","common","components"]);return t.jsxs(z,{size:"md",children:[t.jsx("p",{children:e("story_portal_container_desc")}),t.jsxs(H,{cols:{base:1,sm:2},spacing:"lg",style:{marginTop:"24px"},children:[t.jsxs(s,{variant:"outline",children:[t.jsx(s.Header,{children:t.jsx("strong",{children:e("story_portal_source_title")})}),t.jsxs(s.Body,{children:[t.jsx("p",{style:{fontSize:"12px"},children:e("story_portal_source_desc")}),t.jsx(o,{mt:"md",children:t.jsx(b,{container:a,children:t.jsx(A,{variant:"success",icon:t.jsx(B,{name:"CheckCircleIcon"}),children:e("story_portal_sent_success")})})})]})]}),t.jsx(o,{ref:l,bg:"var(--wim-neutral-50, #f8fafc)",style:{border:"2px dashed var(--wim-primary, #3b82f6)",minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px"},children:t.jsx(o,{px:"md",w:"100%",children:!a&&t.jsx(o,{textAlign:"center",color:"primary",children:e("story_portal_loading")})})})]})]})}},f={render:function(){const[a,l]=c.useState(null),[e,v]=c.useState([]),{t:n}=S(["docs","common","components"]),w=(r,p="info")=>{const h=Math.random().toString(36).slice(2,9);v(m=>[{id:h,msg:r,type:p},...m].slice(0,10))},x=({name:r,type:p,color:h,displayName:m})=>{const[i,k]=c.useState(!1);return t.jsx(s,{variant:"outline",padding:"sm",children:t.jsxs(d,{gap:"xs",children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("strong",{children:m}),t.jsx(I,{content:n(i?"story_portal_active":"story_portal_inactive"),color:i?"success":"neutral",size:"small"})]}),t.jsx(j,{size:"small",priority:i?"secondary":"primary",onClick:()=>{const u=!i;k(u),w(`${m}${n(u?"story_portal_log_started":"story_portal_log_stopped")}`,u?"success":"warning")},label:n(i?"story_portal_btn_stop":"story_portal_btn_start")}),i&&t.jsx(b,{container:a,children:t.jsxs("div",{style:{padding:"8px 12px",marginBottom:"8px",borderRadius:"4px",fontSize:"12px",background:h,border:"1px solid rgba(0,0,0,0.1)",animation:"slideIn 0.2s ease-out"},children:[t.jsx("style",{children:"@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }"}),t.jsxs("strong",{children:["[",m,"]"]})," ",n("story_portal_status_desc")]})})]})})};return t.jsx(z,{size:"xl",children:t.jsxs(T,{cols:{base:1,md:"1fr 300px"},gap:"xl",children:[t.jsxs(d,{gap:"md",children:[t.jsx("h4",{children:n("story_portal_panel_title")}),t.jsx("p",{style:{fontSize:"14px",color:"#666"},children:n("story_portal_panel_desc")}),t.jsxs(H,{cols:{base:1,sm:2},spacing:"md",children:[t.jsx(x,{name:"A",displayName:n("story_portal_sensor_a"),color:"#ecfdf5"}),t.jsx(x,{name:"B",displayName:n("story_portal_sensor_b"),color:"#eff6ff"}),t.jsx(x,{name:"C",displayName:n("story_portal_camera"),color:"#fff7ed"}),t.jsx(x,{name:"D",displayName:n("story_portal_alarm"),color:"#fef2f2"})]})]}),t.jsxs(s,{variant:"flat",style:{background:"#1e293b",color:"#f8fafc",minHeight:"400px",display:"flex",flexDirection:"column"},children:[t.jsx(s.Header,{style:{borderBottom:"1px solid #334155",color:"#94a3b8"},children:t.jsxs(d,{direction:"row",justify:"between",align:"center",children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:n("story_portal_monitor_title")}),t.jsx(I,{content:n("story_portal_monitor_live"),color:"error",size:"small"})]})}),t.jsxs(s.Body,{style:{flex:1,overflowY:"auto",padding:"12px"},children:[t.jsx(o,{ref:l,style:{marginBottom:"16px",borderBottom:"1px solid #334155",paddingBottom:"16px",minHeight:"20px"}}),t.jsxs("div",{style:{fontSize:"11px",fontFamily:"monospace"},children:[t.jsx("div",{style:{color:"#64748b",marginBottom:"8px"},children:n("story_portal_history_title")}),e.map(r=>t.jsx("div",{style:{marginBottom:"4px",color:r.type==="success"?"#4ade80":r.type==="warning"?"#fbbf24":"#94a3b8"},children:`> ${r.msg}`},r.id)),e.length===0&&t.jsx("div",{style:{color:"#475569"},children:n("story_portal_waiting")})]})]})]})]})})}},g={render:function(){const[a,l]=c.useState(null),[e,v]=c.useState(null),{t:n}=S(["docs","common","components"]),w=[{id:1,title:n("story_portal_task1_title"),detail:n("story_portal_task1_detail")},{id:2,title:n("story_portal_task2_title"),detail:n("story_portal_task2_detail")},{id:3,title:n("story_portal_task3_title"),detail:n("story_portal_task3_detail")}],x=({task:r,isSelected:p,onSelect:h,container:m})=>{const[i,k]=c.useState("");return t.jsxs("div",{onClick:()=>h(r.id),style:{padding:"16px",border:"1px solid",borderColor:p?"#3b82f6":"#e2e8f0",marginBottom:"12px",cursor:"pointer",background:p?"#eff6ff":"white",borderRadius:"8px",transition:"all 0.2s"},children:[t.jsxs(d,{direction:"row",justify:"between",align:"center",children:[t.jsx("strong",{children:r.title}),t.jsx(B,{name:"ChevronRightIcon",style:{color:p?"#3b82f6":"#cbd5e1"}})]}),p&&t.jsx(b,{container:m,children:t.jsxs("div",{style:{animation:"fadeInUp 0.3s ease-out"},children:[t.jsx("style",{children:"@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }"}),t.jsx(I,{content:`TASK-00${r.id}`,variant:"outline",size:"small",style:{marginBottom:"12px"}}),t.jsx("h3",{style:{margin:"0 0 16px 0"},children:r.title}),t.jsx(s,{variant:"flat",style:{background:"#f8fafc",marginBottom:"20px"},children:t.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6",color:"#334155"},children:r.detail})}),t.jsxs(d,{gap:"xs",children:[t.jsx("label",{style:{fontSize:"13px",fontWeight:"bold",color:"#64748b"},children:n("story_portal_task_memo")}),t.jsx(P,{value:i,onChange:u=>k(u.target.value),placeholder:n("story_portal_memo_placeholder"),rows:5,fullWidth:!0}),t.jsx("p",{style:{fontSize:"11px",color:"#94a3b8"},children:n("story_portal_memo_note")})]})]})})]})};return t.jsx(z,{size:"xl",children:t.jsx(s,{variant:"outline",padding:"none",style:{overflow:"hidden",height:"100%",minHeight:"550px"},children:t.jsxs(d,{direction:{base:"column",sm:"row"},gap:"none",style:{height:"100%",width:"100%"},children:[t.jsxs(o,{w:{base:"100%",sm:350},style:{borderRight:"1px solid var(--wim-neutral-200, #e2e8f0)",borderBottom:"1px solid var(--wim-neutral-200, #e2e8f0)",display:"flex",flexDirection:"column",background:"#fcfcfd"},children:[t.jsx(o,{p:"md",style:{borderBottom:"1px solid var(--wim-neutral-200, #e2e8f0)"},children:t.jsx("h4",{style:{margin:0},children:n("story_portal_task_mgmt")})}),t.jsx(o,{p:"md",style:{flex:1,overflowY:"auto"},children:w.map(r=>t.jsx(x,{task:r,isSelected:e===r.id,onSelect:v,container:a},r.id))})]}),t.jsxs(o,{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[t.jsxs(o,{p:"md",bg:"var(--wim-neutral-50, #f8fafc)",style:{borderBottom:"1px solid var(--wim-neutral-200, #e2e8f0)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:"14px",fontWeight:"bold",color:"#64748b"},children:n("story_portal_preview_title")}),e&&t.jsx(j,{size:"small",label:n("story_visuallyhidden_close"),priority:"secondary",onClick:()=>v(null)})]}),t.jsx(o,{ref:l,p:"xl",style:{flex:1,overflowY:"auto",position:"relative",minHeight:"400px"},children:!e&&t.jsxs(d,{align:"center",justify:"center",style:{height:"100%",color:"#94a3b8",textAlign:"center"},children:[t.jsx(B,{name:"InfoCircleIcon",style:{width:"48px",height:"48px",marginBottom:"12px",opacity:.5}}),t.jsx("p",{children:n("story_portal_select_task")})]})})]})]})})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Card variant="outline" style={{
      width: "100%",
      maxWidth: "400px",
      height: "200px",
      position: "relative",
      overflow: "hidden" // これにより、通常の子要素はここからはみ出せない
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
}`,...y.parameters?.docs?.source},description:{story:"overflow: hidden な親要素を突き抜ける例",...y.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
              <Box mt="md">\r
                <Portal container={container}>\r
                  <Alert variant="success" icon={<Icon name="CheckCircleIcon" />}>\r
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
            <Box px="md" w="100%">\r
              {/* ここに Portal の 中身が表示される */}\r
              {!container && <Box textAlign="center" color="primary">\r
                  {t("story_portal_loading")}\r
                </Box>}\r
            </Box>\r
          </Box>\r
        </SimpleGrid>\r
      </Container>;
  }
}`,..._.parameters?.docs?.source},description:{story:"特定の DOM 要素へのレンダリング例",..._.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
              <Badge content={active ? t("story_portal_active") : t("story_portal_inactive")} color={active ? "success" : "neutral"} size="small" />\r
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
}`,...f.parameters?.docs?.source},description:{story:`具体的なユースケース 1: 通知センター (ログ出力)\r
ページ内の特定のエリアを「通知受取用」として定義し、様々なコンポーネントから\r
情報を Portal で送り込む例です。`,...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                <Stack gap="xs">\r
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
    return <Container size="xl">\r
        <Card variant="outline" padding="none" style={{
        overflow: "hidden",
        height: "100%",
        minHeight: "550px"
      }}>\r
          <Stack direction={{
          base: "column",
          sm: "row"
        }} gap="none" style={{
          height: "100%",
          width: "100%"
        }}>\r
            {/* Sidebar */}\r
            <Box w={{
            base: "100%",
            sm: 350
          }} style={{
            borderRight: "1px solid var(--wim-neutral-200, #e2e8f0)",
            borderBottom: "1px solid var(--wim-neutral-200, #e2e8f0)",
            display: "flex",
            flexDirection: "column",
            background: "#fcfcfd"
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
              overflowY: "auto"
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
              <Box ref={setPanelContainer} p="xl" style={{
              flex: 1,
              overflowY: "auto",
              position: "relative",
              minHeight: "400px"
            }}>\r
                {!selectedId && <Stack align="center" justify="center" style={{
                height: "100%",
                color: "#94a3b8",
                textAlign: "center"
              }}>\r
                    <Icon name="InfoCircleIcon" style={{
                  width: "48px",
                  height: "48px",
                  marginBottom: "12px",
                  opacity: 0.5
                }} />\r
                    <p>{t("story_portal_select_task")}</p>\r
                  </Stack>}\r
              </Box>\r
            </Box>\r
          </Stack>\r
        </Card>\r
      </Container>;
  }
}`,...g.parameters?.docs?.source},description:{story:`具体的なユースケース 2: サイドパネル詳細表示\r
複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が\r
「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。`,...g.parameters?.docs?.description}}};const D=["OverflowEscape","CustomContainer","NotificationCenter","SidePanelDetail"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:_,NotificationCenter:f,OverflowEscape:y,SidePanelDetail:g,__namedExportsOrder:D,default:R},Symbol.toStringTag,{value:"Module"}));export{_ as C,f as N,y as O,Q as P,g as S};
