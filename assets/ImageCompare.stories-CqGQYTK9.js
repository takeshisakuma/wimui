"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{n as l,t as u}from"./ImageCompare-tveGkNcB.js";var d=e({Controlled:()=>x,Default:()=>v,Vertical:()=>b,WithLabels:()=>y,__namedExportsOrder:()=>S,default:()=>g}),f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{f=n(r(),1),l(),s(),a(),p=o(),m=`./demo/lightbox_1.png`,h=e=>{let t=typeof window<`u`&&!!window.__VRT__,[n,r]=(0,f.useState)(t?e:null);return(0,f.useEffect)(()=>{if(t)return;let n=!1,i=new window.Image;return i.onload=()=>{if(n)return;let e=document.createElement(`canvas`);e.width=i.naturalWidth,e.height=i.naturalHeight;let t=e.getContext(`2d`);if(t){t.filter=`grayscale(1) contrast(0.95) brightness(1.05)`,t.drawImage(i,0,0);try{r(e.toDataURL(`image/png`))}catch{r(null)}}},i.src=e,()=>{n=!0}},[e,t]),n},g={title:`Components/Media/ImageCompare`,component:u,parameters:{layout:`centered`},args:{after:m,width:`min(480px, 100vw - 2rem)`,height:300}},_=()=>{let{t:e}=i(c),t=h(m)??m;return typeof window<`u`&&window.__VRT__?{before:t,beforeAlt:`Original photo`,afterAlt:`Edited photo`,beforeLabel:`Before`,afterLabel:`After`}:{before:t,beforeAlt:e(`story.imagecompare_before_alt`),afterAlt:e(`story.imagecompare_after_alt`),beforeLabel:e(`story.imagecompare_before`),afterLabel:e(`story.imagecompare_after`)}},v={render:e=>{let{before:t,beforeAlt:n,afterAlt:r}=_();return(0,p.jsx)(u,{...e,before:t,beforeAlt:n,afterAlt:r})}},y={render:e=>{let t=_();return(0,p.jsx)(u,{...e,...t})}},b={render:e=>{let t=_();return(0,p.jsx)(u,{...e,...t,orientation:`vertical`})}},x={render:e=>{let{t}=i(c),n=_(),[r,a]=(0,f.useState)(30);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,alignItems:`center`},children:[(0,p.jsx)(u,{...e,...n,position:r,onPositionChange:a}),(0,p.jsx)(`input`,{type:`range`,min:0,max:100,value:r,onChange:e=>a(Number(e.target.value)),"aria-label":t(`story.imagecompare_position_label`),style:{width:`min(480px, 100vw - 2rem - 4px)`}})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      before,
      beforeAlt,
      afterAlt
    } = useDemo();
    return <ImageCompare {...args} before={before} beforeAlt={beforeAlt} afterAlt={afterAlt} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const demo = useDemo();
    return <ImageCompare {...args} {...demo} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const demo = useDemo();
    return <ImageCompare {...args} {...demo} orientation="vertical" />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const demo = useDemo();
    const [pos, setPos] = useState(30);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: "center"
    }}>
        <ImageCompare {...args} {...demo} position={pos} onPositionChange={setPos} />
        <input type="range" min={0} max={100} value={pos} onChange={e => setPos(Number(e.target.value))} aria-label={t("story.imagecompare_position_label")}
      // \`input[type=range]\` は既定で \`margin: 2px\` を持つので、幅を目一杯に
      // するとその 4px だけページがはみ出す（T218・実測 +4px）。
      // **margin を消すと 1280px の描画も変わる**（VRT が 2 枚落ちた）ので、
      // 消さずに**その 4px を幅から引く**。1280px では 480px のまま。
      style={{
        width: "min(480px, 100vw - 2rem - 4px)"
      }} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithLabels`,`Vertical`,`Controlled`]}));C();export{x as Controlled,v as Default,b as Vertical,y as WithLabels,S as __namedExportsOrder,g as default,C as n,d as t};