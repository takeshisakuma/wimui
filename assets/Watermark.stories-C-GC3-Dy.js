"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";var u,d,f;function p(){return(p=t((()=>{u=`_wrapper_uwe63_2`,d=`_root_uwe63_7`,f={wrapper:u,root:d}})))()}var m,h,g,_;function v(){return(v=t((()=>{m=e(r(),1),h=e(l(),1),p(),g=c(),_=e=>{let{content:t,image:n,width:r=125,height:i=64,rotate:a=-22,zIndex:o=9,opacity:s=.15,gap:c=[100,100],offset:l=[50,50],children:u,className:d}=e,[p,_]=(0,m.useState)(``),[v,y]=(0,m.useState)({w:r,h:i});return(0,m.useEffect)(()=>{let o=document.createElement(`canvas`),u=o.getContext(`2d`);if(!u)return;let d=window.devicePixelRatio||1;if(n){let t=new Image;t.crossOrigin=`anonymous`,t.src=n,t.onload=()=>{let n=t.width/t.height,r=e.width,i=e.height;r===void 0&&i===void 0?(r=125,i=r/n):r!==void 0&&i===void 0?i=r/n:r===void 0&&i!==void 0?r=i*n:(r=r,i=i);let f=(c[0]+r)*d,p=(c[1]+i)*d;o.width=f,o.height=p,u.translate(l[0]*d,l[1]*d),u.rotate(a*Math.PI/180),u.globalAlpha=s,u.drawImage(t,0,0,r*d,i*d),_(o.toDataURL()),y({w:r,h:i})}}else if(t){let e=r,n=i,f=(c[0]+e)*d,p=(c[1]+n)*d;o.width=f,o.height=p,u.translate(l[0]*d,l[1]*d),u.rotate(a*Math.PI/180),u.globalAlpha=s;let m=16*d;u.font=`${m}px sans-serif`,u.fillStyle=`black`,u.textBaseline=`top`,(Array.isArray(t)?t:[t]).forEach((e,t)=>{u.fillText(e,0,t*m*1.5)}),setTimeout(()=>{_(o.toDataURL()),y({w:e,h:n})},0)}},[t,n,e.width,e.height,a,s,c,l,r,i]),(0,g.jsxs)(`div`,{className:(0,h.default)(`wim-watermark`,f.wrapper,d),children:[u,(0,g.jsx)(`div`,{className:f.root,"data-testid":`watermark`,style:{zIndex:o,backgroundImage:`url(${p})`,backgroundSize:`${c[0]+v.w}px ${c[1]+v.h}px`}})]})},_.__docgenInfo={description:``,methods:[],displayName:`Watermark`,props:{content:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:`Text content of the watermark (a string or multiple lines)`},image:{required:!1,tsType:{name:`string`},description:`Image URL used as the watermark instead of text`},width:{required:!1,tsType:{name:`number`},description:`Width of a single watermark tile (px)`},height:{required:!1,tsType:{name:`number`},description:`Height of a single watermark tile (px)`},rotate:{required:!1,tsType:{name:`number`},description:`Rotation angle of the watermark (degrees)`},zIndex:{required:!1,tsType:{name:`number`},description:`z-index of the watermark layer`},opacity:{required:!1,tsType:{name:`number`},description:`Opacity of the watermark`},gap:{required:!1,tsType:{name:`tuple`,raw:`[number, number]`,elements:[{name:`number`},{name:`number`}]},description:`Gap between watermark tiles [x, y] (px)`},offset:{required:!1,tsType:{name:`tuple`,raw:`[number, number]`,elements:[{name:`number`},{name:`number`}]},description:`Offset of the watermark pattern [x, y] (px)`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content overlaid by the watermark`},className:{required:!1,tsType:{name:`string`},description:`Additional class names`}}}})))()}var y=n({AutoRatio:()=>T,Image:()=>w,MultiLine:()=>C,Text:()=>S,__namedExportsOrder:()=>E,default:()=>x}),b,x,S,C,w,T,E;function D(){return(D=t((()=>{r(),a(),o(),v(),b=c(),x={title:`Components/Data Indicators/Watermark`,component:_,argTypes:{rotate:{control:{type:`range`,min:-180,max:180}},opacity:{control:{type:`range`,min:0,max:1,step:.1}}}},S={render:function(e){let{t}=i(s);return(0,b.jsx)(_,{...e,content:t(`story.watermark_text`),children:(0,b.jsx)(`div`,{style:{height:`400px`,background:`var(--wim-color-surface)`,padding:`20px`},children:(0,b.jsx)(`div`,{style:{height:`200px`,background:`var(--wim-color-surface-variant)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginTop:`24px`},children:t(`story.watermark_confidential_mark`)})})})}},C={render:function(e){let{t}=i(s);return(0,b.jsx)(_,{...e,content:[t(`story.watermark_wimui`),t(`story.watermark_confidential_mark`),t(`story.watermark_team`)],children:(0,b.jsx)(`div`,{style:{height:`400px`}})})},args:{gap:[120,120]}},w={args:{image:`./wimlogo.svg`,width:80,opacity:.1,children:(0,b.jsx)(`div`,{style:{height:`400px`}})}},T={args:{image:`./wimlogo.svg`,opacity:.1,children:(0,b.jsx)(`div`,{style:{height:`400px`}})}},E=[`Text`,`MultiLine`,`Image`,`AutoRatio`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Watermark {...args} content={t("story.watermark_text")}>
        <div style={{
        height: "400px",
        background: "var(--wim-color-surface)",
        padding: "20px"
      }}>
          <div style={{
          height: "200px",
          background: "var(--wim-color-surface-variant)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px"
        }}>
            {t("story.watermark_confidential_mark")}
          </div>
        </div>
      </Watermark>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Watermark {...args} content={[t("story.watermark_wimui"), t("story.watermark_confidential_mark"), t("story.watermark_team")]}>
        <div style={{
        height: "400px"
      }} />
      </Watermark>;
  },
  args: {
    gap: [120, 120]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 80,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...T.parameters?.docs?.source}}}})))()}export{y as a,S as i,w as n,D as o,C as r,T as t};