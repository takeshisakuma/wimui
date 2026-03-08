import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c}from"./index-CFIryxeI.js";import{D as o}from"./DatePicker-CWaRnZBI.js";import{u as p}from"./useTranslation-DccyvZwG.js";const a=({startProps:n,endProps:e,className:s})=>r.jsxs("div",{className:c("wim-daterangepicker",s),children:[r.jsx(o,{...n,fullWidth:!0}),r.jsx("span",{className:"wim-daterangepicker-separator",children:"~"}),r.jsx(o,{...e,fullWidth:!0})]});a.__docgenInfo={description:"ユーザーが日付の範囲（開始日・終了日）を選択するためのコンポーネント。",methods:[],displayName:"DateRangePicker",props:{startProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof DatePicker>",elements:[{name:"DatePicker"}]},description:""},endProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof DatePicker>",elements:[{name:"DatePicker"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const i={title:"Components/Pickers & Sliders/DateRangePicker",component:a,tags:[]},t={render:function(e){const{t:s}=p(["docs","common","components"]);return r.jsx(a,{...e,startProps:{placeholder:s("story_daterangepicker_start"),...e.startProps},endProps:{placeholder:s("story_daterangepicker_end"),...e.endProps}})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <DateRangePicker {...args} startProps={{
      placeholder: t("story_daterangepicker_start"),
      ...args.startProps
    }} endProps={{
      placeholder: t("story_daterangepicker_end"),
      ...args.endProps
    }} />;
  }
}`,...t.parameters?.docs?.source}}};const d=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{f as D,t as a};
