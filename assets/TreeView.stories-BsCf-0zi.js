import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./TreeView-BnBkibDY.js";import{I as n}from"./Icon-JKQaPkpc.js";import{A as m}from"./i18nConstants-BpHxieg5.js";import{u}from"./useTranslation-Dhq9g8tg.js";const _={title:"Components/Data Structures/TreeView",component:r,parameters:{layout:"fullscreen"},decorators:[s=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100dvh",padding:"20px",boxSizing:"border-box",width:"100%",background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"},children:e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(s,{})})})]},a={args:{width:"100%"},render:function(t){const{t:l}=u(m);return e.jsxs(r,{...t,defaultExpandedValues:["1","2"],children:[e.jsxs(r.Item,{value:"1",label:l("story_tree_documents"),icon:e.jsx(n,{name:"CircleIcon",size:"small"}),children:[e.jsxs(r.Item,{value:"1-1",label:l("story_tree_work"),icon:e.jsx(n,{name:"SquareIcon",size:"small"}),children:[e.jsx(r.Item,{value:"1-1-1",label:l("story_tree_project_a"),icon:e.jsx(n,{name:"CopyIcon",size:"small"})}),e.jsx(r.Item,{value:"1-1-2",label:l("story_tree_project_b"),icon:e.jsx(n,{name:"CopyIcon",size:"small"})})]}),e.jsx(r.Item,{value:"1-2",label:l("story_tree_personal"),icon:e.jsx(n,{name:"SquareIcon",size:"small"}),children:e.jsx(r.Item,{value:"1-2-1",label:l("story_tree_photos"),icon:e.jsx(n,{name:"CircleIcon",size:"small"})})})]}),e.jsxs(r.Item,{value:"2",label:l("story_tree_music"),icon:e.jsx(n,{name:"CircleIcon",size:"small"}),children:[e.jsx(r.Item,{value:"2-1",label:l("story_tree_rock"),icon:e.jsx(n,{name:"SquareIcon",size:"small"})}),e.jsx(r.Item,{value:"2-2",label:l("story_tree_jazz"),icon:e.jsx(n,{name:"SquareIcon",size:"small"})})]}),e.jsx(r.Item,{value:"3",label:l("story_tree_videos"),icon:e.jsx(n,{name:"CircleIcon",size:"small"})})]})}},o={render:function(){const{t}=u(m);return e.jsxs(r,{multiSelect:!0,defaultExpandedValues:["1"],children:[e.jsxs(r.Item,{value:"1",label:t("story_tree_system"),children:[e.jsx(r.Item,{value:"1-1",label:t("story_tree_logs")}),e.jsx(r.Item,{value:"1-2",label:t("story_tree_config")})]}),e.jsxs(r.Item,{value:"2",label:t("story_tree_users"),children:[e.jsx(r.Item,{value:"2-1",label:t("story_tree_admin")}),e.jsx(r.Item,{value:"2-2",label:t("story_tree_guest")})]})]})}},i={render:function(){const{t}=u(m);return e.jsx(r,{defaultExpandedValues:["1"],children:e.jsxs(r.Item,{value:"1",label:t("story_tree_root_enabled"),children:[e.jsx(r.Item,{value:"1-1",label:t("story_tree_disabled_item"),disabled:!0}),e.jsx(r.Item,{value:"1-2",label:t("story_tree_enabled_item")})]})})}},c={render:function(){const{t}=u(m);return e.jsxs(r,{width:250,defaultExpandedValues:["1"],children:[e.jsx(r.Item,{value:"1",label:t("story_tree_long_folder"),icon:e.jsx(n,{name:"CircleIcon",size:"small"}),children:e.jsx(r.Item,{value:"1-1",label:t("story_tree_long_subitem"),icon:e.jsx(n,{name:"SquareIcon",size:"small"}),children:e.jsx(r.Item,{value:"1-1-1",label:t("story_tree_deep_nesting"),icon:e.jsx(n,{name:"CopyIcon",size:"small"})})})}),e.jsx(r.Item,{value:"2",label:t("story_tree_regular_item"),icon:e.jsx(n,{name:"CircleIcon",size:"small"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView {...args} defaultExpandedValues={["1", "2"]}>\r
        <TreeView.Item value="1" label={t("story_tree_documents")} icon={<Icon name="CircleIcon" size="small" />}>\r
          <TreeView.Item value="1-1" label={t("story_tree_work")} icon={<Icon name="SquareIcon" size="small" />}>\r
            <TreeView.Item value="1-1-1" label={t("story_tree_project_a")} icon={<Icon name="CopyIcon" size="small" />} />\r
            <TreeView.Item value="1-1-2" label={t("story_tree_project_b")} icon={<Icon name="CopyIcon" size="small" />} />\r
          </TreeView.Item>\r
          <TreeView.Item value="1-2" label={t("story_tree_personal")} icon={<Icon name="SquareIcon" size="small" />}>\r
            <TreeView.Item value="1-2-1" label={t("story_tree_photos")} icon={<Icon name="CircleIcon" size="small" />} />\r
          </TreeView.Item>\r
        </TreeView.Item>\r
        <TreeView.Item value="2" label={t("story_tree_music")} icon={<Icon name="CircleIcon" size="small" />}>\r
          <TreeView.Item value="2-1" label={t("story_tree_rock")} icon={<Icon name="SquareIcon" size="small" />} />\r
          <TreeView.Item value="2-2" label={t("story_tree_jazz")} icon={<Icon name="SquareIcon" size="small" />} />\r
        </TreeView.Item>\r
        <TreeView.Item value="3" label={t("story_tree_videos")} icon={<Icon name="CircleIcon" size="small" />} />\r
      </TreeView>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView multiSelect defaultExpandedValues={["1"]}>\r
        <TreeView.Item value="1" label={t("story_tree_system")}>\r
          <TreeView.Item value="1-1" label={t("story_tree_logs")} />\r
          <TreeView.Item value="1-2" label={t("story_tree_config")} />\r
        </TreeView.Item>\r
        <TreeView.Item value="2" label={t("story_tree_users")}>\r
          <TreeView.Item value="2-1" label={t("story_tree_admin")} />\r
          <TreeView.Item value="2-2" label={t("story_tree_guest")} />\r
        </TreeView.Item>\r
      </TreeView>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView defaultExpandedValues={["1"]}>\r
        <TreeView.Item value="1" label={t("story_tree_root_enabled")}>\r
          <TreeView.Item value="1-1" label={t("story_tree_disabled_item")} disabled />\r
          <TreeView.Item value="1-2" label={t("story_tree_enabled_item")} />\r
        </TreeView.Item>\r
      </TreeView>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView width={250} defaultExpandedValues={["1"]}>\r
        <TreeView.Item value="1" label={t("story_tree_long_folder")} icon={<Icon name="CircleIcon" size="small" />}>\r
          <TreeView.Item value="1-1" label={t("story_tree_long_subitem")} icon={<Icon name="SquareIcon" size="small" />}>\r
            <TreeView.Item value="1-1-1" label={t("story_tree_deep_nesting")} icon={<Icon name="CopyIcon" size="small" />} />\r
          </TreeView.Item>\r
        </TreeView.Item>\r
        <TreeView.Item value="2" label={t("story_tree_regular_item")} icon={<Icon name="CircleIcon" size="small" />} />\r
      </TreeView>;
  }
}`,...c.parameters?.docs?.source}}};const d=["Default","MultiSelect","DisabledItems","Overflow"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,DisabledItems:i,MultiSelect:o,Overflow:c,__namedExportsOrder:d,default:_},Symbol.toStringTag,{value:"Module"}));export{a as D,c as O,j as T};
