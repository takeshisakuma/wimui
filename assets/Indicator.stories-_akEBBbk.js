import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-COgXasq6.js";import{A as l}from"./Avatar-BjxgoL7U.js";import{I as f}from"./Icon-CGDg_qrx.js";import{A as b}from"./i18nConstants-BpHxieg5.js";import{u as h}from"./useTranslation-7X4DMM5t.js";const a=({children:e,color:o="primary",size:v="medium",position:y="top-right",pulse:x=!1,inline:d=!1,className:g,style:w})=>{const u=o&&(o.startsWith("var(")||o.includes("#")||o.includes("rgb"));return r.jsxs("span",{className:p("wim-indicator",d&&"wim-indicator--inline",g),style:w,children:[e,r.jsx("span",{className:p("wim-indicator__dot",!u&&`wim-indicator__dot--${o}`,`wim-indicator__dot--${v==="small"?"sm":v==="large"?"lg":"md"}`,!d&&`wim-indicator__dot--${y}`,x&&"wim-indicator__dot--pulse"),style:{backgroundColor:u?o:void 0}})]})};a.__docgenInfo={description:"要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。",methods:[],displayName:"Indicator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "error" | "warning" | "neutral" | WimColor',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"neutral"'},{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:`| "var(--color-destructive)"\r
| "var(--color-positive)"\r
| "var(--color-caution)"\r
| "var(--color-primary)"\r
| "var(--color-secondary)"\r
| "var(--color-informative)"\r
| "var(--color-disabled)"\r
| "var(--color-text-on-primary)"\r
| "var(--color-text-on-destructive)"\r
| "var(--color-text-on-positive)"\r
| "var(--color-text-on-caution)"\r
| "var(--color-text-on-secondary)"\r
| "var(--color-text-on-informative)"\r
| "var(--color-text-on-disabled)"\r
| "var(--text-primary)"\r
| "var(--text-secondary)"\r
| "var(--text-tertiary)"\r
| "var(--text-disabled)"\r
| "var(--text-white)"\r
| "var(--text-error)"\r
| "var(--bg-app)"\r
| "var(--bg-component)"\r
| "var(--wim-color-bg-primary)"\r
| "var(--wim-color-bg-secondary)"\r
| "var(--wim-color-bg-hover)"\r
| "var(--wim-color-border)"\r
| "var(--wim-color-border-secondary)"\r
| "var(--color-focus-outline)"\r
| "var(--scrollbar-thumb)"\r
| "var(--scrollbar-track)"\r
| "var(--wim-color-primary)"\r
| "var(--wim-color-primary-hover)"\r
| "var(--wim-color-primary-active)"\r
| "var(--wim-color-primary-light)"\r
| "var(--wim-color-secondary)"\r
| "var(--wim-color-text-primary)"\r
| "var(--wim-color-text-secondary)"\r
| "var(--wim-color-text-tertiary)"\r
| "var(--wim-color-text-disabled)"\r
| "var(--wim-color-text-placeholder)"\r
| "var(--wim-color-text-on-primary)"\r
| "var(--wim-color-text-on-secondary)"\r
| "var(--wim-color-surface)"\r
| "var(--wim-color-surface-variant)"\r
| "var(--wim-color-surface-hover)"\r
| "var(--wim-color-primary-container-alpha)"\r
| "var(--wim-color-surface-variant-alpha)"\r
| "var(--wim-color-bg-tertiary)"\r
| "var(--wim-color-bg-component)"\r
| "var(--wim-color-overlay-bg)"\r
| "var(--wim-color-overlay-bg-light)"\r
| "var(--wim-color-overlay-bg-dark)"\r
| "var(--wim-color-text-on-overlay)"`,elements:[{name:"literal",value:'"var(--color-destructive)"'},{name:"literal",value:'"var(--color-positive)"'},{name:"literal",value:'"var(--color-caution)"'},{name:"literal",value:'"var(--color-primary)"'},{name:"literal",value:'"var(--color-secondary)"'},{name:"literal",value:'"var(--color-informative)"'},{name:"literal",value:'"var(--color-disabled)"'},{name:"literal",value:'"var(--color-text-on-primary)"'},{name:"literal",value:'"var(--color-text-on-destructive)"'},{name:"literal",value:'"var(--color-text-on-positive)"'},{name:"literal",value:'"var(--color-text-on-caution)"'},{name:"literal",value:'"var(--color-text-on-secondary)"'},{name:"literal",value:'"var(--color-text-on-informative)"'},{name:"literal",value:'"var(--color-text-on-disabled)"'},{name:"literal",value:'"var(--text-primary)"'},{name:"literal",value:'"var(--text-secondary)"'},{name:"literal",value:'"var(--text-tertiary)"'},{name:"literal",value:'"var(--text-disabled)"'},{name:"literal",value:'"var(--text-white)"'},{name:"literal",value:'"var(--text-error)"'},{name:"literal",value:'"var(--bg-app)"'},{name:"literal",value:'"var(--bg-component)"'},{name:"literal",value:'"var(--wim-color-bg-primary)"'},{name:"literal",value:'"var(--wim-color-bg-secondary)"'},{name:"literal",value:'"var(--wim-color-bg-hover)"'},{name:"literal",value:'"var(--wim-color-border)"'},{name:"literal",value:'"var(--wim-color-border-secondary)"'},{name:"literal",value:'"var(--color-focus-outline)"'},{name:"literal",value:'"var(--scrollbar-thumb)"'},{name:"literal",value:'"var(--scrollbar-track)"'},{name:"literal",value:'"var(--wim-color-primary)"'},{name:"literal",value:'"var(--wim-color-primary-hover)"'},{name:"literal",value:'"var(--wim-color-primary-active)"'},{name:"literal",value:'"var(--wim-color-primary-light)"'},{name:"literal",value:'"var(--wim-color-secondary)"'},{name:"literal",value:'"var(--wim-color-text-primary)"'},{name:"literal",value:'"var(--wim-color-text-secondary)"'},{name:"literal",value:'"var(--wim-color-text-tertiary)"'},{name:"literal",value:'"var(--wim-color-text-disabled)"'},{name:"literal",value:'"var(--wim-color-text-placeholder)"'},{name:"literal",value:'"var(--wim-color-text-on-primary)"'},{name:"literal",value:'"var(--wim-color-text-on-secondary)"'},{name:"literal",value:'"var(--wim-color-surface)"'},{name:"literal",value:'"var(--wim-color-surface-variant)"'},{name:"literal",value:'"var(--wim-color-surface-hover)"'},{name:"literal",value:'"var(--wim-color-primary-container-alpha)"'},{name:"literal",value:'"var(--wim-color-surface-variant-alpha)"'},{name:"literal",value:'"var(--wim-color-bg-tertiary)"'},{name:"literal",value:'"var(--wim-color-bg-component)"'},{name:"literal",value:'"var(--wim-color-overlay-bg)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-light)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-dark)"'},{name:"literal",value:'"var(--wim-color-text-on-overlay)"'}]},{name:"unknown"}]}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},pulse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const I={title:"Components/Data Indicators/Indicator",component:a,argTypes:{color:{control:"select",options:["primary","success","error","warning","neutral"]},size:{control:"select",options:["small","medium","large"]},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"]}}},n={args:{children:r.jsx(l,{initials:"JD"}),color:"success",position:"bottom-right"}},i={render:e=>r.jsxs("div",{style:{display:"flex",gap:"20px"},children:[r.jsx(a,{...e,color:"primary",children:r.jsx(l,{initials:"P"})}),r.jsx(a,{...e,color:"success",children:r.jsx(l,{initials:"S"})}),r.jsx(a,{...e,color:"warning",children:r.jsx(l,{initials:"W"})}),r.jsx(a,{...e,color:"error",children:r.jsx(l,{initials:"E"})}),r.jsx(a,{...e,color:"neutral",children:r.jsx(l,{initials:"N"})})]})},t={args:{children:r.jsx(l,{initials:"AL"}),color:"success",pulse:!0,position:"bottom-right"}},s={render:function(o){const{t:v}=h(b);return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(a,{...o,color:"success",inline:!0}),r.jsx("span",{children:v("story_indicator_online")})]})}},c={render:e=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[r.jsx(a,{...e,size:"small",inline:!0}),r.jsx(a,{...e,size:"medium",inline:!0}),r.jsx(a,{...e,size:"large",inline:!0})]})},m={render:e=>r.jsx("div",{style:{display:"flex",gap:"20px"},children:r.jsx(a,{...e,color:"error",children:r.jsx("div",{style:{padding:"8px",background:"#f0f0f0",borderRadius:"8px"},children:r.jsx(f,{name:"BellIcon"})})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="JD" />,
    color: "success",
    position: "bottom-right"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "20px"
  }}>\r
      <Indicator {...args} color="primary">\r
        <Avatar initials="P" />\r
      </Indicator>\r
      <Indicator {...args} color="success">\r
        <Avatar initials="S" />\r
      </Indicator>\r
      <Indicator {...args} color="warning">\r
        <Avatar initials="W" />\r
      </Indicator>\r
      <Indicator {...args} color="error">\r
        <Avatar initials="E" />\r
      </Indicator>\r
      <Indicator {...args} color="neutral">\r
        <Avatar initials="N" />\r
      </Indicator>\r
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="AL" />,
    color: "success",
    pulse: true,
    position: "bottom-right"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <Indicator {...args} color="success" inline />\r
        <span>{t("story_indicator_online")}</span>\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>\r
      <Indicator {...args} size="small" inline />\r
      <Indicator {...args} size="medium" inline />\r
      <Indicator {...args} size="large" inline />\r
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "20px"
  }}>\r
      <Indicator {...args} color="error">\r
        <div style={{
        padding: "8px",
        background: "#f0f0f0",
        borderRadius: "8px"
      }}>\r
          <Icon name="BellIcon" />\r
        </div>\r
      </Indicator>\r
    </div>
}`,...m.parameters?.docs?.source}}};const j=["Default","Colors","Pulse","Inline","Sizes","WithIcons"],R=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Default:n,Inline:s,Pulse:t,Sizes:c,WithIcons:m,__namedExportsOrder:j,default:I},Symbol.toStringTag,{value:"Module"}));export{i as C,n as D,R as I,t as P,c as S,s as a};
