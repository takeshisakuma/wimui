import{j as e}from"./jsx-runtime-u17CrQMm.js";import{E as n}from"./EmptyState-BA7gjEFz.js";import{I as i}from"./Icon-BdgCn_Xq.js";import{B as _}from"./Button-DZW7ODAc.js";import{A as r}from"./iframe-GzHoau5L.js";import{u as o}from"./useTranslation-Ckw9ivsw.js";const g={title:"Components/Data Indicators/EmptyState",component:n,tags:[],parameters:{layout:"centered"}},c={render:function(s){const{t}=o(r);return e.jsx(n,{...s,title:t("story.emptystate_nodata_title"),description:t("story.emptystate_nodata_desc"),icon:e.jsx(i,{name:"SearchIcon",size:"lg"}),extra:e.jsx(_,{children:t("story.emptystate_clear_search")})})}},m={render:function(s){const{t}=o(r);return e.jsx(n,{...s,title:t("story.emptystate_nomessages_title"),description:t("story.emptystate_nomessages_desc"),variant:"simple"})}},d={render:function(s){const{t}=o(r);return e.jsx(n,{...s,title:t("story.emptystate_empty_list"),icon:e.jsx(i,{name:"CircleIcon",size:"lg"})})}},p={render:function(s){const{t}=o(r);return e.jsx(n,{...s,title:t("story.emptystate_ready_title"),description:t("story.emptystate_ready_desc"),icon:e.jsx(i,{name:"PlusIcon",style:{width:48,height:48}}),extra:e.jsxs(e.Fragment,{children:[e.jsx(_,{variant:"outlined",children:t("story.emptystate_browse_templates")}),e.jsx(_,{variant:"filled",children:t("story.emptystate_create_project")})]})})}},l={render:function(s){const{t}=o(r);return e.jsx(n,{...s,title:t("story.emptystate_noemails_title"),description:t("story.emptystate_noemails_desc"),icon:e.jsx(i,{name:"EmailIcon",size:"lg"})})}},y={render:function(s){const{t}=o(r);return e.jsx(n,{...s,title:t("story.emptystate_novideos_title"),description:t("story.emptystate_novideos_desc"),icon:e.jsx(i,{name:"VideoIcon",size:"lg"}),extra:e.jsx(_,{variant:"filled",children:t("story.emptystate_upload_video")})})}},u={render:function(s){const{t}=o(r);return e.jsx(n,{...s,title:t("story.emptystate_nofiles_title"),description:t("story.emptystate_nofiles_desc"),icon:e.jsx(i,{name:"DocumentIcon",size:"lg"})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nodata_title")} description={t("story.emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="lg" />} extra={<Button>{t("story.emptystate_clear_search")}</Button>} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nomessages_title")} description={t("story.emptystate_nomessages_desc")} variant="simple" />;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_empty_list")} icon={<Icon name="CircleIcon" size="lg" />} />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_ready_title")} description={t("story.emptystate_ready_desc")} icon={<Icon name="PlusIcon" style={{
      width: 48,
      height: 48
    }} />} extra={<>
            <Button variant="outlined">{t("story.emptystate_browse_templates")}</Button>
            <Button variant="filled">{t("story.emptystate_create_project")}</Button>
          </>} />;
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_noemails_title")} description={t("story.emptystate_noemails_desc")} icon={<Icon name="EmailIcon" size="lg" />} />;
  }
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_novideos_title")} description={t("story.emptystate_novideos_desc")} icon={<Icon name="VideoIcon" size="lg" />} extra={<Button variant="filled">{t("story.emptystate_upload_video")}</Button>} />;
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nofiles_title")} description={t("story.emptystate_nofiles_desc")} icon={<Icon name="DocumentIcon" size="lg" />} />;
  }
}`,...u.parameters?.docs?.source}}};const S=["Default","Simple","WithoutDescription","CustomAction","NoMessages","NoVideos","NoFiles"],h=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:p,Default:c,NoFiles:u,NoMessages:l,NoVideos:y,Simple:m,WithoutDescription:d,__namedExportsOrder:S,default:g},Symbol.toStringTag,{value:"Module"}));export{p as C,c as D,h as E,m as S};
