import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as I,A as m}from"./iframe-tWK6G2pl.js";import{T as a}from"./TreeView-k8GVNeuq.js";import{I as r}from"./Icon-8pY5frvg.js";import{u as _}from"./useTranslation-C9hYRQzo.js";const x={title:"Components/Data Structures/TreeView",component:a,parameters:{layout:"fullscreen"},decorators:[l=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100dvh",padding:"20px",boxSizing:"border-box",width:"100%",background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"},children:e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(l,{})})})]},i={args:{width:"100%"},render:function(n){const{t}=_(m);return e.jsxs(a,{...n,defaultExpandedValues:["1","2"],children:[e.jsxs(a.Item,{value:"1",label:t("story_tree_documents"),icon:e.jsx(r,{name:"CircleIcon",size:"small"}),children:[e.jsxs(a.Item,{value:"1-1",label:t("story_tree_work"),icon:e.jsx(r,{name:"SquareIcon",size:"small"}),children:[e.jsx(a.Item,{value:"1-1-1",label:t("story_tree_project_a"),icon:e.jsx(r,{name:"CopyIcon",size:"small"})}),e.jsx(a.Item,{value:"1-1-2",label:t("story_tree_project_b"),icon:e.jsx(r,{name:"CopyIcon",size:"small"})})]}),e.jsx(a.Item,{value:"1-2",label:t("story_tree_personal"),icon:e.jsx(r,{name:"SquareIcon",size:"small"}),children:e.jsx(a.Item,{value:"1-2-1",label:t("story_tree_photos"),icon:e.jsx(r,{name:"CircleIcon",size:"small"})})})]}),e.jsxs(a.Item,{value:"2",label:t("story_tree_music"),icon:e.jsx(r,{name:"CircleIcon",size:"small"}),children:[e.jsx(a.Item,{value:"2-1",label:t("story_tree_rock"),icon:e.jsx(r,{name:"SquareIcon",size:"small"})}),e.jsx(a.Item,{value:"2-2",label:t("story_tree_jazz"),icon:e.jsx(r,{name:"SquareIcon",size:"small"})})]}),e.jsx(a.Item,{value:"3",label:t("story_tree_videos"),icon:e.jsx(r,{name:"CircleIcon",size:"small"})})]})}},c={render:function(){const{t:n}=_(m);return e.jsxs(a,{multiSelect:!0,defaultExpandedValues:["1"],children:[e.jsxs(a.Item,{value:"1",label:n("story_tree_system"),children:[e.jsx(a.Item,{value:"1-1",label:n("story_tree_logs")}),e.jsx(a.Item,{value:"1-2",label:n("story_tree_config")})]}),e.jsxs(a.Item,{value:"2",label:n("story_tree_users"),children:[e.jsx(a.Item,{value:"2-1",label:n("story_tree_admin")}),e.jsx(a.Item,{value:"2-2",label:n("story_tree_guest")})]})]})}},d={render:function(){const{t:n}=_(m);return e.jsx(a,{defaultExpandedValues:["1"],children:e.jsxs(a.Item,{value:"1",label:n("story_tree_root_enabled"),children:[e.jsx(a.Item,{value:"1-1",label:n("story_tree_disabled_item"),disabled:!0}),e.jsx(a.Item,{value:"1-2",label:n("story_tree_enabled_item")})]})})}},u={render:function(){const{t:n}=_(m);return e.jsxs(a,{width:250,defaultExpandedValues:["1"],children:[e.jsx(a.Item,{value:"1",label:n("story_tree_long_folder"),icon:e.jsx(r,{name:"CircleIcon",size:"small"}),children:e.jsx(a.Item,{value:"1-1",label:n("story_tree_long_subitem"),icon:e.jsx(r,{name:"SquareIcon",size:"small"}),children:e.jsx(a.Item,{value:"1-1-1",label:n("story_tree_deep_nesting"),icon:e.jsx(r,{name:"CopyIcon",size:"small"})})})}),e.jsx(a.Item,{value:"2",label:n("story_tree_regular_item"),icon:e.jsx(r,{name:"CircleIcon",size:"small"})})]})}},p=[{value:"asia",label:"Asia",children:[{value:"east-asia",label:"East Asia",children:[{value:"japan",label:"Japan"},{value:"korea",label:"Korea"},{value:"china",label:"China"}]},{value:"southeast-asia",label:"Southeast Asia",children:[{value:"thailand",label:"Thailand"},{value:"vietnam",label:"Vietnam"}]}]},{value:"europe",label:"Europe",children:[{value:"france",label:"France"},{value:"germany",label:"Germany"},{value:"italy",label:"Italy"}]},{value:"americas",label:"Americas",children:[{value:"usa",label:"United States"},{value:"canada",label:"Canada"},{value:"brazil",label:"Brazil"}]}],s={render:function(){const[n,t]=I.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{nodes:p,checkable:!0,checkStrategy:"cascade",multiSelect:!0,defaultExpandedValues:["asia","east-asia","europe"],onCheckedChange:t,width:"100%"}),e.jsxs("div",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:["Checked: ",n.length>0?n.join(", "):"(none)"]})]})}},o={render:function(){const[n,t]=I.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{nodes:p,checkable:!0,checkStrategy:"exclusive",multiSelect:!0,defaultExpandedValues:["asia","east-asia","europe"],onCheckedChange:t,width:"100%"}),e.jsxs("div",{style:{fontSize:"12px",color:"var(--wim-color-text-secondary)"},children:["Checked: ",n.length>0?n.join(", "):"(none)"]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView {...args} defaultExpandedValues={["1", "2"]}>
        <TreeView.Item value="1" label={t("story_tree_documents")} icon={<Icon name="CircleIcon" size="small" />}>
          <TreeView.Item value="1-1" label={t("story_tree_work")} icon={<Icon name="SquareIcon" size="small" />}>
            <TreeView.Item value="1-1-1" label={t("story_tree_project_a")} icon={<Icon name="CopyIcon" size="small" />} />
            <TreeView.Item value="1-1-2" label={t("story_tree_project_b")} icon={<Icon name="CopyIcon" size="small" />} />
          </TreeView.Item>
          <TreeView.Item value="1-2" label={t("story_tree_personal")} icon={<Icon name="SquareIcon" size="small" />}>
            <TreeView.Item value="1-2-1" label={t("story_tree_photos")} icon={<Icon name="CircleIcon" size="small" />} />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story_tree_music")} icon={<Icon name="CircleIcon" size="small" />}>
          <TreeView.Item value="2-1" label={t("story_tree_rock")} icon={<Icon name="SquareIcon" size="small" />} />
          <TreeView.Item value="2-2" label={t("story_tree_jazz")} icon={<Icon name="SquareIcon" size="small" />} />
        </TreeView.Item>
        <TreeView.Item value="3" label={t("story_tree_videos")} icon={<Icon name="CircleIcon" size="small" />} />
      </TreeView>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView multiSelect defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story_tree_system")}>
          <TreeView.Item value="1-1" label={t("story_tree_logs")} />
          <TreeView.Item value="1-2" label={t("story_tree_config")} />
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story_tree_users")}>
          <TreeView.Item value="2-1" label={t("story_tree_admin")} />
          <TreeView.Item value="2-2" label={t("story_tree_guest")} />
        </TreeView.Item>
      </TreeView>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story_tree_root_enabled")}>
          <TreeView.Item value="1-1" label={t("story_tree_disabled_item")} disabled />
          <TreeView.Item value="1-2" label={t("story_tree_enabled_item")} />
        </TreeView.Item>
      </TreeView>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView width={250} defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story_tree_long_folder")} icon={<Icon name="CircleIcon" size="small" />}>
          <TreeView.Item value="1-1" label={t("story_tree_long_subitem")} icon={<Icon name="SquareIcon" size="small" />}>
            <TreeView.Item value="1-1-1" label={t("story_tree_deep_nesting")} icon={<Icon name="CopyIcon" size="small" />} />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story_tree_regular_item")} icon={<Icon name="CircleIcon" size="small" />} />
      </TreeView>;
  }
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = React.useState<string[]>([]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <TreeView nodes={regionNodes} checkable checkStrategy="cascade" multiSelect defaultExpandedValues={["asia", "east-asia", "europe"]} onCheckedChange={setChecked} width="100%" />
        <div style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>
          Checked: {checked.length > 0 ? checked.join(", ") : "(none)"}
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:`cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
バックアップ対象フォルダや地域フィルタのような「親 = 子を全て包含」用途。`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = React.useState<string[]>([]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <TreeView nodes={regionNodes} checkable checkStrategy="exclusive" multiSelect defaultExpandedValues={["asia", "east-asia", "europe"]} onCheckedChange={setChecked} width="100%" />
        <div style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>
          Checked: {checked.length > 0 ? checked.join(", ") : "(none)"}
        </div>
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:`exclusive: 親選択→子が自動解除、子選択→親が解除。
レポートの集計粒度やカテゴリ分類など「重複なしで最小セットを選ぶ」用途。`,...o.parameters?.docs?.description}}};const b=["Default","MultiSelect","DisabledItems","Overflow","CascadeCheckable","ExclusiveCheckable"],f=Object.freeze(Object.defineProperty({__proto__:null,CascadeCheckable:s,Default:i,DisabledItems:d,ExclusiveCheckable:o,MultiSelect:c,Overflow:u,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{i as D,u as O,f as T};
