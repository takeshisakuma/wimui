import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as a}from"./index-2o_Xs7SK.js";import{u as I}from"./useTranslation-BM0Jl6Nl.js";const p=({as:r="ul",size:m="medium",spacing:c="normal",children:d,className:u="",...g})=>{const f=`wim-list--${{small:"sm",medium:"md",large:"lg"}[m]}`,h=`wim-list--spacing-${c}`,L=["wim-list",f,h,u].filter(Boolean).join(" ");return e.jsx(r,{className:L,...g,children:d})},s=({children:r,className:m="",...c})=>{const{t:d}=I(),u=["wim-list__item",m].filter(Boolean).join(" ");return e.jsx("li",{className:u,...c,children:typeof r=="string"?d(r):r})};p.propTypes={as:a.oneOf(["ul","ol"]),size:a.oneOf(["small","medium","large"]),spacing:a.oneOf(["tight","normal","loose"]),children:a.node.isRequired,className:a.string};s.propTypes={children:a.node.isRequired,className:a.string};p.__docgenInfo={description:"",methods:[],displayName:"List",props:{as:{required:!1,tsType:{name:"union",raw:'"ul" | "ol"',elements:[{name:"literal",value:'"ul"'},{name:"literal",value:'"ol"'}]},description:"",defaultValue:{value:'"ul"',computed:!1},type:{name:"enum",value:[{value:'"ul"',computed:!1},{value:'"ol"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},spacing:{required:!1,tsType:{name:"union",raw:'"tight" | "normal" | "loose"',elements:[{name:"literal",value:'"tight"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"loose"'}]},description:"",defaultValue:{value:'"normal"',computed:!1},type:{name:"enum",value:[{value:'"tight"',computed:!1},{value:'"normal"',computed:!1},{value:'"loose"',computed:!1}]}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};s.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const j={title:"Component/Data Display/List",component:p,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},t={args:{as:"ul",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"アイテム1"}),e.jsx(s,{children:"アイテム2"}),e.jsx(s,{children:"アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)"})]})}},n={args:{as:"ol",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ステップ1"}),e.jsx(s,{children:"ステップ2"}),e.jsx(s,{children:"ステップ3"})]})}},l={args:{size:"small",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"小さいリストアイテム1"}),e.jsx(s,{children:"小さいリストアイテム2"})]})}},i={args:{size:"large",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"大きいリストアイテム1"}),e.jsx(s,{children:"大きいリストアイテム2"})]})}},o={args:{spacing:"loose",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ゆったりした間隔1"}),e.jsx(s,{children:"ゆったりした間隔2"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    children: <>\r
                <ListItem>アイテム1</ListItem>\r
                <ListItem>アイテム2</ListItem>\r
                <ListItem>アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)</ListItem>\r
            </>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ol',
    children: <>\r
                <ListItem>ステップ1</ListItem>\r
                <ListItem>ステップ2</ListItem>\r
                <ListItem>ステップ3</ListItem>\r
            </>
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: <>\r
                <ListItem>小さいリストアイテム1</ListItem>\r
                <ListItem>小さいリストアイテム2</ListItem>\r
            </>
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Unordered","Ordered","Small","Large","LooseSpacing"],N=Object.freeze(Object.defineProperty({__proto__:null,Large:i,LooseSpacing:o,Ordered:n,Small:l,Unordered:t,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{N as L,n as O,l as S,t as U,i as a,o as b};
