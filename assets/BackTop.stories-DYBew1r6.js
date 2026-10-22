"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-MNZnjzfn.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{a as l,en as u}from"./iframe-DBOxP6v-.js";import{t as d}from"./classnames-DQoS6hca.js";import{n as f,r as p,t as m}from"./dist-DbQCIafo.js";import{n as h,t as g}from"./useWimTranslation-D32hBdyX.js";import{n as _,t as v}from"./common-C-I7BklL.js";import{n as y,t as b}from"./Icon-BFrkUykk.js";var x,S,C,w,T;function E(){return(E=t((()=>{x=`_root_139hf_3`,S=`_hidden_139hf_13`,C=`_content_139hf_18`,w=`_icon_139hf_34`,T={root:x,hidden:S,content:C,icon:w}})))()}var D,O,k,A;function j(){return(j=t((()=>{D=e(r(),1),O=e(d(),1),p(),y(),g(),_(),E(),l(),k=c(),A=D.forwardRef(({target:e=()=>window,visibilityHeight:t=400,onClick:n,children:r,className:i,style:a,"aria-label":o,"aria-labelledby":s,"aria-describedby":c,asChild:l=!1},d)=>{let{t:p}=h(v),[g,_]=(0,D.useState)(!1),y=(0,D.useCallback)(e=>e===window||e instanceof Window?window.pageYOffset||document.documentElement.scrollTop:e instanceof Document?document.documentElement.scrollTop:e.scrollTop,[]),x=(0,D.useCallback)(()=>{let n=e();if(!n)return;let r=y(n);_(r>t)},[e,t,y]);(0,D.useEffect)(()=>{let t=e();if(t)return requestAnimationFrame(x),t.addEventListener(`scroll`,x),()=>{t.removeEventListener(`scroll`,x)}},[e,x]);let S=t=>{let r=e();r&&(r===window||r instanceof Window?window.scrollTo({top:0,behavior:`smooth`}):r instanceof Document?document.documentElement.scrollTo({top:0,behavior:`smooth`}):r.scrollTo({top:0,behavior:`smooth`}),n?.(t))},C=(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(b,{component:u,className:T.icon})});return(0,k.jsx)(l?m:`div`,{ref:d,className:(0,O.default)(`wim-back-top`,T.root,!g&&T.hidden,i),style:a,onClick:S,role:`button`,tabIndex:0,"aria-label":s?void 0:o??p(`a11y.back_to_top`),"aria-labelledby":s,"aria-describedby":c,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&e.currentTarget.click()},children:(0,k.jsx)(f,{children:r||C})})}),A.displayName=`BackTop`,A.__docgenInfo={description:``,methods:[],displayName:`BackTop`,props:{target:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => HTMLElement | Window | Document | null`,signature:{arguments:[],return:{name:`union`,raw:`HTMLElement | Window | Document | null`,elements:[{name:`HTMLElement`},{name:`Window`},{name:`Document`},{name:`null`}]}}},description:`Target container that will be scrolled`,defaultValue:{value:`() => window`,computed:!1}},visibilityHeight:{required:!1,tsType:{name:`number`},description:`Scroll height after which the button becomes visible`,defaultValue:{value:`400`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.MouseEvent<HTMLDivElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},name:`e`}],return:{name:`void`}}},description:`Callback when clicked`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Children to be rendered inside the button`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Style attribute`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible label for the button`},"aria-labelledby":{required:!1,tsType:{name:`string`},description:"ID of the element that labels the button. Takes precedence over `aria-label`."},"aria-describedby":{required:!1,tsType:{name:`string`},description:`ID of the element that describes the button.`},asChild:{required:!1,tsType:{name:`boolean`},description:`Whether to render as a child element.`,defaultValue:{value:`false`,computed:!1}}}}})))()}var M=n({Basic:()=>I,CustomElement:()=>L,SpecificTarget:()=>z,__namedExportsOrder:()=>B,default:()=>F}),N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{j(),N=e(r(),1),a(),o(),P=c(),F={title:`Components/Navigation Utilities/BackTop`,component:A,parameters:{layout:`fullscreen`}},I={render:e=>{let{t}=i(s);return(0,P.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,P.jsx)(`p`,{children:t(`story.backtop_scroll`)}),(0,P.jsx)(`p`,{children:t(`story.backtop_visible_400`)}),(0,P.jsx)(A,{...e,visibilityHeight:400})]})}},L={render:e=>{let{t}=i(s);return(0,P.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,P.jsx)(`p`,{children:t(`story.backtop_custom_scroll`)}),(0,P.jsx)(`p`,{children:t(`story.backtop_visible_200`)}),(0,P.jsx)(A,{...e,visibilityHeight:200,children:(0,P.jsx)(`div`,{style:{height:40,width:40,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:4,backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`,fontSize:14},children:t(`story.backtop_up`)})})]})}},R=()=>{let[e,t]=N.useState(null),{t:n}=i(s);return(0,P.jsxs)(`div`,{style:{padding:`20px`},children:[(0,P.jsx)(`p`,{children:n(`story.backtop_target_msg`)}),(0,P.jsx)(`div`,{ref:e=>t(e),tabIndex:0,style:{height:`300px`,overflowY:`scroll`,border:`1px solid var(--wim-color-primary)`,padding:`20px`,position:`relative`},children:(0,P.jsxs)(`div`,{style:{height:`1000px`},children:[(0,P.jsx)(`p`,{children:n(`story.backtop_inside_box`)}),(0,P.jsx)(A,{target:()=>e,visibilityHeight:100,style:{position:`absolute`,right:20,bottom:20}})]})})]})},z={render:()=>(0,P.jsx)(R,{})},B=[`Basic`,`CustomElement`,`SpecificTarget`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <SpecificTargetStory />
}`,...z.parameters?.docs?.source}}}})))()}export{V as a,z as i,I as n,L as r,M as t};