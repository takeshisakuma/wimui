import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as w}from"./iframe-DkKouYTS.js";import{P as r}from"./index-0gwFuz90.js";const n=({variant:t="text",animation:i="pulse",width:x,height:m,style:u,className:h="",...v})=>{const g=`wim-skeleton--${t}`,f=i!=="none"?`wim-skeleton--${i}`:"",y={width:x,height:m,...u};return e.jsx("div",{className:["wim-skeleton",g,f,h].filter(Boolean).join(" "),style:y,"aria-hidden":"true",...v})};n.propTypes={variant:r.oneOf(["text","rect","circle"]),animation:r.oneOf(["pulse","wave","none"]),width:r.oneOfType([r.string,r.number]),height:r.oneOfType([r.string,r.number]),style:r.object,className:r.string};n.__docgenInfo={description:"コンテンツの読み込み中に表示するプレースホルダー。",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:'"text" | "rect" | "circle"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"rect"'},{name:"literal",value:'"circle"'}]},description:"スケルトンの形状。\r\n- `text`: テキスト行のような形状。\r\n- `rect`: 矩形。\r\n- `circle`: 円形。",defaultValue:{value:'"text"',computed:!1},type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"rect"',computed:!1},{value:'"circle"',computed:!1}]}},animation:{required:!1,tsType:{name:"union",raw:'"pulse" | "wave" | "none"',elements:[{name:"literal",value:'"pulse"'},{name:"literal",value:'"wave"'},{name:"literal",value:'"none"'}]},description:"アニメーションの種類。\r\n- `pulse`: ゆっくりとした明滅。\r\n- `wave`: 左から右への波のような動き。\r\n- `none`: アニメーションなし。",defaultValue:{value:'"pulse"',computed:!1},type:{name:"enum",value:[{value:'"pulse"',computed:!1},{value:'"wave"',computed:!1},{value:'"none"',computed:!1}]}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"幅。CSSの単位（px, %, remなど）を含めて指定します。",type:{name:"union",value:[{name:"string"},{name:"number"}]}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"高さ。CSSの単位（px, %, remなど）を含めて指定します。",type:{name:"union",value:[{name:"string"},{name:"number"}]}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1},style:{description:"追加のスタイル。",type:{name:"object"},required:!1}}};const S={title:"Component/Feedback/Skeleton",component:n,argTypes:{variant:{control:"select",options:["text","rect","circle"]},animation:{control:"select",options:["pulse","wave","none"]},width:{control:"text"},height:{control:"text"}}},a={args:{width:"100%"}},s={render:t=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx(n,{...t,variant:"text",width:"100%"}),e.jsx(n,{...t,variant:"text",width:"80%"}),e.jsx(n,{...t,variant:"text",width:"60%"})]})},o={args:{variant:"circle",width:40,height:40}},l={args:{variant:"rect",width:200,height:100}},d={args:{animation:"wave",width:"100%"}},c={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px",padding:"16px",border:"1px solid #eee",borderRadius:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(n,{...t,variant:"circle",width:40,height:40}),e.jsxs("div",{style:{flex:1},children:[e.jsx(n,{...t,variant:"text",width:"60%"}),e.jsx(n,{...t,variant:"text",width:"40%"})]})]}),e.jsx(n,{...t,variant:"rect",width:"100%",height:150}),e.jsxs("div",{children:[e.jsx(n,{...t,variant:"text",width:"100%"}),e.jsx(n,{...t,variant:"text",width:"90%"}),e.jsx(n,{...t,variant:"text",width:"70%"})]})]})},p={render:t=>{const[i,x]=w.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("button",{onClick:()=>x(!i),style:{padding:"8px 16px",borderRadius:"4px",border:"1px solid #ccc",cursor:"pointer",width:"fit-content"},children:i?"Show Content":"Show Skeleton"}),e.jsx("div",{style:{padding:"20px",border:"1px solid #eee",borderRadius:"12px",width:"350px"},children:i?e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(n,{...t,variant:"circle",width:48,height:48}),e.jsxs("div",{style:{flex:1},children:[e.jsx(n,{...t,variant:"text",width:"50%"}),e.jsx(n,{...t,variant:"text",width:"30%"})]})]}),e.jsx(n,{...t,variant:"rect",width:"100%",height:120}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{...t,variant:"text"}),e.jsx(n,{...t,variant:"text"}),e.jsx(n,{...t,variant:"text",width:"60%"})]})]}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:"50%",backgroundColor:"#007bff",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"JD"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.1rem"},children:"John Doe"}),e.jsx("div",{style:{color:"#666",fontSize:"0.9rem"},children:"Software Engineer"})]})]}),e.jsx("img",{src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=350&q=80",alt:"Content",style:{width:"100%",height:"120px",objectFit:"cover",borderRadius:"4px"}}),e.jsx("div",{style:{lineHeight:"1.6",color:"#444"},children:"これは実際にコンテンツが読み込まれた状態のデモです。 スケルトンが提供したプレースホルダーと同じ位置に、 本来のテキストや画像が表示されます。"})]})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "300px"
  }}>\r
            <Skeleton {...args} variant="text" width="100%" />\r
            <Skeleton {...args} variant="text" width="80%" />\r
            <Skeleton {...args} variant="text" width="60%" />\r
        </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    width: 40,
    height: 40
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rect",
    width: 200,
    height: 100
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    animation: "wave",
    width: "100%"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px",
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        width: "350px"
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
}`,...p.parameters?.docs?.source}}};const j=["Default","Text","Circle","Rect","WaveAnimation","CardExample","LoadingToggle"],D=Object.freeze(Object.defineProperty({__proto__:null,CardExample:c,Circle:o,Default:a,LoadingToggle:p,Rect:l,Text:s,WaveAnimation:d,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{o as C,a as D,p as L,l as R,D as S,s as T,d as W,c as a};
