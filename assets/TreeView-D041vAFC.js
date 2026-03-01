import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-kRKb6otn.js";import{M as s,T as l,C as t,S as h}from"./blocks-h-koGg6Y.js";import{T as x,D as o}from"./TreeView.stories-Do2PdCDm.js";import{T as d}from"./T-D3t-8OFd.js";import"./iframe-RqRUvN2f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KrD9KPR3.js";import"./index-MJSI_oPR.js";import"./index-xDlYQR3e.js";import"./index-D5anLY7w.js";import"./TreeView-Bke4p75p.js";import"./index-B1nuKDx0.js";import"./Icon-DEW6Teyt.js";import"./useTranslation-CveckdUp.js";function i(n){const c={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:x}),`
`,e.jsx(l,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(d,{k:"doc_treeview_title"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_long_desc"})}),`
`,e.jsx(c.h2,{id:"",children:e.jsx(d,{k:"doc_features"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_features_desc"})}),`
`,e.jsx(c.h2,{id:"-1",children:e.jsx(d,{k:"doc_basic_usage"})}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`import { TreeView } from "@/components/TreeView/TreeView";
import { Icon } from "@/components/Icon/Icon";

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
`,e.jsx(c.h2,{id:"-2",children:e.jsx(d,{k:"doc_usage_examples"})}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(c.h2,{id:"-3",children:e.jsx(d,{k:"doc_advanced_features"})}),`
`,e.jsx(c.h3,{id:"-4",children:e.jsx(d,{k:"doc_treeview_checkbox_mode"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_checkbox_mode_desc"})}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);

<TreeView checkable defaultCheckedValues={checked} onCheckedChange={setChecked}>
  <TreeView.Item value="1" label="Item 1">
    <TreeView.Item value="1-1" label="Item 1-1" />
    <TreeView.Item value="1-2" label="Item 1-2" />
  </TreeView.Item>
  <TreeView.Item value="2" label="Item 2" />
</TreeView>;
`})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_use_cases"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_use_cases_list"})}),`
`,e.jsx(c.h3,{id:"-5",children:e.jsx(d,{k:"doc_treeview_search_filter"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_search_filter_desc"})}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`<TreeView searchable>
  <TreeView.Item value="documents" label="Documents">
    <TreeView.Item value="work" label="Work">
      <TreeView.Item value="projects" label="Projects" />
      <TreeView.Item value="reports" label="Reports" />
    </TreeView.Item>
    <TreeView.Item value="personal" label="Personal" />
  </TreeView.Item>
</TreeView>
`})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_search_filter_note"})}),`
`,e.jsx(c.h3,{id:"-6",children:e.jsx(d,{k:"doc_treeview_multi_select"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_multi_select_desc"})}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`<TreeView multiSelect defaultSelectedValues={["item1", "item2"]}>
  {/* Tree items */}
</TreeView>
`})}),`
`,e.jsx(c.h3,{id:"-7",children:e.jsx(d,{k:"doc_treeview_custom_icons"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_custom_icons_desc"})}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`<TreeView>
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
`,e.jsx(c.h3,{id:"-8",children:e.jsx(d,{k:"doc_treeview_combined_features"})}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);

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
`,e.jsx(c.h2,{id:"-9",children:e.jsx(d,{k:"doc_component_api"})}),`
`,e.jsx(c.h3,{id:"treeview",children:"TreeView"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(d,{k:"doc_prop"})}),e.jsx("th",{children:e.jsx(d,{k:"doc_type"})}),e.jsx("th",{children:e.jsx(d,{k:"doc_default"})}),e.jsx("th",{children:e.jsx(d,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"width"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_width"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"multiSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_multiselect"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"checkable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_checkable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"searchable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_searchable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultExpandedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_default_expanded"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultSelectedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_default_selected"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultCheckedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_default_checked"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onCheckedChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(checked: string[]) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_oncheckedchange"})})]})]})]}),`
`,e.jsx(c.h3,{id:"treeviewitem",children:"TreeView.Item"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(d,{k:"doc_prop"})}),e.jsx("th",{children:e.jsx(d,{k:"doc_type"})}),e.jsx("th",{children:e.jsx(d,{k:"doc_default"})}),e.jsx("th",{children:e.jsx(d,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_item_value"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_item_label"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_item_icon"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_item_disabled"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_item_children"})})]})]})]}),`
`,e.jsx(c.h2,{id:"-10",children:e.jsx(d,{k:"doc_keyboard_navigation"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(d,{k:"doc_treeview_api_key_header"})}),e.jsx("th",{children:e.jsx(d,{k:"doc_treeview_api_action_header"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(c.p,{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})]})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_key_enter"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowRight"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_key_arrowright"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowLeft"})}),e.jsx("td",{children:e.jsx(d,{k:"doc_treeview_api_key_arrowleft"})})]})]})]}),`
`,e.jsx(c.h2,{id:"-11",children:e.jsx(d,{k:"doc_accessibility"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_accessibility_desc"})}),`
`,e.jsx(c.h2,{id:"-12",children:e.jsx(d,{k:"doc_table_ts_support"})}),`
`,e.jsx("p",{children:e.jsx(d,{k:"doc_treeview_ts_support_desc"})}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`import { TreeView } from "./TreeView";
import { T } from "../T";

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
`,e.jsx(h,{})]})}function C(n={}){const{wrapper:c}={...r(),...n.components};return c?e.jsx(c,{...n,children:e.jsx(i,{...n})}):i(n)}export{C as default};
