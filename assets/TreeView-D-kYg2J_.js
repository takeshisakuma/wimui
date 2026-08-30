"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-splidnB2.js";import{D as n,h as r,m as i,n as a,u as o}from"./blocks-qGTaibzD.js";import{t as s}from"./mdx-react-shim-CsIlWI2E.js";import{n as c,t as l}from"./T-D8-Z5cHp.js";import{n as u,t as d}from"./Docgen-BscC-bD0.js";import{Default as f,Overflow as p,n as m,t as h}from"./TreeView.stories-DWumUcL9.js";function g(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(i,{}),`
`,(0,v.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,v.jsx)(l,{k:`doc.treeview_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_long_desc`})}),`
`,(0,v.jsx)(t.h2,{id:``,children:(0,v.jsx)(l,{k:`doc.features`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_desc`})}),`
`,(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_1`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_2`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_3`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_4`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_5`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_6`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_features_7`})})]}),`
`,(0,v.jsx)(t.h2,{id:`-1`,children:(0,v.jsx)(l,{k:`doc.design_intent_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_design_intent`})}),`
`,(0,v.jsx)(t.h2,{id:`-2`,children:(0,v.jsx)(l,{k:`doc.choice_matrix_title`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.component`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.usage_scenario`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:`TreeView`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.treeview_choice_self_when`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:`List`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.treeview_choice_alt_when`})})]})]})]}),`
`,(0,v.jsx)(d,{componentName:`TreeView`,section:`anatomy`}),`
`,(0,v.jsx)(t.h2,{id:`-3`,children:(0,v.jsx)(l,{k:`doc.a11y_spec_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_a11y_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-4`,children:(0,v.jsx)(l,{k:`doc.real_world_scenarios_title`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.usage_scenario`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.table_header_description`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:(0,v.jsx)(l,{k:`doc.scenario_files_title`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.treeview_scenario_1`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:(0,v.jsx)(l,{k:`doc.scenario_admin_title`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.treeview_scenario_2`})})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`-5`,children:(0,v.jsx)(l,{k:`doc.best_practices_title`})}),`
`,(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_best_practice_1`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_best_practice_2`})})]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { TreeView, Icon } from "wimui";

const MyTree = () => (
  <TreeView defaultExpandedValues={["root"]}>
    <TreeView.Item
      value="root"
      label="Documents"
      icon={<Icon name="CircleIcon" />}
    >
      <TreeView.Item value="child1" label="Work" />
      <TreeView.Item value="child2" label="Personal" />
    </TreeView.Item>
  </TreeView>
);
`})}),`
`,(0,v.jsx)(t.h2,{id:`-6`,children:(0,v.jsx)(l,{k:`doc.usage_examples`})}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`-7`,children:(0,v.jsx)(l,{k:`doc.advanced_features`})}),`
`,(0,v.jsx)(t.h3,{id:`-8`,children:(0,v.jsx)(l,{k:`doc.treeview_checkbox_mode`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_checkbox_mode_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`const [checked, setChecked] = useState([]);

<TreeView checkable defaultCheckedValues={checked} onCheckedChange={setChecked}>
  <TreeView.Item value="1" label="Item 1">
    <TreeView.Item value="1-1" label="Item 1-1" />
    <TreeView.Item value="1-2" label="Item 1-2" />
  </TreeView.Item>
  <TreeView.Item value="2" label="Item 2" />
