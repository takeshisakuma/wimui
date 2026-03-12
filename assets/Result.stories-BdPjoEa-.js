import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as S}from"./index-Ckw0h7AD.js";import{I as c}from"./Icon-mnVo4eg5.js";import{I as T}from"./InteractiveArea-YF9HUWow.js";import{u as a}from"./useTranslation-BH3LN071.js";import{B as o}from"./Button-DcecViuG.js";const v=({status:s})=>{switch(s){case"success":return r.jsx(c,{name:"CheckIcon",color:"positive"});case"error":return r.jsx(c,{name:"CircleIcon",color:"destructive"});case"warning":return r.jsx(c,{name:"CircleIcon",color:"caution"});case"info":return r.jsx(c,{name:"CircleIcon",color:"informative"});case"404":case"403":case"500":return r.jsx(c,{name:"CircleIcon",color:"secondary"});default:return null}},n=({status:s="info",title:t,description:e,extra:f,icon:x,className:b,children:R})=>{const{t:j}=a(),g=y=>typeof y=="string"?j(y):y;return r.jsx(T,{icon:x||r.jsx(v,{status:s}),title:g(t)??void 0,description:g(e)??void 0,actions:f,variant:"none",bgVariant:"transparent",className:S("wim-result",`wim-result--${s}`,b),children:R})};n.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:`| "success"
| "error"
| "info"
| "warning"
| "404"
| "403"
| "500"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:"result status, decide icons and colors",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const h={title:"Components/Alerts & Notifications/Result",component:n,tags:[]},i={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"success",title:e("story_result_success_title"),description:e("story_result_success_desc"),extra:[r.jsx(o,{priority:"primary",label:e("story_result_go_console")},"console"),r.jsx(o,{label:e("story_result_buy_again")},"buy")]})}},l={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,title:e("story_result_info_title"),extra:r.jsx(o,{priority:"primary",label:e("story_result_go_console")})})}},u={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"warning",title:e("story_result_warning_title"),extra:r.jsx(o,{priority:"primary",label:e("story_result_go_console")})})}},m={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"error",title:e("story_result_error_title"),description:e("story_result_error_desc"),extra:[r.jsx(o,{priority:"primary",label:e("story_result_go_console")},"console"),r.jsx(o,{label:e("story_result_buy_again")},"buy")]})}},d={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"404",title:"404",description:e("story_result_404_desc"),extra:r.jsx(o,{priority:"primary",label:e("story_result_back_home")})})}},p={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"403",title:"403",description:e("story_result_403_desc"),extra:r.jsx(o,{priority:"primary",label:e("story_result_back_home")})})}},_={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"500",title:"500",description:e("story_result_500_desc"),extra:r.jsx(o,{priority:"primary",label:e("story_result_back_home")})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="success" title={t("story_result_success_title")} description={t("story_result_success_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} title={t("story_result_info_title")} extra={<Button priority="primary" label={t("story_result_go_console")} />} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="warning" title={t("story_result_warning_title")} extra={<Button priority="primary" label={t("story_result_go_console")} />} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="error" title={t("story_result_error_title")} description={t("story_result_error_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="404" title="404" description={t("story_result_404_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="403" title="403" description={t("story_result_403_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="500" title="500" description={t("story_result_500_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,..._.parameters?.docs?.source}}};const I=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],E=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:m,Info:l,Status403:p,Status404:d,Status500:_,Success:i,Warning:u,__namedExportsOrder:I,default:h},Symbol.toStringTag,{value:"Module"}));export{m as E,l as I,E as R,i as S,u as W,d as a,p as b,_ as c};
