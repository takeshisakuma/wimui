import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-O5ZI-u7T.js";import{P as u}from"./Portal-DJP6SfCL.js";import{B as v}from"./Button-CYUIWrdj.js";import{I as C}from"./Icon-olUqQMEw.js";import{C as f}from"./Card-CEhAHCUI.js";import{S as h}from"./Stack-C1cHnZWS.js";import{T as B}from"./Textarea-Cj7hr3hQ.js";import{B as I}from"./Badge-BlUnjRJi.js";import{u as j}from"./useTranslation-2PVo7Ynq.js";const z={title:"Components/Utilities/Portal",component:u,parameters:{layout:"centered"},tags:[]},c={render:function(){const[o,s]=i.useState(!1),{t:e}=j(["docs","common","components"]);return n.jsxs("div",{style:{width:"100%",maxWidth:"400px",height:"200px",border:"2px dashed #999",padding:"20px",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f9f9f9",borderRadius:"8px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"10px"},children:[n.jsx("p",{dangerouslySetInnerHTML:{__html:e("story_portal_desc_overflow")}}),n.jsx("p",{children:e("story_portal_desc_escape")})]}),n.jsx(v,{onClick:()=>s(!o),label:e(o?"story_portal_btn_hide":"story_portal_btn_show"),priority:"primary"}),o&&n.jsx(u,{children:n.jsxs("div",{style:{position:"fixed",bottom:"40px",right:"40px",width:"280px",maxWidth:"calc(100vw - 80px)",backgroundColor:"#333",color:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 10px 25px rgba(0,0,0,0.2)",zIndex:1e4,border:"1px solid #444",animation:"popUp 0.3s ease-out"},children:[n.jsx("style",{children:`
                                @keyframes popUp {
                                    from { transform: translateY(20px); opacity: 0; }
                                    to { transform: translateY(0); opacity: 1; }
                                }
                            `}),n.jsx("h4",{style:{margin:"0 0 8px 0",color:"#60a5fa"},children:e("story_portal_power_title")}),n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.5"},dangerouslySetInnerHTML:{__html:e("story_portal_power_desc")}}),n.jsx("div",{style:{marginTop:"12px",textAlign:"right"},children:n.jsx(v,{size:"small",label:e("story_portal_btn_ok"),onClick:()=>s(!1)})})]})})]})}},m={render:function(){const[o,s]=i.useState(null),{t:e}=j(["docs","common","components"]);return n.jsxs("div",{style:{width:"100%",maxWidth:"500px"},children:[n.jsx("p",{children:e("story_portal_container_desc")}),n.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"20px",flexWrap:"wrap"},children:[n.jsxs("div",{style:{flex:"1 1 200px",padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[n.jsx("h4",{children:e("story_portal_source_title")}),n.jsx("p",{style:{fontSize:"12px",color:"#666"},children:e("story_portal_source_desc")}),n.jsx(u,{container:o,children:n.jsxs("div",{style:{padding:"10px",background:"#dcfce7",border:"1px solid #166534",color:"#166534",borderRadius:"4px",fontSize:"14px",fontWeight:"bold",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(C,{name:"CheckCircleIcon",style:{width:"20px",height:"20px"}}),e("story_portal_sent_success")]})})]}),n.jsx("div",{ref:s,style:{flex:"1 1 200px",padding:"20px",border:"2px solid #3b82f6",borderRadius:"8px",background:"#eff6ff",minHeight:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:!o&&n.jsx("span",{style:{color:"#3b82f6"},children:e("story_portal_loading")})})]})]})}},x={render:function(){const[o,s]=i.useState(null),[e,b]=i.useState([]),{t}=j(["docs","common","components"]),w=(r,l="info")=>{const g=Math.random().toString(36).slice(2,9);b(d=>[{id:g,msg:r,type:l},...d].slice(0,10))},p=({name:r,type:l,color:g,displayName:d})=>{const[a,k]=i.useState(!1);return n.jsx(f,{variant:"outline",padding:"sm",children:n.jsxs(h,{gap:"xs",children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("strong",{children:d}),n.jsx(I,{content:t(a?"story_portal_active":"story_portal_inactive"),color:a?"success":"neutral",size:"small"})]}),n.jsx(v,{size:"small",priority:a?"secondary":"primary",onClick:()=>{const _=!a;k(_),w(`${d}${t(_?"story_portal_log_started":"story_portal_log_stopped")}`,_?"success":"warning")},label:t(a?"story_portal_btn_stop":"story_portal_btn_start")}),a&&n.jsx(u,{container:o,children:n.jsxs("div",{style:{padding:"8px 12px",marginBottom:"8px",borderRadius:"4px",fontSize:"12px",background:g,border:"1px solid rgba(0,0,0,0.1)",animation:"slideIn 0.2s ease-out"},children:[n.jsx("style",{children:"@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }"}),n.jsxs("strong",{children:["[",d,"]"]})," ",t("story_portal_status_desc")]})})]})})};return n.jsxs("div",{style:{width:"100%",maxWidth:"800px"},children:[n.jsx("style",{children:`
                    .notification-grid {
                        display: grid;
                        grid-template-columns: 1fr 300px;
                        gap: 24px;
                    }
                    .sender-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                    }
                    @media (max-width: 768px) {
                        .notification-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                    @media (max-width: 480px) {
                        .sender-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}),n.jsxs("div",{className:"notification-grid",children:[n.jsxs(h,{gap:"md",children:[n.jsx("h4",{children:t("story_portal_panel_title")}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:t("story_portal_panel_desc")}),n.jsxs("div",{className:"sender-grid",children:[n.jsx(p,{name:"A",displayName:t("story_portal_sensor_a"),color:"#ecfdf5"}),n.jsx(p,{name:"B",displayName:t("story_portal_sensor_b"),color:"#eff6ff"}),n.jsx(p,{name:"C",displayName:t("story_portal_camera"),color:"#fff7ed"}),n.jsx(p,{name:"D",displayName:t("story_portal_alarm"),color:"#fef2f2"})]})]}),n.jsxs(f,{variant:"flat",style:{background:"#1e293b",color:"#f8fafc",minHeight:"400px",display:"flex",flexDirection:"column"},children:[n.jsx(f.Header,{style:{borderBottom:"1px solid #334155",color:"#94a3b8"},children:n.jsxs(h,{direction:"row",justify:"between",align:"center",children:[n.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:t("story_portal_monitor_title")}),n.jsx(I,{content:t("story_portal_monitor_live"),color:"error",size:"small"})]})}),n.jsxs(f.Body,{style:{flex:1,overflowY:"auto",padding:"12px"},children:[n.jsx("div",{ref:s,style:{marginBottom:"16px",borderBottom:"1px solid #334155",paddingBottom:"16px"}}),n.jsxs("div",{style:{fontSize:"11px",fontFamily:"monospace"},children:[n.jsx("div",{style:{color:"#64748b",marginBottom:"8px"},children:t("story_portal_history_title")}),e.map(r=>n.jsx("div",{style:{marginBottom:"4px",color:r.type==="success"?"#4ade80":r.type==="warning"?"#fbbf24":"#94a3b8"},children:`> ${r.msg}`},r.id)),e.length===0&&n.jsx("div",{style:{color:"#475569"},children:t("story_portal_waiting")})]})]})]})]})]})}},y={render:function(){const[o,s]=i.useState(null),[e,b]=i.useState(null),{t}=j(["docs","common","components"]),w=[{id:1,title:t("story_portal_task1_title"),detail:t("story_portal_task1_detail")},{id:2,title:t("story_portal_task2_title"),detail:t("story_portal_task2_detail")},{id:3,title:t("story_portal_task3_title"),detail:t("story_portal_task3_detail")}],p=({task:r,isSelected:l,onSelect:g,container:d})=>{const[a,k]=i.useState("");return n.jsxs("div",{onClick:()=>g(r.id),style:{padding:"16px",border:"1px solid",borderColor:l?"#3b82f6":"#e2e8f0",marginBottom:"12px",cursor:"pointer",background:l?"#eff6ff":"white",borderRadius:"8px",transition:"all 0.2s"},children:[n.jsxs(h,{direction:"row",justify:"between",align:"center",children:[n.jsx("strong",{children:r.title}),n.jsx(C,{name:"ChevronRightIcon",style:{color:l?"#3b82f6":"#cbd5e1"}})]}),l&&n.jsx(u,{container:d,children:n.jsxs("div",{style:{animation:"fadeInUp 0.3s ease-out"},children:[n.jsx("style",{children:"@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }"}),n.jsx(I,{content:`TASK-00${r.id}`,variant:"outline",size:"small",style:{marginBottom:"12px"}}),n.jsx("h3",{style:{margin:"0 0 16px 0"},children:r.title}),n.jsx(f,{variant:"flat",style:{background:"#f8fafc",marginBottom:"20px"},children:n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6",color:"#334155"},children:r.detail})}),n.jsxs(h,{gap:"xs",children:[n.jsx("label",{style:{fontSize:"13px",fontWeight:"bold",color:"#64748b"},children:t("story_portal_task_memo")}),n.jsx(B,{value:a,onChange:_=>k(_.target.value),placeholder:t("story_portal_memo_placeholder"),rows:5,fullWidth:!0}),n.jsx("p",{style:{fontSize:"11px",color:"#94a3b8"},children:t("story_portal_memo_note")})]})]})})]})};return n.jsxs("div",{style:{width:"100%",maxWidth:"850px"},children:[n.jsx("style",{children:`
                    .portal-demo-card {
                        width: 100%;
                        height: 550px;
                        display: flex;
                        flex-direction: row;
                        overflow: hidden;
                    }
                    .portal-demo-sidebar {
                        flex: 0 0 350px;
                        border-right: 1px solid #e2e8f0;
                        display: flex;
                        flex-direction: column;
                        background: #fcfcfd;
                    }
                    .portal-demo-content {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        min-width: 0;
                    }
                    @media (max-width: 600px) {
                        .portal-demo-card {
                            flex-direction: column;
                            height: auto;
                            min-height: 800px;
                        }
                        .portal-demo-sidebar {
                            flex: 0 0 auto;
                            border-right: none;
                            border-bottom: 1px solid #e2e8f0;
                            max-height: 350px;
                        }
                        .portal-demo-content {
                            height: 500px;
                        }
                    }
                `}),n.jsxs(f,{variant:"outline",padding:"none",className:"portal-demo-card",children:[n.jsxs("div",{className:"portal-demo-sidebar",children:[n.jsx("div",{style:{padding:"20px",borderBottom:"1px solid #e2e8f0"},children:n.jsx("h4",{style:{margin:0},children:t("story_portal_task_mgmt")})}),n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"20px"},children:w.map(r=>n.jsx(p,{task:r,isSelected:e===r.id,onSelect:b,container:o},r.id))})]}),n.jsxs("div",{className:"portal-demo-content",children:[n.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid #e2e8f0",background:"#f8fafc",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"14px",fontWeight:"bold",color:"#64748b"},children:t("story_portal_preview_title")}),e&&n.jsx(v,{size:"small",label:t("story_visuallyhidden_close"),priority:"secondary",onClick:()=>b(null)})]}),n.jsx("div",{ref:s,style:{flex:1,padding:"30px",overflowY:"auto",position:"relative"},children:!e&&n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#94a3b8",textAlign:"center"},children:[n.jsx(C,{name:"InfoCircleIcon",style:{width:"48px",height:"48px",marginBottom:"12px",opacity:.5}}),n.jsx("p",{children:t("story_portal_select_task")})]})})]})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [show, setShow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      width: "100%",
      maxWidth: "400px",
      height: "200px",
      border: "2px dashed #999",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
      // これにより、通常の子要素はここからはみ出せない
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f9f9f9",
      borderRadius: "8px"
    }}>\r
        <div style={{
        textAlign: "center",
        marginBottom: "10px"
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
            <div style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          width: "280px",
          maxWidth: "calc(100vw - 80px)",
          backgroundColor: "#333",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          zIndex: 10000,
          border: "1px solid #444",
          animation: "popUp 0.3s ease-out"
        }}>\r
              <style>{\`
                                @keyframes popUp {
                                    from { transform: translateY(20px); opacity: 0; }
                                    to { transform: translateY(0); opacity: 1; }
                                }
                            \`}</style>\r
              <h4 style={{
            margin: "0 0 8px 0",
            color: "#60a5fa"
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
              <div style={{
            marginTop: "12px",
            textAlign: "right"
          }}>\r
                <Button size="small" label={t("story_portal_btn_ok")} onClick={() => setShow(false)} />\r
              </div>\r
            </div>\r
          </Portal>}\r
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"overflow: hidden な親要素を突き抜ける例",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      width: "100%",
      maxWidth: "500px"
    }}>\r
        <p>{t("story_portal_container_desc")}</p>\r
\r
        <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap"
      }}>\r
          <div style={{
          flex: "1 1 200px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px"
        }}>\r
            <h4>{t("story_portal_source_title")}</h4>\r
            <p style={{
            fontSize: "12px",
            color: "#666"
          }}>\r
              {t("story_portal_source_desc")}\r
            </p>\r
            <Portal container={container}>\r
              <div style={{
              padding: "10px",
              background: "#dcfce7",
              border: "1px solid #166534",
              color: "#166534",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}>\r
                <Icon name="CheckCircleIcon" style={{
                width: "20px",
                height: "20px"
              }} />\r
                {t("story_portal_sent_success")}\r
              </div>\r
            </Portal>\r
          </div>\r
\r
          <div ref={setContainer} style={{
          flex: "1 1 200px",
          padding: "20px",
          border: "2px solid #3b82f6",
          borderRadius: "8px",
          background: "#eff6ff",
          minHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>\r
            {/* ここに Portal の中身が表示される */}\r
            {!container && <span style={{
            color: "#3b82f6"
          }}>{t("story_portal_loading")}</span>}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"特定の DOM 要素へのレンダリング例",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    return <div style={{
      width: "100%",
      maxWidth: "800px"
    }}>\r
        <style>{\`
                    .notification-grid {
                        display: grid;
                        grid-template-columns: 1fr 300px;
                        gap: 24px;
                    }
                    .sender-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                    }
                    @media (max-width: 768px) {
                        .notification-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                    @media (max-width: 480px) {
                        .sender-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                \`}</style>\r
        <div className="notification-grid">\r
          <Stack gap="md">\r
            <h4>{t("story_portal_panel_title")}</h4>\r
            <p style={{
            fontSize: "14px",
            color: "#666"
          }}>\r
              {t("story_portal_panel_desc")}\r
            </p>\r
            <div className="sender-grid">\r
              <SenderComponent name="A" displayName={t("story_portal_sensor_a")} color="#ecfdf5" />\r
              <SenderComponent name="B" displayName={t("story_portal_sensor_b")} color="#eff6ff" />\r
              <SenderComponent name="C" displayName={t("story_portal_camera")} color="#fff7ed" />\r
              <SenderComponent name="D" displayName={t("story_portal_alarm")} color="#fef2f2" />\r
            </div>\r
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
              <div ref={setLogContainer} style={{
              marginBottom: "16px",
              borderBottom: "1px solid #334155",
              paddingBottom: "16px"
            }}>\r
                {/* ここに Portal からの「稼働中メッセージ」が表示される */}\r
              </div>\r
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
        </div>\r
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`具体的なユースケース 1: 通知センター (ログ出力)\r
ページ内の特定のエリアを「通知受取用」として定義し、様々なコンポーネントから\r
情報を Portal で送り込む例です。`,...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    return <div style={{
      width: "100%",
      maxWidth: "850px"
    }}>\r
        <style>{\`
                    .portal-demo-card {
                        width: 100%;
                        height: 550px;
                        display: flex;
                        flex-direction: row;
                        overflow: hidden;
                    }
                    .portal-demo-sidebar {
                        flex: 0 0 350px;
                        border-right: 1px solid #e2e8f0;
                        display: flex;
                        flex-direction: column;
                        background: #fcfcfd;
                    }
                    .portal-demo-content {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        min-width: 0;
                    }
                    @media (max-width: 600px) {
                        .portal-demo-card {
                            flex-direction: column;
                            height: auto;
                            min-height: 800px;
                        }
                        .portal-demo-sidebar {
                            flex: 0 0 auto;
                            border-right: none;
                            border-bottom: 1px solid #e2e8f0;
                            max-height: 350px;
                        }
                        .portal-demo-content {
                            height: 500px;
                        }
                    }
                \`}</style>\r
        <Card variant="outline" padding="none" className="portal-demo-card">\r
          <div className="portal-demo-sidebar">\r
            <div style={{
            padding: "20px",
            borderBottom: "1px solid #e2e8f0"
          }}>\r
              <h4 style={{
              margin: 0
            }}>{t("story_portal_task_mgmt")}</h4>\r
            </div>\r
            <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px"
          }}>\r
              {tasks.map(task => <TaskItem key={task.id} task={task} isSelected={selectedId === task.id} onSelect={setSelectedId} container={panelContainer} />)}\r
            </div>\r
          </div>\r
\r
          <div className="portal-demo-content">\r
            <div style={{
            padding: "20px",
            borderBottom: "1px solid #e2e8f0",
            background: "#f8fafc",
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
            </div>\r
            <div ref={setPanelContainer} style={{
            flex: 1,
            padding: "30px",
            overflowY: "auto",
            position: "relative"
          }}>\r
              {!selectedId && <div style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
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
                </div>}\r
            </div>\r
          </div>\r
        </Card>\r
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`具体的なユースケース 2: サイドパネル詳細表示\r
複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が\r
「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。`,...y.parameters?.docs?.description}}};const N=["OverflowEscape","CustomContainer","NotificationCenter","SidePanelDetail"],U=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:m,NotificationCenter:x,OverflowEscape:c,SidePanelDetail:y,__namedExportsOrder:N,default:z},Symbol.toStringTag,{value:"Module"}));export{m as C,x as N,c as O,U as P,y as S};
