import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as v}from"./index-Bwa-Lhar.js";import{I as c}from"./Icon-BPIAQPrk.js";import{I as j}from"./InteractiveArea-j2hH9zkR.js";import{B as n}from"./Button-DGm-W0x4.js";import{A as a}from"./iframe-Bc6tRPQC.js";import{u as i}from"./useTranslation-DlPMeJ4i.js";const A=({intent:s,status:r})=>{if(r)return t.jsx(c,{name:"CircleIcon",color:"secondary"});switch(s){case"success":return t.jsx(c,{name:"CheckIcon",color:"positive"});case"error":return t.jsx(c,{name:"CircleIcon",color:"destructive"});case"warning":return t.jsx(c,{name:"CircleIcon",color:"caution"});case"info":return t.jsx(c,{name:"CircleIcon",color:"informative"});default:return null}},o=({intent:s="info",status:r,title:e,description:y,extra:g,icon:x,className:S,children:R})=>t.jsx(j,{icon:x||t.jsx(A,{intent:s,status:r}),title:e??void 0,description:y??void 0,actions:g,variant:"none",bgVariant:"transparent",className:v("wim-result",s&&`wim-result--${s}`,r&&`wim-result--${r}`,S),children:R});o.__docgenInfo={description:"",methods:[],displayName:"Result",props:{intent:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "info" | "warning"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'}]},description:"Semantic intent — determines the icon and color.",defaultValue:{value:'"info"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"404" | "403" | "500"',elements:[{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:`HTTP error status — adds a status-specific CSS class and shows a neutral icon.
Use for error pages (404, 403, 500).`},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const h={title:"Components/Alerts & Notifications/Result",component:o,tags:[]},l={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"success",title:e("story.result_success_title"),description:e("story.result_success_desc"),extra:[t.jsx(n,{variant:"filled",children:e("story.result_go_console")},"console"),t.jsx(n,{children:e("story.result_buy_again")},"buy")]})}},u={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,title:e("story.result_info_title"),extra:t.jsx(n,{variant:"filled",children:e("story.result_go_console")})})}},d={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"warning",title:e("story.result_warning_title"),extra:t.jsx(n,{variant:"filled",children:e("story.result_go_console")})})}},m={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"error",title:e("story.result_error_title"),description:e("story.result_error_desc"),extra:[t.jsx(n,{variant:"filled",children:e("story.result_go_console")},"console"),t.jsx(n,{children:e("story.result_buy_again")},"buy")]})}},_={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,status:"404",title:"404",description:e("story.result_404_desc"),extra:t.jsx(n,{variant:"filled",children:e("story.result_back_home")})})}},p={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,status:"403",title:"403",description:e("story.result_403_desc"),extra:t.jsx(n,{variant:"filled",children:e("story.result_back_home")})})}},f={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,status:"500",title:"500",description:e("story.result_500_desc"),extra:t.jsx(n,{variant:"filled",children:e("story.result_back_home")})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="success" title={t("story.result_success_title")} description={t("story.result_success_desc")} extra={[<Button variant="filled" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} title={t("story.result_info_title")} extra={<Button variant="filled">{t("story.result_go_console")}</Button>} />;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="warning" title={t("story.result_warning_title")} extra={<Button variant="filled">{t("story.result_go_console")}</Button>} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="error" title={t("story.result_error_title")} description={t("story.result_error_desc")} extra={[<Button variant="filled" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="404" title="404" description={t("story.result_404_desc")} extra={<Button variant="filled">{t("story.result_back_home")}</Button>} />;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="403" title="403" description={t("story.result_403_desc")} extra={<Button variant="filled">{t("story.result_back_home")}</Button>} />;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="500" title="500" description={t("story.result_500_desc")} extra={<Button variant="filled">{t("story.result_back_home")}</Button>} />;
  }
}`,...f.parameters?.docs?.source}}};const T=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],I=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:m,Info:u,Status403:p,Status404:_,Status500:f,Success:l,Warning:d,__namedExportsOrder:T,default:h},Symbol.toStringTag,{value:"Module"}));export{m as E,u as I,I as R,l as S,d as W,_ as a,p as b,f as c};
