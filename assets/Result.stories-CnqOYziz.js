import{j as o}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-Cl0yRb9X.js";import{I as a}from"./Icon-FTO_0HBc.js";import{I as S}from"./InteractiveArea-WILr6azr.js";import{u as c}from"./useTranslation-BONq47qB.js";import{B as r}from"./Button-D3SwmJug.js";const T=({status:t})=>{switch(t){case"success":return o.jsx(a,{name:"CheckIcon",color:"positive"});case"error":return o.jsx(a,{name:"CircleIcon",color:"destructive"});case"warning":return o.jsx(a,{name:"CircleIcon",color:"caution"});case"info":return o.jsx(a,{name:"CircleIcon",color:"informative"});case"404":case"403":case"500":return o.jsx(a,{name:"CircleIcon",color:"secondary"});default:return null}},n=({status:t="info",title:e,description:s,extra:f,icon:v,className:x,children:b})=>{const{t:R}=c(),g=y=>typeof y=="string"?R(y):y;return o.jsx(S,{icon:v||o.jsx(T,{status:t}),title:g(e)??void 0,description:g(s)??void 0,actions:f,variant:"none",bgVariant:"transparent",className:j("wim-result",`wim-result--${t}`,x),children:b})};n.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:`| "success"
| "error"
| "info"
| "warning"
| "404"
| "403"
| "500"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:"result status, decide icons and colors",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const h={title:"Components/Alerts & Notifications/Result",component:n,tags:[]},i={render:function(e){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{...e,status:"success",title:s("story_result_success_title"),description:s("story_result_success_desc"),extra:[o.jsx(r,{priority:"primary",label:s("story_result_go_console")},"console"),o.jsx(r,{label:s("story_result_buy_again")},"buy")]})}},d={render:function(e){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{...e,title:s("story_result_info_title"),extra:o.jsx(r,{priority:"primary",label:s("story_result_go_console")})})}},l={render:function(e){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{...e,status:"warning",title:s("story_result_warning_title"),extra:o.jsx(r,{priority:"primary",label:s("story_result_go_console")})})}},u={render:function(e){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{...e,status:"error",title:s("story_result_error_title"),description:s("story_result_error_desc"),extra:[o.jsx(r,{priority:"primary",label:s("story_result_go_console")},"console"),o.jsx(r,{label:s("story_result_buy_again")},"buy")]})}},_={render:function(e){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{...e,status:"404",title:"404",description:s("story_result_404_desc"),extra:o.jsx(r,{priority:"primary",label:s("story_result_back_home")})})}},p={render:function(e){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{...e,status:"403",title:"403",description:s("story_result_403_desc"),extra:o.jsx(r,{priority:"primary",label:s("story_result_back_home")})})}},m={render:function(e){const{t:s}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{...e,status:"500",title:"500",description:s("story_result_500_desc"),extra:o.jsx(r,{priority:"primary",label:s("story_result_back_home")})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Result {...args} status="success" title={t("story_result_success_title")} description={t("story_result_success_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Result {...args} title={t("story_result_info_title")} extra={<Button priority="primary" label={t("story_result_go_console")} />} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Result {...args} status="warning" title={t("story_result_warning_title")} extra={<Button priority="primary" label={t("story_result_go_console")} />} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Result {...args} status="error" title={t("story_result_error_title")} description={t("story_result_error_desc")} extra={[<Button priority="primary" key="console" label={t("story_result_go_console")} />, <Button key="buy" label={t("story_result_buy_again")} />]} />;
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Result {...args} status="404" title="404" description={t("story_result_404_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Result {...args} status="403" title="403" description={t("story_result_403_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Result {...args} status="500" title="500" description={t("story_result_500_desc")} extra={<Button priority="primary" label={t("story_result_back_home")} />} />;
  }
}`,...m.parameters?.docs?.source}}};const I=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],E=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:u,Info:d,Status403:p,Status404:_,Status500:m,Success:i,Warning:l,__namedExportsOrder:I,default:h},Symbol.toStringTag,{value:"Module"}));export{u as E,d as I,E as R,i as S,l as W,_ as a,p as b,m as c};
