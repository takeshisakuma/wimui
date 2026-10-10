"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./ModelSelector-CwSiJGbJ.js";import{n as s,t as c}from"./playOpen-BfHmRBb6.js";var l=n({Controlled:()=>m,Default:()=>p,Disabled:()=>y,FullWidth:()=>_,NameOnly:()=>g,Open:()=>b,Placeholder:()=>h,Sizes:()=>v,__namedExportsOrder:()=>x,default:()=>f}),u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{u=e(r(),1),a(),c(),d=i(),f={title:`Components/AI/ModelSelector`,component:o,parameters:{layout:`padded`},args:{models:[{id:`gpt-4o`,name:`GPT-4o`,description:`OpenAI · flagship multimodal`,contextLength:128e3,pricing:{input:2.5,output:10},badge:`New`},{id:`claude-sonnet`,name:`Claude Sonnet`,description:`Anthropic · balanced`,contextLength:2e5,pricing:{input:3,output:15}},{id:`claude-haiku`,name:`Claude Haiku`,description:`Anthropic · fast & cheap`,contextLength:2e5,pricing:{input:.8,output:4}},{id:`llama-3`,name:`Llama 3 70B`,description:`Meta · open weights`,contextLength:8e3,pricing:{input:.6,output:.6}},{id:`legacy`,name:`GPT-3.5`,description:`OpenAI · legacy`,contextLength:16e3,disabled:!0}],size:`md`,showPricing:!0,showContext:!0}},p={args:{defaultValue:`gpt-4o`}},m={render:e=>{let[t,n]=(0,u.useState)(`claude-sonnet`);return(0,d.jsx)(o,{...e,value:t,onChange:e=>n(e)})}},h={args:{defaultValue:void 0}},g={args:{defaultValue:`claude-haiku`,showPricing:!1,showContext:!1}},_={args:{defaultValue:`gpt-4o`,fullWidth:!0}},v={render:e=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`flex-start`},children:[(0,d.jsx)(o,{...e,size:`sm`,defaultValue:`gpt-4o`}),(0,d.jsx)(o,{...e,size:`md`,defaultValue:`gpt-4o`}),(0,d.jsx)(o,{...e,size:`lg`,defaultValue:`gpt-4o`})]})},y={args:{defaultValue:`gpt-4o`,disabled:!0}},b={...p,play:s},x=[`Default`,`Controlled`,`Placeholder`,`NameOnly`,`FullWidth`,`Sizes`,`Disabled`,`Open`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "gpt-4o"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("claude-sonnet");
    return <ModelSelector {...args} value={value} onChange={id => setValue(id)} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "claude-haiku",
    showPricing: false,
    showContext: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "gpt-4o",
    fullWidth: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "flex-start"
  }}>
      <ModelSelector {...args} size="sm" defaultValue="gpt-4o" />
      <ModelSelector {...args} size="md" defaultValue="gpt-4o" />
      <ModelSelector {...args} size="lg" defaultValue="gpt-4o" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "gpt-4o",
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...b.parameters?.docs?.source}}}})))()}export{h as a,g as i,y as n,v as o,l as r,S as s,p as t};