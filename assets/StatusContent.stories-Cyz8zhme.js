import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as o}from"./StatusContent-Dyaat5fy.js";import{I as d}from"./Icon-BJ9I8SuJ.js";import{B as l}from"./Button-BYZRdEHu.js";import{A as c}from"./iframe-BCt2Cqzi.js";import{u as i}from"./useTranslation-iqmbh8MZ.js";const m={title:"Components/Internal/StatusContent",component:o,parameters:{layout:"centered"}},e={render:function(n){const{t}=i(c);return s.jsx(o,{...n,title:t("doc.status_success_title"),description:t("doc.status_success_desc"),actions:s.jsxs(s.Fragment,{children:[s.jsx(l,{label:t("button.label"),variant:"filled"}),s.jsx(l,{label:t("doc.RefTable_desc"),variant:"outlined"})]})})},args:{icon:s.jsx(d,{name:"CheckCircleIcon",color:"primary"})}},r={render:function(n){const{t}=i(c);return s.jsx(o,{...n,title:t("doc.status_success_title"),description:t("doc.status_success_desc")})},args:{...e.args,size:"small"}},a={render:function(n){const{t}=i(c);return s.jsx(o,{...n,title:t("doc.status_success_title"),description:t("doc.status_success_desc")})},args:{...e.args}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc.status_success_title")} description={t("doc.status_success_desc")} actions={<>
                    <Button label={t("button.label")} variant="filled" />
                    <Button label={t("doc.RefTable_desc")} variant="outlined" />
                </>} />;
  },
  args: {
    icon: <Icon name="CheckCircleIcon" color="primary" />
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc.status_success_title")} description={t("doc.status_success_desc")} />;
  },
  args: {
    ...Default.args,
    size: "small"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc.status_success_title")} description={t("doc.status_success_desc")} />;
  },
  args: {
    ...Default.args
  }
}`,...a.parameters?.docs?.source}}};const _=["Default","Small","NoAction"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,NoAction:a,Small:r,__namedExportsOrder:_,default:m},Symbol.toStringTag,{value:"Module"}));export{e as D,a as N,b as S,r as a};
