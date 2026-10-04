"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./OtpInput-BMEKzoWs.js";var u=t({Controlled:()=>v,Danger:()=>_,Default:()=>m,Disabled:()=>g,Length6:()=>h,__namedExportsOrder:()=>y,default:()=>p}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),d=n(),i(),a(),c(),f=s(),p={title:`Components/Basic Inputs/OtpInput`,component:l,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},onChange:{action:`changed`}},render:e=>{let{t}=r(`form`),n={digitAriaLabel:e=>t(`form:otp.digit`,{index:e})};return(0,f.jsx)(l,{...e,labels:n})}},m={args:{length:4}},h={args:{length:6}},g={args:{length:4,disabled:!0,value:`1234`}},_={args:{length:6,error:`Invalid code`,value:`123456`}},v=()=>{let{t:e}=r(o),[t,n]=(0,d.useState)(``);return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{value:t,onChange:n,length:6,labels:{digitAriaLabel:t=>e(`form:otp.digit`,{index:t})}}),(0,f.jsxs)(`p`,{style:{marginTop:`1rem`},children:[e(`story.otp_current_value`),`: `,t]}),(0,f.jsx)(`button`,{onClick:()=>n(``),style:{marginTop:`0.5rem`,color:`var(--wim-color-text-primary)`,backgroundColor:`var(--wim-color-surface)`,border:`1px solid var(--wim-color-border)`},children:e(`story.otp_clear`)})]})},v.__docgenInfo={description:``,methods:[],displayName:`Controlled`},y=[`Default`,`Length6`,`Disabled`,`Danger`,`Controlled`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true,
    value: "1234"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: "Invalid code",
    value: "123456"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}}})))()}export{u as a,h as i,m as n,b as o,g as r,_ as t};