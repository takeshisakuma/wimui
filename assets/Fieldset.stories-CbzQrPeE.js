import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-BYKyH6Np.js";import{L as c}from"./Legend-noHh8Eec.js";import{L as d}from"./Label--YTDd_GX.js";import{I as i}from"./Input-LHiKDcmk.js";import{C as u}from"./CheckboxGroup-JS3kf0o_.js";import{u as m}from"./useTranslation-gsjwUuWZ.js";const l=({children:o,disabled:t=!1,variant:e="default",className:p,..._})=>s.jsx("fieldset",{className:f("wim-fieldset",`wim-fieldset--${e}`,p),disabled:t,..._,children:o});l.__docgenInfo={description:"関連するフォーム要素をグループ化するコンポーネント。",methods:[],displayName:"Fieldset",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "full-width"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"full-width"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/Form Layout/Fieldset",component:l,parameters:{layout:"padded"}},r={render:function(t){const{t:e}=m(["docs","common","components"]);return s.jsxs(l,{...t,children:[s.jsx(c,{children:e("story_fieldset_basic")}),s.jsx(d,{label:e("story_fieldset_name"),children:s.jsx(i,{placeholder:e("story_fieldset_name_placeholder")})}),s.jsx(d,{label:e("story_header_contact"),children:s.jsx(i,{type:"email",placeholder:"example@wim.ui"})})]})}},n={render:function(t){const{t:e}=m(["docs","common","components"]);return s.jsxs(l,{...t,children:[s.jsx(c,{children:e("story_fieldset_notif")}),s.jsx(u,{options:[{label:e("story_fieldset_notif_email"),value:"email"},{label:e("story_fieldset_notif_push"),value:"push"},{label:e("story_fieldset_notif_sms"),value:"sms"}],defaultValue:["email"]})]})}},a={args:{disabled:!0},render:function(t){const{t:e}=m(["docs","common","components"]);return s.jsxs(l,{...t,children:[s.jsx(c,{children:e("story_fieldset_disabled_sec")}),s.jsx(d,{label:e("story_fieldset_name"),children:s.jsx(i,{placeholder:e("story_fieldset_disabled_placeholder")})}),s.jsx(u,{options:[{label:e("story_fieldset_opt1"),value:"1"},{label:e("story_fieldset_opt2"),value:"2"}]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Fieldset {...args}>\r
        <Legend>{t("story_fieldset_basic")}</Legend>\r
        <Label label={t("story_fieldset_name")}>\r
          <Input placeholder={t("story_fieldset_name_placeholder")} />\r
        </Label>\r
        <Label label={t("story_header_contact")}>\r
          <Input type="email" placeholder="example@wim.ui" />\r
        </Label>\r
      </Fieldset>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Fieldset {...args}>\r
        <Legend>{t("story_fieldset_notif")}</Legend>\r
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Fieldset {...args}>\r
        <Legend>{t("story_fieldset_disabled_sec")}</Legend>\r
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
}`,...a.parameters?.docs?.source}}};const y=["Default","WithCheckboxGroup","Disabled"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:a,WithCheckboxGroup:n,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,R as F,n as W,a};
