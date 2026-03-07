import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-DIi1LCpb.js";import{u as a}from"./useTranslation-T6dr20_p.js";const t=({size:o="medium",content:e,cite:s,color:d="black",border:p=!0,className:g,...y})=>{const{t:m}=a();return r.jsxs("blockquote",{className:_("wim-quote",`wim-quote--${o==="small"?"sm":o==="large"?"lg":"md"}`,`wim-quote--${d}`,p&&"wim-quote--border",g),...y,children:[r.jsx("div",{className:"wim-quote__content",children:m(e)}),s&&r.jsx("cite",{className:"wim-quote__cite",children:m(s)})]})};t.__docgenInfo={description:"",methods:[],displayName:"Quote",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "black"
| "deepgray"
| "gray"
| "lightgray"
| "white"
| "primary"
| "success"
| "warning"
| "error"
| "info"`,elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"black"',computed:!1}},content:{required:!0,tsType:{name:"string"},description:""},cite:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const f={title:"Components/Typography & Icons/Quote",component:t,parameters:{layout:"centered"},tags:[],argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","primary","success","warning","error","info"]}}},n={render:o=>{const{t:e}=a(["docs","common","components"]);return r.jsx(t,{...o,content:e("story_quote_default")})},args:{}},c={render:o=>{const{t:e}=a(["docs","common","components"]);return r.jsx(t,{...o,content:e("story_quote_design"),cite:"Steve Jobs"})},args:{}},l={render:o=>{const{t:e}=a(["docs","common","components"]);return r.jsx(t,{...o,content:e("story_quote_work"),cite:"Steve Jobs"})},args:{size:"large"}},i={render:o=>{const{t:e}=a(["docs","common","components"]);return r.jsx(t,{...o,content:e("story_quote_simple"),cite:"Leonardo da Vinci"})},args:{border:!1}},u={render:function(e){const{t:s}=a(["docs","common","components"]);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx(t,{...e,content:s("story_quote_black"),color:"black"}),r.jsx(t,{...e,content:s("story_quote_deepgray"),color:"deepgray"}),r.jsx(t,{...e,content:s("story_quote_gray"),color:"gray"}),r.jsx(t,{...e,content:s("story_quote_lightgray"),color:"lightgray"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_default')} />;
  },
  args: {}
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_design')} cite="Steve Jobs" />;
  },
  args: {}
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_work')} cite="Steve Jobs" />;
  },
  args: {
    size: "large"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: {
    border: false
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args: any) {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>\r
        <Quote {...args} content={t('story_quote_black')} color="black" />\r
        <Quote {...args} content={t('story_quote_deepgray')} color="deepgray" />\r
        <Quote {...args} content={t('story_quote_gray')} color="gray" />\r
        <Quote {...args} content={t('story_quote_lightgray')} color="lightgray" />\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const q=["Default","WithCite","Large","NoBorder","VariousColors"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Large:l,NoBorder:i,VariousColors:u,WithCite:c,__namedExportsOrder:q,default:f},Symbol.toStringTag,{value:"Module"}));export{n as D,l as L,i as N,h as Q,c as W};
