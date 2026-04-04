import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as R}from"./index-K9UxIAwh.js";import{I as c}from"./Icon-BhqaBnH4.js";import{I as j}from"./InteractiveArea-CDJM3C9p.js";import{B as n}from"./Button-xp1wFFLS.js";import{A as o}from"./iframe-Bn5mqC8Q.js";import{u as i}from"./useTranslation-Cn4N2seM.js";const A=({intent:s,status:r})=>{if(r)return t.jsx(c,{name:"CircleIcon",color:"secondary"});switch(s){case"success":return t.jsx(c,{name:"CheckIcon",color:"positive"});case"error":return t.jsx(c,{name:"CircleIcon",color:"destructive"});case"warning":return t.jsx(c,{name:"CircleIcon",color:"caution"});case"info":return t.jsx(c,{name:"CircleIcon",color:"informative"});default:return null}},a=({intent:s="info",status:r,title:e,description:f,extra:g,icon:v,className:x,children:S})=>t.jsx(j,{icon:v||t.jsx(A,{intent:s,status:r}),title:e??void 0,description:f??void 0,actions:g,variant:"none",bgVariant:"transparent",className:R("wim-result",s&&`wim-result--${s}`,r&&`wim-result--${r}`,x),children:S});a.__docgenInfo={description:"",methods:[],displayName:"Result",props:{intent:{required:!1,tsType:{name:"Extract",elements:[{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "info"
| "neutral"
| "default"
| "destructive"
| "positive"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"positive"'}]},{name:"union",raw:'"success" | "error" | "info" | "warning"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'}]}],raw:'Extract<WimIntent, "success" | "error" | "info" | "warning">'},description:"Semantic intent — determines the icon and color.",defaultValue:{value:'"info"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"404" | "403" | "500"',elements:[{name:"literal",value:'"404"'},{name:"literal",value:'"403"'},{name:"literal",value:'"500"'}]},description:`HTTP error status — adds a status-specific CSS class and shows a neutral icon.
Use for error pages (404, 403, 500).`},title:{required:!1,tsType:{name:"ReactNode"},description:"The title"},description:{required:!1,tsType:{name:"ReactNode"},description:"The description"},extra:{required:!1,tsType:{name:"ReactNode"},description:"Operating area"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},children:{required:!1,tsType:{name:"ReactNode"},description:"The children"}}};const h={title:"Components/Alerts & Notifications/Result",component:a,tags:[]},l={render:function(r){const{t:e}=i(o);return t.jsx(a,{...r,intent:"success",title:e("story.result_success_title"),description:e("story.result_success_desc"),extra:[t.jsx(n,{variant:"solid",children:e("story.result_go_console")},"console"),t.jsx(n,{children:e("story.result_buy_again")},"buy")]})}},u={render:function(r){const{t:e}=i(o);return t.jsx(a,{...r,title:e("story.result_info_title"),extra:t.jsx(n,{variant:"solid",children:e("story.result_go_console")})})}},d={render:function(r){const{t:e}=i(o);return t.jsx(a,{...r,intent:"warning",title:e("story.result_warning_title"),extra:t.jsx(n,{variant:"solid",children:e("story.result_go_console")})})}},m={render:function(r){const{t:e}=i(o);return t.jsx(a,{...r,intent:"error",title:e("story.result_error_title"),description:e("story.result_error_desc"),extra:[t.jsx(n,{variant:"solid",children:e("story.result_go_console")},"console"),t.jsx(n,{children:e("story.result_buy_again")},"buy")]})}},_={render:function(r){const{t:e}=i(o);return t.jsx(a,{...r,status:"404",title:"404",description:e("story.result_404_desc"),extra:t.jsx(n,{variant:"solid",children:e("story.result_back_home")})})}},p={render:function(r){const{t:e}=i(o);return t.jsx(a,{...r,status:"403",title:"403",description:e("story.result_403_desc"),extra:t.jsx(n,{variant:"solid",children:e("story.result_back_home")})})}},y={render:function(r){const{t:e}=i(o);return t.jsx(a,{...r,status:"500",title:"500",description:e("story.result_500_desc"),extra:t.jsx(n,{variant:"solid",children:e("story.result_back_home")})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="success" title={t("story.result_success_title")} description={t("story.result_success_desc")} extra={[<Button variant="solid" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} title={t("story.result_info_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="warning" title={t("story.result_warning_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="error" title={t("story.result_error_title")} description={t("story.result_error_desc")} extra={[<Button variant="solid" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...m.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="404" title="404" description={t("story.result_404_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="403" title="403" description={t("story.result_403_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="500" title="500" description={t("story.result_500_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...y.parameters?.docs?.source}}};const E=["Success","Info","Warning","ErrorStatus","Status404","Status403","Status500"],I=Object.freeze(Object.defineProperty({__proto__:null,ErrorStatus:m,Info:u,Status403:p,Status404:_,Status500:y,Success:l,Warning:d,__namedExportsOrder:E,default:h},Symbol.toStringTag,{value:"Module"}));export{m as E,u as I,I as R,l as S,d as W,_ as a,p as b,y as c};
