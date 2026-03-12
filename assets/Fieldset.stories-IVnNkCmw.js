import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-Cm_IZiCA.js";import{L as c}from"./Legend-CkJrDSXS.js";import{L as d}from"./FieldTemplate-Cf1XI41D.js";import{I as i}from"./Input-BpCjc_6Q.js";import{C as u}from"./CheckboxGroup-5w4oV12z.js";import{u as _}from"./useTranslation-DygSvNPf.js";const r=({children:l,disabled:o=!1,variant:e="default",className:p,...m})=>s.jsx("fieldset",{className:f("wim-fieldset",`wim-fieldset--${e}`,p),disabled:o,...m,children:l});r.__docgenInfo={description:"関連するフォーム要素をグループ化するコンポーネント。",methods:[],displayName:"Fieldset",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "full-width"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"full-width"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/Form Layout/Fieldset",component:r,parameters:{layout:"padded"}},t={render:function(o){const{t:e}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs(r,{...o,children:[s.jsx(c,{children:e("story_fieldset_basic")}),s.jsx(d,{label:e("story_fieldset_name"),children:s.jsx(i,{placeholder:e("story_fieldset_name_placeholder")})}),s.jsx(d,{label:e("story_header_contact"),children:s.jsx(i,{type:"email",placeholder:"example@wim.ui"})})]})}},a={render:function(o){const{t:e}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs(r,{...o,children:[s.jsx(c,{children:e("story_fieldset_notif")}),s.jsx(u,{options:[{label:e("story_fieldset_notif_email"),value:"email"},{label:e("story_fieldset_notif_push"),value:"push"},{label:e("story_fieldset_notif_sms"),value:"sms"}],defaultValue:["email"]})]})}},n={args:{disabled:!0},render:function(o){const{t:e}=_(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsxs(r,{...o,children:[s.jsx(c,{children:e("story_fieldset_disabled_sec")}),s.jsx(d,{label:e("story_fieldset_name"),children:s.jsx(i,{placeholder:e("story_fieldset_disabled_placeholder")})}),s.jsx(u,{options:[{label:e("story_fieldset_opt1"),value:"1"},{label:e("story_fieldset_opt2"),value:"2"}]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...n.parameters?.docs?.source}}};const b=["Default","WithCheckboxGroup","Disabled"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:n,WithCheckboxGroup:a,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{t as D,R as F,a as W,n as a};
