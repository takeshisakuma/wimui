import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as A}from"./index-Cg5poqOq.js";import{I as c}from"./Icon-DOhordQ8.js";import{I as E}from"./InteractiveArea-DSbx7HIe.js";import{u as a}from"./useTranslation-CmZQbFUa.js";import{B as n}from"./Button-DV3i85Ib.js";import{A as i}from"./iframe-Dmg4FORK.js";const T=({status:s})=>{switch(s){case"success":return r.jsx(c,{name:"CheckIcon",color:"positive"});case"error":return r.jsx(c,{name:"CircleIcon",color:"destructive"});case"warning":return r.jsx(c,{name:"CircleIcon",color:"caution"});case"info":return r.jsx(c,{name:"CircleIcon",color:"informative"});case"404":case"403":case"500":return r.jsx(c,{name:"CircleIcon",color:"secondary"});default:return null}},o=({status:s="info",title:t,description:e,extra:x,icon:b,className:S,children:R})=>{const{t:j}=a(),f=g=>typeof g=="string"?j(g):g;return r.jsx(E,{icon:b||r.jsx(T,{status:s}),title:f(t)??void 0,description:f(e)??void 0,actions:x,variant:"none",bgVariant:"transparent",className:A("wim-result",`wim-result--${s}`,S),children:R})};o.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:`| "success"
| "error"
| "info"
| "warning"
| "404"
| "403"
| "500"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:"result status, decide icons and colors",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const N={title:"Components/Alerts & Notifications/Result",component:o,tags:[]},l={render:function(t){const{t:e}=a(i);return r.jsx(o,{...t,status:"success",title:e("story_result_success_title"),description:e("story_result_success_desc"),extra:[r.jsx(n,{priority:"primary",label:e("story_result_go_console")},"console"),r.jsx(n,{label:e("story_result_buy_again")},"buy")]})}},u={render:function(t){const{t:e}=a(i);return r.jsx(o,{...t,title:e("story_result_info_title"),extra:r.jsx(n,{priority:"primary",label:e("story_result_go_console")})})}},_={render:function(t){const{t:e}=a(i);return r.jsx(o,{...t,status:"warning",title:e("story_result_warning_title"),extra:r.jsx(n,{priority:"primary",label:e("story_result_go_console")})})}},d={render:function(t){const{t:e}=a(i);return r.jsx(o,{...t,status:"error",title:e("story_result_error_title"),description:e("story_result_error_desc"),extra:[r.jsx(n,{priority:"primary",label:e("story_result_go_console")},"console"),r.jsx(n,{label:e("story_result_buy_again")},"buy")]})}},p={render:function(t){const{t:e}=a(i);return r.jsx(o,{...t,status:"404",title:"404",description:e("story_result_404_desc"),extra:r.jsx(n,{priority:"primary",label:e("story_result_back_home")})})}},m={render:function(t){const{t:e}=a(i);return r.jsx(o,{...t,status:"403",title:"403",description:e("story_result_403_desc"),extra:r.jsx(n,{priority:"primary",label:e("story_result_back_home")})})}},y={render:function(t){const{t:e}=a(i);return r.jsx(o,{...t,status:"500",title:"500",description:e("story_result_500_desc"),extra:r.jsx(n,{priority:"primary",label:e("story_result_back_home")})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="success" title={t("story_result_success_title")} description={t("story_result_success_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} title={t("story_result_info_title")} extra={<Button priority="primary" label={t("story_result_go_console")} />} />;
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="warning" title={t("story_result_warning_title")} extra={<Button priority="primary" label={t("story_result_go_console")} />} />;
  }
}`,..._.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="error" title={t("story_result_error_title")} description={t("story_result_error_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="404" title="404" description={t("story_result_404_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="403" title="403" description={t("story_result_403_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="500" title="500" description={t("story_result_500_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...y.parameters?.docs?.source}}};const v=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],M=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:d,Info:u,Status403:m,Status404:p,Status500:y,Success:l,Warning:_,__namedExportsOrder:v,default:N},Symbol.toStringTag,{value:"Module"}));export{d as E,u as I,M as R,l as S,_ as W,p as a,m as b,y as c};
