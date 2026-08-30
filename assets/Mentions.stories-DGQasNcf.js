"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Rr as c,t as l}from"./src-CV0le6yM.js";import{a as u}from"./FieldTemplate-kSGTv8Wb.js";var d=e({CustomTrigger:()=>g,Default:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=t((()=>{n(),o(),i(),l(),f=a(),p={title:`Components/Basic Inputs/Mentions`,component:c,parameters:{layout:`padded`},args:{disabled:!1},argTypes:{disabled:{control:`boolean`}}},m=[{id:1,display:`Alex`},{id:2,display:`Jordan`},{id:3,display:`WimUI_Admin`},{id:4,display:`Designer_K`},{id:5,display:`Frontend_Dev`},{id:6,display:`Google_Deepmind`}],h={render:function(e){let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.mentions_label_user`),children:(0,f.jsx)(c,{...e,options:m,placeholder:t(`story.mentions_placeholder_user`),fullWidth:!0,rows:4})})}},g={render:function(e){let{t}=r(s);return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,f.jsx)(u,{label:t(`story.mentions_label_char`),children:(0,f.jsx)(c,{...e,fullWidth:!0,rows:3,trigger:`#`,placeholder:t(`story.mentions_placeholder_char`),options:[{id:1,display:`SuperMario`},{id:2,display:`Luigi`},{id:3,display:`Peach`}]})}),(0,f.jsx)(u,{label:t(`story.mentions_label_cmd`),children:(0,f.jsx)(c,{...e,fullWidth:!0,rows:3,trigger:`/`,placeholder:t(`story.mentions_placeholder_cmd`),options:[{id:1,display:`help`},{id:2,display:`settings`},{id:3,display:`logout`}]})})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.mentions_label_user")}>
        <Mentions {...args} options={mockUsers} placeholder={t("story.mentions_placeholder_user")} fullWidth rows={4} />
      </Label>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`CustomTrigger`]}));v();export{g as CustomTrigger,h as Default,_ as __namedExportsOrder,p as default,v as n,d as t};