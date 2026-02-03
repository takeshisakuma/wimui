import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as c}from"./index-JTmchYEG.js";import{L as u}from"./Label-B3nlxcUC.js";import{F as p}from"./FieldError-DVyee9Zf.js";const r=({state:a="default",variant:m="outline",fullWidth:f=!1,className:x="",disabled:h,...g})=>{const v=`wim-textarea--${a}`,b=`wim-textarea--${m}`,y=f?"wim-textarea--full-width":"";return e.jsx("textarea",{className:["wim-textarea",v,b,y,x].filter(Boolean).join(" "),disabled:h||a==="disabled",...g})};r.propTypes={state:c.oneOf(["default","error","disabled"]),variant:c.oneOf(["outline","ghost"]),fullWidth:c.bool,className:c.string};r.__docgenInfo={description:"複数行のテキスト入力を受け付けるコンポーネント。",methods:[],displayName:"Textarea",props:{state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"入力フィールドの状態。",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"error"',computed:!1},{value:'"disabled"',computed:!1}]}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"入力フィールドのデザインバリエーション。",defaultValue:{value:'"outline"',computed:!1},type:{name:"enum",value:[{value:'"outline"',computed:!1},{value:'"ghost"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"横幅を100%にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const j={title:"Component/Forms/Textarea",component:r,argTypes:{state:{control:{type:"select"},options:["default","error","disabled"]},variant:{control:{type:"select"},options:["outline","ghost"]},fullWidth:{control:{type:"boolean"}}}},t={args:{placeholder:"テキストを入力してください..."}},l={args:{variant:"ghost",placeholder:"Ghost Variant..."}},s={args:{state:"error",defaultValue:"エラーが発生しています"}},o={args:{state:"disabled",defaultValue:"無効化された入力エリア"}},n={args:{fullWidth:!0,placeholder:"幅いっぱいに広がります..."}},i={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxWidth:"400px"},children:[e.jsx(u,{htmlFor:"comment",required:!0,label:"コメント"}),e.jsx(r,{id:"comment",...a}),a.state==="error"&&e.jsx(p,{content:"入力内容をご確認ください。"})]}),args:{placeholder:"ご意見・ご要望を入力してください",rows:4,fullWidth:!0}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(u,{htmlFor:"description",required:!0,label:"自己紹介"}),e.jsx(r,{id:"description",placeholder:"詳細は...",rows:3,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(u,{htmlFor:"notes",label:"備考",showOptional:!0}),e.jsx(r,{id:"notes",placeholder:"その他連絡事項があれば...",rows:2,fullWidth:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(u,{htmlFor:"feedback",required:!0,label:"フィードバック"}),e.jsx(r,{id:"feedback",state:"error",defaultValue:"短すぎます",rows:3,fullWidth:!0}),e.jsx(p,{content:"10文字以上で入力してください。"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "テキストを入力してください..."
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    placeholder: "Ghost Variant..."
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxWidth: "400px"
  }}>\r
            <Label htmlFor="comment" required label="コメント" />\r
            <Textarea id="comment" {...args} />\r
            {args.state === "error" && <FieldError content="入力内容をご確認ください。" />}\r
        </div>,
  args: {
    placeholder: "ご意見・ご要望を入力してください",
    rows: 4,
    fullWidth: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
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
                <Textarea id="description" placeholder="詳細は..." rows={3} fullWidth />\r
            </div>\r
\r
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
                <Label htmlFor="notes" label="備考" showOptional />\r
                <Textarea id="notes" placeholder="その他連絡事項があれば..." rows={2} fullWidth />\r
            </div>\r
\r
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>\r
                <Label htmlFor="feedback" required label="フィードバック" />\r
                <Textarea id="feedback" state="error" defaultValue="短すぎます" rows={3} fullWidth />\r
                <FieldError content="10文字以上で入力してください。" />\r
            </div>\r
        </div>
}`,...d.parameters?.docs?.source}}};const W=["Basic","Ghost","ErrorState","Disabled","FullWidth","WithLabelAndError","FormPattern"],S=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,Disabled:o,ErrorState:s,FormPattern:d,FullWidth:n,Ghost:l,WithLabelAndError:i,__namedExportsOrder:W,default:j},Symbol.toStringTag,{value:"Module"}));export{t as B,o as D,s as E,n as F,l as G,S as T,d as a};
