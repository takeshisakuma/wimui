import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as l}from"./Selectbox-D9VH2BLD.js";import{A as n}from"./i18nConstants-BpHxieg5.js";import{u as r}from"./useTranslation-XEwyYNrX.js";const i={title:"Components/Selection Controls/Selectbox",component:l,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},p={render:function(t){const{t:e}=r(n),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...t,options:o,placeholder:e("story_selectbox_placeholder")})}},c={render:function(t){const{t:e}=r(n),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...t,label:e("story_selectbox_label"),options:o,placeholder:e("story_selectbox_placeholder")})}},b={render:function(t){const{t:e}=r(n),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...t,options:o,defaultValue:"opt2"})}},u={render:function(t){const{t:e}=r(n),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...t,options:o,disabled:!0,defaultValue:"opt1"})}},_={render:function(t){const{t:e}=r(n),o=[{label:e("story_selectbox_settings"),value:"settings"},{label:e("story_selectbox_profile"),value:"profile"},{type:"separator"},{label:e("story_selectbox_help"),value:"help"},{label:e("story_selectbox_about"),value:"about"},{type:"separator"},{label:e("story_selectbox_logout"),value:"logout"}];return s.jsx(l,{...t,options:o,placeholder:e("story_selectbox_placeholder")})}},d={render:function(t){const{t:e}=r(n),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...t,options:o,allowClear:!0,defaultValue:"opt1",placeholder:e("story_selectbox_placeholder")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_selectbox_opt1"),
      value: "opt1"
    }, {
      label: t("story_selectbox_opt2"),
      value: "opt2"
    }, {
      label: t("story_selectbox_opt3"),
      value: "opt3"
    }, {
      label: t("story_selectbox_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story_selectbox_opt5"),
      value: "opt5"
    }];
    return <Selectbox {...args} options={options} placeholder={t("story_selectbox_placeholder")} />;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_selectbox_opt1"),
      value: "opt1"
    }, {
      label: t("story_selectbox_opt2"),
      value: "opt2"
    }, {
      label: t("story_selectbox_opt3"),
      value: "opt3"
    }, {
      label: t("story_selectbox_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story_selectbox_opt5"),
      value: "opt5"
    }];
    return <Selectbox {...args} label={t("story_selectbox_label")} options={options} placeholder={t("story_selectbox_placeholder")} />;
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_selectbox_opt1"),
      value: "opt1"
    }, {
      label: t("story_selectbox_opt2"),
      value: "opt2"
    }, {
      label: t("story_selectbox_opt3"),
      value: "opt3"
    }, {
      label: t("story_selectbox_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story_selectbox_opt5"),
      value: "opt5"
    }];
    return <Selectbox {...args} options={options} defaultValue="opt2" />;
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_selectbox_opt1"),
      value: "opt1"
    }, {
      label: t("story_selectbox_opt2"),
      value: "opt2"
    }, {
      label: t("story_selectbox_opt3"),
      value: "opt3"
    }, {
      label: t("story_selectbox_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story_selectbox_opt5"),
      value: "opt5"
    }];
    return <Selectbox {...args} options={options} disabled={true} defaultValue="opt1" />;
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const optionsWithSeparators: SelectboxOption[] = [{
      label: t("story_selectbox_settings"),
      value: "settings"
    }, {
      label: t("story_selectbox_profile"),
      value: "profile"
    }, {
      type: "separator"
    }, {
      label: t("story_selectbox_help"),
      value: "help"
    }, {
      label: t("story_selectbox_about"),
      value: "about"
    }, {
      type: "separator"
    }, {
      label: t("story_selectbox_logout"),
      value: "logout"
    }];
    return <Selectbox {...args} options={optionsWithSeparators} placeholder={t("story_selectbox_placeholder")} />;
  }
}`,..._.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_selectbox_opt1"),
      value: "opt1"
    }, {
      label: t("story_selectbox_opt2"),
      value: "opt2"
    }, {
      label: t("story_selectbox_opt3"),
      value: "opt3"
    }, {
      label: t("story_selectbox_opt4"),
      value: "opt4",
      disabled: true
    }, {
      label: t("story_selectbox_opt5"),
      value: "opt5"
    }];
    return <Selectbox {...args} options={options} allowClear={true} defaultValue="opt1" placeholder={t("story_selectbox_placeholder")} />;
  }
}`,...d.parameters?.docs?.source}}};const x=["Default","WithLabel","Preselected","Disabled","WithSeparator","WithClearButton"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Disabled:u,Preselected:b,WithClearButton:d,WithLabel:c,WithSeparator:_,__namedExportsOrder:x,default:i},Symbol.toStringTag,{value:"Module"}));export{p as D,b as P,f as S,c as W,u as a,_ as b};
