import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as v}from"./index-CplnqdeP.js";import{g as b}from"./style-utils-Bzkn8Zxa.js";import{A as n}from"./Avatar-CuhPWn_E.js";import{I as h}from"./Icon-C137SdlL.js";import{A as I}from"./iframe-B6UUHjqT.js";import{u as j}from"./useTranslation-CvEZa3qJ.js";const r=({children:a,color:t="primary",size:d="md",position:g="top-right",pulse:y=!1,inline:u=!1,className:x,style:f})=>{const p=typeof t=="string"&&["primary","success","error","warning","neutral"].includes(t);return e.jsxs("span",{className:v("wim-indicator",u&&"wim-indicator--inline",x),style:f,children:[a,e.jsx("span",{className:v("wim-indicator__dot",p&&`wim-indicator__dot--${t}`,`wim-indicator__dot--${d}`,!u&&`wim-indicator__dot--${g}`,y&&"wim-indicator__dot--pulse"),style:{backgroundColor:p?void 0:b(t)}})]})};r.__docgenInfo={description:"要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。",methods:[],displayName:"Indicator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:"T | (string & {})",elements:[{name:"union",raw:"WimColorKey | WimColorToken",elements:[{name:"union",raw:`| "primary"
| "primary-hover"
| "primary-active"
| "primary-light"
| "primary-container-alpha"
| "secondary"
| "informative"
| "destructive"
| "positive"
| "caution"
| "disabled"
// Text colors
| "text-primary"
| "text-secondary"
| "text-tertiary"
| "text-disabled"
| "text-white"
| "text-error"
| "text-placeholder"
// Text on semantic backgrounds
| "text-on-primary"
| "text-on-secondary"
| "text-on-destructive"
| "text-on-positive"
| "text-on-caution"
| "text-on-informative"
| "text-on-disabled"
| "text-on-overlay"
// Surface / background colors
| "surface"
| "surface-variant"
| "surface-hover"
| "surface-variant-alpha"
| "bg-app"
| "bg-component"
| "bg-primary"
| "bg-secondary"
| "bg-tertiary"
| "bg-hover"
// Border / focus colors
| "border"
| "border-secondary"
| "focus-outline"
// Overlay colors
| "overlay-bg"
| "overlay-bg-light"
| "overlay-bg-dark"
// Scrollbar colors
| "scrollbar-thumb"
| "scrollbar-track"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-hover"'},{name:"literal",value:'"primary-active"'},{name:"literal",value:'"primary-light"'},{name:"literal",value:'"primary-container-alpha"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"informative"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"caution"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'},{name:"literal",value:'"text-disabled"'},{name:"literal",value:'"text-white"'},{name:"literal",value:'"text-error"'},{name:"literal",value:'"text-placeholder"'},{name:"literal",value:'"text-on-primary"'},{name:"literal",value:'"text-on-secondary"'},{name:"literal",value:'"text-on-destructive"'},{name:"literal",value:'"text-on-positive"'},{name:"literal",value:'"text-on-caution"'},{name:"literal",value:'"text-on-informative"'},{name:"literal",value:'"text-on-disabled"'},{name:"literal",value:'"text-on-overlay"'},{name:"literal",value:'"surface"'},{name:"literal",value:'"surface-variant"'},{name:"literal",value:'"surface-hover"'},{name:"literal",value:'"surface-variant-alpha"'},{name:"literal",value:'"bg-app"'},{name:"literal",value:'"bg-component"'},{name:"literal",value:'"bg-primary"'},{name:"literal",value:'"bg-secondary"'},{name:"literal",value:'"bg-tertiary"'},{name:"literal",value:'"bg-hover"'},{name:"literal",value:'"border"'},{name:"literal",value:'"border-secondary"'},{name:"literal",value:'"focus-outline"'},{name:"literal",value:'"overlay-bg"'},{name:"literal",value:'"overlay-bg-light"'},{name:"literal",value:'"overlay-bg-dark"'},{name:"literal",value:'"scrollbar-thumb"'},{name:"literal",value:'"scrollbar-track"'}]},{name:"union",raw:"| `var(--wim-color-${WimColorKey})`\n| `var(--wim-${WimColorKey})`",elements:[{name:"literal",value:"`var(--wim-color-${WimColorKey})`"},{name:"literal",value:"`var(--wim-${WimColorKey})`"}]}]},{name:"unknown"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},pulse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const w={title:"Components/Data Indicators/Indicator",component:r,argTypes:{color:{control:"select",options:["primary","success","error","warning","neutral"]},size:{control:"radio",options:["sm","md","lg"]},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"]}}},i={args:{children:e.jsx(n,{initials:"JD"}),color:"success",position:"bottom-right"}},l={render:a=>e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(r,{...a,color:"primary",children:e.jsx(n,{initials:"P"})}),e.jsx(r,{...a,color:"success",children:e.jsx(n,{initials:"S"})}),e.jsx(r,{...a,color:"warning",children:e.jsx(n,{initials:"W"})}),e.jsx(r,{...a,color:"error",children:e.jsx(n,{initials:"E"})}),e.jsx(r,{...a,color:"neutral",children:e.jsx(n,{initials:"N"})})]})},o={args:{children:e.jsx(n,{initials:"AL"}),color:"success",pulse:!0,position:"bottom-right"}},s={render:function(t){const{t:d}=j(I);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...t,color:"success",inline:!0}),e.jsx("span",{children:d("story.indicator_online")})]})}},c={render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx(r,{...a,size:"sm",inline:!0}),e.jsx(r,{...a,size:"md",inline:!0}),e.jsx(r,{...a,size:"lg",inline:!0})]})},m={render:a=>e.jsx("div",{style:{display:"flex",gap:"20px"},children:e.jsx(r,{...a,color:"error",children:e.jsx("div",{style:{padding:"8px",background:"var(--wim-color-surface-variant)",borderRadius:"8px"},children:e.jsx(h,{name:"BellIcon"})})})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="JD" />,
    color: "success",
    position: "bottom-right"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Avatar initials="AL" />,
    color: "success",
    pulse: true,
    position: "bottom-right"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }}>
      <Indicator {...args} size="sm" inline />
      <Indicator {...args} size="md" inline />
      <Indicator {...args} size="lg" inline />
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
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
}`,...m.parameters?.docs?.source}}};const S=["Default","Colors","Pulse","Inline","Sizes","WithIcons"],P=Object.freeze(Object.defineProperty({__proto__:null,Colors:l,Default:i,Inline:s,Pulse:o,Sizes:c,WithIcons:m,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{l as C,i as D,P as I,o as P,c as S,s as a};
