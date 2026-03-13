import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./StatusContent-DzoaecUI.js";import{I as _}from"./Icon-FTO_0HBc.js";import{B as i}from"./Button-D3SwmJug.js";import{u as a}from"./useTranslation-BONq47qB.js";const u={title:"Components/Internal/StatusContent",component:r,parameters:{layout:"centered"}},t={render:function(e){const{t:s}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{...e,title:s("doc_status_success_title"),description:s("doc_status_success_desc"),actions:o.jsxs(o.Fragment,{children:[o.jsx(i,{label:s("button_label"),priority:"primary"}),o.jsx(i,{label:s("doc_RefTable_desc"),priority:"secondary"})]})})},args:{icon:o.jsx(_,{name:"CheckCircleIcon",color:"primary"})}},c={render:function(e){const{t:s}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{...e,title:s("doc_status_success_title"),description:s("doc_status_success_desc")})},args:{...t.args,size:"small"}},n={render:function(e){const{t:s}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(r,{...e,title:s("doc_status_success_title"),description:s("doc_status_success_desc")})},args:{...t.args}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} actions={<>\r
                    <Button label={t("button_label")} priority="primary" />\r
                    <Button label={t("doc_RefTable_desc")} priority="secondary" />\r
                </>} />;
  },
  args: {
    icon: <Icon name="CheckCircleIcon" color="primary" />
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} />;
  },
  args: {
    ...Default.args,
    size: "small"
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} />;
  },
  args: {
    ...Default.args
  }
}`,...n.parameters?.docs?.source}}};const l=["Default","Small","NoAction"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,NoAction:n,Small:c,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{t as D,n as N,S,c as a};
