"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{cr as i}from"./iframe-DiXuc7DI.js";import{n as a,t as o}from"./ModelSelector-CtdUDk-q.js";var s=e({Controlled:()=>f,Default:()=>d,Disabled:()=>_,FullWidth:()=>h,NameOnly:()=>m,Placeholder:()=>p,Sizes:()=>g,__namedExportsOrder:()=>v,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{c=n(r(),1),a(),l=i(),u={title:`Components/AI/ModelSelector`,component:o,parameters:{layout:`padded`},args:{models:[{id:`gpt-4o`,name:`GPT-4o`,description:`OpenAI · flagship multimodal`,contextLength:128e3,pricing:{input:2.5,output:10},badge:`New`},{id:`claude-sonnet`,name:`Claude Sonnet`,description:`Anthropic · balanced`,contextLength:2e5,pricing:{input:3,output:15}},{id:`claude-haiku`,name:`Claude Haiku`,description:`Anthropic · fast & cheap`,contextLength:2e5,pricing:{input:.8,output:4}},{id:`llama-3`,name:`Llama 3 70B`,description:`Meta · open weights`,contextLength:8e3,pricing:{input:.6,output:.6}},{id:`legacy`,name:`GPT-3.5`,description:`OpenAI · legacy`,contextLength:16e3,disabled:!0}],size:`md`,showPricing:!0,showContext:!0}},d={args:{defaultValue:`gpt-4o`}},f={render:e=>{let[t,n]=(0,c.useState)(`claude-sonnet`);return(0,l.jsx)(o,{...e,value:t,onChange:e=>n(e)})}},p={args:{defaultValue:void 0}},m={args:{defaultValue:`claude-haiku`,showPricing:!1,showContext:!1}},h={args:{defaultValue:`gpt-4o`,fullWidth:!0}},g={render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`flex-start`},children:[(0,l.jsx)(o,{...e,size:`sm`,defaultValue:`gpt-4o`}),(0,l.jsx)(o,{...e,size:`md`,defaultValue:`gpt-4o`}),(0,l.jsx)(o,{...e,size:`lg`,defaultValue:`gpt-4o`})]})},_={args:{defaultValue:`gpt-4o`,disabled:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "gpt-4o"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("claude-sonnet");
    return <ModelSelector {...args} value={value} onChange={id => setValue(id)} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "claude-haiku",
    showPricing: false,
    showContext: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "gpt-4o",
    fullWidth: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "gpt-4o",
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Controlled`,`Placeholder`,`NameOnly`,`FullWidth`,`Sizes`,`Disabled`]}));y();export{f as Controlled,d as Default,_ as Disabled,h as FullWidth,m as NameOnly,p as Placeholder,g as Sizes,v as __namedExportsOrder,u as default,y as n,s as t};