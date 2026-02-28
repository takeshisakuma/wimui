import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./Textarea-CoTF4PLL.js";import{L as l}from"./Label-CM-ghJdw.js";import{F as p}from"./FieldError-CmkmGdOg.js";const x={title:"Components/Basic Inputs/Textarea",component:a,argTypes:{state:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}},fieldSizing:{control:{type:"select"},options:["fixed","content"]}}},n={render:r=>e.jsx(l,{label:"お問い合わせ内容",children:e.jsx(a,{...r})}),args:{placeholder:"ログインパスワードを忘れてしまったため、再発行の手順を教えてください。"}},s={render:r=>e.jsx(l,{label:"フィードバック",children:e.jsx(a,{...r})}),args:{variant:"ghost",placeholder:"最近のアップデート以降、アプリの動作が遅くなりました。改善をお願いします。"}},t={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{label:"詳細",children:e.jsx(a,{...r})}),e.jsx(p,{content:"10文字以内で入力してください。"})]}),args:{state:"error",placeholder:"不明なエラーにより処理が中断されましたと表示されてしまい、使用できません。"}},o={render:r=>e.jsx(l,{label:"備考",children:e.jsx(a,{...r})}),args:{state:"disabled",placeholder:"なるべく早く回答をお願いします。"}},i={render:r=>e.jsx(l,{label:"メッセージ",children:e.jsx(a,{...r})}),args:{fullWidth:!0,placeholder:"いつも施設を利用させていただき、ありがとうございます。"}},d={render:r=>e.jsx(l,{label:"備考",children:e.jsx(a,{...r})}),args:{fieldSizing:"content",placeholder:"施設の利用についての質問です。可能であれば、明日の15時までにご回答をお願いいたします。急ぎではありません。"}},c={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{htmlFor:"description",required:!0,label:"自己紹介"}),e.jsx(a,{id:"description",...r,placeholder:"フロントエンドエンジニアとして3年の経験があり、主にReactとTypeScriptを使用しています。",rows:3,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{htmlFor:"notes",label:"備考",showOptional:!0}),e.jsx(a,{id:"notes",...r,placeholder:"平日の10:00〜19:00であれば電話連絡が可能です。",rows:2,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{htmlFor:"motivation",required:!0,label:"志望動機",children:e.jsx(a,{id:"motivation",...r,state:"error",defaultValue:"特になし",rows:3,fullWidth:!0})}),e.jsx(p,{content:"10文字以上で具体的に入力してください。"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="お問い合わせ内容">\r
      <Textarea {...args} />\r
    </Label>,
  args: {
    placeholder: "ログインパスワードを忘れてしまったため、再発行の手順を教えてください。"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="フィードバック">\r
      <Textarea {...args} />\r
    </Label>,
  args: {
    variant: "ghost",
    placeholder: "最近のアップデート以降、アプリの動作が遅くなりました。改善をお願いします。"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>\r
      <Label label="詳細">\r
        <Textarea {...args} />\r
      </Label>\r
      <FieldError content="10文字以内で入力してください。" />\r
    </div>,
  args: {
    state: "error",
    placeholder: "不明なエラーにより処理が中断されましたと表示されてしまい、使用できません。"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="備考">\r
      <Textarea {...args} />\r
    </Label>,
  args: {
    state: "disabled",
    placeholder: "なるべく早く回答をお願いします。"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="メッセージ">\r
      <Textarea {...args} />\r
    </Label>,
  args: {
    fullWidth: true,
    placeholder: "いつも施設を利用させていただき、ありがとうございます。"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="備考">\r
      <Textarea {...args} />\r
    </Label>,
  args: {
    fieldSizing: "content",
    placeholder: "施設の利用についての質問です。可能であれば、明日の15時までにご回答をお願いいたします。急ぎではありません。"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "500px"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Label htmlFor="description" required label="自己紹介" />\r
        <Textarea id="description" {...args} placeholder="フロントエンドエンジニアとして3年の経験があり、主にReactとTypeScriptを使用しています。" rows={3} fullWidth />\r
      </div>\r
\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Label htmlFor="notes" label="備考" showOptional />\r
        <Textarea id="notes" {...args} placeholder="平日の10:00〜19:00であれば電話連絡が可能です。" rows={2} fullWidth />\r
      </div>\r
\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
        <Label htmlFor="motivation" required label="志望動機">\r
          <Textarea id="motivation" {...args} state="error" defaultValue="特になし" rows={3} fullWidth />\r
        </Label>\r
        <FieldError content="10文字以上で具体的に入力してください。" />\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};const u=["Basic","Ghost","ErrorStatus","Disabled","FullWidth","FieldSizingContent","FormPattern"],f=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,Disabled:o,ErrorStatus:t,FieldSizingContent:d,FormPattern:c,FullWidth:i,Ghost:s,__namedExportsOrder:u,default:x},Symbol.toStringTag,{value:"Module"}));export{n as B,o as D,t as E,i as F,s as G,f as T,c as a};
