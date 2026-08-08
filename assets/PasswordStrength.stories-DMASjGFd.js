"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{n as l,t as u}from"./FieldTemplate-C0nkiaIz.js";import{i as d,n as f,r as p,t as m}from"./PasswordStrength-Dpkg2Not.js";var h=e({Default:()=>y,WithPasswordInput:()=>b,__namedExportsOrder:()=>x,default:()=>v}),g,_,v,y,b,x,S=t((()=>{g=n(r(),1),s(),a(),f(),d(),l(),_=o(),v={title:`Components/Basic Inputs/PasswordStrength`,component:m,parameters:{layout:`centered`},argTypes:{score:{control:{type:`number`,min:0,max:4,step:1}},showLabel:{control:`boolean`}}},y={decorators:[e=>(0,_.jsx)(`div`,{style:{width:280},children:(0,_.jsx)(e,{})})],args:{score:0}},b={render:function(){let{t:e}=i(c),[t,n]=g.useState(``);return(0,_.jsx)(`div`,{style:{width:`320px`},children:(0,_.jsx)(u,{label:e(`common.password`),htmlFor:`password-input`,children:(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,_.jsx)(p,{id:`password-input`,value:t,onChange:e=>n(e.target.value)}),(0,_.jsx)(m,{score:(e=>{if(!e)return 0;let t=0;return e.length>8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t})(t),password:t})]})})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 280
  }}>
        <Story />
      </div>],
  args: {
    score: 0
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [password, setPassword] = React.useState("");

    // Simple strength calculation logic for demo
    const calculateScore = (pwd: string) => {
      if (!pwd) return 0;
      let s = 0;
      if (pwd.length > 8) s++;
      if (/[A-Z]/.test(pwd)) s++;
      if (/[0-9]/.test(pwd)) s++;
      if (/[^A-Za-z0-9]/.test(pwd)) s++;
      return s as 0 | 1 | 2 | 3 | 4;
    };
    return <div style={{
      width: "320px"
    }}>
        <FieldTemplate label={t("common.password")} htmlFor="password-input">
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
            <PasswordInput id="password-input" value={password} onChange={e => setPassword(e.target.value)} />
            <PasswordStrength score={calculateScore(password)} password={password} />
          </div>
        </FieldTemplate>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithPasswordInput`]}));S();export{y as Default,b as WithPasswordInput,x as __namedExportsOrder,v as default,S as n,h as t};