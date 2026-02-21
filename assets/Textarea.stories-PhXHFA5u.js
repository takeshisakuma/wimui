import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as c}from"./Textarea-ClS6qZN_.js";import{L as p}from"./Label-Dx2FZbSl.js";import{F as u}from"./FieldError-DqsUSfT0.js";const m={title:"Component/Basic Inputs/Textarea",component:c,argTypes:{state:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}},fieldSizing:{control:{type:"select"},options:["fixed","content"]}}},a={args:{placeholder:"テキストを入力してください..."}},t={args:{variant:"ghost",placeholder:"Ghost Variant..."}},s={args:{state:"error",defaultValue:"エラーが発生しています"}},o={args:{state:"disabled",defaultValue:"無効化された入力エリア"}},n={args:{fullWidth:!0,placeholder:"幅いっぱいに広がります..."}},l={args:{fieldSizing:"content",placeholder:"入力内容に合わせて高さが変わります..."}},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",maxWidth:"400px"},children:[e.jsx(p,{htmlFor:"comment",required:!0,label:"コメント",children:e.jsx(c,{id:"comment",...r})}),r.state==="error"&&e.jsx(u,{content:"入力内容をご確認ください。"})]}),args:{placeholder:"ご意見・ご要望を入力してください",rows:4,fullWidth:!0}},d={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(p,{htmlFor:"description",required:!0,label:"自己紹介"}),e.jsx(c,{id:"description",...r,placeholder:"詳細は...",rows:3,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(p,{htmlFor:"notes",label:"備考",showOptional:!0}),e.jsx(c,{id:"notes",...r,placeholder:"その他連絡事項があれば...",rows:2,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(p,{htmlFor:"feedback",required:!0,label:"フィードバック",children:e.jsx(c,{id:"feedback",...r,state:"error",defaultValue:"短すぎます",rows:3,fullWidth:!0})}),e.jsx(u,{content:"10文字以上で入力してください。"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "テキストを入力してください..."
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    placeholder: "Ghost Variant..."
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    defaultValue: "エラーが発生しています"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    defaultValue: "無効化された入力エリア"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    placeholder: "幅いっぱいに広がります..."
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fieldSizing: "content",
    placeholder: "入力内容に合わせて高さが変わります..."
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    maxWidth: "400px"
  }}>\r
            <Label htmlFor="comment" required label="コメント">\r
                <Textarea id="comment" {...args} />\r
            </Label>\r
            {args.state === "error" && <FieldError content="入力内容をご確認ください。" />}\r
        </div>,
  args: {
    placeholder: "ご意見・ご要望を入力してください",
    rows: 4,
    fullWidth: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
                <Textarea id="description" {...args} placeholder="詳細は..." rows={3} fullWidth />\r
            </div>\r
\r
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
                <Label htmlFor="notes" label="備考" showOptional />\r
                <Textarea id="notes" {...args} placeholder="その他連絡事項があれば..." rows={2} fullWidth />\r
            </div>\r
\r
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }}>\r
                <Label htmlFor="feedback" required label="フィードバック">\r
                    <Textarea id="feedback" {...args} state="error" defaultValue="短すぎます" rows={3} fullWidth />\r
                </Label>\r
                <FieldError content="10文字以上で入力してください。" />\r
            </div>\r
        </div>
}`,...d.parameters?.docs?.source}}};const x=["Basic","Ghost","ErrorState","Disabled","FullWidth","FieldSizingContent","WithLabelAndError","FormPattern"],y=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Disabled:o,ErrorState:s,FieldSizingContent:l,FormPattern:d,FullWidth:n,Ghost:t,WithLabelAndError:i,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as E,n as F,t as G,y as T,d as a};
