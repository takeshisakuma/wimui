import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as c,a as s}from"./List-CTpKjE63.js";const m={title:"Component/Data Display/List",component:c,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},r={args:{as:"ul",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"アイテム1"}),e.jsx(s,{children:"アイテム2"}),e.jsx(s,{children:"アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)"})]})}},n={args:{as:"ol",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ステップ1"}),e.jsx(s,{children:"ステップ2"}),e.jsx(s,{children:"ステップ3"})]})}},t={args:{size:"small",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"小さいリストアイテム1"}),e.jsx(s,{children:"小さいリストアイテム2"})]})}},i={args:{size:"large",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"大きいリストアイテム1"}),e.jsx(s,{children:"大きいリストアイテム2"})]})}},a={args:{spacing:"loose",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ゆったりした間隔1"}),e.jsx(s,{children:"ゆったりした間隔2"})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{iconName:"CheckIcon",children:"完了したタスク"}),e.jsx(s,{iconName:"PdfIcon",children:"マニュアルをダウンロード (PDF)"}),e.jsx(s,{iconName:"ImageIcon",children:"写真ギャラリーを表示"}),e.jsx(s,{iconName:"EmailIcon",children:"メールで問い合わせる"}),e.jsx(s,{iconName:"PhoneIcon",children:"電話をかける (03-xxxx-xxxx)"}),e.jsx(s,{iconName:"ExternalLinkIcon",iconPosition:"right",children:"詳細を見る"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    children: <>\r
                <ListItem>アイテム1</ListItem>\r
                <ListItem>アイテム2</ListItem>\r
                <ListItem>アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)</ListItem>\r
            </>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ol',
    children: <>\r
                <ListItem>ステップ1</ListItem>\r
                <ListItem>ステップ2</ListItem>\r
                <ListItem>ステップ3</ListItem>\r
            </>
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: <>\r
                <ListItem>小さいリストアイテム1</ListItem>\r
                <ListItem>小さいリストアイテム2</ListItem>\r
            </>
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: <>\r
                <ListItem>大きいリストアイテム1</ListItem>\r
                <ListItem>大きいリストアイテム2</ListItem>\r
            </>
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'loose',
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
                <ListItem iconName="ExternalLinkIcon" iconPosition="right">詳細を見る</ListItem>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};const l=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],L=Object.freeze(Object.defineProperty({__proto__:null,Large:i,LooseSpacing:a,Ordered:n,Small:t,Unordered:r,WithIcons:o,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{L,n as O,t as S,r as U,o as W,i as a,a as b};
