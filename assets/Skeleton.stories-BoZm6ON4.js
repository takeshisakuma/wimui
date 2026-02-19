import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as p}from"./iframe-HMYHJVpo.js";import{S as n}from"./Skeleton-CuG8SQ89.js";const h={title:"Component/Loading States/Skeleton",component:n,argTypes:{variant:{control:"select",options:["text","rect","circle"]},animation:{control:"select",options:["pulse","wave","none"]},width:{control:"text"},height:{control:"text"}}},r={args:{width:"100%"}},i={render:t=>e.jsxs("div",{style:{maxWidth:"300px",width:"100%"},children:[e.jsx(n,{...t,variant:"text",width:"100%"}),e.jsx(n,{...t,variant:"text",width:"80%"}),e.jsx(n,{...t,variant:"text",width:"60%"})]})},a={args:{variant:"circle",width:40,height:40}},s={args:{variant:"rect",width:200,height:100}},o={args:{animation:"wave",width:"100%"}},d={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"300px",width:"100%",padding:"16px",border:"1px solid #eee",borderRadius:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(n,{...t,variant:"circle",width:40,height:40}),e.jsxs("div",{style:{flex:1},children:[e.jsx(n,{...t,variant:"text",width:"60%"}),e.jsx(n,{...t,variant:"text",width:"40%"})]})]}),e.jsx(n,{...t,variant:"rect",width:"100%",height:150}),e.jsxs("div",{children:[e.jsx(n,{...t,variant:"text",width:"100%"}),e.jsx(n,{...t,variant:"text",width:"90%"}),e.jsx(n,{...t,variant:"text",width:"70%"})]})]})},l={render:t=>{const[c,x]=p.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("button",{onClick:()=>x(!c),style:{padding:"8px 16px",borderRadius:"4px",border:"1px solid #ccc",cursor:"pointer",width:"fit-content"},children:c?"Show Content":"Show Skeleton"}),e.jsx("div",{style:{padding:"20px",border:"1px solid #eee",borderRadius:"12px",maxWidth:"350px",width:"100%",boxSizing:"border-box"},children:c?e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(n,{...t,variant:"circle",width:48,height:48}),e.jsxs("div",{style:{flex:1},children:[e.jsx(n,{...t,variant:"text",width:"50%"}),e.jsx(n,{...t,variant:"text",width:"30%"})]})]}),e.jsx(n,{...t,variant:"rect",width:"100%",height:120}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{...t,variant:"text"}),e.jsx(n,{...t,variant:"text"}),e.jsx(n,{...t,variant:"text",width:"60%"})]})]}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:"50%",backgroundColor:"#007bff",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"JD"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.1rem"},children:"John Doe"}),e.jsx("div",{style:{color:"#666",fontSize:"0.9rem"},children:"Software Engineer"})]})]}),e.jsx("img",{src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=350&q=80",alt:"Content",style:{width:"100%",height:"120px",objectFit:"cover",borderRadius:"4px"}}),e.jsx("div",{style:{lineHeight:"1.6",color:"#444"},children:"これは実際にコンテンツが読み込まれた状態のデモです。 スケルトンが提供したプレースホルダーと同じ位置に、 本来のテキストや画像が表示されます。"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: "300px",
    width: "100%"
  }}>\r
            <Skeleton {...args} variant="text" width="100%" />\r
            <Skeleton {...args} variant="text" width="80%" />\r
            <Skeleton {...args} variant="text" width="60%" />\r
        </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    width: 40,
    height: 40
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rect",
    width: 200,
    height: 100
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    animation: "wave",
    width: "100%"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "300px",
    width: "100%",
    padding: "16px",
    border: "1px solid #eee",
    borderRadius: "8px"
  }}>\r
            <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>\r
                <Skeleton {...args} variant="circle" width={40} height={40} />\r
                <div style={{
        flex: 1
      }}>\r
                    <Skeleton {...args} variant="text" width="60%" />\r
                    <Skeleton {...args} variant="text" width="40%" />\r
                </div>\r
            </div>\r
            <Skeleton {...args} variant="rect" width="100%" height={150} />\r
            <div>\r
                <Skeleton {...args} variant="text" width="100%" />\r
                <Skeleton {...args} variant="text" width="90%" />\r
                <Skeleton {...args} variant="text" width="70%" />\r
            </div>\r
        </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = React.useState(true);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>\r
                <button onClick={() => setLoading(!loading)} style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        cursor: "pointer",
        width: "fit-content"
      }}>\r
                    {loading ? "Show Content" : "Show Skeleton"}\r
                </button>\r
\r
                <div style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "12px",
        maxWidth: "350px",
        width: "100%",
        boxSizing: "border-box"
      }}>\r
                    {loading ? <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>\r
                            <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>\r
                                <Skeleton {...args} variant="circle" width={48} height={48} />\r
                                <div style={{
              flex: 1
            }}>\r
                                    <Skeleton {...args} variant="text" width="50%" />\r
                                    <Skeleton {...args} variant="text" width="30%" />\r
                                </div>\r
                            </div>\r
                            <Skeleton {...args} variant="rect" width="100%" height={120} />\r
                            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>\r
                                <Skeleton {...args} variant="text" />\r
                                <Skeleton {...args} variant="text" />\r
                                <Skeleton {...args} variant="text" width="60%" />\r
                            </div>\r
                        </div> : <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>\r
                            <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>\r
                                <div style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "#007bff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold"
            }}>\r
                                    JD\r
                                </div>\r
                                <div style={{
              flex: 1
            }}>\r
                                    <div style={{
                fontWeight: "bold",
                fontSize: "1.1rem"
              }}>\r
                                        John Doe\r
                                    </div>\r
                                    <div style={{
                color: "#666",
                fontSize: "0.9rem"
              }}>\r
                                        Software Engineer\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=350&q=80" alt="Content" style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            borderRadius: "4px"
          }} />\r
                            <div style={{
            lineHeight: "1.6",
            color: "#444"
          }}>\r
                                これは実際にコンテンツが読み込まれた状態のデモです。\r
                                スケルトンが提供したプレースホルダーと同じ位置に、\r
                                本来のテキストや画像が表示されます。\r
                            </div>\r
                        </div>}\r
                </div>\r
            </div>;
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","Text","Circle","Rect","WaveAnimation","CardExample","LoadingToggle"],u=Object.freeze(Object.defineProperty({__proto__:null,CardExample:d,Circle:a,Default:r,LoadingToggle:l,Rect:s,Text:i,WaveAnimation:o,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{a as C,r as D,l as L,s as R,u as S,i as T,o as W,d as a};
