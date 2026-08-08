"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{Tr as l,t as u}from"./src-BE5jBQ9L.js";var d=e({Controlled:()=>y,Danger:()=>v,Default:()=>h,Disabled:()=>_,Length6:()=>g,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b,x=t((()=>{r(),f=n(r(),1),s(),a(),u(),p=o(),m={title:`Components/Basic Inputs/OtpInput`,component:l,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},onChange:{action:`changed`}},render:e=>{let{t}=i(`form`),n={digitAriaLabel:e=>t(`form:otp.digit`,{index:e})};return(0,p.jsx)(l,{...e,labels:n})}},h={args:{length:4}},g={args:{length:6}},_={args:{length:4,disabled:!0,value:`1234`}},v={args:{length:6,error:`Invalid code`,value:`123456`}},y=()=>{let{t:e}=i(c),[t,n]=(0,f.useState)(``);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(l,{value:t,onChange:n,length:6,labels:{digitAriaLabel:t=>e(`form:otp.digit`,{index:t})}}),(0,p.jsxs)(`p`,{style:{marginTop:`1rem`},children:[e(`story.otp_current_value`),`: `,t]}),(0,p.jsx)(`button`,{onClick:()=>n(``),style:{marginTop:`0.5rem`,color:`var(--wim-color-text-primary)`,backgroundColor:`var(--wim-color-surface)`,border:`1px solid var(--wim-color-border)`},children:e(`story.otp_clear`)})]})},y.__docgenInfo={description:``,methods:[],displayName:`Controlled`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true,
    value: "1234"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: "Invalid code",
    value: "123456"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [value, setValue] = useState("");
  const labels = {
    digitAriaLabel: (index: number) => t("form:otp.digit", {
      index
    })
  };
  return <div>
      <OtpInput value={value} onChange={setValue} length={6} labels={labels} />
      <p style={{
      marginTop: "1rem"
    }}>
        {t("story.otp_current_value")}: {value}
      </p>
      <button onClick={() => setValue("")} style={{
      marginTop: "0.5rem",
      color: "var(--wim-color-text-primary)",
      backgroundColor: "var(--wim-color-surface)",
      border: "1px solid var(--wim-color-border)"
    }}>
        {t("story.otp_clear")}
      </button>
    </div>;
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Length6`,`Disabled`,`Danger`,`Controlled`]}));x();export{y as Controlled,v as Danger,h as Default,_ as Disabled,g as Length6,b as __namedExportsOrder,m as default,x as n,d as t};