import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-C9_oYSQB.js";import{u as s}from"./useTranslation-CI9f0OZA.js";import{A as d}from"./iframe-BaVSnw9L.js";const o=({size:t="md",content:e,cite:a,color:p="black",border:g=!0,className:y,...f})=>{const{t:m}=s();return r.jsxs("blockquote",{className:_("wim-quote",`wim-quote--${t}`,`wim-quote--${p}`,g&&"wim-quote--border",y),...f,children:[r.jsx("div",{className:"wim-quote__content",children:m(e)}),a&&r.jsx("cite",{className:"wim-quote__cite",children:m(a)})]})};o.__docgenInfo={description:"",methods:[],displayName:"Quote",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"
| "deepgray"
| "gray"
| "lightgray"
| "white"
| "primary"
| "success"
| "warning"
| "error"
| "info"`,elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"black"',computed:!1}},content:{required:!0,tsType:{name:"string"},description:""},cite:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const q={title:"Components/Typography & Icons/Quote",component:o,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"radio",options:["sm","md","lg"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","primary","success","warning","error","info"]}}},n={render:t=>{const{t:e}=s(d);return r.jsx(o,{...t,content:e("story.quote_default")})},args:{}},l={render:t=>{const{t:e}=s(d);return r.jsx(o,{...t,content:e("story.quote_design"),cite:"Steve Jobs"})},args:{}},c={render:t=>{const{t:e}=s(d);return r.jsx(o,{...t,content:e("story.quote_work"),cite:"Steve Jobs"})},args:{size:"lg"}},i={render:t=>{const{t:e}=s(d);return r.jsx(o,{...t,content:e("story.quote_simple"),cite:"Leonardo da Vinci"})},args:{border:!1}},u={render:function(e){const{t:a}=s(d);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx(o,{...e,content:a("story.quote_black"),color:"black"}),r.jsx(o,{...e,content:a("story.quote_deepgray"),color:"deepgray"}),r.jsx(o,{...e,content:a("story.quote_gray"),color:"gray"}),r.jsx(o,{...e,content:a("story.quote_lightgray"),color:"lightgray"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_default')} />;
  },
  args: {}
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_design')} cite="Steve Jobs" />;
  },
  args: {}
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_work')} cite="Steve Jobs" />;
  },
  args: {
    size: "lg"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_simple')} cite="Leonardo da Vinci" />;
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
        <Quote {...args} content={t('story.quote_black')} color="black" />
        <Quote {...args} content={t('story.quote_deepgray')} color="deepgray" />
        <Quote {...args} content={t('story.quote_gray')} color="gray" />
        <Quote {...args} content={t('story.quote_lightgray')} color="lightgray" />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const v=["Default","WithCite","Large","NoBorder","VariousColors"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Large:c,NoBorder:i,VariousColors:u,WithCite:l,__namedExportsOrder:v,default:q},Symbol.toStringTag,{value:"Module"}));export{n as D,c as L,i as N,Q,l as W};
