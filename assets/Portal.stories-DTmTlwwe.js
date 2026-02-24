import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-DMeSULDT.js";import{P as y}from"./Portal-Bs_ES2fg.js";import{B as v}from"./Button-Bl_oZBFR.js";import{I as S}from"./Icon-DdvXVaVY.js";import{C as m}from"./Card-WsAd4J6U.js";import{S as h}from"./Stack-DN1Tt3l6.js";import{T as k}from"./Textarea-BOliBGHL.js";import{B as w}from"./Badge-CMVc4sRp.js";const I={title:"Components/Utilities/Portal",component:y,parameters:{layout:"centered"},tags:[]},d={render:()=>{const[t,o]=i.useState(!1);return n.jsxs("div",{style:{width:"100%",maxWidth:"400px",height:"200px",border:"2px dashed #999",padding:"20px",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f9f9f9",borderRadius:"8px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"10px"},children:[n.jsxs("p",{children:["このグレーの枠線内は ",n.jsx("strong",{children:"overflow: hidden"})," です。"]}),n.jsx("p",{children:"Portal を使わないと右下のポップアップは見切れてしまいます。"})]}),n.jsx(v,{onClick:()=>o(!t),label:t?"メッセージを閉じる":"身代わり（Portal）を表示",priority:"primary"}),t&&n.jsx(y,{children:n.jsxs("div",{style:{position:"fixed",bottom:"40px",right:"40px",width:"280px",maxWidth:"calc(100vw - 80px)",backgroundColor:"#333",color:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 10px 25px rgba(0,0,0,0.2)",zIndex:1e4,border:"1px solid #444",animation:"popUp 0.3s ease-out"},children:[n.jsx("style",{children:`
                                @keyframes popUp {
                                    from { transform: translateY(20px); opacity: 0; }
                                    to { transform: translateY(0); opacity: 1; }
                                }
                            `}),n.jsx("h4",{style:{margin:"0 0 8px 0",color:"#60a5fa"},children:"Portal の力"}),n.jsxs("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.5"},children:["私は親要素の ",n.jsx("code",{children:"overflow: hidden"})," を無視して、画面の右下に独立して表示されています。"]}),n.jsx("div",{style:{marginTop:"12px",textAlign:"right"},children:n.jsx(v,{size:"small",label:"了解",onClick:()=>o(!1)})})]})})]})}},c={render:()=>{const[t,o]=i.useState(null);return n.jsxs("div",{style:{width:"100%",maxWidth:"500px"},children:[n.jsx("p",{children:"下の青い枠は Portal の「転送先（container）」です。"}),n.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"20px",flexWrap:"wrap"},children:[n.jsxs("div",{style:{flex:"1 1 200px",padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[n.jsx("h4",{children:"送信元"}),n.jsx("p",{style:{fontSize:"12px",color:"#666"},children:"ここに Portal コンポーネントを配置しています。"}),n.jsx(y,{container:t,children:n.jsxs("div",{style:{padding:"10px",background:"#dcfce7",border:"1px solid #166534",color:"#166534",borderRadius:"4px",fontSize:"14px",fontWeight:"bold",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(S,{name:"CheckCircleIcon",style:{width:"20px",height:"20px"}}),"送信完了！"]})})]}),n.jsx("div",{ref:o,style:{flex:"1 1 200px",padding:"20px",border:"2px solid #3b82f6",borderRadius:"8px",background:"#eff6ff",minHeight:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:!t&&n.jsx("span",{style:{color:"#3b82f6"},children:"読み込み中..."})})]})]})}},p={render:()=>{const[t,o]=i.useState(null),[s,u]=i.useState([]),b=(e,a="info")=>{const f=Math.random().toString(36).slice(2,9);u(r=>[{id:f,msg:e,type:a},...r].slice(0,10))},l=({name:e,type:a,color:f})=>{const[r,j]=i.useState(!1);return n.jsx(m,{variant:"outline",padding:"sm",children:n.jsxs(h,{gap:"xs",children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("strong",{children:e}),n.jsx(w,{content:r?"稼働中":"停止中",color:r?"success":"neutral",size:"small"})]}),n.jsx(v,{size:"small",priority:r?"secondary":"primary",onClick:()=>{const g=!r;j(g),b(`${e} が${g?"起動":"停止"}しました`,g?"success":"warning")},label:r?"停止する":"起動する"}),r&&n.jsx(y,{container:t,children:n.jsxs("div",{style:{padding:"8px 12px",marginBottom:"8px",borderRadius:"4px",fontSize:"12px",background:f,border:"1px solid rgba(0,0,0,0.1)",animation:"slideIn 0.2s ease-out"},children:[n.jsx("style",{children:"@keyframes slideIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }"}),n.jsxs("strong",{children:["[",e,"]"]})," 正常稼働中..."]})})]})})};return n.jsxs("div",{style:{width:"100%",maxWidth:"800px"},children:[n.jsx("style",{children:`
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
                `}),n.jsxs("div",{className:"notification-grid",children:[n.jsxs(h,{gap:"md",children:[n.jsx("h4",{children:"制御パネル"}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"各コンポーネントの状態変更が、右側のモニタリングエリアに Portal 経由で通知されます。"}),n.jsxs("div",{className:"sender-grid",children:[n.jsx(l,{name:"センサー A",color:"#ecfdf5"}),n.jsx(l,{name:"センサー B",color:"#eff6ff"}),n.jsx(l,{name:"カメラ 01",color:"#fff7ed"}),n.jsx(l,{name:"アラーム",color:"#fef2f2"})]})]}),n.jsxs(m,{variant:"flat",style:{background:"#1e293b",color:"#f8fafc",minHeight:"400px",display:"flex",flexDirection:"column"},children:[n.jsx(m.Header,{style:{borderBottom:"1px solid #334155",color:"#94a3b8"},children:n.jsxs(h,{direction:"row",justify:"between",align:"center",children:[n.jsx("span",{style:{fontSize:"12px",fontWeight:"bold"},children:"SYSTEM MONITOR"}),n.jsx(w,{content:"LIVE",color:"error",size:"small"})]})}),n.jsxs(m.Body,{style:{flex:1,overflowY:"auto",padding:"12px"},children:[n.jsx("div",{ref:o,style:{marginBottom:"16px",borderBottom:"1px dashed #334155",paddingBottom:"16px"}}),n.jsxs("div",{style:{fontSize:"11px",fontFamily:"monospace"},children:[n.jsx("div",{style:{color:"#64748b",marginBottom:"8px"},children:"--- イベント履歴 ---"}),s.map(e=>n.jsx("div",{style:{marginBottom:"4px",color:e.type==="success"?"#4ade80":e.type==="warning"?"#fbbf24":"#94a3b8"},children:`> ${e.msg}`},e.id)),s.length===0&&n.jsx("div",{style:{color:"#475569"},children:"待機中..."})]})]})]})]})]})}},x={render:()=>{const[t,o]=i.useState(null),[s,u]=i.useState(null),b=[{id:1,title:"コードレビュー",detail:"新しいPortalストーリーの実装を確認し、アクセシビリティチェックを行う。"},{id:2,title:"バグ修正",detail:"テーブルのレスポンスが遅い問題を調査し、メモダイズを適用して最適化する。"},{id:3,title:"ドキュメント作成",detail:"MDXファイルに具体的なユースケース（通知センターとサイドパネル）を追加する。"}],l=({task:e,isSelected:a,onSelect:f,container:r})=>{const[j,g]=i.useState("");return n.jsxs("div",{onClick:()=>f(e.id),style:{padding:"16px",border:"1px solid",borderColor:a?"#3b82f6":"#e2e8f0",marginBottom:"12px",cursor:"pointer",background:a?"#eff6ff":"white",borderRadius:"8px",transition:"all 0.2s"},children:[n.jsxs(h,{direction:"row",justify:"between",align:"center",children:[n.jsx("strong",{children:e.title}),n.jsx(S,{name:"ChevronRightIcon",style:{color:a?"#3b82f6":"#cbd5e1"}})]}),a&&n.jsx(y,{container:r,children:n.jsxs("div",{style:{animation:"fadeInUp 0.3s ease-out"},children:[n.jsx("style",{children:"@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }"}),n.jsx(w,{content:`TASK-00${e.id}`,variant:"outline",size:"small",style:{marginBottom:"12px"}}),n.jsx("h3",{style:{margin:"0 0 16px 0"},children:e.title}),n.jsx(m,{variant:"flat",style:{background:"#f8fafc",marginBottom:"20px"},children:n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6",color:"#334155"},children:e.detail})}),n.jsxs(h,{gap:"xs",children:[n.jsx("label",{style:{fontSize:"13px",fontWeight:"bold",color:"#64748b"},children:"担当者メモ:"}),n.jsx(k,{value:j,onChange:C=>g(C.target.value),placeholder:"ここにメモを入力（この入力値はリストアイテム内の state で保持されています）",rows:5,fullWidth:!0}),n.jsx("p",{style:{fontSize:"11px",color:"#94a3b8"},children:"※リスト上の別のタスクに切り替えても、再選択すれば入力内容は保持されています（コンポーネントが破棄されていないため）。"})]})]})})]})};return n.jsxs("div",{style:{width:"100%",maxWidth:"850px"},children:[n.jsx("style",{children:`
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
                `}),n.jsxs(m,{variant:"outline",padding:"none",className:"portal-demo-card",children:[n.jsxs("div",{className:"portal-demo-sidebar",children:[n.jsx("div",{style:{padding:"20px",borderBottom:"1px solid #e2e8f0"},children:n.jsx("h4",{style:{margin:0},children:"タスク管理"})}),n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"20px"},children:b.map(e=>n.jsx(l,{task:e,isSelected:s===e.id,onSelect:u,container:t},e.id))})]}),n.jsxs("div",{className:"portal-demo-content",children:[n.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid #e2e8f0",background:"#f8fafc",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"14px",fontWeight:"bold",color:"#64748b"},children:"詳細プレビュー"}),s&&n.jsx(v,{size:"small",label:"閉じる",priority:"secondary",onClick:()=>u(null)})]}),n.jsx("div",{ref:o,style:{flex:1,padding:"30px",overflowY:"auto",position:"relative"},children:!s&&n.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#94a3b8",textAlign:"center"},children:[n.jsx(S,{name:"InfoCircleIcon",style:{width:"48px",height:"48px",marginBottom:"12px",opacity:.5}}),n.jsx("p",{children:"リストからタスクを選択してください。"})]})})]})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
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
                    <p>このグレーの枠線内は <strong>overflow: hidden</strong> です。</p>\r
                    <p>Portal を使わないと右下のポップアップは見切れてしまいます。</p>\r
                </div>\r
\r
                <Button onClick={() => setShow(!show)} label={show ? "メッセージを閉じる" : "身代わり（Portal）を表示"} priority="primary" />\r
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
          }}>Portal の力</h4>\r
                            <p style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: "1.5"
          }}>\r
                                私は親要素の <code>overflow: hidden</code> を無視して、画面の右下に独立して表示されています。\r
                            </p>\r
                            <div style={{
            marginTop: "12px",
            textAlign: "right"
          }}>\r
                                <Button size="small" label="了解" onClick={() => setShow(false)} />\r
                            </div>\r
                        </div>\r
                    </Portal>}\r
            </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:"overflow: hidden な親要素を突き抜ける例",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    return <div style={{
      width: "100%",
      maxWidth: "500px"
    }}>\r
                <p>下の青い枠は Portal の「転送先（container）」です。</p>\r
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
                        <h4>送信元</h4>\r
                        <p style={{
            fontSize: "12px",
            color: "#666"
          }}>ここに Portal コンポーネントを配置しています。</p>\r
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
                                送信完了！\r
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
          }}>読み込み中...</span>}\r
                    </div>\r
                </div>\r
            </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"特定の DOM 要素へのレンダリング例",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [logContainer, setLogContainer] = useState<HTMLDivElement | null>(null);
    const [logs, setLogs] = useState<{
      id: string;
      msg: string;
      type: any;
    }[]>([]);
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
      color
    }: any) => {
      const [active, setActive] = useState(false);
      return <Card variant="outline" padding="sm">\r
                    <Stack gap="xs">\r
                        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>\r
                            <strong>{name}</strong>\r
                            <Badge content={active ? "稼働中" : "停止中"} color={active ? "success" : "neutral"} size="small" />\r
                        </div>\r
                        <Button size="small" priority={active ? "secondary" : "primary"} onClick={() => {
            const newState = !active;
            setActive(newState);
            addLog(\`\${name} が\${newState ? "起動" : "停止"}しました\`, newState ? "success" : "warning");
          }} label={active ? "停止する" : "起動する"} />\r
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
                                    <strong>[{name}]</strong> 正常稼働中...\r
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
                        <h4>制御パネル</h4>\r
                        <p style={{
            fontSize: "14px",
            color: "#666"
          }}>各コンポーネントの状態変更が、右側のモニタリングエリアに Portal 経由で通知されます。</p>\r
                        <div className="sender-grid">\r
                            <SenderComponent name="センサー A" color="#ecfdf5" />\r
                            <SenderComponent name="センサー B" color="#eff6ff" />\r
                            <SenderComponent name="カメラ 01" color="#fff7ed" />\r
                            <SenderComponent name="アラーム" color="#fef2f2" />\r
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
              }}>SYSTEM MONITOR</span>\r
                                <Badge content="LIVE" color="error" size="small" />\r
                            </Stack>\r
                        </Card.Header>\r
                        <Card.Body style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px"
          }}>\r
                            <div ref={setLogContainer} style={{
              marginBottom: "16px",
              borderBottom: "1px dashed #334155",
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
              }}>--- イベント履歴 ---</div>\r
                                {logs.map(log => <div key={log.id} style={{
                marginBottom: "4px",
                color: log.type === "success" ? "#4ade80" : log.type === "warning" ? "#fbbf24" : "#94a3b8"
              }}>\r
                                        {\`> \${log.msg}\`}\r
                                    </div>)}\r
                                {logs.length === 0 && <div style={{
                color: "#475569"
              }}>待機中...</div>}\r
                            </div>\r
                        </Card.Body>\r
                    </Card>\r
                </div>\r
            </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`具体的なユースケース 1: 通知センター (ログ出力)\r
