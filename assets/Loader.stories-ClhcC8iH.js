import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as o}from"./index-B3PBgNC4.js";const r=({variant:a="bars",size:i="md",color:d="primary",className:c="",...p})=>{const m=`wim-loader--${a}`,u=`wim-loader--${i}`,x=`wim-loader--${d}`;return e.jsxs("div",{className:["wim-loader",m,u,x,c].filter(Boolean).join(" "),role:"status","aria-live":"polite",...p,children:[e.jsx("span",{className:"wim-loader__item"}),e.jsx("span",{className:"wim-loader__item"}),e.jsx("span",{className:"wim-loader__item"})]})};r.propTypes={variant:o.oneOf(["bars","dots","pulse"]),size:o.oneOf(["sm","md","lg","xl"]),color:o.oneOf(["primary","secondary","success","warning","error","neutral","currentColor"]),className:o.string};r.__docgenInfo={description:"データの読み込み中や処理中であることを示すためのコンポーネント。",methods:[],displayName:"Loader",props:{variant:{required:!1,tsType:{name:"union",raw:'"bars" | "dots" | "pulse"',elements:[{name:"literal",value:'"bars"'},{name:"literal",value:'"dots"'},{name:"literal",value:'"pulse"'}]},description:"ローダーのアニメーション形式。",defaultValue:{value:'"bars"',computed:!1},type:{name:"enum",value:[{value:'"bars"',computed:!1},{value:'"dots"',computed:!1},{value:'"pulse"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"ローダーのサイズ。",defaultValue:{value:'"md"',computed:!1},type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"ローダーの色。",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1},{value:'"neutral"',computed:!1},{value:'"currentColor"',computed:!1}]}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const v={title:"Component/Feedback/Loader",component:r,tags:[],argTypes:{variant:{control:"select",options:["bars","dots","pulse"]},color:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},size:{control:"select",options:["sm","md","lg","xl"]}}},s={args:{variant:"bars",color:"primary",size:"md"},render:a=>e.jsx(r,{...a})},n={render:a=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...a,variant:"bars"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"bars"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...a,variant:"dots"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"dots"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...a,variant:"pulse"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"pulse"})]})]})},l={render:a=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...a,color:"primary"}),e.jsx(r,{...a,color:"secondary"}),e.jsx(r,{...a,color:"success"}),e.jsx(r,{...a,color:"warning"}),e.jsx(r,{...a,color:"error"}),e.jsx(r,{...a,color:"neutral"})]})},t={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...a,variant:"bars",size:"sm"}),e.jsx(r,{...a,variant:"bars",size:"md"}),e.jsx(r,{...a,variant:"bars",size:"lg"}),e.jsx(r,{...a,variant:"bars",size:"xl"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{...a,variant:"dots",size:"sm"}),e.jsx(r,{...a,variant:"dots",size:"md"}),e.jsx(r,{...a,variant:"dots",size:"lg"}),e.jsx(r,{...a,variant:"dots",size:"xl"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",height:"48px"},children:[e.jsx(r,{...a,variant:"pulse",size:"sm"}),e.jsx(r,{...a,variant:"pulse",size:"md"}),e.jsx(r,{...a,variant:"pulse",size:"lg"}),e.jsx(r,{...a,variant:"pulse",size:"xl"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Default","Variants","Colors","Sizes"],j=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:s,Sizes:t,Variants:n,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{l as C,s as D,j as L,t as S,n as V};
