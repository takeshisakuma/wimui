import{j as e}from"./jsx-runtime-u17CrQMm.js";import{E as s}from"./EmptyState-C3iASexr.js";import{I as _}from"./Icon-DAoDzlzz.js";import{B as y}from"./Button-lJbtTMs0.js";import{u as n}from"./useTranslation-CQiqGYf8.js";const u={title:"Components/Data Indicators/EmptyState",component:s,tags:[],parameters:{layout:"centered"}},a={render:function(o){const{t}=n(["docs","common","components"]);return e.jsx(s,{...o,title:t("story_emptystate_nodata_title"),description:t("story_emptystate_nodata_desc"),icon:e.jsx(_,{name:"SearchIcon",size:"large"}),action:e.jsx(y,{label:t("story_emptystate_clear_search")})})}},c={render:function(o){const{t}=n(["docs","common","components"]);return e.jsx(s,{...o,title:t("story_emptystate_nomessages_title"),description:t("story_emptystate_nomessages_desc"),variant:"simple"})}},i={render:function(o){const{t}=n(["docs","common","components"]);return e.jsx(s,{...o,title:t("story_emptystate_empty_list"),icon:e.jsx(_,{name:"CircleIcon",size:"large"})})}},m={render:function(o){const{t}=n(["docs","common","components"]);return e.jsx(s,{...o,title:t("story_emptystate_ready_title"),description:t("story_emptystate_ready_desc"),icon:e.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),action:e.jsxs(e.Fragment,{children:[e.jsx(y,{label:t("story_emptystate_browse_templates"),priority:"secondary"}),e.jsx(y,{label:t("story_emptystate_create_project"),priority:"primary"})]})})}},p={render:function(o){const{t}=n(["docs","common","components"]);return e.jsx(s,{...o,title:t("story_emptystate_noemails_title"),description:t("story_emptystate_noemails_desc"),icon:e.jsx(_,{name:"EmailIcon",size:"large"})})}},d={render:function(o){const{t}=n(["docs","common","components"]);return e.jsx(s,{...o,title:t("story_emptystate_novideos_title"),description:t("story_emptystate_novideos_desc"),icon:e.jsx(_,{name:"VideoIcon",size:"large"}),action:e.jsx(y,{label:t("story_emptystate_upload_video"),priority:"primary"})})}},l={render:function(o){const{t}=n(["docs","common","components"]);return e.jsx(s,{...o,title:t("story_emptystate_nofiles_title"),description:t("story_emptystate_nofiles_desc"),icon:e.jsx(_,{name:"DocumentIcon",size:"large"})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_nodata_title")} description={t("story_emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="large" />} action={<Button label={t("story_emptystate_clear_search")} />} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_nomessages_title")} description={t("story_emptystate_nomessages_desc")} variant="simple" />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_empty_list")} icon={<Icon name="CircleIcon" size="large" />} />;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_ready_title")} description={t("story_emptystate_ready_desc")} icon={<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
            <path d="M12 5v14M5 12h14" />\r
          </svg>} action={<>\r
            <Button label={t("story_emptystate_browse_templates")} priority="secondary" />\r
            <Button label={t("story_emptystate_create_project")} priority="primary" />\r
          </>} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_noemails_title")} description={t("story_emptystate_noemails_desc")} icon={<Icon name="EmailIcon" size="large" />} />;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_novideos_title")} description={t("story_emptystate_novideos_desc")} icon={<Icon name="VideoIcon" size="large" />} action={<Button label={t("story_emptystate_upload_video")} priority="primary" />} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_nofiles_title")} description={t("story_emptystate_nofiles_desc")} icon={<Icon name="DocumentIcon" size="large" />} />;
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","Simple","WithoutDescription","CustomAction","NoMessages","NoVideos","NoFiles"],I=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:m,Default:a,NoFiles:l,NoMessages:p,NoVideos:d,Simple:c,WithoutDescription:i,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{m as C,a as D,I as E,c as S};
