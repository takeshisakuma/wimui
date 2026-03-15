import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./index-COgXasq6.js";import{L as u}from"./Legend-Cyq93-kI.js";import{L as i}from"./FieldTemplate-ChInm0BR.js";import{I as d}from"./Input-CVAhdvlf.js";import{C as _}from"./CheckboxGroup-DeisyJwq.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as p}from"./useTranslation-7X4DMM5t.js";const n=({children:o,disabled:s=!1,variant:e="default",className:m,...f})=>t.jsx("fieldset",{className:b("wim-fieldset",`wim-fieldset--${e}`,m),disabled:s,...f,children:o});n.__docgenInfo={description:"関連するフォーム要素をグループ化するコンポーネント。",methods:[],displayName:"Fieldset",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "full-width"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"full-width"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/Form Layout/Fieldset",component:n,parameters:{layout:"padded"}},r={render:function(s){const{t:e}=p(c);return t.jsxs(n,{...s,children:[t.jsx(u,{label:e("story_fieldset_basic")}),t.jsx(i,{label:e("story_fieldset_name"),children:t.jsx(d,{placeholder:e("story_fieldset_name_placeholder")})}),t.jsx(i,{label:e("story_header_contact"),children:t.jsx(d,{type:"email",placeholder:"example@wim.ui"})})]})}},l={render:function(s){const{t:e}=p(c);return t.jsxs(n,{...s,children:[t.jsx(u,{label:e("story_fieldset_notif")}),t.jsx(_,{options:[{label:e("story_fieldset_notif_email"),value:"email"},{label:e("story_fieldset_notif_push"),value:"push"},{label:e("story_fieldset_notif_sms"),value:"sms"}],defaultValue:["email"]})]})}},a={args:{disabled:!0},render:function(s){const{t:e}=p(c);return t.jsxs(n,{...s,children:[t.jsx(u,{label:e("story_fieldset_disabled_sec")}),t.jsx(i,{label:e("story_fieldset_name"),children:t.jsx(d,{placeholder:e("story_fieldset_disabled_placeholder")})}),t.jsx(_,{options:[{label:e("story_fieldset_opt1"),value:"1"},{label:e("story_fieldset_opt2"),value:"2"}]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>\r
        <Legend label={t("story_fieldset_basic")} />\r
        <Label label={t("story_fieldset_name")}>\r
          <Input placeholder={t("story_fieldset_name_placeholder")} />\r
        </Label>\r
        <Label label={t("story_header_contact")}>\r
          <Input type="email" placeholder="example@wim.ui" />\r
        </Label>\r
      </Fieldset>;
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>\r
        <Legend label={t("story_fieldset_notif")} />\r
        <CheckboxGroup options={[{
        label: t("story_fieldset_notif_email"),
        value: "email"
      }, {
        label: t("story_fieldset_notif_push"),
        value: "push"
      }, {
        label: t("story_fieldset_notif_sms"),
        value: "sms"
      }]} defaultValue={["email"]} />\r
      </Fieldset>;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Fieldset {...args}>\r
        <Legend label={t("story_fieldset_disabled_sec")} />\r
        <Label label={t("story_fieldset_name")}>\r
          <Input placeholder={t("story_fieldset_disabled_placeholder")} />\r
        </Label>\r
        <CheckboxGroup options={[{
        label: t("story_fieldset_opt1"),
        value: "1"
      }, {
        label: t("story_fieldset_opt2"),
        value: "2"
      }]} />\r
      </Fieldset>;
  }
}`,...a.parameters?.docs?.source}}};const h=["Default","WithCheckboxGroup","Disabled"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:a,WithCheckboxGroup:l,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,C as F,l as W,a};
