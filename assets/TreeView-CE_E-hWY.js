import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-BQKz9tsZ.js";import{M as l,T as t,C as i,S as h}from"./blocks-8DKXPA_8.js";import{T as x,D as j,O as o}from"./TreeView.stories-zqUL9Vl8.js";import{T as r}from"./T-DCrEeJo3.js";import"./iframe-BNlQl3jf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeMVM38F.js";import"./index-BAmmoUHx.js";import"./index-BLd-Xt7W.js";import"./index-LmUoD6G7.js";import"./TreeView-7ENdUCi-.js";import"./index-D7klgXxy.js";import"./Icon-CwCJsGHP.js";import"./BaseListItem-DOjojFui.js";import"./useTranslation-C1Yfhr6h.js";function s(c){const d={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...n(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:x}),`
`,e.jsx(t,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(r,{k:"doc_treeview_title"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_long_desc"})}),`
`,e.jsx(d.h2,{id:"",children:e.jsx(r,{k:"doc_features"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_features_desc"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_features_1"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_features_2"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_features_3"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_features_4"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_features_5"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_features_6"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_features_7"})})]}),`
`,e.jsx(d.h2,{id:"-1",children:e.jsx(r,{k:"doc_basic_usage"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { TreeView } from "@/components/TreeView/TreeView";\r
import { Icon } from "@/components/Icon/Icon";\r
\r
const MyTree = () => (\r
  <TreeView defaultExpandedValues={["root"]}>\r
    <TreeView.Item\r
      value="root"\r
      label="Documents"\r
      icon={<Icon name="CircleIcon" />}\r
    >\r
      <TreeView.Item value="child1" label="Work" />\r
      <TreeView.Item value="child2" label="Personal" />\r
    </TreeView.Item>\r
  </TreeView>\r
);
`})}),`
`,e.jsx(d.h2,{id:"-2",children:e.jsx(r,{k:"doc_usage_examples"})}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(d.h2,{id:"-3",children:e.jsx(r,{k:"doc_advanced_features"})}),`
`,e.jsx(d.h3,{id:"-4",children:e.jsx(r,{k:"doc_treeview_checkbox_mode"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_checkbox_mode_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);\r
\r
<TreeView checkable defaultCheckedValues={checked} onCheckedChange={setChecked}>\r
  <TreeView.Item value="1" label="Item 1">\r
    <TreeView.Item value="1-1" label="Item 1-1" />\r
    <TreeView.Item value="1-2" label="Item 1-2" />\r
  </TreeView.Item>\r
  <TreeView.Item value="2" label="Item 2" />\r
</TreeView>;
`})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_use_cases"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_use_cases_item_1"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_use_cases_item_2"})}),e.jsx("li",{children:e.jsx(r,{k:"doc_treeview_use_cases_item_3"})})]}),`
`,e.jsx(d.h3,{id:"-5",children:e.jsx(r,{k:"doc_treeview_search_filter"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_search_filter_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<TreeView searchable>\r
  <TreeView.Item value="documents" label="Documents">\r
    <TreeView.Item value="work" label="Work">\r
      <TreeView.Item value="projects" label="Projects" />\r
      <TreeView.Item value="reports" label="Reports" />\r
    </TreeView.Item>\r
    <TreeView.Item value="personal" label="Personal" />\r
  </TreeView.Item>\r
</TreeView>
`})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_search_filter_note"})}),`
`,e.jsx(d.h3,{id:"-6",children:e.jsx(r,{k:"doc_treeview_multi_select"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_multi_select_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<TreeView multiSelect defaultSelectedValues={["item1", "item2"]}>\r
  {/* Tree items */}\r
</TreeView>
`})}),`
`,e.jsx(d.h3,{id:"-7",children:e.jsx(r,{k:"doc_treeview_custom_icons"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_custom_icons_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<TreeView>\r
  <TreeView.Item\r
    value="folder1"\r
    label="Documents"\r
    icon={<Icon name="CircleIcon" />}\r
  >\r
    <TreeView.Item\r
      value="file1"\r
      label="Report.pdf"\r
      icon={<Icon name="SquareIcon" />}\r
    />\r
  </TreeView.Item>\r
</TreeView>
`})}),`
`,e.jsx(d.h3,{id:"-8",children:e.jsx(r,{k:"doc_treeview_combined_features"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);\r
\r
<TreeView\r
  multiSelect\r
  checkable\r
  searchable\r
  defaultExpandedValues={["root"]}\r
  defaultCheckedValues={checked}\r
  onCheckedChange={setChecked}\r
  width={400}\r
>\r
  <TreeView.Item value="root" label="Root">\r
    <TreeView.Item value="child1" label="Child 1" />\r
    <TreeView.Item value="child2" label="Child 2">\r
      <TreeView.Item value="grandchild1" label="Grandchild 1" />\r
    </TreeView.Item>\r
  </TreeView.Item>\r
</TreeView>;
`})}),`
`,e.jsx(d.h2,{id:"-9",children:e.jsx(r,{k:"doc_component_api"})}),`
`,e.jsx(d.h3,{id:"treeview",children:"TreeView"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(r,{k:"doc_prop"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_type"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_default"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"width"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_width"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"multiSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_multiselect"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"checkable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_checkable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"searchable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_searchable"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultExpandedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_default_expanded"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultSelectedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_default_selected"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultCheckedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_default_checked"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onCheckedChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(checked: string[]) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_oncheckedchange"})})]})]})]}),`
`,e.jsx(d.h3,{id:"treeviewitem",children:"TreeView.Item"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(r,{k:"doc_prop"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_type"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_default"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_item_value"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_item_label"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_item_icon"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_item_disabled"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_item_children"})})]})]})]}),`
`,e.jsx(d.h2,{id:"-10",children:e.jsx(r,{k:"doc_keyboard_navigation"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(r,{k:"doc_treeview_api_key_header"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_treeview_api_action_header"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(d.p,{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})]})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_key_enter"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowRight"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_key_arrowright"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowLeft"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_treeview_api_key_arrowleft"})})]})]})]}),`
`,e.jsx(d.h2,{id:"-11",children:e.jsx(r,{k:"doc_treeview_overflow_title"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_overflow_desc"})}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(d.h2,{id:"-12",children:e.jsx(r,{k:"doc_accessibility"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_accessibility_desc"})}),`
`,e.jsx(d.h2,{id:"-13",children:e.jsx(r,{k:"doc_table_ts_support"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_treeview_ts_support_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { TreeView } from "./TreeView";\r
import { T } from "../T";\r
\r
<TreeView\r
  multiSelect\r
  checkable\r
  defaultCheckedValues={["item1"]}\r
  onCheckedChange={(checked: string[]) => {\r
    console.log("Checked items:", checked);\r
  }}\r
>\r
  {/* Items */}\r
</TreeView>;
`})}),`
`,e.jsx(h,{})]})}function S(c={}){const{wrapper:d}={...n(),...c.components};return d?e.jsx(d,{...c,children:e.jsx(s,{...c})}):s(c)}export{S as default};
