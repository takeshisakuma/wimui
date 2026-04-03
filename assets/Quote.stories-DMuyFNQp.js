import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as q}from"./index-D-cCApWp.js";import{A as u}from"./iframe-DsTXv44w.js";import{u as d}from"./useTranslation-BJ9oq-Jr.js";const o=({size:t="md",content:e,cite:a,color:m="black",border:p=!0,className:g,children:y,...f})=>{const _=e??y;return r.jsxs("blockquote",{className:q("wim-quote",`wim-quote--${t}`,`wim-quote--${m}`,p&&"wim-quote--border",g),...f,children:[r.jsx("div",{className:"wim-quote__content",children:_}),a&&r.jsx("cite",{className:"wim-quote__cite",children:a})]})};o.__docgenInfo={description:"",methods:[],displayName:"Quote",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"
| "deepgray"
| "gray"
| "lightgray"
| "white"
| "primary"
| "success"
| "warning"
| "error"
| "info"`,elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"black"',computed:!1}},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cite:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const v={title:"Components/Typography & Icons/Quote",component:o,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"radio",options:["sm","md","lg"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","primary","success","warning","error","info"]}}},s={render:t=>{const{t:e}=d(u);return r.jsx(o,{...t,content:e("story.quote_default")})},args:{}},n={render:t=>{const{t:e}=d(u);return r.jsx(o,{...t,content:e("story.quote_design"),cite:"Steve Jobs"})},args:{}},c={render:t=>{const{t:e}=d(u);return r.jsx(o,{...t,content:e("story.quote_work"),cite:"Steve Jobs"})},args:{size:"lg"}},l={render:t=>{const{t:e}=d(u);return r.jsx(o,{...t,content:e("story.quote_simple"),cite:"Leonardo da Vinci"})},args:{border:!1}},i={render:function(e){const{t:a}=d(u);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx(o,{...e,content:a("story.quote_black"),color:"black"}),r.jsx(o,{...e,content:a("story.quote_deepgray"),color:"deepgray"}),r.jsx(o,{...e,content:a("story.quote_gray"),color:"gray"}),r.jsx(o,{...e,content:a("story.quote_lightgray"),color:"lightgray"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_default')} />;
  },
  args: {}
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_design')} cite="Steve Jobs" />;
  },
  args: {}
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_work')} cite="Steve Jobs" />;
  },
  args: {
    size: "lg"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: Parameters<typeof Quote>[0]) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story.quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: {
    border: false
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const S=["Default","WithCite","Large","NoBorder","VariousColors"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Large:c,NoBorder:l,VariousColors:i,WithCite:n,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,c as L,l as N,h as Q,n as W};