ページ内の特定のエリアを「通知受取用」として定義し、様々なコンポーネントから\r
情報を Portal で送り込む例です。`,...p.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [panelContainer, setPanelContainer] = useState<HTMLDivElement | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const tasks = [{
      id: 1,
      title: "コードレビュー",
      detail: "新しいPortalストーリーの実装を確認し、アクセシビリティチェックを行う。"
    }, {
      id: 2,
      title: "バグ修正",
      detail: "テーブルのレスポンスが遅い問題を調査し、メモダイズを適用して最適化する。"
    }, {
      id: 3,
      title: "ドキュメント作成",
      detail: "MDXファイルに具体的なユースケース（通知センターとサイドパネル）を追加する。"
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
              }}>{task.detail}</p>\r
                                </Card>\r
\r
                                <Stack gap="xs">\r
                                    <label style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#64748b"
              }}>担当者メモ:</label>\r
                                    <Textarea value={note} onChange={e => setNote(e.target.value)} placeholder="ここにメモを入力（この入力値はリストアイテム内の state で保持されています）" rows={5} fullWidth />\r
                                    <p style={{
                fontSize: "11px",
                color: "#94a3b8"
              }}>※リスト上の別のタスクに切り替えても、再選択すれば入力内容は保持されています（コンポーネントが破棄されていないため）。</p>\r
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
            }}>タスク管理</h4>\r
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
            }}>詳細プレビュー</span>\r
                            {selectedId && <Button size="small" label="閉じる" priority="secondary" onClick={() => setSelectedId(null)} />}\r
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
                                    <p>リストからタスクを選択してください。</p>\r
                                </div>}\r
                        </div>\r
                    </div>\r
                </Card>\r
            </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`具体的なユースケース 2: サイドパネル詳細表示\r
複雑なリストアイテムにおいて、UI的な制約で「詳細は画面端のパネルに出したい」が\r
「ロジックや状態はアイテム自身に持たせたい」という場合に Portal が役立ちます。`,...x.parameters?.docs?.description}}};const B=["OverflowEscape","CustomContainer","NotificationCenter","SidePanelDetail"],H=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:c,NotificationCenter:p,OverflowEscape:d,SidePanelDetail:x,__namedExportsOrder:B,default:I},Symbol.toStringTag,{value:"Module"}));export{c as C,p as N,d as O,H as P,x as S};
