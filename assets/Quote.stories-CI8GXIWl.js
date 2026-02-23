import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as y}from"./index-C7GNrL9d.js";import{u as h}from"./useTranslation-CvRYYQpX.js";const r=({size:a="medium",content:u,cite:i,color:m="black",border:d=!0,className:p,...g})=>{const{t:c}=h();return e.jsxs("blockquote",{className:y("wim-quote",`wim-quote--${a==="small"?"sm":a==="large"?"lg":"md"}`,`wim-quote--${m}`,d&&"wim-quote--border",p),...g,children:[e.jsx("div",{className:"wim-quote__content",children:c(u)}),i&&e.jsx("cite",{className:"wim-quote__cite",children:c(i)})]})};r.__docgenInfo={description:"",methods:[],displayName:"Quote",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" | "primary" | "success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"black"',computed:!1}},content:{required:!0,tsType:{name:"string"},description:""},cite:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const w={title:"Component/Typography & Icons/Quote",component:r,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","primary","success","warning","error","info"]}}},o={args:{content:"He who has a why to live can bear almost any how."}},t={args:{content:"Design is not just what it looks like and feels like. Design is how it works.",cite:"Steve Jobs"}},s={args:{size:"large",content:"The only way to do great work is to love what you do.",cite:"Steve Jobs"}},n={args:{border:!1,content:"Simplicity is the ultimate sophistication.",cite:"Leonardo da Vinci"}},l={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(r,{...a,content:"Black Quote",color:"black"}),e.jsx(r,{...a,content:"Deep Gray Quote",color:"deepgray"}),e.jsx(r,{...a,content:"Gray Quote",color:"gray"}),e.jsx(r,{...a,content:"Light Gray Quote",color:"lightgray"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: "He who has a why to live can bear almost any how."
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Design is not just what it looks like and feels like. Design is how it works.",
    cite: "Steve Jobs"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    content: "The only way to do great work is to love what you do.",
    cite: "Steve Jobs"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    border: false,
    content: "Simplicity is the ultimate sophistication.",
    cite: "Leonardo da Vinci"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>\r
            <Quote {...args} content="Black Quote" color="black" />\r
            <Quote {...args} content="Deep Gray Quote" color="deepgray" />\r
            <Quote {...args} content="Gray Quote" color="gray" />\r
            <Quote {...args} content="Light Gray Quote" color="lightgray" />\r
        </div>
}`,...l.parameters?.docs?.source}}};const f=["Default","WithCite","Large","NoBorder","VariousColors"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Large:s,NoBorder:n,VariousColors:l,WithCite:t,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{o as D,s as L,n as N,x as Q,t as W};
