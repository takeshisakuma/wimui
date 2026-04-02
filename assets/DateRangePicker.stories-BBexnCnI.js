import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as P}from"./index-DF_nXgT0.js";import{r as f,A as g}from"./iframe-DKmwcFSw.js";import{D as p}from"./DatePicker-DoDJGcZg.js";import{F as k}from"./FieldTemplate-0Pi98aGO.js";import{u as y}from"./useTranslation-cHJIwR7k.js";const s=({startProps:n,endProps:r,className:a,label:o,error:i,required:d,layout:l="vertical"})=>{const c=`wim-daterangepicker-${f.useId()}`,m=o?`${c}-label`:void 0,u=i?`${c}-error`:void 0;return e.jsx(k,{label:o,error:i,required:d,layout:l,labelId:m,errorId:u,className:P("wim-daterangepicker-container",a),children:e.jsxs("div",{className:"wim-daterangepicker",children:[e.jsx(p,{...n,fullWidth:!0}),e.jsx("span",{className:"wim-daterangepicker-separator",children:"~"}),e.jsx(p,{...r,fullWidth:!0})]})})};s.__docgenInfo={description:"ユーザーが日付の範囲（開始日・終了日）を選択するためのコンポーネント。",methods:[],displayName:"DateRangePicker",props:{startProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof DatePicker>",elements:[{name:"DatePicker"}]},description:""},endProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof DatePicker>",elements:[{name:"DatePicker"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const D={title:"Components/Pickers & Sliders/DateRangePicker",component:s,tags:[]},t={render:function(r){const{t:a}=y(g);return e.jsx(s,{...r,startProps:{placeholder:a("story.daterangepicker_start"),...r.startProps},endProps:{placeholder:a("story.daterangepicker_end"),...r.endProps}})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <DateRangePicker {...args} startProps={{
      placeholder: t("story.daterangepicker_start"),
      ...args.startProps
    }} endProps={{
      placeholder: t("story.daterangepicker_end"),
      ...args.endProps
    }} />;
  }
}`,...t.parameters?.docs?.source}}};const _=["Default"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:_,default:D},Symbol.toStringTag,{value:"Module"}));export{q as D,t as a};
