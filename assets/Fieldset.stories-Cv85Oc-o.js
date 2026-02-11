import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./index-DGne___x.js";import{L as i}from"./Legend-CC0_xgAB.js";import{L as o}from"./Label-Bk2RnEAo.js";import{I as d}from"./Input-ByjzT_4X.js";import{C as u}from"./CheckboxGroup-DwAW4ykO.js";const l=({children:a,disabled:p=!1,variant:c="default",className:m="",...f})=>e.jsx("fieldset",{className:["wim-fieldset",`wim-fieldset--${c}`,m].filter(Boolean).join(" "),disabled:p,...f,children:a});l.propTypes={children:t.node.isRequired,disabled:t.bool,variant:t.oneOf(["default","full-width"]),className:t.string};l.__docgenInfo={description:"関連するフォーム要素をグループ化するコンポーネント。",methods:[],displayName:"Fieldset",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Fieldset 内に表示する要素（Legend や Input 等）。",type:{name:"node"}},disabled:{required:!1,tsType:{name:"boolean"},description:"Fieldset 内の全要素を無効化するかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "full-width"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"full-width"'}]},description:"表示バリエーション。",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"full-width"',computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const b={title:"Component/Form Inputs/Fieldset",component:l,parameters:{layout:"padded"}},r={render:a=>e.jsxs(l,{...a,children:[e.jsx(i,{children:"基本情報"}),e.jsx(o,{label:"名前",children:e.jsx(d,{placeholder:"山田 太郎"})}),e.jsx(o,{label:"メールアドレス",children:e.jsx(d,{type:"email",placeholder:"example@wim.ui"})})]})},s={render:a=>e.jsxs(l,{...a,children:[e.jsx(i,{children:"通知設定"}),e.jsx(u,{options:[{label:"メール通知",value:"email"},{label:"プッシュ通知",value:"push"},{label:"SMS通知",value:"sms"}],defaultValue:["email"]})]})},n={args:{disabled:!0},render:a=>e.jsxs(l,{...a,children:[e.jsx(i,{children:"無効化されたセクション"}),e.jsx(o,{label:"名前",children:e.jsx(d,{placeholder:"入力できません"})}),e.jsx(u,{options:[{label:"オプション1",value:"1"},{label:"オプション2",value:"2"}]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Fieldset {...args}>\r
            <Legend>基本情報</Legend>\r
            <Label label="名前">\r
                <Input placeholder="山田 太郎" />\r
            </Label>\r
            <Label label="メールアドレス">\r
                <Input type="email" placeholder="example@wim.ui" />\r
            </Label>\r
        </Fieldset>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Fieldset {...args}>\r
            <Legend>通知設定</Legend>\r
            <CheckboxGroup options={[{
      label: "メール通知",
      value: "email"
    }, {
      label: "プッシュ通知",
      value: "push"
    }, {
      label: "SMS通知",
      value: "sms"
    }]} defaultValue={["email"]} />\r
        </Fieldset>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Fieldset {...args}>\r
            <Legend>無効化されたセクション</Legend>\r
            <Label label="名前">\r
                <Input placeholder="入力できません" />\r
            </Label>\r
            <CheckboxGroup options={[{
      label: "オプション1",
      value: "1"
    }, {
      label: "オプション2",
      value: "2"
    }]} />\r
        </Fieldset>
}`,...n.parameters?.docs?.source}}};const h=["Default","WithCheckboxGroup","Disabled"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:n,WithCheckboxGroup:s,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,F,s as W,n as a};
