import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./index-DuagTqeO.js";import{L as u}from"./Legend-Buf14eyc.js";import{L as i}from"./FieldTemplate-8d9nFvBX.js";import{I as d}from"./Input-Dp0fzGkX.js";import{C as _}from"./CheckboxGroup-BY6F5E7y.js";import{A as c}from"./iframe-CrEaZ-m1.js";import{u as p}from"./useTranslation-C_YAF8hH.js";const n=({children:o,disabled:s=!1,variant:e="default",className:m,...f})=>t.jsx("fieldset",{className:b("wim-fieldset",`wim-fieldset--${e}`,m),disabled:s,...f,children:o});n.__docgenInfo={description:"関連するフォーム要素をグループ化するコンポーネント。",methods:[],displayName:"Fieldset",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "full-width"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"full-width"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/Form Layout/Fieldset",component:n,parameters:{layout:"padded"}},l={render:function(s){const{t:e}=p(c);return t.jsxs(n,{...s,children:[t.jsx(u,{label:e("story_fieldset_basic")}),t.jsx(i,{label:e("story_fieldset_name"),children:t.jsx(d,{placeholder:e("story_fieldset_name_placeholder")})}),t.jsx(i,{label:e("story_header_contact"),children:t.jsx(d,{type:"email",placeholder:"example@wim.ui"})})]})}},a={render:function(s){const{t:e}=p(c);return t.jsxs(n,{...s,children:[t.jsx(u,{label:e("story_fieldset_notif")}),t.jsx(_,{options:[{label:e("story_fieldset_notif_email"),value:"email"},{label:e("story_fieldset_notif_push"),value:"push"},{label:e("story_fieldset_notif_sms"),value:"sms"}],defaultValue:["email"]})]})}},r={args:{disabled:!0},render:function(s){const{t:e}=p(c);return t.jsxs(n,{...s,children:[t.jsx(u,{label:e("story_fieldset_disabled_sec")}),t.jsx(i,{label:e("story_fieldset_name"),children:t.jsx(d,{placeholder:e("story_fieldset_disabled_placeholder")})}),t.jsx(_,{options:[{label:e("story_fieldset_opt1"),value:"1"},{label:e("story_fieldset_opt2"),value:"2"}]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>
        <Legend label={t("story_fieldset_basic")} />
        <Label label={t("story_fieldset_name")}>
          <Input placeholder={t("story_fieldset_name_placeholder")} />
        </Label>
        <Label label={t("story_header_contact")}>
          <Input type="email" placeholder="example@wim.ui" />
        </Label>
      </Fieldset>;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>
        <Legend label={t("story_fieldset_notif")} />
        <CheckboxGroup options={[{
        label: t("story_fieldset_notif_email"),
        value: "email"
      }, {
        label: t("story_fieldset_notif_push"),
        value: "push"
      }, {
        label: t("story_fieldset_notif_sms"),
        value: "sms"
      }]} defaultValue={["email"]} />
      </Fieldset>;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>
        <Legend label={t("story_fieldset_disabled_sec")} />
        <Label label={t("story_fieldset_name")}>
          <Input placeholder={t("story_fieldset_disabled_placeholder")} />
        </Label>
        <CheckboxGroup options={[{
        label: t("story_fieldset_opt1"),
        value: "1"
      }, {
        label: t("story_fieldset_opt2"),
        value: "2"
      }]} />
      </Fieldset>;
  }
}`,...r.parameters?.docs?.source}}};const h=["Default","WithCheckboxGroup","Disabled"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:r,WithCheckboxGroup:a,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{l as D,C as F,a as W,r as a};
