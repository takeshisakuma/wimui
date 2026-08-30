"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{t as l}from"./src-CV0le6yM.js";import{t as u}from"./Icon-DKSRBrcV.js";import{r as d}from"./TreeSelect-SYAqTh1a.js";var f=e({CascadeCheckable:()=>x,Default:()=>g,DisabledItems:()=>v,ExclusiveCheckable:()=>S,MultiSelect:()=>_,Overflow:()=>y,__namedExportsOrder:()=>C,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{p=n(r(),1),s(),a(),l(),m=o(),h={title:`Components/Data Structures/TreeView`,component:d,parameters:{layout:`fullscreen`},decorators:[e=>(0,m.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`100dvh`,padding:`var(--wim-spacing-lg)`,boxSizing:`border-box`,width:`100%`,background:`var(--wim-color-surface-app)`},children:(0,m.jsx)(`div`,{style:{width:`100%`,maxWidth:`400px`},children:(0,m.jsx)(e,{})})})]},g={args:{width:`100%`},render:function(e){let{t}=i(c),n={expandLabel:e=>t(`components:a11y.expand_label`,{label:e}),collapseLabel:e=>t(`components:a11y.collapse_label`,{label:e})};return(0,m.jsxs)(d,{...e,defaultExpandedValues:[`1`,`2`],labels:n,children:[(0,m.jsxs)(d.Item,{value:`1`,label:t(`story.tree_documents`),icon:(0,m.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:[(0,m.jsxs)(d.Item,{value:`1-1`,label:t(`story.tree_work`),icon:(0,m.jsx)(u,{name:`SquareIcon`,size:`sm`}),children:[(0,m.jsx)(d.Item,{value:`1-1-1`,label:t(`story.tree_project_a`),icon:(0,m.jsx)(u,{name:`CopyIcon`,size:`sm`})}),(0,m.jsx)(d.Item,{value:`1-1-2`,label:t(`story.tree_project_b`),icon:(0,m.jsx)(u,{name:`CopyIcon`,size:`sm`})})]}),(0,m.jsx)(d.Item,{value:`1-2`,label:t(`story.tree_personal`),icon:(0,m.jsx)(u,{name:`SquareIcon`,size:`sm`}),children:(0,m.jsx)(d.Item,{value:`1-2-1`,label:t(`story.tree_photos`),icon:(0,m.jsx)(u,{name:`CircleIcon`,size:`sm`})})})]}),(0,m.jsxs)(d.Item,{value:`2`,label:t(`story.tree_music`),icon:(0,m.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:[(0,m.jsx)(d.Item,{value:`2-1`,label:t(`story.tree_rock`),icon:(0,m.jsx)(u,{name:`SquareIcon`,size:`sm`})}),(0,m.jsx)(d.Item,{value:`2-2`,label:t(`story.tree_jazz`),icon:(0,m.jsx)(u,{name:`SquareIcon`,size:`sm`})})]}),(0,m.jsx)(d.Item,{value:`3`,label:t(`story.tree_videos`),icon:(0,m.jsx)(u,{name:`CircleIcon`,size:`sm`})})]})}},_={render:function(){let{t:e}=i(c);return(0,m.jsxs)(d,{multiSelect:!0,defaultExpandedValues:[`1`],children:[(0,m.jsxs)(d.Item,{value:`1`,label:e(`story.tree_system`),children:[(0,m.jsx)(d.Item,{value:`1-1`,label:e(`story.tree_logs`)}),(0,m.jsx)(d.Item,{value:`1-2`,label:e(`story.tree_config`)})]}),(0,m.jsxs)(d.Item,{value:`2`,label:e(`story.tree_users`),children:[(0,m.jsx)(d.Item,{value:`2-1`,label:e(`story.tree_admin`)}),(0,m.jsx)(d.Item,{value:`2-2`,label:e(`story.tree_guest`)})]})]})}},v={render:function(){let{t:e}=i(c);return(0,m.jsx)(d,{defaultExpandedValues:[`1`],children:(0,m.jsxs)(d.Item,{value:`1`,label:e(`story.tree_root_enabled`),children:[(0,m.jsx)(d.Item,{value:`1-1`,label:e(`story.tree_disabled_item`),disabled:!0}),(0,m.jsx)(d.Item,{value:`1-2`,label:e(`story.tree_enabled_item`)})]})})}},y={render:function(){let{t:e}=i(c);return(0,m.jsxs)(d,{width:250,defaultExpandedValues:[`1`],children:[(0,m.jsx)(d.Item,{value:`1`,label:e(`story.tree_long_folder`),icon:(0,m.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:(0,m.jsx)(d.Item,{value:`1-1`,label:e(`story.tree_long_subitem`),icon:(0,m.jsx)(u,{name:`SquareIcon`,size:`sm`}),children:(0,m.jsx)(d.Item,{value:`1-1-1`,label:e(`story.tree_deep_nesting`),icon:(0,m.jsx)(u,{name:`CopyIcon`,size:`sm`})})})}),(0,m.jsx)(d.Item,{value:`2`,label:e(`story.tree_regular_item`),icon:(0,m.jsx)(u,{name:`CircleIcon`,size:`sm`})})]})}},b=e=>[{value:`asia`,label:e(`story.tree_asia`),children:[{value:`east-asia`,label:e(`story.tree_east_asia`),children:[{value:`japan`,label:e(`story.tree_japan`)},{value:`korea`,label:e(`story.tree_korea`)},{value:`china`,label:e(`story.tree_china`)}]},{value:`southeast-asia`,label:e(`story.tree_southeast_asia`),children:[{value:`thailand`,label:e(`story.tree_thailand`)},{value:`vietnam`,label:e(`story.tree_vietnam`)}]}]},{value:`europe`,label:e(`story.tree_europe`),children:[{value:`france`,label:e(`story.tree_france`)},{value:`germany`,label:e(`story.tree_germany`)},{value:`italy`,label:e(`story.tree_italy`)}]},{value:`americas`,label:e(`story.tree_americas`),children:[{value:`usa`,label:e(`story.tree_united_states`)},{value:`canada`,label:e(`story.tree_canada`)},{value:`brazil`,label:e(`story.tree_brazil`)}]}],x={render:function(){let{t:e}=i(c),[t,n]=p.useState([]);return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,m.jsx)(d,{nodes:b(e),checkable:!0,checkStrategy:`cascade`,multiSelect:!0,defaultExpandedValues:[`asia`,`east-asia`,`europe`],onCheckedChange:n,width:`100%`}),(0,m.jsxs)(`div`,{style:{fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[`Checked: `,t.length>0?t.join(`, `):`(none)`]})]})}},S={render:function(){let{t:e}=i(c),[t,n]=p.useState([]);return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,m.jsx)(d,{nodes:b(e),checkable:!0,checkStrategy:`exclusive`,multiSelect:!0,defaultExpandedValues:[`asia`,`east-asia`,`europe`],onCheckedChange:n,width:`100%`}),(0,m.jsxs)(`div`,{style:{fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[`Checked: `,t.length>0?t.join(`, `):`(none)`]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    width: "100%"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const labels = {
      expandLabel: (label: string) => t("components:a11y.expand_label", {
        label
      }),
      collapseLabel: (label: string) => t("components:a11y.collapse_label", {
        label
      })
    };
    return <TreeView {...args} defaultExpandedValues={["1", "2"]} labels={labels}>
        <TreeView.Item value="1" label={t("story.tree_documents")} icon={<Icon name="CircleIcon" size="sm" />}>
          <TreeView.Item value="1-1" label={t("story.tree_work")} icon={<Icon name="SquareIcon" size="sm" />}>
            <TreeView.Item value="1-1-1" label={t("story.tree_project_a")} icon={<Icon name="CopyIcon" size="sm" />} />
            <TreeView.Item value="1-1-2" label={t("story.tree_project_b")} icon={<Icon name="CopyIcon" size="sm" />} />
          </TreeView.Item>
          <TreeView.Item value="1-2" label={t("story.tree_personal")} icon={<Icon name="SquareIcon" size="sm" />}>
            <TreeView.Item value="1-2-1" label={t("story.tree_photos")} icon={<Icon name="CircleIcon" size="sm" />} />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story.tree_music")} icon={<Icon name="CircleIcon" size="sm" />}>
          <TreeView.Item value="2-1" label={t("story.tree_rock")} icon={<Icon name="SquareIcon" size="sm" />} />
          <TreeView.Item value="2-2" label={t("story.tree_jazz")} icon={<Icon name="SquareIcon" size="sm" />} />
        </TreeView.Item>
        <TreeView.Item value="3" label={t("story.tree_videos")} icon={<Icon name="CircleIcon" size="sm" />} />
      </TreeView>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView multiSelect defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story.tree_system")}>
          <TreeView.Item value="1-1" label={t("story.tree_logs")} />
          <TreeView.Item value="1-2" label={t("story.tree_config")} />
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story.tree_users")}>
          <TreeView.Item value="2-1" label={t("story.tree_admin")} />
          <TreeView.Item value="2-2" label={t("story.tree_guest")} />
        </TreeView.Item>
      </TreeView>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story.tree_root_enabled")}>
          <TreeView.Item value="1-1" label={t("story.tree_disabled_item")} disabled />
          <TreeView.Item value="1-2" label={t("story.tree_enabled_item")} />
        </TreeView.Item>
      </TreeView>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView width={250} defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story.tree_long_folder")} icon={<Icon name="CircleIcon" size="sm" />}>
          <TreeView.Item value="1-1" label={t("story.tree_long_subitem")} icon={<Icon name="SquareIcon" size="sm" />}>
            <TreeView.Item value="1-1-1" label={t("story.tree_deep_nesting")} icon={<Icon name="CopyIcon" size="sm" />} />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story.tree_regular_item")} icon={<Icon name="CircleIcon" size="sm" />} />
      </TreeView>;
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [checked, setChecked] = React.useState<string[]>([]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <TreeView nodes={regionNodes(t)} checkable checkStrategy="cascade" multiSelect defaultExpandedValues={["asia", "east-asia", "europe"]} onCheckedChange={setChecked} width="100%" />
        <div style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>
          Checked: {checked.length > 0 ? checked.join(", ") : "(none)"}
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
バックアップ対象フォルダや地域フィルタのような「親 = 子を全て包含」用途。`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [checked, setChecked] = React.useState<string[]>([]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <TreeView nodes={regionNodes(t)} checkable checkStrategy="exclusive" multiSelect defaultExpandedValues={["asia", "east-asia", "europe"]} onCheckedChange={setChecked} width="100%" />
        <div style={{
        fontSize: "12px",
        color: "var(--wim-color-text-secondary)"
      }}>
          Checked: {checked.length > 0 ? checked.join(", ") : "(none)"}
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`exclusive: 親選択→子が自動解除、子選択→親が解除。
レポートの集計粒度やカテゴリ分類など「重複なしで最小セットを選ぶ」用途。`,...S.parameters?.docs?.description}}},C=[`Default`,`MultiSelect`,`DisabledItems`,`Overflow`,`CascadeCheckable`,`ExclusiveCheckable`]}));w();export{x as CascadeCheckable,g as Default,v as DisabledItems,S as ExclusiveCheckable,_ as MultiSelect,y as Overflow,C as __namedExportsOrder,h as default,w as n,f as t};