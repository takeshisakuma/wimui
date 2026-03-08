import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as l}from"./Selectbox-pzb_xL8r.js";import{u as n}from"./useTranslation-DLjll_Fb.js";const d={title:"Components/Selection Controls/Selectbox",component:l,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},a={render:function(o){const{t:e}=n(["docs","common","components"]),t=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...o,options:t,placeholder:e("story_selectbox_placeholder")})}},c={render:function(o){const{t:e}=n(["docs","common","components"]),t=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...o,label:e("story_selectbox_label"),options:t,placeholder:e("story_selectbox_placeholder")})}},p={render:function(o){const{t:e}=n(["docs","common","components"]),t=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...o,options:t,defaultValue:"opt2"})}},b={render:function(o){const{t:e}=n(["docs","common","components"]),t=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...o,options:t,disabled:!0,defaultValue:"opt1"})}},u={render:function(o){const{t:e}=n(["docs","common","components"]),t=[{label:e("story_selectbox_settings"),value:"settings"},{label:e("story_selectbox_profile"),value:"profile"},{type:"separator"},{label:e("story_selectbox_help"),value:"help"},{label:e("story_selectbox_about"),value:"about"},{type:"separator"},{label:e("story_selectbox_logout"),value:"logout"}];return s.jsx(l,{...o,options:t,placeholder:e("story_selectbox_placeholder")})}},_={render:function(o){const{t:e}=n(["docs","common","components"]),t=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return s.jsx(l,{...o,options:t,allowClear:!0,defaultValue:"opt1",placeholder:e("story_selectbox_placeholder")})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};const i=["Default","WithLabel","Preselected","Disabled","WithSeparator","WithClearButton"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:b,Preselected:p,WithClearButton:_,WithLabel:c,WithSeparator:u,__namedExportsOrder:i,default:d},Symbol.toStringTag,{value:"Module"}));export{a as D,p as P,v as S,c as W,b as a,u as b};
