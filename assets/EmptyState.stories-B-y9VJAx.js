import{j as t}from"./jsx-runtime-u17CrQMm.js";import{E as e}from"./EmptyState-BhLrCDmP.js";import{I as c}from"./Icon-CPLASYuL.js";import{B as y}from"./Button-CE01zq8d.js";import{u as n}from"./useTranslation-BJQcmf5i.js";const u={title:"Components/Data Indicators/EmptyState",component:e,tags:[],parameters:{layout:"centered"}},a={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,title:s("story_emptystate_nodata_title"),description:s("story_emptystate_nodata_desc"),icon:t.jsx(c,{name:"SearchIcon",size:"large"}),extra:t.jsx(y,{label:s("story_emptystate_clear_search")})})}},i={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,title:s("story_emptystate_nomessages_title"),description:s("story_emptystate_nomessages_desc"),variant:"simple"})}},d={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,title:s("story_emptystate_empty_list"),icon:t.jsx(c,{name:"CircleIcon",size:"large"})})}},_={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,title:s("story_emptystate_ready_title"),description:s("story_emptystate_ready_desc"),icon:t.jsx(c,{name:"PlusIcon",style:{width:48,height:48}}),extra:t.jsxs(t.Fragment,{children:[t.jsx(y,{label:s("story_emptystate_browse_templates"),priority:"secondary"}),t.jsx(y,{label:s("story_emptystate_create_project"),priority:"primary"})]})})}},m={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,title:s("story_emptystate_noemails_title"),description:s("story_emptystate_noemails_desc"),icon:t.jsx(c,{name:"EmailIcon",size:"large"})})}},p={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,title:s("story_emptystate_novideos_title"),description:s("story_emptystate_novideos_desc"),icon:t.jsx(c,{name:"VideoIcon",size:"large"}),extra:t.jsx(y,{label:s("story_emptystate_upload_video"),priority:"primary"})})}},l={render:function(o){const{t:s}=n(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(e,{...o,title:s("story_emptystate_nofiles_title"),description:s("story_emptystate_nofiles_desc"),icon:t.jsx(c,{name:"DocumentIcon",size:"large"})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_nodata_title")} description={t("story_emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="large" />} extra={<Button label={t("story_emptystate_clear_search")} />} />;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_nomessages_title")} description={t("story_emptystate_nomessages_desc")} variant="simple" />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_empty_list")} icon={<Icon name="CircleIcon" size="large" />} />;
  }
}`,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_ready_title")} description={t("story_emptystate_ready_desc")} icon={<Icon name="PlusIcon" style={{
      width: 48,
      height: 48
    }} />} extra={<>\r
            <Button label={t("story_emptystate_browse_templates")} priority="secondary" />\r
            <Button label={t("story_emptystate_create_project")} priority="primary" />\r
          </>} />;
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_noemails_title")} description={t("story_emptystate_noemails_desc")} icon={<Icon name="EmailIcon" size="large" />} />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_novideos_title")} description={t("story_emptystate_novideos_desc")} icon={<Icon name="VideoIcon" size="large" />} extra={<Button label={t("story_emptystate_upload_video")} priority="primary" />} />;
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <EmptyState {...args} title={t("story_emptystate_nofiles_title")} description={t("story_emptystate_nofiles_desc")} icon={<Icon name="DocumentIcon" size="large" />} />;
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","Simple","WithoutDescription","CustomAction","NoMessages","NoVideos","NoFiles"],I=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:_,Default:a,NoFiles:l,NoMessages:m,NoVideos:p,Simple:i,WithoutDescription:d,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{_ as C,a as D,I as E,i as S};
