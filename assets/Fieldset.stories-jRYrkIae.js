import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./index-BY4ULPk8.js";import{L as d}from"./Legend-ylaaVmqr.js";import{L as t}from"./Label-BTpeCjCX.js";import{I as o}from"./Input-D1SsAyoV.js";import{C as i}from"./CheckboxGroup-DiePETu_.js";const n=({children:a,disabled:u=!1,variant:p="default",className:c,...m})=>e.jsx("fieldset",{className:b("wim-fieldset",`wim-fieldset--${p}`,c),disabled:u,...m,children:a});n.__docgenInfo={description:"関連するフォーム要素をグループ化するコンポーネント。",methods:[],displayName:"Fieldset",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "full-width"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"full-width"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const f={title:"Component/Form Inputs/Fieldset",component:n,parameters:{layout:"padded"}},l={render:a=>e.jsxs(n,{...a,children:[e.jsx(d,{children:"基本情報"}),e.jsx(t,{label:"名前",children:e.jsx(o,{placeholder:"山田 太郎"})}),e.jsx(t,{label:"メールアドレス",children:e.jsx(o,{type:"email",placeholder:"example@wim.ui"})})]})},r={render:a=>e.jsxs(n,{...a,children:[e.jsx(d,{children:"通知設定"}),e.jsx(i,{options:[{label:"メール通知",value:"email"},{label:"プッシュ通知",value:"push"},{label:"SMS通知",value:"sms"}],defaultValue:["email"]})]})},s={args:{disabled:!0},render:a=>e.jsxs(n,{...a,children:[e.jsx(d,{children:"無効化されたセクション"}),e.jsx(t,{label:"名前",children:e.jsx(o,{placeholder:"入力できません"})}),e.jsx(i,{options:[{label:"オプション1",value:"1"},{label:"オプション2",value:"2"}]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Fieldset {...args}>\r
            <Legend>基本情報</Legend>\r
            <Label label="名前">\r
                <Input placeholder="山田 太郎" />\r
            </Label>\r
            <Label label="メールアドレス">\r
                <Input type="email" placeholder="example@wim.ui" />\r
            </Label>\r
        </Fieldset>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const h=["Default","WithCheckboxGroup","Disabled"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:s,WithCheckboxGroup:r,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{l as D,y as F,r as W,s as a};
