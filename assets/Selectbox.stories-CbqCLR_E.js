import{j as a}from"./jsx-runtime-u17CrQMm.js";import{S as l}from"./Selectbox-i-4MriCa.js";import{A as s}from"./iframe-DtzJMWg3.js";import{u as r}from"./useTranslation-uHyy6oEH.js";const v={title:"Components/Selection Controls/Selectbox",component:l,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"}}},p={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return a.jsx(l,{...t,options:o,placeholder:e("story_selectbox_placeholder")})}},c={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return a.jsx(l,{...t,label:e("story_selectbox_label"),options:o,placeholder:e("story_selectbox_placeholder")})}},_={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return a.jsx(l,{...t,options:o,defaultValue:"opt2"})}},b={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return a.jsx(l,{...t,options:o,disabled:!0,defaultValue:"opt1"})}},u={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_settings"),value:"settings"},{label:e("story_selectbox_profile"),value:"profile"},{type:"separator"},{label:e("story_selectbox_help"),value:"help"},{label:e("story_selectbox_about"),value:"about"},{type:"separator"},{label:e("story_selectbox_logout"),value:"logout"}];return a.jsx(l,{...t,options:o,placeholder:e("story_selectbox_placeholder")})}},d={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_opt1"),value:"opt1"},{label:e("story_selectbox_opt2"),value:"opt2"},{label:e("story_selectbox_opt3"),value:"opt3"},{label:e("story_selectbox_opt4"),value:"opt4",disabled:!0},{label:e("story_selectbox_opt5"),value:"opt5"}];return a.jsx(l,{...t,options:o,allowClear:!0,defaultValue:"opt1",placeholder:e("story_selectbox_placeholder")})}},i={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_opt_apple"),value:"apple"},{label:e("story_selectbox_opt_banana"),value:"banana"},{label:e("story_selectbox_opt_cherry"),value:"cherry"},{label:e("story_selectbox_opt_grape"),value:"grape"},{label:e("story_selectbox_opt_orange"),value:"orange"}];return a.jsx(l,{...t,options:o,searchable:!0,placeholder:e("story_selectbox_placeholder")})}},x={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_group_fruits"),options:[{label:e("story_selectbox_opt_apple"),value:"apple"},{label:e("story_selectbox_opt_banana"),value:"banana"}]},{label:e("story_selectbox_group_veggies"),options:[{label:e("story_selectbox_opt_carrot"),value:"carrot"},{label:e("story_selectbox_opt_potato"),value:"potato"}]}];return a.jsx(l,{...t,options:o,grouped:!0,placeholder:e("story_selectbox_placeholder")})}},y={render:function(t){const{t:e}=r(s),o=[{label:e("story_selectbox_group_fruits"),options:[{label:e("story_selectbox_opt_apple"),value:"apple"},{label:e("story_selectbox_opt_banana"),value:"banana"}]},{label:e("story_selectbox_group_veggies"),options:[{label:e("story_selectbox_opt_carrot"),value:"carrot"},{label:e("story_selectbox_opt_potato"),value:"potato"}]}];return a.jsx(l,{...t,options:o,grouped:!0,searchable:!0,allowClear:!0,placeholder:e("story_selectbox_placeholder")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = [{
      label: t("story_selectbox_opt_apple"),
      value: "apple"
    }, {
      label: t("story_selectbox_opt_banana"),
      value: "banana"
    }, {
      label: t("story_selectbox_opt_cherry"),
      value: "cherry"
    }, {
      label: t("story_selectbox_opt_grape"),
      value: "grape"
    }, {
      label: t("story_selectbox_opt_orange"),
      value: "orange"
    }];
    return <Selectbox {...args} options={options} searchable={true} placeholder={t("story_selectbox_placeholder")} />;
  }
}`,...i.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [{
      label: t("story_selectbox_group_fruits"),
      options: [{
        label: t("story_selectbox_opt_apple"),
        value: "apple"
      }, {
        label: t("story_selectbox_opt_banana"),
        value: "banana"
      }]
    }, {
      label: t("story_selectbox_group_veggies"),
      options: [{
        label: t("story_selectbox_opt_carrot"),
        value: "carrot"
      }, {
        label: t("story_selectbox_opt_potato"),
        value: "potato"
      }]
    }];
    return <Selectbox {...args} options={groupedOptions} grouped={true} placeholder={t("story_selectbox_placeholder")} />;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const groupedOptions = [{
      label: t("story_selectbox_group_fruits"),
      options: [{
        label: t("story_selectbox_opt_apple"),
        value: "apple"
      }, {
        label: t("story_selectbox_opt_banana"),
        value: "banana"
      }]
    }, {
      label: t("story_selectbox_group_veggies"),
      options: [{
        label: t("story_selectbox_opt_carrot"),
        value: "carrot"
      }, {
        label: t("story_selectbox_opt_potato"),
        value: "potato"
      }]
    }];
    return <Selectbox {...args} options={groupedOptions} grouped={true} searchable={true} allowClear={true} placeholder={t("story_selectbox_placeholder")} />;
  }
}`,...y.parameters?.docs?.source}}};const g=["Default","WithLabel","Preselected","Disabled","WithSeparator","WithClearButton","Searchable","Grouped","AdvancedSearch"],A=Object.freeze(Object.defineProperty({__proto__:null,AdvancedSearch:y,Default:p,Disabled:b,Grouped:x,Preselected:_,Searchable:i,WithClearButton:d,WithLabel:c,WithSeparator:u,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{y as A,p as D,x as G,_ as P,A as S,c as W,b as a,u as b,i as c};
