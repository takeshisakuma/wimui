import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as s}from"./TreeView-RsEpUuUi.js";import{I as r}from"./Icon-CgqnfbzT.js";import{u as d}from"./useTranslation-0fSK9VPD.js";const m={title:"Components/Data Structures/TreeView",component:s,parameters:{layout:"fullscreen"},decorators:[n=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100dvh",padding:"20px",boxSizing:"border-box",width:"100%",background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"},children:e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(n,{})})})]},a={args:{width:"100%"},render:function(o){const{t}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(s,{...o,defaultExpandedValues:["1","2"],children:[e.jsxs(s.Item,{value:"1",label:t("story_tree_documents"),icon:e.jsx(r,{name:"CircleIcon",size:"small"}),children:[e.jsxs(s.Item,{value:"1-1",label:t("story_tree_work"),icon:e.jsx(r,{name:"SquareIcon",size:"small"}),children:[e.jsx(s.Item,{value:"1-1-1",label:t("story_tree_project_a"),icon:e.jsx(r,{name:"CopyIcon",size:"small"})}),e.jsx(s.Item,{value:"1-1-2",label:t("story_tree_project_b"),icon:e.jsx(r,{name:"CopyIcon",size:"small"})})]}),e.jsx(s.Item,{value:"1-2",label:t("story_tree_personal"),icon:e.jsx(r,{name:"SquareIcon",size:"small"}),children:e.jsx(s.Item,{value:"1-2-1",label:t("story_tree_photos"),icon:e.jsx(r,{name:"CircleIcon",size:"small"})})})]}),e.jsxs(s.Item,{value:"2",label:t("story_tree_music"),icon:e.jsx(r,{name:"CircleIcon",size:"small"}),children:[e.jsx(s.Item,{value:"2-1",label:t("story_tree_rock"),icon:e.jsx(r,{name:"SquareIcon",size:"small"})}),e.jsx(s.Item,{value:"2-2",label:t("story_tree_jazz"),icon:e.jsx(r,{name:"SquareIcon",size:"small"})})]}),e.jsx(s.Item,{value:"3",label:t("story_tree_videos"),icon:e.jsx(r,{name:"CircleIcon",size:"small"})})]})}},l={render:function(){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(s,{multiSelect:!0,defaultExpandedValues:["1"],children:[e.jsxs(s.Item,{value:"1",label:o("story_tree_system"),children:[e.jsx(s.Item,{value:"1-1",label:o("story_tree_logs")}),e.jsx(s.Item,{value:"1-2",label:o("story_tree_config")})]}),e.jsxs(s.Item,{value:"2",label:o("story_tree_users"),children:[e.jsx(s.Item,{value:"2-1",label:o("story_tree_admin")}),e.jsx(s.Item,{value:"2-2",label:o("story_tree_guest")})]})]})}},c={render:function(){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(s,{defaultExpandedValues:["1"],children:e.jsxs(s.Item,{value:"1",label:o("story_tree_root_enabled"),children:[e.jsx(s.Item,{value:"1-1",label:o("story_tree_disabled_item"),disabled:!0}),e.jsx(s.Item,{value:"1-2",label:o("story_tree_enabled_item")})]})})}},i={render:function(){const{t:o}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(s,{width:250,defaultExpandedValues:["1"],children:[e.jsx(s.Item,{value:"1",label:o("story_tree_long_folder"),icon:e.jsx(r,{name:"CircleIcon",size:"small"}),children:e.jsx(s.Item,{value:"1-1",label:o("story_tree_long_subitem"),icon:e.jsx(r,{name:"SquareIcon",size:"small"}),children:e.jsx(s.Item,{value:"1-1-1",label:o("story_tree_deep_nesting"),icon:e.jsx(r,{name:"CopyIcon",size:"small"})})})}),e.jsx(s.Item,{value:"2",label:o("story_tree_regular_item"),icon:e.jsx(r,{name:"CircleIcon",size:"small"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <TreeView defaultExpandedValues={["1"]}>\r
        <TreeView.Item value="1" label={t("story_tree_root_enabled")}>\r
          <TreeView.Item value="1-1" label={t("story_tree_disabled_item")} disabled />\r
          <TreeView.Item value="1-2" label={t("story_tree_enabled_item")} />\r
        </TreeView.Item>\r
      </TreeView>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <TreeView width={250} defaultExpandedValues={["1"]}>\r
        <TreeView.Item value="1" label={t("story_tree_long_folder")} icon={<Icon name="CircleIcon" size="small" />}>\r
          <TreeView.Item value="1-1" label={t("story_tree_long_subitem")} icon={<Icon name="SquareIcon" size="small" />}>\r
            <TreeView.Item value="1-1-1" label={t("story_tree_deep_nesting")} icon={<Icon name="CopyIcon" size="small" />} />\r
          </TreeView.Item>\r
        </TreeView.Item>\r
        <TreeView.Item value="2" label={t("story_tree_regular_item")} icon={<Icon name="CircleIcon" size="small" />} />\r
      </TreeView>;
  }
}`,...i.parameters?.docs?.source}}};const _=["Default","MultiSelect","DisabledItems","Overflow"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:a,DisabledItems:c,MultiSelect:l,Overflow:i,__namedExportsOrder:_,default:m},Symbol.toStringTag,{value:"Module"}));export{a as D,i as O,v as T};
