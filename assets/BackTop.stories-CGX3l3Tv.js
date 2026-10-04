"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{a as l,en as u}from"./iframe-Bq9jGRMU.js";import{t as d}from"./classnames-D09xBJOL.js";import{n as f,r as p,t as m}from"./dist-NUpu5x22.js";import{n as h,t as g}from"./useWimTranslation-akUKuRsR.js";import{n as _,t as v}from"./Icon-B_89lpXW.js";var y,b,x,S,C;function w(){return(w=t((()=>{y=`_root_139hf_3`,b=`_hidden_139hf_13`,x=`_content_139hf_18`,S=`_icon_139hf_34`,C={root:y,hidden:b,content:x,icon:S}})))()}var T,E,D,O;function k(){return(k=t((()=>{T=e(r(),1),E=e(d(),1),p(),_(),g(),w(),l(),D=c(),O=T.forwardRef(({target:e=()=>window,visibilityHeight:t=400,onClick:n,children:r,className:i,style:a,"aria-label":o,asChild:s=!1},c)=>{let{t:l}=h(`common`),[d,p]=(0,T.useState)(!1),g=(0,T.useCallback)(e=>e===window||e instanceof Window?window.pageYOffset||document.documentElement.scrollTop:e instanceof Document?document.documentElement.scrollTop:e.scrollTop,[]),_=(0,T.useCallback)(()=>{let n=e();if(!n)return;let r=g(n);p(r>t)},[e,t,g]);(0,T.useEffect)(()=>{let t=e();if(t)return requestAnimationFrame(_),t.addEventListener(`scroll`,_),()=>{t.removeEventListener(`scroll`,_)}},[e,_]);let y=t=>{let r=e();r&&(r===window||r instanceof Window?window.scrollTo({top:0,behavior:`smooth`}):r instanceof Document?document.documentElement.scrollTo({top:0,behavior:`smooth`}):r.scrollTo({top:0,behavior:`smooth`}),n?.(t))},b=(0,D.jsx)(`div`,{className:C.content,children:(0,D.jsx)(v,{component:u,className:C.icon})});return(0,D.jsx)(s?m:`div`,{ref:c,className:(0,E.default)(`wim-back-top`,C.root,!d&&C.hidden,i),style:a,onClick:y,role:`button`,tabIndex:0,"aria-label":o??l(`a11y.back_to_top`),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&e.currentTarget.click()},children:(0,D.jsx)(f,{children:r||b})})}),O.displayName=`BackTop`,O.__docgenInfo={description:``,methods:[],displayName:`BackTop`,props:{target:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => HTMLElement | Window | Document | null`,signature:{arguments:[],return:{name:`union`,raw:`HTMLElement | Window | Document | null`,elements:[{name:`HTMLElement`},{name:`Window`},{name:`Document`},{name:`null`}]}}},description:`Target container that will be scrolled`,defaultValue:{value:`() => window`,computed:!1}},visibilityHeight:{required:!1,tsType:{name:`number`},description:`Scroll height after which the button becomes visible`,defaultValue:{value:`400`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.MouseEvent<HTMLDivElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},name:`e`}],return:{name:`void`}}},description:`Callback when clicked`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Children to be rendered inside the button`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Style attribute`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible label for the button`},asChild:{required:!1,tsType:{name:`boolean`},description:`Whether to render as a child element.`,defaultValue:{value:`false`,computed:!1}}}}})))()}var A=n({Basic:()=>P,CustomElement:()=>F,SpecificTarget:()=>L,__namedExportsOrder:()=>R,default:()=>N}),j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{k(),j=e(r(),1),a(),o(),M=c(),N={title:`Components/Navigation Utilities/BackTop`,component:O,parameters:{layout:`fullscreen`}},P={render:e=>{let{t}=i(s);return(0,M.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,M.jsx)(`p`,{children:t(`story.backtop_scroll`)}),(0,M.jsx)(`p`,{children:t(`story.backtop_visible_400`)}),(0,M.jsx)(O,{...e,visibilityHeight:400})]})}},F={render:e=>{let{t}=i(s);return(0,M.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,M.jsx)(`p`,{children:t(`story.backtop_custom_scroll`)}),(0,M.jsx)(`p`,{children:t(`story.backtop_visible_200`)}),(0,M.jsx)(O,{...e,visibilityHeight:200,children:(0,M.jsx)(`div`,{style:{height:40,width:40,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:4,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`,fontSize:14},children:t(`story.backtop_up`)})})]})}},I=()=>{let[e,t]=j.useState(null),{t:n}=i(s);return(0,M.jsxs)(`div`,{style:{padding:`20px`},children:[(0,M.jsx)(`p`,{children:n(`story.backtop_target_msg`)}),(0,M.jsx)(`div`,{ref:e=>t(e),tabIndex:0,style:{height:`300px`,overflowY:`scroll`,border:`1px solid var(--wim-color-primary)`,padding:`20px`,position:`relative`},children:(0,M.jsxs)(`div`,{style:{height:`1000px`},children:[(0,M.jsx)(`p`,{children:n(`story.backtop_inside_box`)}),(0,M.jsx)(O,{target:()=>e,visibilityHeight:100,style:{position:`absolute`,right:20,bottom:20}})]})})]})},L={render:()=>(0,M.jsx)(I,{})},R=[`Basic`,`CustomElement`,`SpecificTarget`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.backtop_scroll")}</p>
        <p>{t("story.backtop_visible_400")}</p>
        <BackTop {...args} visibilityHeight={400} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.backtop_custom_scroll")}</p>
        <p>{t("story.backtop_visible_200")}</p>
        <BackTop {...args} visibilityHeight={200}>
          <div style={{
          height: 40,
          width: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          backgroundColor: "var(--wim-color-primary)",
          color: "var(--wim-color-text-on-primary)",
          fontSize: 14
        }}>
            {t("story.backtop_up")}
          </div>
        </BackTop>
      </div>;
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...L.parameters?.docs?.source}}}})))()}export{z as a,L as i,P as n,F as r,A as t};