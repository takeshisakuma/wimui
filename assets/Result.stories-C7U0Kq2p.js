import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-DIi1LCpb.js";import{I as c}from"./Icon-AzvAEZfC.js";import{u as a}from"./useTranslation-T6dr20_p.js";import{B as o}from"./Button-DrN5Sa9-.js";const R=({status:s})=>{switch(s){case"success":return r.jsx(c,{name:"CheckIcon",color:"positive",size:"large"});case"error":return r.jsx(c,{name:"CircleIcon",color:"destructive",size:"large"});case"warning":return r.jsx(c,{name:"CircleIcon",color:"caution",size:"large"});case"info":return r.jsx(c,{name:"CircleIcon",color:"informative",size:"large"});case"404":case"403":case"500":return r.jsx(c,{name:"CircleIcon",color:"secondary",size:"large"});default:return null}},n=({status:s="info",title:t,subTitle:e,extra:y,icon:x,className:b,children:g})=>{const{t:f}=a();return r.jsxs("div",{className:j("wim-result",`wim-result--${s}`,b),children:[r.jsx("div",{className:"wim-result-icon",children:x||r.jsx(R,{status:s})}),t&&r.jsx("div",{className:"wim-result-title",children:typeof t=="string"?f(t):t}),e&&r.jsx("div",{className:"wim-result-subtitle",children:typeof e=="string"?f(e):e}),y&&r.jsx("div",{className:"wim-result-extra",children:y}),g&&r.jsx("div",{className:"wim-result-content",children:g})]})};n.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:`| "success"
| "error"
| "info"
| "warning"
| "404"
| "403"
| "500"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:"result status, decide icons and colors",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},subTitle:{required:!1,tsType:{name:"ReactNode"},description:"The subTitle"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const T={title:"Components/Alerts & Notifications/Result",component:n,tags:[]},l={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"success",title:e("story_result_success_title"),subTitle:e("story_result_success_desc"),extra:[r.jsx(o,{priority:"primary",label:e("story_result_go_console")},"console"),r.jsx(o,{label:e("story_result_buy_again")},"buy")]})}},i={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,title:e("story_result_info_title"),extra:r.jsx(o,{priority:"primary",label:e("story_result_go_console")})})}},u={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"warning",title:e("story_result_warning_title"),extra:r.jsx(o,{priority:"primary",label:e("story_result_go_console")})})}},m={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"error",title:e("story_result_error_title"),subTitle:e("story_result_error_desc"),extra:[r.jsx(o,{priority:"primary",label:e("story_result_go_console")},"console"),r.jsx(o,{label:e("story_result_buy_again")},"buy")]})}},d={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"404",title:"404",subTitle:e("story_result_404_desc"),extra:r.jsx(o,{priority:"primary",label:e("story_result_back_home")})})}},_={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"403",title:"403",subTitle:e("story_result_403_desc"),extra:r.jsx(o,{priority:"primary",label:e("story_result_back_home")})})}},p={render:function(t){const{t:e}=a(["docs","common","components"]);return r.jsx(n,{...t,status:"500",title:"500",subTitle:e("story_result_500_desc"),extra:r.jsx(o,{priority:"primary",label:e("story_result_back_home")})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="success" title={t("story_result_success_title")} subTitle={t("story_result_success_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} title={t("story_result_info_title")} extra={<Button priority="primary" label={t("story_result_go_console")} />} />;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    return <Result {...args} status="error" title={t("story_result_error_title")} subTitle={t("story_result_error_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="404" title="404" subTitle={t("story_result_404_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="403" title="403" subTitle={t("story_result_403_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Result {...args} status="500" title="500" subTitle={t("story_result_500_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...p.parameters?.docs?.source}}};const S=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],k=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:m,Info:i,Status403:_,Status404:d,Status500:p,Success:l,Warning:u,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{m as E,i as I,k as R,l as S,u as W,d as a,_ as b,p as c};
