import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./index-CwLehzOL.js";import{L as p}from"./Label-CLziPMrL.js";import{F as f}from"./FieldError-DuWokep_.js";const a=({state:r="default",variant:x="outline",fullWidth:h=!1,className:g="",disabled:v,...m})=>{const y=`wim-textarea--${r}`,b=`wim-textarea--${x}`,j=h?"wim-textarea--full-width":"";return e.jsx("textarea",{className:["wim-textarea",y,b,j,m.fieldSizing==="content"?"wim-textarea--field-sizing-content":"",g].filter(Boolean).join(" "),disabled:v||r==="disabled",...m})};a.propTypes={state:t.oneOf(["default","error","disabled"]),variant:t.oneOf(["outline","ghost"]),fullWidth:t.bool,className:t.string,fieldSizing:t.oneOf(["fixed","content"])};a.__docgenInfo={description:"複数行のテキスト入力を受け付けるコンポーネント。",methods:[],displayName:"Textarea",props:{state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"入力フィールドの状態。",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"error"',computed:!1},{value:'"disabled"',computed:!1}]}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"入力フィールドのデザインバリエーション。",defaultValue:{value:'"outline"',computed:!1},type:{name:"enum",value:[{value:'"outline"',computed:!1},{value:'"ghost"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"横幅を100%にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},fieldSizing:{required:!1,tsType:{name:"union",raw:'"fixed" | "content"',elements:[{name:"literal",value:'"fixed"'},{name:"literal",value:'"content"'}]},description:"テキストエリアのサイズ調整方法。",type:{name:"enum",value:[{value:'"fixed"',computed:!1},{value:'"content"',computed:!1}]}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const S={title:"Component/Data Entry/Textarea",component:a,argTypes:{state:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}},fieldSizing:{control:{type:"select"},options:["fixed","content"]}}},l={args:{placeholder:"テキストを入力してください..."}},n={args:{variant:"ghost",placeholder:"Ghost Variant..."}},s={args:{state:"error",defaultValue:"エラーが発生しています"}},o={args:{state:"disabled",defaultValue:"無効化された入力エリア"}},i={args:{fullWidth:!0,placeholder:"幅いっぱいに広がります..."}},d={args:{fieldSizing:"content",placeholder:"入力内容に合わせて高さが変わります..."}},c={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",maxWidth:"400px"},children:[e.jsx(p,{htmlFor:"comment",required:!0,label:"コメント",children:e.jsx(a,{id:"comment",...r})}),r.state==="error"&&e.jsx(f,{content:"入力内容をご確認ください。"})]}),args:{placeholder:"ご意見・ご要望を入力してください",rows:4,fullWidth:!0}},u={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(p,{htmlFor:"description",required:!0,label:"自己紹介"}),e.jsx(a,{id:"description",...r,placeholder:"詳細は...",rows:3,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(p,{htmlFor:"notes",label:"備考",showOptional:!0}),e.jsx(a,{id:"notes",...r,placeholder:"その他連絡事項があれば...",rows:2,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(p,{htmlFor:"feedback",required:!0,label:"フィードバック",children:e.jsx(a,{id:"feedback",...r,state:"error",defaultValue:"短すぎます",rows:3,fullWidth:!0})}),e.jsx(f,{content:"10文字以上で入力してください。"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "テキストを入力してください..."
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    placeholder: "Ghost Variant..."
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    defaultValue: "エラーが発生しています"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "disabled",
    defaultValue: "無効化された入力エリア"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    placeholder: "幅いっぱいに広がります..."
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fieldSizing: "content",
    placeholder: "入力内容に合わせて高さが変わります..."
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const W=["Basic","Ghost","ErrorState","Disabled","FullWidth","FieldSizingContent","WithLabelAndError","FormPattern"],V=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:o,ErrorState:s,FieldSizingContent:d,FormPattern:u,FullWidth:i,Ghost:n,WithLabelAndError:c,__namedExportsOrder:W,default:S},Symbol.toStringTag,{value:"Module"}));export{l as B,o as D,s as E,i as F,n as G,V as T,u as a};
