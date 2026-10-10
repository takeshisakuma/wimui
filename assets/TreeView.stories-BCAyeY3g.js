"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-TGLZuM2d.js";import{n as d,t as f}from"./TreeView-BZHD7Leo.js";var p=n({CascadeCheckable:()=>C,Default:()=>_,DisabledItems:()=>b,ExclusiveCheckable:()=>w,MultiSelect:()=>y,Overflow:()=>x,Selected:()=>v,__namedExportsOrder:()=>T,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{m=e(r(),1),a(),o(),l(),d(),h=c(),g={title:`Components/Data Structures/TreeView`,component:f,parameters:{layout:`fullscreen`},decorators:[e=>(0,h.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`100dvh`,padding:`var(--wim-spacing-lg)`,boxSizing:`border-box`,width:`100%`,background:`var(--wim-color-surface-app)`},children:(0,h.jsx)(`div`,{style:{width:`100%`,maxWidth:`400px`},children:(0,h.jsx)(e,{})})})]},_={args:{width:`100%`},render:function(e){let{t}=i(s),n={expandLabel:e=>t(`components:a11y.expand_label`,{label:e}),collapseLabel:e=>t(`components:a11y.collapse_label`,{label:e})};return(0,h.jsxs)(f,{...e,defaultExpandedValues:[`1`,`2`],labels:n,children:[(0,h.jsxs)(f.Item,{value:`1`,label:t(`story.tree_documents`),icon:(0,h.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:[(0,h.jsxs)(f.Item,{value:`1-1`,label:t(`story.tree_work`),icon:(0,h.jsx)(u,{name:`SquareIcon`,size:`sm`}),children:[(0,h.jsx)(f.Item,{value:`1-1-1`,label:t(`story.tree_project_a`),icon:(0,h.jsx)(u,{name:`CopyIcon`,size:`sm`})}),(0,h.jsx)(f.Item,{value:`1-1-2`,label:t(`story.tree_project_b`),icon:(0,h.jsx)(u,{name:`CopyIcon`,size:`sm`})})]}),(0,h.jsx)(f.Item,{value:`1-2`,label:t(`story.tree_personal`),icon:(0,h.jsx)(u,{name:`SquareIcon`,size:`sm`}),children:(0,h.jsx)(f.Item,{value:`1-2-1`,label:t(`story.tree_photos`),icon:(0,h.jsx)(u,{name:`CircleIcon`,size:`sm`})})})]}),(0,h.jsxs)(f.Item,{value:`2`,label:t(`story.tree_music`),icon:(0,h.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:[(0,h.jsx)(f.Item,{value:`2-1`,label:t(`story.tree_rock`),icon:(0,h.jsx)(u,{name:`SquareIcon`,size:`sm`})}),(0,h.jsx)(f.Item,{value:`2-2`,label:t(`story.tree_jazz`),icon:(0,h.jsx)(u,{name:`SquareIcon`,size:`sm`})})]}),(0,h.jsx)(f.Item,{value:`3`,label:t(`story.tree_videos`),icon:(0,h.jsx)(u,{name:`CircleIcon`,size:`sm`})})]})}},v={render:function(){let{t:e}=i(s);return(0,h.jsxs)(f,{defaultExpandedValues:[`1`,`2`],defaultSelectedValues:[`1-2`],children:[(0,h.jsxs)(f.Item,{value:`1`,label:e(`story.tree_system`),children:[(0,h.jsx)(f.Item,{value:`1-1`,label:e(`story.tree_logs`)}),(0,h.jsx)(f.Item,{value:`1-2`,label:e(`story.tree_config`)})]}),(0,h.jsxs)(f.Item,{value:`2`,label:e(`story.tree_users`),children:[(0,h.jsx)(f.Item,{value:`2-1`,label:e(`story.tree_admin`)}),(0,h.jsx)(f.Item,{value:`2-2`,label:e(`story.tree_guest`)})]})]})}},y={render:function(){let{t:e}=i(s);return(0,h.jsxs)(f,{multiSelect:!0,defaultExpandedValues:[`1`],children:[(0,h.jsxs)(f.Item,{value:`1`,label:e(`story.tree_system`),children:[(0,h.jsx)(f.Item,{value:`1-1`,label:e(`story.tree_logs`)}),(0,h.jsx)(f.Item,{value:`1-2`,label:e(`story.tree_config`)})]}),(0,h.jsxs)(f.Item,{value:`2`,label:e(`story.tree_users`),children:[(0,h.jsx)(f.Item,{value:`2-1`,label:e(`story.tree_admin`)}),(0,h.jsx)(f.Item,{value:`2-2`,label:e(`story.tree_guest`)})]})]})}},b={render:function(){let{t:e}=i(s);return(0,h.jsx)(f,{defaultExpandedValues:[`1`],children:(0,h.jsxs)(f.Item,{value:`1`,label:e(`story.tree_root_enabled`),children:[(0,h.jsx)(f.Item,{value:`1-1`,label:e(`story.tree_disabled_item`),disabled:!0}),(0,h.jsx)(f.Item,{value:`1-2`,label:e(`story.tree_enabled_item`)})]})})}},x={render:function(){let{t:e}=i(s);return(0,h.jsxs)(f,{width:250,defaultExpandedValues:[`1`],children:[(0,h.jsx)(f.Item,{value:`1`,label:e(`story.tree_long_folder`),icon:(0,h.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:(0,h.jsx)(f.Item,{value:`1-1`,label:e(`story.tree_long_subitem`),icon:(0,h.jsx)(u,{name:`SquareIcon`,size:`sm`}),children:(0,h.jsx)(f.Item,{value:`1-1-1`,label:e(`story.tree_deep_nesting`),icon:(0,h.jsx)(u,{name:`CopyIcon`,size:`sm`})})})}),(0,h.jsx)(f.Item,{value:`2`,label:e(`story.tree_regular_item`),icon:(0,h.jsx)(u,{name:`CircleIcon`,size:`sm`})})]})}},S=e=>[{value:`asia`,label:e(`story.tree_asia`),children:[{value:`east-asia`,label:e(`story.tree_east_asia`),children:[{value:`japan`,label:e(`story.tree_japan`)},{value:`korea`,label:e(`story.tree_korea`)},{value:`china`,label:e(`story.tree_china`)}]},{value:`southeast-asia`,label:e(`story.tree_southeast_asia`),children:[{value:`thailand`,label:e(`story.tree_thailand`)},{value:`vietnam`,label:e(`story.tree_vietnam`)}]}]},{value:`europe`,label:e(`story.tree_europe`),children:[{value:`france`,label:e(`story.tree_france`)},{value:`germany`,label:e(`story.tree_germany`)},{value:`italy`,label:e(`story.tree_italy`)}]},{value:`americas`,label:e(`story.tree_americas`),children:[{value:`usa`,label:e(`story.tree_united_states`)},{value:`canada`,label:e(`story.tree_canada`)},{value:`brazil`,label:e(`story.tree_brazil`)}]}],C={render:function(){let{t:e}=i(s),[t,n]=m.useState([]);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,h.jsx)(f,{nodes:S(e),checkable:!0,checkStrategy:`cascade`,multiSelect:!0,defaultExpandedValues:[`asia`,`east-asia`,`europe`],onCheckedChange:n,width:`100%`}),(0,h.jsxs)(`div`,{style:{fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[`Checked: `,t.length>0?t.join(`, `):`(none)`]})]})}},w={render:function(){let{t:e}=i(s),[t,n]=m.useState([]);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,h.jsx)(f,{nodes:S(e),checkable:!0,checkStrategy:`exclusive`,multiSelect:!0,defaultExpandedValues:[`asia`,`east-asia`,`europe`],onCheckedChange:n,width:`100%`}),(0,h.jsxs)(`div`,{style:{fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:[`Checked: `,t.length>0?t.join(`, `):`(none)`]})]})}},T=[`Default`,`Selected`,`MultiSelect`,`DisabledItems`,`Overflow`,`CascadeCheckable`,`ExclusiveCheckable`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TreeView defaultExpandedValues={["1", "2"]} defaultSelectedValues={["1-2"]}>
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
バックアップ対象フォルダや地域フィルタのような「親 = 子を全て包含」用途。`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`exclusive: 親選択→子が自動解除、子選択→親が解除。
レポートの集計粒度やカテゴリ分類など「重複なしで最小セットを選ぶ」用途。`,...w.parameters?.docs?.description}}}})))()}export{E as a,p as i,x as n,v as r,_ as t};