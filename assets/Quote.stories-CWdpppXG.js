import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./index-DmruUvHE.js";import{u as v}from"./useTranslation-C7qvJdJk.js";const a=({size:o="medium",content:m,cite:c,color:d="black",border:p=!0,...g})=>{const{t:u}=v(),y=`wim-quote--${{small:"sm",medium:"md",large:"lg"}[o]}`,h=`wim-quote--${d}`,f=p?"wim-quote--border":"";return e.jsxs("blockquote",{className:["wim-quote",y,h,f].filter(Boolean).join(" "),...g,children:[e.jsx("div",{className:"wim-quote__content",children:u(m)}),c&&e.jsx("cite",{className:"wim-quote__cite",children:u(c)})]})};a.propTypes={size:t.oneOf(["small","medium","large"]),color:t.oneOf(["black","deepgray","gray","lightgray","white"]),content:t.string.isRequired,cite:t.string,border:t.bool};a.__docgenInfo={description:"",methods:[],displayName:"Quote",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'}]},description:"",defaultValue:{value:'"black"',computed:!1},type:{name:"enum",value:[{value:'"black"',computed:!1},{value:'"deepgray"',computed:!1},{value:'"gray"',computed:!1},{value:'"lightgray"',computed:!1},{value:'"white"',computed:!1}]}},content:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},cite:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}}}};const w={title:"Component/Typography/Quote",component:a,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white"]}}},r={args:{content:"He who has a why to live can bear almost any how."}},s={args:{content:"Design is not just what it looks like and feels like. Design is how it works.",cite:"Steve Jobs"}},l={args:{size:"large",content:"The only way to do great work is to love what you do.",cite:"Steve Jobs"}},n={args:{border:!1,content:"Simplicity is the ultimate sophistication.",cite:"Leonardo da Vinci"}},i={render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{...o,content:"Black Quote",color:"black"}),e.jsx(a,{...o,content:"Deep Gray Quote",color:"deepgray"}),e.jsx(a,{...o,content:"Gray Quote",color:"gray"}),e.jsx(a,{...o,content:"Light Gray Quote",color:"lightgray"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: "He who has a why to live can bear almost any how."
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Design is not just what it looks like and feels like. Design is how it works.",
    cite: "Steve Jobs"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    content: "The only way to do great work is to love what you do.",
    cite: "Steve Jobs"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    border: false,
    content: "Simplicity is the ultimate sophistication.",
    cite: "Leonardo da Vinci"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const b=["Default","WithCite","Large","NoBorder","VariousColors"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Large:l,NoBorder:n,VariousColors:i,WithCite:s,__namedExportsOrder:b,default:w},Symbol.toStringTag,{value:"Module"}));export{r as D,l as L,n as N,S as Q,s as W};
