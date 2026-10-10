"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./Button-DSrkNfg0.js";import{n as f}from"./mergeRefs-BMqeIKXN.js";var p,m,h;function g(){return(g=t((()=>{p=`_root_2y1hd_2`,m=`_affixed_2y1hd_2`,h={root:p,affixed:m}})))()}var _,v,y,b;function x(){return(x=t((()=>{_=e(r(),1),v=e(l(),1),g(),y=c(),b=_.forwardRef(function({offsetTop:e,offsetBottom:t,onChange:n,target:r=()=>window,children:i,className:a,style:o},s){let[c,l]=(0,_.useState)({isAffixed:!1}),u=(0,_.useRef)(null),d=(0,_.useRef)(null),p=(0,_.useRef)(null),m=(0,_.useRef)(!1),g=(0,_.useCallback)(()=>{if(!u.current)return;let i=r();if(!i)return;let a=u.current.getBoundingClientRect(),o=i===window||i instanceof Window?{top:0,bottom:window.innerHeight}:i.getBoundingClientRect(),s=!1,c,d;e!==void 0&&a.top<o.top+e?(s=!0,c={position:`fixed`,top:o.top+e,width:a.width,height:a.height,zIndex:1e3},d={width:a.width,height:a.height}):t!==void 0&&a.bottom>o.bottom-t&&(s=!0,c={position:`fixed`,bottom:window.innerHeight-o.bottom+t,width:a.width,height:a.height,zIndex:1e3},d={width:a.width,height:a.height}),s!==m.current&&(m.current=s,n?.(s)),l(e=>e.isAffixed===s&&JSON.stringify(e.affixStyle)===JSON.stringify(c)&&JSON.stringify(e.placeholderStyle)===JSON.stringify(d)?e:{isAffixed:s,affixStyle:c,placeholderStyle:d})},[e,t,r,n]);return(0,_.useEffect)(()=>{let e=r();if(!e)return;let t=()=>{p.current&&window.cancelAnimationFrame(p.current),p.current=window.requestAnimationFrame(g)};return e.addEventListener(`scroll`,t),window.addEventListener(`resize`,t),g(),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t),p.current&&window.cancelAnimationFrame(p.current)}},[r,g]),(0,y.jsx)(`div`,{ref:f(u,s),style:{...c.placeholderStyle,...o},className:(0,v.default)(a),children:(0,y.jsx)(`div`,{ref:d,className:(0,v.default)(`wim-affix`,h.root,c.isAffixed&&h.affixed),style:c.affixStyle,children:i})})}),b.displayName=`Affix`,b.__docgenInfo={description:`Pins children while scrolling.

\`ref\` points at the in-flow placeholder (the outer element), not the
\`position: fixed\` inner wrapper. After the inner content sticks, measure
this node for document position — the children's rect is the viewport edge.`,methods:[],displayName:`Affix`,props:{offsetTop:{required:!1,tsType:{name:`number`},description:`Offset distance from the top of the window (in pixels)`},offsetBottom:{required:!1,tsType:{name:`number`},description:`Offset distance from the bottom of the window (in pixels)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(lastAffixed: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`lastAffixed`}],return:{name:`void`}}},description:`Callback when the affix state changes`},target:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => HTMLElement | Window | null`,signature:{arguments:[],return:{name:`union`,raw:`HTMLElement | Window | null`,elements:[{name:`HTMLElement`},{name:`Window`},{name:`null`}]}}},description:`Target container that will be scrolled`,defaultValue:{value:`() => window`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Children to be rendered inside the affix`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Style attribute`}}}})))()}var S=n({Basic:()=>T,OffsetBottom:()=>E,__namedExportsOrder:()=>D,default:()=>w}),C,w,T,E,D;function O(){return(O=t((()=>{r(),a(),o(),x(),u(),C=c(),w={title:`Components/Navigation Utilities/Affix`,component:b,tags:[],parameters:{layout:`fullscreen`}},T={render:e=>{let{t}=i(s);return(0,C.jsx)(`div`,{id:`affix-container-top`,style:{height:`400px`,overflow:`auto`,padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,C.jsxs)(`div`,{style:{height:`800px`},children:[(0,C.jsx)(`p`,{children:t(`story.affix_scroll_top`)}),(0,C.jsxs)(`div`,{style:{marginTop:`300px`},children:[(0,C.jsx)(`p`,{children:t(`story.affix_scroll_bottom_2`,`Scroll down here...`)}),(0,C.jsx)(b,{...e,offsetTop:20,target:()=>document.getElementById(`affix-container-top`),children:(0,C.jsx)(d,{size:`md`,children:t(`story.affix_top`)})})]})]})})}},E={render:e=>{let{t}=i(s);return(0,C.jsx)(`div`,{id:`affix-container-bottom`,style:{height:`400px`,overflow:`auto`,padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,C.jsxs)(`div`,{style:{height:`800px`},children:[(0,C.jsx)(`p`,{children:t(`story.affix_scroll_bottom`)}),(0,C.jsxs)(`div`,{style:{marginTop:`400px`},children:[(0,C.jsx)(`p`,{children:t(`story.affix_scroll_bottom_2`,`Scroll down here...`)}),(0,C.jsx)(b,{...e,offsetBottom:20,target:()=>document.getElementById(`affix-container-bottom`),children:(0,C.jsx)(d,{size:`md`,children:t(`story.affix_bottom`)})}),(0,C.jsx)(`p`,{children:t(`story.affix_more`)})]})]})})}},D=[`Basic`,`OffsetBottom`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div id="affix-container-top" style={{
      height: "400px",
      overflow: "auto",
      padding: "20px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "var(--wim-radius-md)"
    }}>
        <div style={{
        height: "800px"
      }}>
          <p>{t("story.affix_scroll_top")}</p>
          <div style={{
          marginTop: "300px"
        }}>
            <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
            <Affix {...args} offsetTop={20} target={() => document.getElementById("affix-container-top")}>
              <Button size="md">{t("story.affix_top")}</Button>
            </Affix>
          </div>
        </div>
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div id="affix-container-bottom" style={{
      height: "400px",
      overflow: "auto",
      padding: "20px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "var(--wim-radius-md)"
    }}>
        <div style={{
        height: "800px"
      }}>
          <p>{t("story.affix_scroll_bottom")}</p>
          <div style={{
          marginTop: "400px"
        }}>
            <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
            <Affix {...args} offsetBottom={20} target={() => document.getElementById("affix-container-bottom")}>
              <Button size="md">{t("story.affix_bottom")}</Button>
            </Affix>
            <p>{t("story.affix_more")}</p>
          </div>
        </div>
      </div>;
  }
}`,...E.parameters?.docs?.source}}}})))()}export{O as i,T as n,E as r,S as t};