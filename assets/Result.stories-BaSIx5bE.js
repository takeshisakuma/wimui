import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-C9_oYSQB.js";import{I as i}from"./Icon-CfXRLdN0.js";import{I as A}from"./InteractiveArea-BKkHngdn.js";import{u as o}from"./useTranslation-CI9f0OZA.js";import{B as n}from"./Button-D_Dv3d3e.js";import{A as l}from"./iframe-BaVSnw9L.js";const E=({status:s})=>{switch(s){case"success":return t.jsx(i,{name:"CheckIcon",color:"positive"});case"error":return t.jsx(i,{name:"CircleIcon",color:"destructive"});case"warning":return t.jsx(i,{name:"CircleIcon",color:"caution"});case"info":return t.jsx(i,{name:"CircleIcon",color:"informative"});case"404":case"403":case"500":return t.jsx(i,{name:"CircleIcon",color:"secondary"});default:return null}},a=({status:s="info",title:r,description:e,extra:x,icon:b,className:S,children:R})=>{const{t:v}=o(),g=y=>typeof y=="string"?v(y):y;return t.jsx(A,{icon:b||t.jsx(E,{status:s}),title:g(r)??void 0,description:g(e)??void 0,actions:x,variant:"none",bgVariant:"transparent",className:j("wim-result",`wim-result--${s}`,S),children:R})};a.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:`| "success"
| "error"
| "info"
| "warning"
| "404"
| "403"
| "500"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:"result status, decide icons and colors",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const T={title:"Components/Alerts & Notifications/Result",component:a,tags:[]},c={render:function(r){const{t:e}=o(l);return t.jsx(a,{...r,status:"success",title:e("story.result_success_title"),description:e("story.result_success_desc"),extra:[t.jsx(n,{variant:"filled",label:e("story.result_go_console")},"console"),t.jsx(n,{label:e("story.result_buy_again")},"buy")]})}},u={render:function(r){const{t:e}=o(l);return t.jsx(a,{...r,title:e("story.result_info_title"),extra:t.jsx(n,{variant:"filled",label:e("story.result_go_console")})})}},d={render:function(r){const{t:e}=o(l);return t.jsx(a,{...r,status:"warning",title:e("story.result_warning_title"),extra:t.jsx(n,{variant:"filled",label:e("story.result_go_console")})})}},_={render:function(r){const{t:e}=o(l);return t.jsx(a,{...r,status:"error",title:e("story.result_error_title"),description:e("story.result_error_desc"),extra:[t.jsx(n,{variant:"filled",label:e("story.result_go_console")},"console"),t.jsx(n,{label:e("story.result_buy_again")},"buy")]})}},m={render:function(r){const{t:e}=o(l);return t.jsx(a,{...r,status:"404",title:"404",description:e("story.result_404_desc"),extra:t.jsx(n,{variant:"filled",label:e("story.result_back_home")})})}},p={render:function(r){const{t:e}=o(l);return t.jsx(a,{...r,status:"403",title:"403",description:e("story.result_403_desc"),extra:t.jsx(n,{variant:"filled",label:e("story.result_back_home")})})}},f={render:function(r){const{t:e}=o(l);return t.jsx(a,{...r,status:"500",title:"500",description:e("story.result_500_desc"),extra:t.jsx(n,{variant:"filled",label:e("story.result_back_home")})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="success" title={t("story.result_success_title")} description={t("story.result_success_desc")} extra={[<Button variant="filled" key="console" label={t("story.result_go_console")} />, <Button key="buy" label={t("story.result_buy_again")} />]} />;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} title={t("story.result_info_title")} extra={<Button variant="filled" label={t("story.result_go_console")} />} />;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="warning" title={t("story.result_warning_title")} extra={<Button variant="filled" label={t("story.result_go_console")} />} />;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="error" title={t("story.result_error_title")} description={t("story.result_error_desc")} extra={[<Button variant="filled" key="console" label={t("story.result_go_console")} />, <Button key="buy" label={t("story.result_buy_again")} />]} />;
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="404" title="404" description={t("story.result_404_desc")} extra={<Button variant="filled" label={t("story.result_back_home")} />} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="403" title="403" description={t("story.result_403_desc")} extra={<Button variant="filled" label={t("story.result_back_home")} />} />;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="500" title="500" description={t("story.result_500_desc")} extra={<Button variant="filled" label={t("story.result_back_home")} />} />;
  }
}`,...f.parameters?.docs?.source}}};const N=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],M=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:_,Info:u,Status403:p,Status404:m,Status500:f,Success:c,Warning:d,__namedExportsOrder:N,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as E,u as I,M as R,c as S,d as W,m as a,p as b,f as c};
