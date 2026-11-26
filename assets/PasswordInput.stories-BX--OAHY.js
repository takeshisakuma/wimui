"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Label-CyxCZ7Fk.js";import{n as d,t as f}from"./PasswordInput-Ch2DYD6m.js";var p=n({Default:()=>_,Ghost:()=>v,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y;function b(){return(b=t((()=>{m=e(r(),1),a(),o(),l(),d(),h=c(),g={title:`Components/Basic Inputs/PasswordInput`,component:f,tags:[],args:{disabled:!1},argTypes:{disabled:{control:`boolean`}}},_={render:function(e){let{t}=i(s),n=m.useId();return(0,h.jsx)(u,{label:(0,h.jsx)(`span`,{id:n,children:t(`story.passwordinput_label`)}),children:(0,h.jsx)(f,{...e,"aria-labelledby":n})})}},v={..._,args:{..._.args,variant:`ghost`}},y=[`Default`,`Ghost`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // 表示の切り替えボタンを持つので、Label で囲むとボタンの名前まで入力欄の名前に入る（「Password Show password」）。
    // 見出しの文字だけを aria-labelledby で指す（T442）
    const labelId = React.useId();
    return <Label label={<span id={labelId}>{t("story.passwordinput_label")}</span>}>
        <PasswordInput {...args} aria-labelledby={labelId} />
      </Label>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: "ghost"
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as n,p as t};