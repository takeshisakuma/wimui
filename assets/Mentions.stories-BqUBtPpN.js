"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-BlSd2eBr.js";import{n as u,t as d}from"./Mentions-C7qJeicD.js";var f=t({CustomTrigger:()=>_,Default:()=>g,__namedExportsOrder:()=>v,default:()=>m}),p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Basic Inputs/Mentions`,component:d,parameters:{layout:`padded`},args:{disabled:!1},argTypes:{disabled:{control:`boolean`}}},h=[{id:1,display:`Alex`},{id:2,display:`Jordan`},{id:3,display:`WimUI_Admin`},{id:4,display:`Designer_K`},{id:5,display:`Frontend_Dev`},{id:6,display:`Google_Deepmind`}],g={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.mentions_label_user`),children:(0,p.jsx)(d,{...e,options:h,placeholder:t(`story.mentions_placeholder_user`),fullWidth:!0,rows:4})})}},_={render:function(e){let{t}=r(o);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsx)(l,{label:t(`story.mentions_label_char`),children:(0,p.jsx)(d,{...e,fullWidth:!0,rows:3,trigger:`#`,placeholder:t(`story.mentions_placeholder_char`),options:[{id:1,display:`SuperMario`},{id:2,display:`Luigi`},{id:3,display:`Peach`}]})}),(0,p.jsx)(l,{label:t(`story.mentions_label_cmd`),children:(0,p.jsx)(d,{...e,fullWidth:!0,rows:3,trigger:`/`,placeholder:t(`story.mentions_placeholder_cmd`),options:[{id:1,display:`help`},{id:2,display:`settings`},{id:3,display:`logout`}]})})]})}},v=[`Default`,`CustomTrigger`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.mentions_label_user")}>
        <Mentions {...args} options={mockUsers} placeholder={t("story.mentions_placeholder_user")} fullWidth rows={4} />
      </Label>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }}>
        <Label label={t("story.mentions_label_char")}>
          <Mentions {...args} fullWidth rows={3} trigger="#" placeholder={t("story.mentions_placeholder_char")} options={[{
          id: 1,
          display: "SuperMario"
        }, {
          id: 2,
          display: "Luigi"
        }, {
          id: 3,
          display: "Peach"
        }]} />
        </Label>
        <Label label={t("story.mentions_label_cmd")}>
          <Mentions {...args} fullWidth rows={3} trigger="/" placeholder={t("story.mentions_placeholder_cmd")} options={[{
          id: 1,
          display: "help"
        }, {
          id: 2,
          display: "settings"
        }, {
          id: 3,
          display: "logout"
        }]} />
        </Label>
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}export{y as i,g as n,f as r,_ as t};