</TreeView>;
`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_use_cases`})}),`
`,(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_use_cases_item_1`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_use_cases_item_2`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_use_cases_item_3`})})]}),`
`,(0,v.jsx)(t.h3,{id:`-9`,children:(0,v.jsx)(l,{k:`doc.treeview_search_filter`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_search_filter_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`<TreeView searchable>
  <TreeView.Item value="documents" label="Documents">
    <TreeView.Item value="work" label="Work">
      <TreeView.Item value="projects" label="Projects" />
      <TreeView.Item value="reports" label="Reports" />
    </TreeView.Item>
    <TreeView.Item value="personal" label="Personal" />
  </TreeView.Item>
</TreeView>
`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_search_filter_note`})}),`
`,(0,v.jsx)(t.h3,{id:`-10`,children:(0,v.jsx)(l,{k:`doc.treeview_multi_select`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_multi_select_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`<TreeView multiSelect defaultSelectedValues={["item1", "item2"]}>
  {/* Tree items */}
</TreeView>
`})}),`
`,(0,v.jsx)(t.h3,{id:`-11`,children:(0,v.jsx)(l,{k:`doc.treeview_custom_icons`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_custom_icons_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`<TreeView>
  <TreeView.Item
    value="folder1"
    label="Documents"
    icon={<Icon name="CircleIcon" />}
  >
    <TreeView.Item
      value="file1"
      label="Report.pdf"
      icon={<Icon name="SquareIcon" />}
    />
  </TreeView.Item>
</TreeView>
`})}),`
`,(0,v.jsx)(t.h3,{id:`-12`,children:(0,v.jsx)(l,{k:`doc.treeview_combined_features`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`const [checked, setChecked] = useState([]);

<TreeView
  multiSelect
  checkable
  searchable
  defaultExpandedValues={["root"]}
  defaultCheckedValues={checked}
  onCheckedChange={setChecked}
  width={400}
>
  <TreeView.Item value="root" label="Root">
    <TreeView.Item value="child1" label="Child 1" />
    <TreeView.Item value="child2" label="Child 2">
      <TreeView.Item value="grandchild1" label="Grandchild 1" />
    </TreeView.Item>
  </TreeView.Item>
</TreeView>;
`})}),`
`,(0,v.jsx)(d,{componentName:`TreeView`,section:`props`}),`
`,(0,v.jsx)(t.h3,{id:`-13`,children:(0,v.jsx)(l,{k:`doc.treeview_item_props`})}),`
`,(0,v.jsx)(d,{componentName:`TreeView.Item`,section:`props`}),`
`,(0,v.jsx)(t.h2,{id:`-14`,children:(0,v.jsx)(l,{k:`doc.keyboard_navigation`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.treeview_api_key_header`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(l,{k:`doc.treeview_api_action_header`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsxs)(t.p,{children:[(0,v.jsx)(`code`,{children:`Enter`}),` / `,(0,v.jsx)(`code`,{children:`Space`})]})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.treeview_api_key_enter`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{children:`ArrowRight`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.treeview_api_key_arrowright`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{children:`ArrowLeft`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(l,{k:`doc.treeview_api_key_arrowleft`})})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`-15`,children:(0,v.jsx)(l,{k:`doc.treeview_overflow_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_overflow_desc`})}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`-16`,children:(0,v.jsx)(l,{k:`doc.accessibility`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_accessibility_desc`})}),`
`,(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_accessibility_1`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_accessibility_2`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_accessibility_3`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(l,{k:`doc.treeview_accessibility_4`})})]}),`
`,(0,v.jsx)(t.h2,{id:`-17`,children:(0,v.jsx)(l,{k:`doc.table_ts_support`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_ts_support_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { TreeView } from "wimui";

<TreeView
  multiSelect
  checkable
  defaultCheckedValues={["item1"]}
  onCheckedChange={(checked: string[]) => {
    console.log("Checked items:", checked);
  }}
>
  {/* Items */}
</TreeView>;
`})}),`
`,(0,v.jsx)(d,{componentName:`TreeView`,section:`tokens`}),`
`,(0,v.jsx)(t.h2,{id:`-18`,children:(0,v.jsx)(l,{k:`doc.keyboard_nav_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(l,{k:`doc.treeview_keyboard_desc`})}),`
`,(0,v.jsx)(d,{componentName:`TreeView`,section:`i18n`}),`
`,(0,v.jsx)(d,{componentName:`TreeView`,section:`test`})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m(),c(),u()}))();export{_ as default};