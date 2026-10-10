"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,r as d,t as f}from"./dist-DOTMK4FX.js";var p,m,h;function g(){return(g=t((()=>{p=`_root_1ne65_2`,m=`_mark_1ne65_6`,h={root:p,mark:m}})))()}var _,v,y,b;function x(){return(x=t((()=>{_=e(r(),1),v=e(l(),1),d(),g(),y=c(),b=_.forwardRef(({children:e,highlight:t,highlightClassName:n,highlightStyles:r,as:i=`span`,asChild:a=!1,className:o,...s},c)=>{let l=a?f:i,d=e=>{if(!t||Array.isArray(t)&&t.length===0)return null;let i=(Array.isArray(t)?t:[t]).filter(e=>e.length>0).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`));if(i.length===0)return null;let a=RegExp(`(${i.join(`|`)})`,`gi`);return e.split(a).map((e,t)=>{let i=a.test(e);return a.lastIndex=0,i?(0,y.jsx)(`mark`,{className:(0,v.default)(h.mark,n),style:r,children:e},t):e})};if(a){let t=_.Children.only(e),n=t.props.children,r=typeof n==`string`?d(n):null,i=r?_.cloneElement(t,{},r):t;return(0,y.jsx)(l,{className:(0,v.default)(`wim-highlight`,h.root,o),ref:c,...s,children:(0,y.jsx)(u,{children:i})})}if(typeof e!=`string`)return(0,y.jsx)(l,{className:(0,v.default)(`wim-highlight`,h.root,o),ref:c,...s,children:(0,y.jsx)(u,{children:e})});let p=d(e);return(0,y.jsx)(l,{className:(0,v.default)(`wim-highlight`,h.root,o),ref:c,...s,children:(0,y.jsx)(u,{children:p??e})})}),b.displayName=`Highlight`,b.__docgenInfo={description:`Highlight component that emphasizes specific parts of a text.`,methods:[],displayName:`Highlight`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The full text to highlight substrings in.`},highlight:{required:!0,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:`Substring(s) to highlight.`},highlightClassName:{required:!1,tsType:{name:`string`},description:"Custom class name for the highlighted `<mark>` element."},highlightStyles:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:"Custom styles for the highlighted `<mark>` element."},as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:`The HTML tag or component to use for the container. Default is "span".`,defaultValue:{value:`"span"`,computed:!1}},asChild:{required:!1,tsType:{name:`boolean`},description:`If true, the component will be rendered as its child.`,defaultValue:{value:`false`,computed:!1}}}}})))()}var S=n({AsChild:()=>A,CaseInsensitive:()=>D,CustomComponent:()=>k,CustomStyle:()=>O,Default:()=>T,MultipleHighlights:()=>E,__namedExportsOrder:()=>j,default:()=>w}),C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{a(),o(),x(),C=c(),w={title:`Components/Typography & Icons/Highlight`,component:b,parameters:{layout:`centered`}},T={render:e=>{let{t}=i(s);return(0,C.jsx)(b,{...e,highlight:t(`story.highlight_default_term`),children:t(`story.highlight_default_text`)})}},E={render:e=>{let{t}=i(s);return(0,C.jsx)(b,{...e,highlight:[`React`,`Vue`,`Angular`],children:t(`story.highlight_multi_text`)})}},D={render:e=>{let{t}=i(s);return(0,C.jsx)(b,{...e,highlight:t(`story.highlight_case_term`),children:t(`story.highlight_case_text`)})}},O={render:e=>{let{t}=i(s);return(0,C.jsx)(b,{...e,highlight:t(`story.highlight_custom_term`),highlightStyles:{backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`,borderRadius:`4px`,padding:`0 4px`},children:t(`story.highlight_custom_text`)})}},k={render:e=>{let{t}=i(s);return(0,C.jsx)(b,{...e,highlight:t(`story.highlight_para_term`),as:`p`,style:{fontSize:`20px`,color:`var(--wim-color-text-secondary)`},children:t(`story.highlight_para_text`)})}},A={render:e=>{let{t}=i(s);return(0,C.jsx)(b,{...e,highlight:t(`story.highlight_link_term`),asChild:!0,children:(0,C.jsx)(`a`,{href:`/`,style:{color:`var(--wim-color-text-accent)`,textDecoration:`underline`},children:t(`story.highlight_link_text`)})})}},j=[`Default`,`MultipleHighlights`,`CaseInsensitive`,`CustomStyle`,`CustomComponent`,`AsChild`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_default_term")}>
        {t("story.highlight_default_text")}
      </Highlight>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // Framework names are brand identifiers, shared across locales.
    return <Highlight {...args} highlight={["React", "Vue", "Angular"]}>
        {t("story.highlight_multi_text")}
      </Highlight>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_case_term")}>
        {t("story.highlight_case_text")}
      </Highlight>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_custom_term")} highlightStyles={{
      backgroundColor: "var(--wim-color-primary)",
      color: "var(--wim-color-text-on-primary)",
      borderRadius: "4px",
      padding: "0 4px"
    }}>
        {t("story.highlight_custom_text")}
      </Highlight>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_para_term")} as="p" style={{
      fontSize: "20px",
      color: "var(--wim-color-text-secondary)"
    }}>
        {t("story.highlight_para_text")}
      </Highlight>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_link_term")} asChild>
        <a href="/" style={{
        color: "var(--wim-color-text-accent)",
        textDecoration: "underline"
      }}>
          {t("story.highlight_link_text")}
        </a>
      </Highlight>;
  }
}`,...A.parameters?.docs?.source}}}})))()}export{S as a,T as i,k as n,E as o,O as r,M as s,D as t};