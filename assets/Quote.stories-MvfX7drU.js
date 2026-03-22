import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-OGIV44ur.js";import{u as s}from"./useTranslation-1pI0prKY.js";import{A as m}from"./iframe-CbS9gB6V.js";const o=({size:t="medium",content:e,cite:a,color:p="black",border:g=!0,className:y,..._})=>{const{t:d}=s();return r.jsxs("blockquote",{className:f("wim-quote",`wim-quote--${t==="small"?"sm":t==="large"?"lg":"md"}`,`wim-quote--${p}`,g&&"wim-quote--border",y),..._,children:[r.jsx("div",{className:"wim-quote__content",children:d(e)}),a&&r.jsx("cite",{className:"wim-quote__cite",children:d(a)})]})};o.__docgenInfo={description:"",methods:[],displayName:"Quote",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"
| "deepgray"
| "gray"
| "lightgray"
| "white"
| "primary"
| "success"
| "warning"
| "error"
| "info"`,elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"black"',computed:!1}},content:{required:!0,tsType:{name:"string"},description:""},cite:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const q={title:"Components/Typography & Icons/Quote",component:o,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","primary","success","warning","error","info"]}}},n={render:t=>{const{t:e}=s(m);return r.jsx(o,{...t,content:e("story_quote_default")})},args:{}},l={render:t=>{const{t:e}=s(m);return r.jsx(o,{...t,content:e("story_quote_design"),cite:"Steve Jobs"})},args:{}},c={render:t=>{const{t:e}=s(m);return r.jsx(o,{...t,content:e("story_quote_work"),cite:"Steve Jobs"})},args:{size:"large"}},i={render:t=>{const{t:e}=s(m);return r.jsx(o,{...t,content:e("story_quote_simple"),cite:"Leonardo da Vinci"})},args:{border:!1}},u={render:function(e){const{t:a}=s(m);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx(o,{...e,content:a("story_quote_black"),color:"black"}),r.jsx(o,{...e,content:a("story_quote_deepgray"),color:"deepgray"}),r.jsx(o,{...e,content:a("story_quote_gray"),color:"gray"}),r.jsx(o,{...e,content:a("story_quote_lightgray"),color:"lightgray"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_default')} />;
  },
  args: {}
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_design')} cite="Steve Jobs" />;
  },
  args: {}
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_work')} cite="Steve Jobs" />;
  },
  args: {
    size: "large"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: {
    border: false
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args: Parameters<typeof Quote>[0]) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        <Quote {...args} content={t('story_quote_black')} color="black" />
        <Quote {...args} content={t('story_quote_deepgray')} color="deepgray" />
        <Quote {...args} content={t('story_quote_gray')} color="gray" />
        <Quote {...args} content={t('story_quote_lightgray')} color="lightgray" />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const v=["Default","WithCite","Large","NoBorder","VariousColors"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Large:c,NoBorder:i,VariousColors:u,WithCite:l,__namedExportsOrder:v,default:q},Symbol.toStringTag,{value:"Module"}));export{n as D,c as L,i as N,Q,l as W};
