import{j as l}from"./jsx-runtime-u17CrQMm.js";import{S as s}from"./Selectbox-JBQNZ_-i.js";import{u as n}from"./useTranslation-DD4zKDMJ.js";const i={title:"Components/Selection Controls/Selectbox",component:s,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},c={render:function(e){const{t:o}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),t=[{label:o("story_selectbox_opt1"),value:"opt1"},{label:o("story_selectbox_opt2"),value:"opt2"},{label:o("story_selectbox_opt3"),value:"opt3"},{label:o("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:o("story_selectbox_opt5"),value:"opt5"}];return l.jsx(s,{...e,options:t,placeholder:o("story_selectbox_placeholder")})}},r={render:function(e){const{t:o}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),t=[{label:o("story_selectbox_opt1"),value:"opt1"},{label:o("story_selectbox_opt2"),value:"opt2"},{label:o("story_selectbox_opt3"),value:"opt3"},{label:o("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:o("story_selectbox_opt5"),value:"opt5"}];return l.jsx(s,{...e,label:o("story_selectbox_label"),options:t,placeholder:o("story_selectbox_placeholder")})}},_={render:function(e){const{t:o}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),t=[{label:o("story_selectbox_opt1"),value:"opt1"},{label:o("story_selectbox_opt2"),value:"opt2"},{label:o("story_selectbox_opt3"),value:"opt3"},{label:o("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:o("story_selectbox_opt5"),value:"opt5"}];return l.jsx(s,{...e,options:t,defaultValue:"opt2"})}},p={render:function(e){const{t:o}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),t=[{label:o("story_selectbox_opt1"),value:"opt1"},{label:o("story_selectbox_opt2"),value:"opt2"},{label:o("story_selectbox_opt3"),value:"opt3"},{label:o("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:o("story_selectbox_opt5"),value:"opt5"}];return l.jsx(s,{...e,options:t,disabled:!0,defaultValue:"opt1"})}},d={render:function(e){const{t:o}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),t=[{label:o("story_selectbox_settings"),value:"settings"},{label:o("story_selectbox_profile"),value:"profile"},{type:"separator"},{label:o("story_selectbox_help"),value:"help"},{label:o("story_selectbox_about"),value:"about"},{type:"separator"},{label:o("story_selectbox_logout"),value:"logout"}];return l.jsx(s,{...e,options:t,placeholder:o("story_selectbox_placeholder")})}},u={render:function(e){const{t:o}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),t=[{label:o("story_selectbox_opt1"),value:"opt1"},{label:o("story_selectbox_opt2"),value:"opt2"},{label:o("story_selectbox_opt3"),value:"opt3"},{label:o("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:o("story_selectbox_opt5"),value:"opt5"}];return l.jsx(s,{...e,options:t,allowClear:!0,defaultValue:"opt1",placeholder:o("story_selectbox_placeholder")})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...r.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};const b=["Default","WithLabel","Preselected","Disabled","WithSeparator","WithClearButton"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:p,Preselected:_,WithClearButton:u,WithLabel:r,WithSeparator:d,__namedExportsOrder:b,default:i},Symbol.toStringTag,{value:"Module"}));export{c as D,_ as P,m as S,r as W,p as a,d as b};
