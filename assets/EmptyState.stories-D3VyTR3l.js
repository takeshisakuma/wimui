import{j as e}from"./jsx-runtime-u17CrQMm.js";import{E as r}from"./EmptyState-BLpVbqFQ.js";import{I as i}from"./Icon-CMKyV0sw.js";import{B as _}from"./Button-8yDbYZSB.js";import{A as n}from"./iframe-BZoygCoD.js";import{u as o}from"./useTranslation-CVcR0t5u.js";const g={title:"Components/Data Indicators/EmptyState",component:r,tags:[],parameters:{layout:"centered"}},c={render:function(s){const{t}=o(n);return e.jsx(r,{...s,title:t("story.emptystate_nodata_title"),description:t("story.emptystate_nodata_desc"),icon:e.jsx(i,{name:"SearchIcon",size:"lg"}),extra:e.jsx(_,{label:t("story.emptystate_clear_search")})})}},m={render:function(s){const{t}=o(n);return e.jsx(r,{...s,title:t("story.emptystate_nomessages_title"),description:t("story.emptystate_nomessages_desc"),variant:"simple"})}},l={render:function(s){const{t}=o(n);return e.jsx(r,{...s,title:t("story.emptystate_empty_list"),icon:e.jsx(i,{name:"CircleIcon",size:"lg"})})}},p={render:function(s){const{t}=o(n);return e.jsx(r,{...s,title:t("story.emptystate_ready_title"),description:t("story.emptystate_ready_desc"),icon:e.jsx(i,{name:"PlusIcon",style:{width:48,height:48}}),extra:e.jsxs(e.Fragment,{children:[e.jsx(_,{label:t("story.emptystate_browse_templates"),variant:"outlined"}),e.jsx(_,{label:t("story.emptystate_create_project"),variant:"filled"})]})})}},d={render:function(s){const{t}=o(n);return e.jsx(r,{...s,title:t("story.emptystate_noemails_title"),description:t("story.emptystate_noemails_desc"),icon:e.jsx(i,{name:"EmailIcon",size:"lg"})})}},y={render:function(s){const{t}=o(n);return e.jsx(r,{...s,title:t("story.emptystate_novideos_title"),description:t("story.emptystate_novideos_desc"),icon:e.jsx(i,{name:"VideoIcon",size:"lg"}),extra:e.jsx(_,{label:t("story.emptystate_upload_video"),variant:"filled"})})}},u={render:function(s){const{t}=o(n);return e.jsx(r,{...s,title:t("story.emptystate_nofiles_title"),description:t("story.emptystate_nofiles_desc"),icon:e.jsx(i,{name:"DocumentIcon",size:"lg"})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nodata_title")} description={t("story.emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="lg" />} extra={<Button label={t("story.emptystate_clear_search")} />} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nomessages_title")} description={t("story.emptystate_nomessages_desc")} variant="simple" />;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_empty_list")} icon={<Icon name="CircleIcon" size="lg" />} />;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_ready_title")} description={t("story.emptystate_ready_desc")} icon={<Icon name="PlusIcon" style={{
      width: 48,
      height: 48
    }} />} extra={<>
            <Button label={t("story.emptystate_browse_templates")} variant="outlined" />
            <Button label={t("story.emptystate_create_project")} variant="filled" />
          </>} />;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_noemails_title")} description={t("story.emptystate_noemails_desc")} icon={<Icon name="EmailIcon" size="lg" />} />;
  }
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_novideos_title")} description={t("story.emptystate_novideos_desc")} icon={<Icon name="VideoIcon" size="lg" />} extra={<Button label={t("story.emptystate_upload_video")} variant="filled" />} />;
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nofiles_title")} description={t("story.emptystate_nofiles_desc")} icon={<Icon name="DocumentIcon" size="lg" />} />;
  }
}`,...u.parameters?.docs?.source}}};const S=["Default","Simple","WithoutDescription","CustomAction","NoMessages","NoVideos","NoFiles"],L=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:p,Default:c,NoFiles:u,NoMessages:d,NoVideos:y,Simple:m,WithoutDescription:l,__namedExportsOrder:S,default:g},Symbol.toStringTag,{value:"Module"}));export{p as C,c as D,L as E,m as S};
