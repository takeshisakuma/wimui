import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-43swe3A3.js";const a=({variant:r="bars",size:t="md",color:o="primary",className:d,...c})=>e.jsxs("div",{className:p("wim-loader",`wim-loader--${r}`,`wim-loader--${t}`,`wim-loader--${o}`,d),role:"status","aria-live":"polite",...c,children:[e.jsx("span",{className:"wim-loader__item"}),e.jsx("span",{className:"wim-loader__item"}),e.jsx("span",{className:"wim-loader__item"})]});a.__docgenInfo={description:"データの読み込み中や処理中であることを示すためのコンポーネント。",methods:[],displayName:"Loader",props:{variant:{required:!1,tsType:{name:"union",raw:'"bars" | "dots" | "pulse"',elements:[{name:"literal",value:'"bars"'},{name:"literal",value:'"dots"'},{name:"literal",value:'"pulse"'}]},description:"ローダーのアニメーション形式。",defaultValue:{value:'"bars"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"ローダーのサイズ。",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"ローダーの色。",defaultValue:{value:'"primary"',computed:!1}}}};const m={title:"Component/Feedback/Loader",component:a,tags:[],argTypes:{variant:{control:"select",options:["bars","dots","pulse"]},color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["sm","md","lg","xl"]}}},s={args:{variant:"bars",color:"primary",size:"md"},render:r=>e.jsx(a,{...r})},n={render:r=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{...r,variant:"bars"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"bars"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{...r,variant:"dots"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"dots"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{...r,variant:"pulse"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"pulse"})]})]})},l={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{...r,color:"primary"}),e.jsx(a,{...r,color:"secondary"}),e.jsx(a,{...r,color:"success"}),e.jsx(a,{...r,color:"warning"}),e.jsx(a,{...r,color:"error"}),e.jsx(a,{...r,color:"neutral"})]})},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{...r,variant:"bars",size:"sm"}),e.jsx(a,{...r,variant:"bars",size:"md"}),e.jsx(a,{...r,variant:"bars",size:"lg"}),e.jsx(a,{...r,variant:"bars",size:"xl"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(a,{...r,variant:"dots",size:"sm"}),e.jsx(a,{...r,variant:"dots",size:"md"}),e.jsx(a,{...r,variant:"dots",size:"lg"}),e.jsx(a,{...r,variant:"dots",size:"xl"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",height:"48px"},children:[e.jsx(a,{...r,variant:"pulse",size:"sm"}),e.jsx(a,{...r,variant:"pulse",size:"md"}),e.jsx(a,{...r,variant:"pulse",size:"lg"}),e.jsx(a,{...r,variant:"pulse",size:"xl"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bars",
    color: "primary",
    size: "md"
  },
  render: args => <Loader {...args} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "48px",
    alignItems: "center"
  }}>\r
            <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>\r
                <Loader {...args} variant="bars" />\r
                <span style={{
        fontSize: "12px",
        color: "#666"
      }}>bars</span>\r
            </div>\r
            <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>\r
                <Loader {...args} variant="dots" />\r
                <span style={{
        fontSize: "12px",
        color: "#666"
      }}>dots</span>\r
            </div>\r
            <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }}>\r
                <Loader {...args} variant="pulse" />\r
                <span style={{
        fontSize: "12px",
        color: "#666"
      }}>pulse</span>\r
            </div>\r
        </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>\r
            <Loader {...args} color="primary" />\r
            <Loader {...args} color="secondary" />\r
            <Loader {...args} color="success" />\r
            <Loader {...args} color="warning" />\r
            <Loader {...args} color="error" />\r
            <Loader {...args} color="neutral" />\r
        </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>\r
            <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>\r
                <Loader {...args} variant="bars" size="sm" />\r
                <Loader {...args} variant="bars" size="md" />\r
                <Loader {...args} variant="bars" size="lg" />\r
                <Loader {...args} variant="bars" size="xl" />\r
            </div>\r
            <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center"
    }}>\r
                <Loader {...args} variant="dots" size="sm" />\r
                <Loader {...args} variant="dots" size="md" />\r
                <Loader {...args} variant="dots" size="lg" />\r
                <Loader {...args} variant="dots" size="xl" />\r
            </div>\r
            <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "center",
      height: "48px"
    }}>\r
                <Loader {...args} variant="pulse" size="sm" />\r
                <Loader {...args} variant="pulse" size="md" />\r
                <Loader {...args} variant="pulse" size="lg" />\r
                <Loader {...args} variant="pulse" size="xl" />\r
            </div>\r
        </div>
}`,...i.parameters?.docs?.source}}};const x=["Default","Variants","Colors","Sizes"],g=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:s,Sizes:i,Variants:n,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,g as L,i as S,n as V};
