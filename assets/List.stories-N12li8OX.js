import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as c,a as r}from"./List-C9nLoP9M.js";const m={title:"Components/Data Structures/List",component:c,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},s={args:{as:"ul",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"アイテム1"}),e.jsx(r,{children:"アイテム2"}),e.jsx(r,{children:"アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)"})]})}},n={args:{as:"ol",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"ステップ1"}),e.jsx(r,{children:"ステップ2"}),e.jsx(r,{children:"ステップ3"})]})}},t={args:{size:"small",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"小さいリストアイテム1"}),e.jsx(r,{children:"小さいリストアイテム2"})]})}},i={args:{size:"large",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"大きいリストアイテム1"}),e.jsx(r,{children:"大きいリストアイテム2"})]})}},a={args:{spacing:"loose",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"ゆったりした間隔1"}),e.jsx(r,{children:"ゆったりした間隔2"})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{iconName:"CheckIcon",children:"完了したタスク"}),e.jsx(r,{iconName:"PdfIcon",children:"マニュアルをダウンロード (PDF)"}),e.jsx(r,{iconName:"ImageIcon",children:"写真ギャラリーを表示"}),e.jsx(r,{iconName:"EmailIcon",children:"メールで問い合わせる"}),e.jsx(r,{iconName:"PhoneIcon",children:"電話をかける (03-xxxx-xxxx)"}),e.jsx(r,{iconName:"ExternalLinkIcon",iconPosition:"right",children:"詳細を見る"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    as: "ul",
    children: <>\r
        <ListItem>アイテム1</ListItem>\r
        <ListItem>アイテム2</ListItem>\r
        <ListItem>\r
          アイテム3\r
          (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)\r
        </ListItem>\r
      </>
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    as: "ol",
    children: <>\r
        <ListItem>ステップ1</ListItem>\r
        <ListItem>ステップ2</ListItem>\r
        <ListItem>ステップ3</ListItem>\r
      </>
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: <>\r
        <ListItem>小さいリストアイテム1</ListItem>\r
        <ListItem>小さいリストアイテム2</ListItem>\r
      </>
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: <>\r
        <ListItem>大きいリストアイテム1</ListItem>\r
        <ListItem>大きいリストアイテム2</ListItem>\r
      </>
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: "loose",
    children: <>\r
        <ListItem>ゆったりした間隔1</ListItem>\r
        <ListItem>ゆったりした間隔2</ListItem>\r
      </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <ListItem iconName="CheckIcon">完了したタスク</ListItem>\r
        <ListItem iconName="PdfIcon">マニュアルをダウンロード (PDF)</ListItem>\r
        <ListItem iconName="ImageIcon">写真ギャラリーを表示</ListItem>\r
        <ListItem iconName="EmailIcon">メールで問い合わせる</ListItem>\r
        <ListItem iconName="PhoneIcon">電話をかける (03-xxxx-xxxx)</ListItem>\r
        <ListItem iconName="ExternalLinkIcon" iconPosition="right">\r
          詳細を見る\r
        </ListItem>\r
      </>
  }
}`,...o.parameters?.docs?.source}}};const l=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],L=Object.freeze(Object.defineProperty({__proto__:null,Large:i,LooseSpacing:a,Ordered:n,Small:t,Unordered:s,WithIcons:o,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{L,n as O,t as S,s as U,o as W,i as a,a as b};
