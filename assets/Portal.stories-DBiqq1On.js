import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-DaIVb5M8.js";import{P as i}from"./Portal-B5LQWwUw.js";import{B as s}from"./Button-C1qLIhqZ.js";import{I as l}from"./Icon-D9TceFkm.js";const a={title:"Component/Utilities/Portal",component:i,parameters:{layout:"centered"},tags:[]},r={render:()=>{const[e,o]=d.useState(!1);return n.jsxs("div",{style:{width:"400px",height:"200px",border:"2px dashed #999",padding:"20px",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f9f9f9",borderRadius:"8px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"10px"},children:[n.jsxs("p",{children:["このグレーの枠線内は ",n.jsx("strong",{children:"overflow: hidden"})," です。"]}),n.jsx("p",{children:"Portal を使わないと右下のポップアップは見切れてしまいます。"})]}),n.jsx(s,{onClick:()=>o(!e),label:e?"メッセージを閉じる":"身代わり（Portal）を表示",priority:"primary"}),e&&n.jsx(i,{children:n.jsxs("div",{style:{position:"fixed",bottom:"40px",right:"40px",width:"280px",backgroundColor:"#333",color:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 10px 25px rgba(0,0,0,0.2)",zIndex:1e4,border:"1px solid #444",animation:"popUp 0.3s ease-out"},children:[n.jsx("style",{children:`
                                @keyframes popUp {
                                    from { transform: translateY(20px); opacity: 0; }
                                    to { transform: translateY(0); opacity: 1; }
                                }
                            `}),n.jsx("h4",{style:{margin:"0 0 8px 0",color:"#60a5fa"},children:"Portal の力"}),n.jsxs("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.5"},children:["私は親要素の ",n.jsx("code",{children:"overflow: hidden"})," を無視して、画面の右下に独立して表示されています。"]}),n.jsx("div",{style:{marginTop:"12px",textAlign:"right"},children:n.jsx(s,{size:"small",label:"了解",onClick:()=>o(!1)})})]})})]})}},t={render:()=>{const[e,o]=d.useState(null);return n.jsxs("div",{style:{width:"500px"},children:[n.jsx("p",{children:"下の青い枠は Portal の「転送先（container）」です。"}),n.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"20px"},children:[n.jsxs("div",{style:{flex:1,padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[n.jsx("h4",{children:"送信元"}),n.jsx("p",{style:{fontSize:"12px",color:"#666"},children:"ここに Portal コンポーネントを配置しています。"}),n.jsx(i,{container:e,children:n.jsxs("div",{style:{padding:"10px",background:"#dcfce7",border:"1px solid #166534",color:"#166534",borderRadius:"4px",fontSize:"14px",fontWeight:"bold",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(l,{name:"CheckCircleIcon",style:{width:"20px",height:"20px"}}),"送信完了！"]})})]}),n.jsx("div",{ref:o,style:{flex:1,padding:"20px",border:"2px solid #3b82f6",borderRadius:"8px",background:"#eff6ff",minHeight:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:!e&&n.jsx("span",{style:{color:"#3b82f6"},children:"読み込み中..."})})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <div style={{
      width: "400px",
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
}`,...r.parameters?.docs?.source},description:{story:"overflow: hidden な親要素を突き抜ける例",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    return <div style={{
      width: "500px"
    }}>\r
                <p>下の青い枠は Portal の「転送先（container）」です。</p>\r
\r
                <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>\r
                    <div style={{
          flex: 1,
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
          flex: 1,
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
}`,...t.parameters?.docs?.source},description:{story:"特定の DOM 要素へのレンダリング例",...t.parameters?.docs?.description}}};const p=["OverflowEscape","CustomContainer"],g=Object.freeze(Object.defineProperty({__proto__:null,CustomContainer:t,OverflowEscape:r,__namedExportsOrder:p,default:a},Symbol.toStringTag,{value:"Module"}));export{t as C,r as O,g as P};
