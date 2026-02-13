import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./iframe-DMgQDpBx.js";import{c as L}from"./index-MafWY-Pw.js";import{I as g}from"./Icon-WCf84-EP.js";import{u as f}from"./useTranslation-BcpEdxCw.js";const x=I.createContext({size:"medium"}),j=({as:t="ul",size:n="medium",spacing:r="normal",children:d,className:p,...u})=>e.jsx(x.Provider,{value:{size:n},children:e.jsx(t,{className:L("wim-list",`wim-list--${n==="small"?"sm":n==="large"?"lg":"md"}`,`wim-list--spacing-${r}`,p),...u,children:d})}),s=({children:t,className:n,iconName:r,iconPosition:d="left",...p})=>{const{t:u}=f(),{size:h}=I.useContext(x);return e.jsx("li",{className:L("wim-list__item",r&&"wim-list__item--with-icon",n),...p,children:e.jsxs("div",{className:"wim-list__item-content",children:[r&&d==="left"&&e.jsx("div",{className:"wim-list__icon-container wim-list__icon-container--left",children:e.jsx(g,{name:r,size:h,className:"wim-list__icon"})}),e.jsx("div",{className:"wim-list__text",children:typeof t=="string"?u(t):t}),r&&d==="right"&&e.jsx("div",{className:"wim-list__icon-container wim-list__icon-container--right",children:e.jsx(g,{name:r,size:h,className:"wim-list__icon"})})]})})};j.__docgenInfo={description:"",methods:[],displayName:"List",props:{as:{required:!1,tsType:{name:"union",raw:'"ul" | "ol"',elements:[{name:"literal",value:'"ul"'},{name:"literal",value:'"ol"'}]},description:"",defaultValue:{value:'"ul"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:'"tight" | "normal" | "loose"',elements:[{name:"literal",value:'"tight"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"loose"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const _={title:"Component/Data Display/List",component:j,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},i={args:{as:"ul",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"アイテム1"}),e.jsx(s,{children:"アイテム2"}),e.jsx(s,{children:"アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)"})]})}},a={args:{as:"ol",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ステップ1"}),e.jsx(s,{children:"ステップ2"}),e.jsx(s,{children:"ステップ3"})]})}},o={args:{size:"small",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"小さいリストアイテム1"}),e.jsx(s,{children:"小さいリストアイテム2"})]})}},l={args:{size:"large",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"大きいリストアイテム1"}),e.jsx(s,{children:"大きいリストアイテム2"})]})}},c={args:{spacing:"loose",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ゆったりした間隔1"}),e.jsx(s,{children:"ゆったりした間隔2"})]})}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{iconName:"CheckIcon",children:"完了したタスク (左)"}),e.jsx(s,{iconName:"CheckIcon",iconPosition:"right",children:"完了したタスク (右)"}),e.jsx(s,{iconName:"CircleIcon",children:"進行中のタスク"}),e.jsx(s,{iconName:"ExternalLinkIcon",children:"外部リンク (左)"}),e.jsx(s,{iconName:"ExternalLinkIcon",iconPosition:"right",children:"外部リンク (右)"}),e.jsx(s,{iconName:"UploadIcon",children:"ファイルをアップロード"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    children: <>\r
                <ListItem>アイテム1</ListItem>\r
                <ListItem>アイテム2</ListItem>\r
                <ListItem>アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)</ListItem>\r
            </>
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ol',
    children: <>\r
                <ListItem>ステップ1</ListItem>\r
                <ListItem>ステップ2</ListItem>\r
                <ListItem>ステップ3</ListItem>\r
            </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: <>\r
                <ListItem>小さいリストアイテム1</ListItem>\r
                <ListItem>小さいリストアイテム2</ListItem>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: <>\r
                <ListItem>大きいリストアイテム1</ListItem>\r
                <ListItem>大きいリストアイテム2</ListItem>\r
            </>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 'loose',
    children: <>\r
                <ListItem>ゆったりした間隔1</ListItem>\r
                <ListItem>ゆったりした間隔2</ListItem>\r
            </>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const N=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],T=Object.freeze(Object.defineProperty({__proto__:null,Large:l,LooseSpacing:c,Ordered:a,Small:o,Unordered:i,WithIcons:m,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{T as L,a as O,o as S,i as U,m as W,l as a,c as b};
