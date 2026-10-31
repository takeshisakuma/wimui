"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-DzWR_e8l.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as d}from"./Button-C-16RMzV.js";import{n as f}from"./mergeRefs-DzMyVUga.js";import{n as p,t as m}from"./observeMove-COVas2UN.js";var h,g,_;function v(){return(v=t((()=>{h=`_root_2y1hd_2`,g=`_affixed_2y1hd_2`,_={root:h,affixed:g}})))()}var y,b,x,S;function C(){return(C=t((()=>{y=e(r(),1),b=e(l(),1),v(),m(),x=c(),S=y.forwardRef(function({offsetTop:e,offsetBottom:t,onChange:n,target:r=()=>window,children:i,className:a,style:o},s){let[c,l]=(0,y.useState)({isAffixed:!1}),u=(0,y.useRef)(null),d=(0,y.useRef)(null),m=(0,y.useRef)(null),h=(0,y.useRef)(!1),g=(0,y.useCallback)(()=>{if(!u.current)return;let i=r();if(!i)return;let a=u.current.getBoundingClientRect(),o=i===window||i instanceof Window?{top:0,bottom:window.innerHeight}:i.getBoundingClientRect(),s=!1,c,d;e!==void 0&&a.top<o.top+e?(s=!0,c={position:`fixed`,top:o.top+e,width:a.width,height:a.height,zIndex:1e3},d={width:a.width,height:a.height}):t!==void 0&&a.bottom>o.bottom-t&&(s=!0,c={position:`fixed`,bottom:window.innerHeight-o.bottom+t,width:a.width,height:a.height,zIndex:1e3},d={width:a.width,height:a.height}),s!==h.current&&(h.current=s,n?.(s)),l(e=>e.isAffixed===s&&JSON.stringify(e.affixStyle)===JSON.stringify(c)&&JSON.stringify(e.placeholderStyle)===JSON.stringify(d)?e:{isAffixed:s,affixStyle:c,placeholderStyle:d})},[e,t,r,n]);return(0,y.useEffect)(()=>{let e=r();if(!e)return;let t=()=>{m.current&&window.cancelAnimationFrame(m.current),m.current=window.requestAnimationFrame(g)};e.addEventListener(`scroll`,t),window.addEventListener(`resize`,t);let n=u.current?p(u.current,t):void 0;return g(),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t),n?.(),m.current&&window.cancelAnimationFrame(m.current)}},[r,g]),(0,x.jsx)(`div`,{ref:f(u,s),style:{...c.placeholderStyle,...o},className:(0,b.default)(a),children:(0,x.jsx)(`div`,{ref:d,className:(0,b.default)(`wim-affix`,_.root,c.isAffixed&&_.affixed),style:c.affixStyle,children:i})})}),S.displayName=`Affix`,S.__docgenInfo={description:`Pins children while scrolling.

\`ref\` points at the in-flow placeholder (the outer element), not the
\`position: fixed\` inner wrapper. After the inner content sticks, measure
this node for document position — the children's rect is the viewport edge.`,methods:[],displayName:`Affix`,props:{offsetTop:{required:!1,tsType:{name:`number`},description:`Offset distance from the top of the window (in pixels)`},offsetBottom:{required:!1,tsType:{name:`number`},description:`Offset distance from the bottom of the window (in pixels)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(lastAffixed: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`lastAffixed`}],return:{name:`void`}}},description:`Callback when the affix state changes`},target:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => HTMLElement | Window | null`,signature:{arguments:[],return:{name:`union`,raw:`HTMLElement | Window | null`,elements:[{name:`HTMLElement`},{name:`Window`},{name:`null`}]}}},description:`Target container that will be scrolled`,defaultValue:{value:`() => window`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Children to be rendered inside the affix`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Style attribute`}}}})))()}var w=n({Basic:()=>D,OffsetBottom:()=>O,__namedExportsOrder:()=>k,default:()=>E}),T,E,D,O,k;function A(){return(A=t((()=>{r(),a(),o(),C(),u(),T=c(),E={title:`Components/Navigation Utilities/Affix`,component:S,tags:[],parameters:{layout:`fullscreen`}},D={render:e=>{let{t}=i(s);return(0,T.jsx)(`div`,{id:`affix-container-top`,style:{height:`400px`,overflow:`auto`,padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,T.jsxs)(`div`,{style:{height:`800px`},children:[(0,T.jsx)(`p`,{children:t(`story.affix_scroll_top`)}),(0,T.jsxs)(`div`,{style:{marginTop:`300px`},children:[(0,T.jsx)(`p`,{children:t(`story.affix_scroll_bottom_2`,`Scroll down here...`)}),(0,T.jsx)(S,{...e,offsetTop:20,target:()=>document.getElementById(`affix-container-top`),children:(0,T.jsx)(d,{size:`md`,children:t(`story.affix_top`)})})]})]})})}},O={render:e=>{let{t}=i(s);return(0,T.jsx)(`div`,{id:`affix-container-bottom`,style:{height:`400px`,overflow:`auto`,padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,T.jsxs)(`div`,{style:{height:`800px`},children:[(0,T.jsx)(`p`,{children:t(`story.affix_scroll_bottom`)}),(0,T.jsxs)(`div`,{style:{marginTop:`400px`},children:[(0,T.jsx)(`p`,{children:t(`story.affix_scroll_bottom_2`,`Scroll down here...`)}),(0,T.jsx)(S,{...e,offsetBottom:20,target:()=>document.getElementById(`affix-container-bottom`),children:(0,T.jsx)(d,{size:`md`,children:t(`story.affix_bottom`)})}),(0,T.jsx)(`p`,{children:t(`story.affix_more`)})]})]})})}},k=[`Basic`,`OffsetBottom`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}}})))()}export{A as i,D as n,O as r,w as t};