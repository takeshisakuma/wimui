import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as R}from"./index-DP26yAW4.js";import{I as c}from"./Icon-BdgCn_Xq.js";import{I as v}from"./InteractiveArea-Cx8Tkepl.js";import{B as n}from"./Button-DZW7ODAc.js";import{A as a}from"./iframe-GzHoau5L.js";import{u as i}from"./useTranslation-Ckw9ivsw.js";const j=({intent:s})=>{switch(s){case"success":return t.jsx(c,{name:"CheckIcon",color:"positive"});case"error":return t.jsx(c,{name:"CircleIcon",color:"destructive"});case"warning":return t.jsx(c,{name:"CircleIcon",color:"caution"});case"info":return t.jsx(c,{name:"CircleIcon",color:"informative"});case"404":case"403":case"500":return t.jsx(c,{name:"CircleIcon",color:"secondary"});default:return null}},o=({intent:s="info",title:r,description:e,extra:y,icon:g,className:x,children:S})=>t.jsx(v,{icon:g||t.jsx(j,{intent:s}),title:r??void 0,description:e??void 0,actions:y,variant:"none",bgVariant:"transparent",className:R("wim-result",`wim-result--${s}`,x),children:S});o.__docgenInfo={description:"",methods:[],displayName:"Result",props:{intent:{required:!1,tsType:{name:"union",raw:`| "success"
| "error"
| "info"
| "warning"
| "404"
| "403"
| "500"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:"result intent, decide icons and colors",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const A={title:"Components/Alerts & Notifications/Result",component:o,tags:[]},l={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"success",title:e("story.result_success_title"),description:e("story.result_success_desc"),extra:[t.jsx(n,{variant:"filled",children:e("story.result_go_console")},"console"),t.jsx(n,{children:e("story.result_buy_again")},"buy")]})}},u={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,title:e("story.result_info_title"),extra:t.jsx(n,{variant:"filled",children:e("story.result_go_console")})})}},d={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"warning",title:e("story.result_warning_title"),extra:t.jsx(n,{variant:"filled",children:e("story.result_go_console")})})}},_={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"error",title:e("story.result_error_title"),description:e("story.result_error_desc"),extra:[t.jsx(n,{variant:"filled",children:e("story.result_go_console")},"console"),t.jsx(n,{children:e("story.result_buy_again")},"buy")]})}},m={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"404",title:"404",description:e("story.result_404_desc"),extra:t.jsx(n,{variant:"filled",children:e("story.result_back_home")})})}},p={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"403",title:"403",description:e("story.result_403_desc"),extra:t.jsx(n,{variant:"filled",children:e("story.result_back_home")})})}},f={render:function(r){const{t:e}=i(a);return t.jsx(o,{...r,intent:"500",title:"500",description:e("story.result_500_desc"),extra:t.jsx(n,{variant:"filled",children:e("story.result_back_home")})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="error" title={t("story.result_error_title")} description={t("story.result_error_desc")} extra={[<Button variant="filled" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="404" title="404" description={t("story.result_404_desc")} extra={<Button variant="filled">{t("story.result_back_home")}</Button>} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="403" title="403" description={t("story.result_403_desc")} extra={<Button variant="filled">{t("story.result_back_home")}</Button>} />;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="500" title="500" description={t("story.result_500_desc")} extra={<Button variant="filled">{t("story.result_back_home")}</Button>} />;
  }
}`,...f.parameters?.docs?.source}}};const h=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],I=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:_,Info:u,Status403:p,Status404:m,Status500:f,Success:l,Warning:d,__namedExportsOrder:h,default:A},Symbol.toStringTag,{value:"Module"}));export{_ as E,u as I,I as R,l as S,d as W,m as a,p as b,f as c};
