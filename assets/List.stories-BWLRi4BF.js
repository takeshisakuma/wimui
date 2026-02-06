import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as L}from"./iframe-BPuV0Si6.js";import{P as a}from"./index-BNFft8pm.js";import{I as v}from"./Icon-Ct3azGo-.js";import{u as C}from"./useTranslation-BHRq-AI1.js";const x=L.createContext({size:"medium"}),g=({as:t="ul",size:d="medium",spacing:n="normal",children:u,className:p="",...I})=>{const h=`wim-list--${{small:"sm",medium:"md",large:"lg"}[d]}`,j=`wim-list--spacing-${n}`,y=["wim-list",h,j,p].filter(Boolean).join(" ");return e.jsx(x.Provider,{value:{size:d},children:e.jsx(t,{className:y,...I,children:u})})},s=({children:t,className:d="",iconName:n,iconPosition:u="left",...p})=>{const{t:I}=C(),{size:f}=L.useContext(x),h=["wim-list__item",n?"wim-list__item--with-icon":"",d].filter(Boolean).join(" ");return e.jsx("li",{className:h,...p,children:e.jsxs("div",{className:"wim-list__item-content",children:[n&&u==="left"&&e.jsx("div",{className:"wim-list__icon-container wim-list__icon-container--left",children:e.jsx(v,{name:n,size:f,className:"wim-list__icon"})}),e.jsx("div",{className:"wim-list__text",children:typeof t=="string"?I(t):t}),n&&u==="right"&&e.jsx("div",{className:"wim-list__icon-container wim-list__icon-container--right",children:e.jsx(v,{name:n,size:f,className:"wim-list__icon"})})]})})};g.propTypes={as:a.oneOf(["ul","ol"]),size:a.oneOf(["small","medium","large"]),spacing:a.oneOf(["tight","normal","loose"]),children:a.node.isRequired,className:a.string};s.propTypes={children:a.node.isRequired,className:a.string,iconName:a.oneOf(["CircleIcon","SquareIcon","LoadingIcon","ExternalLinkIcon","CloseIcon","SearchIcon","EyeIcon","EyeOffIcon","ChevronDownIcon","PlayIcon","PauseIcon","VolumeIcon","MuteIcon","ChevronRightIcon","ChevronLeftIcon","CopyIcon","CheckIcon","UploadIcon"]),iconPosition:a.oneOf(["left","right"])};g.__docgenInfo={description:"",methods:[],displayName:"List",props:{as:{required:!1,tsType:{name:"union",raw:'"ul" | "ol"',elements:[{name:"literal",value:'"ul"'},{name:"literal",value:'"ol"'}]},description:"",defaultValue:{value:'"ul"',computed:!1},type:{name:"enum",value:[{value:'"ul"',computed:!1},{value:'"ol"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},spacing:{required:!1,tsType:{name:"union",raw:'"tight" | "normal" | "loose"',elements:[{name:"literal",value:'"tight"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"loose"'}]},description:"",defaultValue:{value:'"normal"',computed:!1},type:{name:"enum",value:[{value:'"tight"',computed:!1},{value:'"normal"',computed:!1},{value:'"loose"',computed:!1}]}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};s.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}},iconName:{required:!1,tsType:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]'},description:"",type:{name:"enum",value:[{value:'"CircleIcon"',computed:!1},{value:'"SquareIcon"',computed:!1},{value:'"LoadingIcon"',computed:!1},{value:'"ExternalLinkIcon"',computed:!1},{value:'"CloseIcon"',computed:!1},{value:'"SearchIcon"',computed:!1},{value:'"EyeIcon"',computed:!1},{value:'"EyeOffIcon"',computed:!1},{value:'"ChevronDownIcon"',computed:!1},{value:'"PlayIcon"',computed:!1},{value:'"PauseIcon"',computed:!1},{value:'"VolumeIcon"',computed:!1},{value:'"MuteIcon"',computed:!1},{value:'"ChevronRightIcon"',computed:!1},{value:'"ChevronLeftIcon"',computed:!1},{value:'"CopyIcon"',computed:!1},{value:'"CheckIcon"',computed:!1},{value:'"UploadIcon"',computed:!1}]}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]}}}};const _={title:"Component/Data Display/List",component:g,argTypes:{as:{control:"select",options:["ul","ol"]},size:{control:"select",options:["small","medium","large"]},spacing:{control:"select",options:["tight","normal","loose"]}}},o={args:{as:"ul",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"アイテム1"}),e.jsx(s,{children:"アイテム2"}),e.jsx(s,{children:"アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)"})]})}},r={args:{as:"ol",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ステップ1"}),e.jsx(s,{children:"ステップ2"}),e.jsx(s,{children:"ステップ3"})]})}},l={args:{size:"small",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"小さいリストアイテム1"}),e.jsx(s,{children:"小さいリストアイテム2"})]})}},i={args:{size:"large",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"大きいリストアイテム1"}),e.jsx(s,{children:"大きいリストアイテム2"})]})}},c={args:{spacing:"loose",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"ゆったりした間隔1"}),e.jsx(s,{children:"ゆったりした間隔2"})]})}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{iconName:"CheckIcon",children:"完了したタスク (左)"}),e.jsx(s,{iconName:"CheckIcon",iconPosition:"right",children:"完了したタスク (右)"}),e.jsx(s,{iconName:"CircleIcon",children:"進行中のタスク"}),e.jsx(s,{iconName:"ExternalLinkIcon",children:"外部リンク (左)"}),e.jsx(s,{iconName:"ExternalLinkIcon",iconPosition:"right",children:"外部リンク (右)"}),e.jsx(s,{iconName:"UploadIcon",children:"ファイルをアップロード"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    children: <>\r
                <ListItem>アイテム1</ListItem>\r
                <ListItem>アイテム2</ListItem>\r
                <ListItem>アイテム3 (長いテキストがここに入ります。改行された時の見た目を確認するためのテキストです。)</ListItem>\r
            </>
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'ol',
    children: <>\r
                <ListItem>ステップ1</ListItem>\r
                <ListItem>ステップ2</ListItem>\r
                <ListItem>ステップ3</ListItem>\r
            </>
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const N=["Unordered","Ordered","Small","Large","LooseSpacing","WithIcons"],q=Object.freeze(Object.defineProperty({__proto__:null,Large:i,LooseSpacing:c,Ordered:r,Small:l,Unordered:o,WithIcons:m,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{q as L,r as O,l as S,o as U,m as W,i as a,c as b};
