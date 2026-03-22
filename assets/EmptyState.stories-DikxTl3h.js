import{j as e}from"./jsx-runtime-u17CrQMm.js";import{E as s}from"./EmptyState-CSc5GkSj.js";import{I as i}from"./Icon-7x2_S7ov.js";import{B as u}from"./Button-DRHfoLRu.js";import{A as n}from"./iframe-Bi63tkQv.js";import{u as o}from"./useTranslation-D6_oF364.js";const g={title:"Components/Data Indicators/EmptyState",component:s,tags:[],parameters:{layout:"centered"}},c={render:function(r){const{t}=o(n);return e.jsx(s,{...r,title:t("story_emptystate_nodata_title"),description:t("story_emptystate_nodata_desc"),icon:e.jsx(i,{name:"SearchIcon",size:"large"}),extra:e.jsx(u,{label:t("story_emptystate_clear_search")})})}},m={render:function(r){const{t}=o(n);return e.jsx(s,{...r,title:t("story_emptystate_nomessages_title"),description:t("story_emptystate_nomessages_desc"),variant:"simple"})}},p={render:function(r){const{t}=o(n);return e.jsx(s,{...r,title:t("story_emptystate_empty_list"),icon:e.jsx(i,{name:"CircleIcon",size:"large"})})}},_={render:function(r){const{t}=o(n);return e.jsx(s,{...r,title:t("story_emptystate_ready_title"),description:t("story_emptystate_ready_desc"),icon:e.jsx(i,{name:"PlusIcon",style:{width:48,height:48}}),extra:e.jsxs(e.Fragment,{children:[e.jsx(u,{label:t("story_emptystate_browse_templates"),priority:"secondary"}),e.jsx(u,{label:t("story_emptystate_create_project"),priority:"primary"})]})})}},l={render:function(r){const{t}=o(n);return e.jsx(s,{...r,title:t("story_emptystate_noemails_title"),description:t("story_emptystate_noemails_desc"),icon:e.jsx(i,{name:"EmailIcon",size:"large"})})}},d={render:function(r){const{t}=o(n);return e.jsx(s,{...r,title:t("story_emptystate_novideos_title"),description:t("story_emptystate_novideos_desc"),icon:e.jsx(i,{name:"VideoIcon",size:"large"}),extra:e.jsx(u,{label:t("story_emptystate_upload_video"),priority:"primary"})})}},y={render:function(r){const{t}=o(n);return e.jsx(s,{...r,title:t("story_emptystate_nofiles_title"),description:t("story_emptystate_nofiles_desc"),icon:e.jsx(i,{name:"DocumentIcon",size:"large"})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story_emptystate_nodata_title")} description={t("story_emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="large" />} extra={<Button label={t("story_emptystate_clear_search")} />} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story_emptystate_nomessages_title")} description={t("story_emptystate_nomessages_desc")} variant="simple" />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story_emptystate_empty_list")} icon={<Icon name="CircleIcon" size="large" />} />;
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story_emptystate_ready_title")} description={t("story_emptystate_ready_desc")} icon={<Icon name="PlusIcon" style={{
      width: 48,
      height: 48
    }} />} extra={<>
            <Button label={t("story_emptystate_browse_templates")} priority="secondary" />
            <Button label={t("story_emptystate_create_project")} priority="primary" />
          </>} />;
  }
}`,..._.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story_emptystate_noemails_title")} description={t("story_emptystate_noemails_desc")} icon={<Icon name="EmailIcon" size="large" />} />;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story_emptystate_novideos_title")} description={t("story_emptystate_novideos_desc")} icon={<Icon name="VideoIcon" size="large" />} extra={<Button label={t("story_emptystate_upload_video")} priority="primary" />} />;
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story_emptystate_nofiles_title")} description={t("story_emptystate_nofiles_desc")} icon={<Icon name="DocumentIcon" size="large" />} />;
  }
}`,...y.parameters?.docs?.source}}};const S=["Default","Simple","WithoutDescription","CustomAction","NoMessages","NoVideos","NoFiles"],L=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:_,Default:c,NoFiles:y,NoMessages:l,NoVideos:d,Simple:m,WithoutDescription:p,__namedExportsOrder:S,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as C,c as D,L as E,m as S};
