import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as c,a as r}from"./List-Bxf1cTfb.js";const m={title:"Component/Data Display/List",component:c,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},s={args:{as:"ul",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"アイテム1"}),e.jsx(r,{children:"アイテム2"}),e.jsx(r,{children:"アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)"})]})}},n={args:{as:"ol",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"ステップ1"}),e.jsx(r,{children:"ステップ2"}),e.jsx(r,{children:"ステップ3"})]})}},t={args:{size:"small",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"小さいリストアイテム1"}),e.jsx(r,{children:"小さいリストアイテム2"})]})}},i={args:{size:"large",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"大きいリストアイテム1"}),e.jsx(r,{children:"大きいリストアイテム2"})]})}},o={args:{spacing:"loose",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"ゆったりした間隔1"}),e.jsx(r,{children:"ゆったりした間隔2"})]})}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{iconName:"CheckIcon",children:"完了したタスク (左)"}),e.jsx(r,{iconName:"CheckIcon",iconPosition:"right",children:"完了したタスク (右)"}),e.jsx(r,{iconName:"CircleIcon",children:"進行中のタスク"}),e.jsx(r,{iconName:"ExternalLinkIcon",children:"外部リンク (左)"}),e.jsx(r,{iconName:"ExternalLinkIcon",iconPosition:"right",children:"外部リンク (右)"}),e.jsx(r,{iconName:"UploadIcon",children:"ファイルをアップロード"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    children: <>\r
                <ListItem>アイテム1</ListItem>\r
                <ListItem>アイテム2</ListItem>\r
                <ListItem>アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)</ListItem>\r
            </>
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'loose',
    children: <>\r
                <ListItem>ゆったりした間隔1</ListItem>\r
                <ListItem>ゆったりした間隔2</ListItem>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <ListItem iconName="CheckIcon">完了したタスク (左)</ListItem>\r
                <ListItem iconName="CheckIcon" iconPosition="right">完了したタスク (右)</ListItem>\r
                <ListItem iconName="CircleIcon">進行中のタスク</ListItem>\r
                <ListItem iconName="ExternalLinkIcon">外部リンク (左)</ListItem>\r
                <ListItem iconName="ExternalLinkIcon" iconPosition="right">\r
                    外部リンク (右)\r
                </ListItem>\r
                <ListItem iconName="UploadIcon">ファイルをアップロード</ListItem>\r
            </>
  }
}`,...a.parameters?.docs?.source}}};const l=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],L=Object.freeze(Object.defineProperty({__proto__:null,Large:i,LooseSpacing:o,Ordered:n,Small:t,Unordered:s,WithIcons:a,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{L,n as O,t as S,s as U,a as W,i as a,o as b};
