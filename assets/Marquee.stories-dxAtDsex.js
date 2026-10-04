"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./Group-DVFOQHnC.js";import{n as f,t as p}from"./Badge-CfPEoJgu.js";var m,h,g,_,v,y,b;function x(){return(x=t((()=>{m=`_root_10z6t_3`,h=`_content_10z6t_10`,g=`_scroll_10z6t_1`,_=`_reverse_10z6t_30`,v=`_vertical_10z6t_33`,y=`_scrollVertical_10z6t_1`,b={root:m,content:h,scroll:g,reverse:_,vertical:v,scrollVertical:y}})))()}var S,C,w,T;function E(){return(E=t((()=>{S=e(r(),1),C=e(l(),1),x(),w=c(),T=({duration:e=20,reverse:t=!1,pauseOnHover:n=!0,vertical:r=!1,repeat:i=2,className:a,children:o,style:s,...c})=>{let l=e=>(0,w.jsx)(`div`,{className:(0,C.default)(b.content,{[b.reverse]:t,[b.vertical]:r}),"aria-hidden":e||void 0,inert:e||void 0,children:o});return(0,w.jsx)(`div`,{className:(0,C.default)(`wim-marquee`,b.root,a),style:{"--duration":`${e}s`,"--pause-on-hover":n?`paused`:`running`,...s},...c,children:Array.from({length:i}).map((e,t)=>(0,w.jsx)(S.Fragment,{children:l(t>0)},t))})},T.__docgenInfo={description:`Animation component that scrolls text or images horizontally or vertically.`,methods:[],displayName:`Marquee`,props:{duration:{required:!1,tsType:{name:`number`},description:"Animation speed (in seconds). Defaults to `20`.",defaultValue:{value:`20`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Whether to run the animation in reverse.`,defaultValue:{value:`false`,computed:!1}},pauseOnHover:{required:!1,tsType:{name:`boolean`},description:`Whether to pause the animation on hover. Keyboard focus inside the marquee
always pauses it, regardless of this option (WCAG 2.2.2).`,defaultValue:{value:`true`,computed:!1}},vertical:{required:!1,tsType:{name:`boolean`},description:`Whether to scroll vertically.`,defaultValue:{value:`false`,computed:!1}},repeat:{required:!1,tsType:{name:`number`},description:"Number of times the content is repeated. May need adjusting for a seamless loop. Defaults to `2`.",defaultValue:{value:`2`,computed:!1}}}}})))()}var D=n({Default:()=>A,Fast:()=>j,Reverse:()=>N,Slow:()=>M,Vertical:()=>P,__namedExportsOrder:()=>F,default:()=>k}),O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{r(),a(),o(),f(),u(),E(),O=c(),k={title:`Components/Utilities/Marquee`,component:T},A={render:e=>{let{t}=i(s);return(0,O.jsx)(T,{...e,children:(0,O.jsxs)(d,{gap:`xl`,children:[(0,O.jsx)(p,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,O.jsx)(p,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},j={args:{duration:5},render:e=>{let{t}=i(s);return(0,O.jsx)(T,{...e,children:(0,O.jsxs)(d,{gap:`xl`,children:[(0,O.jsx)(p,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,O.jsx)(p,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},M={args:{duration:40},render:e=>{let{t}=i(s);return(0,O.jsx)(T,{...e,children:(0,O.jsxs)(d,{gap:`xl`,children:[(0,O.jsx)(p,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,O.jsx)(p,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},N={args:{reverse:!0},render:e=>{let{t}=i(s);return(0,O.jsx)(T,{...e,children:(0,O.jsxs)(d,{gap:`xl`,children:[(0,O.jsx)(p,{intent:`primary`,variant:`subtle`,children:t(`story.marquee_new_feature`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_welcome`)}),(0,O.jsx)(p,{intent:`neutral`,variant:`subtle`,children:t(`story.marquee_update`)}),(0,O.jsx)(`span`,{style:{fontSize:`1.2rem`,fontWeight:`bold`},children:t(`story.marquee_check_out`)})]})})}},P={render:e=>{let{t}=i(s);return(0,O.jsx)(`div`,{style:{height:`200px`,border:`1px solid var(--wim-color-border)`},children:(0,O.jsxs)(T,{...e,vertical:!0,duration:5,children:[(0,O.jsx)(`div`,{style:{padding:`10px`,textAlign:`center`,fontWeight:`bold`},children:t(`story.marquee_notice_lift`)}),(0,O.jsx)(`div`,{style:{padding:`10px`,textAlign:`center`,fontWeight:`bold`},children:t(`story.marquee_notice_recycling`)}),(0,O.jsx)(`div`,{style:{padding:`10px`,textAlign:`center`,fontWeight:`bold`},children:t(`story.marquee_notice_door`)})]})})}},F=[`Default`,`Fast`,`Slow`,`Reverse`,`Vertical`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 5
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 40
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: true
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Marquee {...args}>
        <Group gap="xl">
          <Badge intent="primary" variant="subtle">{t("story.marquee_new_feature")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge intent="neutral" variant="subtle">{t("story.marquee_update")}</Badge>
          <span style={{
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200px",
      border: "1px solid var(--wim-color-border)"
    }}>
        <Marquee {...args} vertical duration={5}>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_notice_lift")}
          </div>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_notice_recycling")}
          </div>
          <div style={{
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>
            {t("story.marquee_notice_door")}
          </div>
        </Marquee>
      </div>;
  }
}`,...P.parameters?.docs?.source}}}})))()}export{D as n,I as r,A as t};