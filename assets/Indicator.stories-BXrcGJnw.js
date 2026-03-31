import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-BdaCrWBW.js";import{A as i}from"./Avatar-BGhInxob.js";import{I as f}from"./Icon-F6WZll9K.js";import{A as b}from"./iframe-C9jI6wk5.js";import{u as h}from"./useTranslation-f2Ze7WA6.js";const a=({children:e,color:o="primary",size:v="md",position:w="top-right",pulse:g=!1,inline:d=!1,className:y,style:x})=>{const u=o&&(o.startsWith("var(")||o.includes("#")||o.includes("rgb"));return r.jsxs("span",{className:p("wim-indicator",d&&"wim-indicator--inline",y),style:x,children:[e,r.jsx("span",{className:p("wim-indicator__dot",!u&&`wim-indicator__dot--${o}`,`wim-indicator__dot--${v}`,!d&&`wim-indicator__dot--${w}`,g&&"wim-indicator__dot--pulse"),style:{backgroundColor:u?o:void 0}})]})};a.__docgenInfo={description:"要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。",methods:[],displayName:"Indicator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "error" | "warning" | "neutral" | WimColor',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"neutral"'},{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:`| "var(--wim-color-primary)"
| "var(--wim-color-primary-hover)"
| "var(--wim-color-primary-active)"
| "var(--wim-color-primary-light)"
| "var(--wim-color-primary-container-alpha)"
| "var(--wim-color-secondary)"
| "var(--wim-color-informative)"
| "var(--wim-color-destructive)"
| "var(--wim-color-positive)"
| "var(--wim-color-caution)"
| "var(--wim-color-disabled)"
// Text colors
| "var(--wim-color-text-primary)"
| "var(--wim-color-text-secondary)"
| "var(--wim-color-text-tertiary)"
| "var(--wim-color-text-disabled)"
| "var(--wim-color-text-white)"
| "var(--wim-color-text-error)"
| "var(--wim-color-text-placeholder)"
// Text on semantic backgrounds
| "var(--wim-color-text-on-primary)"
| "var(--wim-color-text-on-secondary)"
| "var(--wim-color-text-on-destructive)"
| "var(--wim-color-text-on-positive)"
| "var(--wim-color-text-on-caution)"
| "var(--wim-color-text-on-informative)"
| "var(--wim-color-text-on-disabled)"
| "var(--wim-color-text-on-overlay)"
// Surface / background colors
| "var(--wim-color-surface)"
| "var(--wim-color-surface-variant)"
| "var(--wim-color-surface-hover)"
| "var(--wim-color-surface-variant-alpha)"
| "var(--wim-color-bg-app)"
| "var(--wim-color-bg-component)"
| "var(--wim-color-bg-primary)"
| "var(--wim-color-bg-secondary)"
| "var(--wim-color-bg-tertiary)"
| "var(--wim-color-bg-hover)"
// Border / focus colors
| "var(--wim-color-border)"
| "var(--wim-color-border-secondary)"
| "var(--wim-color-focus-outline)"
// Overlay colors
| "var(--wim-color-overlay-bg)"
| "var(--wim-color-overlay-bg-light)"
| "var(--wim-color-overlay-bg-dark)"
// Scrollbar colors
| "var(--wim-scrollbar-thumb)"
| "var(--wim-scrollbar-track)"`,elements:[{name:"literal",value:'"var(--wim-color-primary)"'},{name:"literal",value:'"var(--wim-color-primary-hover)"'},{name:"literal",value:'"var(--wim-color-primary-active)"'},{name:"literal",value:'"var(--wim-color-primary-light)"'},{name:"literal",value:'"var(--wim-color-primary-container-alpha)"'},{name:"literal",value:'"var(--wim-color-secondary)"'},{name:"literal",value:'"var(--wim-color-informative)"'},{name:"literal",value:'"var(--wim-color-destructive)"'},{name:"literal",value:'"var(--wim-color-positive)"'},{name:"literal",value:'"var(--wim-color-caution)"'},{name:"literal",value:'"var(--wim-color-disabled)"'},{name:"literal",value:'"var(--wim-color-text-primary)"'},{name:"literal",value:'"var(--wim-color-text-secondary)"'},{name:"literal",value:'"var(--wim-color-text-tertiary)"'},{name:"literal",value:'"var(--wim-color-text-disabled)"'},{name:"literal",value:'"var(--wim-color-text-white)"'},{name:"literal",value:'"var(--wim-color-text-error)"'},{name:"literal",value:'"var(--wim-color-text-placeholder)"'},{name:"literal",value:'"var(--wim-color-text-on-primary)"'},{name:"literal",value:'"var(--wim-color-text-on-secondary)"'},{name:"literal",value:'"var(--wim-color-text-on-destructive)"'},{name:"literal",value:'"var(--wim-color-text-on-positive)"'},{name:"literal",value:'"var(--wim-color-text-on-caution)"'},{name:"literal",value:'"var(--wim-color-text-on-informative)"'},{name:"literal",value:'"var(--wim-color-text-on-disabled)"'},{name:"literal",value:'"var(--wim-color-text-on-overlay)"'},{name:"literal",value:'"var(--wim-color-surface)"'},{name:"literal",value:'"var(--wim-color-surface-variant)"'},{name:"literal",value:'"var(--wim-color-surface-hover)"'},{name:"literal",value:'"var(--wim-color-surface-variant-alpha)"'},{name:"literal",value:'"var(--wim-color-bg-app)"'},{name:"literal",value:'"var(--wim-color-bg-component)"'},{name:"literal",value:'"var(--wim-color-bg-primary)"'},{name:"literal",value:'"var(--wim-color-bg-secondary)"'},{name:"literal",value:'"var(--wim-color-bg-tertiary)"'},{name:"literal",value:'"var(--wim-color-bg-hover)"'},{name:"literal",value:'"var(--wim-color-border)"'},{name:"literal",value:'"var(--wim-color-border-secondary)"'},{name:"literal",value:'"var(--wim-color-focus-outline)"'},{name:"literal",value:'"var(--wim-color-overlay-bg)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-light)"'},{name:"literal",value:'"var(--wim-color-overlay-bg-dark)"'},{name:"literal",value:'"var(--wim-scrollbar-thumb)"'},{name:"literal",value:'"var(--wim-scrollbar-track)"'}]},{name:"unknown"}]}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},pulse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const I={title:"Components/Data Indicators/Indicator",component:a,argTypes:{color:{control:"select",options:["primary","success","error","warning","neutral"]},size:{control:"radio",options:["sm","md","lg"]},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"]}}},l={args:{children:r.jsx(i,{initials:"JD"}),color:"success",position:"bottom-right"}},n={render:e=>r.jsxs("div",{style:{display:"flex",gap:"20px"},children:[r.jsx(a,{...e,color:"primary",children:r.jsx(i,{initials:"P"})}),r.jsx(a,{...e,color:"success",children:r.jsx(i,{initials:"S"})}),r.jsx(a,{...e,color:"warning",children:r.jsx(i,{initials:"W"})}),r.jsx(a,{...e,color:"error",children:r.jsx(i,{initials:"E"})}),r.jsx(a,{...e,color:"neutral",children:r.jsx(i,{initials:"N"})})]})},t={args:{children:r.jsx(i,{initials:"AL"}),color:"success",pulse:!0,position:"bottom-right"}},s={render:function(o){const{t:v}=h(b);return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(a,{...o,color:"success",inline:!0}),r.jsx("span",{children:v("story.indicator_online")})]})}},c={render:e=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[r.jsx(a,{...e,size:"sm",inline:!0}),r.jsx(a,{...e,size:"md",inline:!0}),r.jsx(a,{...e,size:"lg",inline:!0})]})},m={render:e=>r.jsx("div",{style:{display:"flex",gap:"20px"},children:r.jsx(a,{...e,color:"error",children:r.jsx("div",{style:{padding:"8px",background:"var(--wim-color-surface-variant)",borderRadius:"8px"},children:r.jsx(f,{name:"BellIcon"})})})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="JD" />,
    color: "success",
    position: "bottom-right"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <div style={{
    display: "flex",
    gap: "20px"
  }}>
      <Indicator {...args} color="primary">
        <Avatar initials="P" />
      </Indicator>
      <Indicator {...args} color="success">
        <Avatar initials="S" />
      </Indicator>
      <Indicator {...args} color="warning">
        <Avatar initials="W" />
      </Indicator>
      <Indicator {...args} color="error">
        <Avatar initials="E" />
      </Indicator>
      <Indicator {...args} color="neutral">
        <Avatar initials="N" />
      </Indicator>
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    }}>
        <Indicator {...args} color="success" inline />
        <span>{t("story.indicator_online")}</span>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>
      <Indicator {...args} size="sm" inline />
      <Indicator {...args} size="md" inline />
      <Indicator {...args} size="lg" inline />
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <div style={{
    display: "flex",
    gap: "20px"
  }}>
      <Indicator {...args} color="error">
        <div style={{
        padding: "8px",
        background: "var(--wim-color-surface-variant)",
        borderRadius: "8px"
      }}>
          <Icon name="BellIcon" />
        </div>
      </Indicator>
    </div>
}`,...m.parameters?.docs?.source}}};const j=["Default","Colors","Pulse","Inline","Sizes","WithIcons"],N=Object.freeze(Object.defineProperty({__proto__:null,Colors:n,Default:l,Inline:s,Pulse:t,Sizes:c,WithIcons:m,__namedExportsOrder:j,default:I},Symbol.toStringTag,{value:"Module"}));export{n as C,l as D,N as I,t as P,c as S,s as a};
