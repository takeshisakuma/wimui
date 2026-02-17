import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as u}from"./index-BviBMDxs.js";const d=({children:t,highlight:r,highlightClassName:y,highlightStyles:f,component:l="span",className:g,...c})=>{if(typeof t!="string")return s.jsx(l,{className:g,...c,children:t});if(!r||Array.isArray(r)&&r.length===0)return s.jsx(l,{className:g,...c,children:t});const m=(Array.isArray(r)?r:[r]).filter(e=>e.length>0).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));if(m.length===0)return s.jsx(l,{className:g,...c,children:t});const p=new RegExp(`(${m.join("|")})`,"gi"),S=t.split(p);return s.jsx(l,{className:u("wim-highlight-container",g),...c,children:S.map((e,x)=>{const C=p.test(e);return p.lastIndex=0,C?s.jsx("mark",{className:u("wim-highlight",y),style:f,children:e},x):e})})};d.__docgenInfo={description:"Highlight component that emphasizes specific parts of a text.",methods:[],displayName:"Highlight",props:{children:{required:!0,tsType:{name:"string"},description:"The full text to highlight substrings in."},highlight:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Substring(s) to highlight."},highlightClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for the highlighted `<mark>` element."},highlightStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles for the highlighted `<mark>` element."},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:'The HTML tag or component to use for the container. Default is "span".',defaultValue:{value:'"span"',computed:!1}}}};const R={title:"Component/Typography & Icons/Highlight",component:d,parameters:{layout:"centered"}},a={args:{children:"You can highlight specific words in this sentence.",highlight:"highlight"}},i={args:{children:"React, Vue, and Angular are popular frontend frameworks.",highlight:["React","Vue","Angular"]}},n={args:{children:"SEARCH RESULTS FOR SEARCH TERM",highlight:"search"}},o={args:{children:"Custom highlight styles can be applied.",highlight:"Custom",highlightStyles:{backgroundColor:"var(--color-primary)",color:"var(--color-text-on-primary)",borderRadius:"4px",padding:"0 4px"}}},h={args:{children:"This is a paragraph with a highlight.",highlight:"paragraph",component:"p",style:{fontSize:"20px",color:"gray"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "You can highlight specific words in this sentence.",
    highlight: "highlight"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "React, Vue, and Angular are popular frontend frameworks.",
    highlight: ["React", "Vue", "Angular"]
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "SEARCH RESULTS FOR SEARCH TERM",
    highlight: "search"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Custom highlight styles can be applied.",
    highlight: "Custom",
    highlightStyles: {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-text-on-primary)",
      borderRadius: "4px",
      padding: "0 4px"
    }
  }
}`,...o.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a paragraph with a highlight.",
    highlight: "paragraph",
    component: "p",
    style: {
      fontSize: "20px",
      color: "gray"
    }
  }
}`,...h.parameters?.docs?.source}}};const T=["Default","MultipleHighlights","CaseInsensitive","CustomStyle","CustomComponent"],E=Object.freeze(Object.defineProperty({__proto__:null,CaseInsensitive:n,CustomComponent:h,CustomStyle:o,Default:a,MultipleHighlights:i,__namedExportsOrder:T,default:R},Symbol.toStringTag,{value:"Module"}));export{n as C,a as D,E as H,i as M,o as a,h as b};
