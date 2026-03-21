import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g,A as v}from"./iframe-LKGfyusM.js";import{S as t}from"./Skeleton-D8Gg0m0R.js";import{u as m}from"./useTranslation-1YWFUbjG.js";const u={title:"Components/Loading States/Skeleton",component:t,argTypes:{variant:{control:"select",options:["text","rect","circle"]},animation:{control:"select",options:["pulse","wave","none"]},width:{control:"text"},height:{control:"text"}}},i={args:{width:"100%"}},a={render:n=>e.jsxs("div",{style:{maxWidth:"300px",width:"100%"},children:[e.jsx(t,{...n,variant:"text",width:"100%"}),e.jsx(t,{...n,variant:"text",width:"80%"}),e.jsx(t,{...n,variant:"text",width:"60%"})]})},s={args:{variant:"circle",width:40,height:40}},o={args:{variant:"rect",width:200,height:100}},d={args:{animation:"wave",width:"100%"}},l={render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"300px",width:"100%",padding:"16px",border:"1px solid #eee",borderRadius:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(t,{...n,variant:"circle",width:40,height:40}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{...n,variant:"text",width:"60%"}),e.jsx(t,{...n,variant:"text",width:"40%"})]})]}),e.jsx(t,{...n,variant:"rect",width:"100%",height:150}),e.jsxs("div",{children:[e.jsx(t,{...n,variant:"text",width:"100%"}),e.jsx(t,{...n,variant:"text",width:"90%"}),e.jsx(t,{...n,variant:"text",width:"70%"})]})]})},c={render:function(r){const[x,h]=g.useState(!0),{t:p}=m(v);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("button",{onClick:()=>h(!x),style:{padding:"8px 16px",borderRadius:"4px",border:"1px solid #ccc",cursor:"pointer",width:"fit-content"},children:p(x?"story_skeleton_show_content":"story_skeleton_show_skeleton")}),e.jsx("div",{style:{padding:"20px",border:"1px solid #eee",borderRadius:"12px",maxWidth:"350px",width:"100%",boxSizing:"border-box"},children:x?e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(t,{...r,variant:"circle",width:48,height:48}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{...r,variant:"text",width:"50%"}),e.jsx(t,{...r,variant:"text",width:"30%"})]})]}),e.jsx(t,{...r,variant:"rect",width:"100%",height:120}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{...r,variant:"text"}),e.jsx(t,{...r,variant:"text"}),e.jsx(t,{...r,variant:"text",width:"60%"})]})]}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:"50%",backgroundColor:"#007bff",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"JD"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.1rem"},children:"John Doe"}),e.jsx("div",{style:{color:"#666",fontSize:"0.9rem"},children:"Software Engineer"})]})]}),e.jsx("img",{src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=350&q=80",alt:"Content",style:{width:"100%",height:"120px",objectFit:"cover",borderRadius:"4px"}}),e.jsx("div",{style:{lineHeight:"1.6",color:"#444"},children:p("story_skeleton_demo_desc")})]})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: "300px",
    width: "100%"
  }}>\r
      <Skeleton {...args} variant="text" width="100%" />\r
      <Skeleton {...args} variant="text" width="80%" />\r
      <Skeleton {...args} variant="text" width="60%" />\r
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    width: 40,
    height: 40
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rect",
    width: 200,
    height: 100
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    animation: "wave",
    width: "100%"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [loading, setLoading] = React.useState(true);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
          {loading ? t("story_skeleton_show_content") : t("story_skeleton_show_skeleton")}\r
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
                {t("story_skeleton_demo_desc")}\r
              </div>\r
            </div>}\r
        </div>\r
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const f=["Default","Text","Circle","Rect","WaveAnimation","CardExample","LoadingToggle"],b=Object.freeze(Object.defineProperty({__proto__:null,CardExample:l,Circle:s,Default:i,LoadingToggle:c,Rect:o,Text:a,WaveAnimation:d,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{s as C,i as D,c as L,o as R,b as S,a as T,d as W,l as a};
