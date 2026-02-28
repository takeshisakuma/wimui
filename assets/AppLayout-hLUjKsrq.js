import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-B2K_e2w9.js";import{M as t}from"./blocks-Co24uSwP.js";import{T as n}from"./T-CNQyDgm7.js";import"./iframe-BN-4pijT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDyAH9Gx.js";import"./index-CXYa8rZT.js";import"./index-BTwjK_Rj.js";import"./index-hqaaz1Nb.js";import"./useTranslation-1LeyJRh3.js";function r(d){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/App Layout"}),`
`,e.jsx(i.h1,{id:"",children:e.jsx(n,{k:"guide_layout_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_desc"})}),`
`,e.jsx("style",{children:`
.layout-container {
  display: grid;
  grid-template-areas: "header header header" "sidebar main right" "footer footer footer";
  grid-template-rows: 60px 300px 40px;
  grid-template-columns: 200px 1fr 200px;
  gap: 2px;
  background: #ccc;
  border: 1px solid #ddd;
  color: #555;
  font-size: 14px;
  font-family: sans-serif;
  margin: 24px 0;
  width: 100%;
  min-width: 0;
  overflow: hidden;
}

.layout-header { grid-area: header; background: #e0e7ff; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.layout-sidebar { grid-area: sidebar; background: #f3f4f6; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.layout-main { grid-area: main; background: #fff; position: relative; }
.layout-page-header { position: absolute; top: 0; left: 0; right: 0; height: 40px; background: #fffbeb; border-bottom: 1px dashed #ccc; display: flex; align-items: center; justify-content: center; font-size: 12px; }
.layout-main-content { display: flex; align-items: center; justify-content: center; height: 100%; padding-top: 40px; font-weight: bold; }
.layout-toast { position: absolute; bottom: 10px; right: 10px; width: 120px; height: 40px; background: #fee2e2; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.layout-right { grid-area: right; background: #f3f4f6; display: flex; align-items: center; justify-content: center; font-weight: bold; border-left: 1px solid #e5e7eb; }
.layout-footer { grid-area: footer; background: #f9fafb; display: flex; align-items: center; justify-content: center; font-size: 12px; }

@media (max-width: 1024px) {
  .layout-container {
    grid-template-areas: "header header" "sidebar main" "footer footer";
    grid-template-columns: 150px 1fr;
  }
  .layout-right { display: none; }
}

@media (max-width: 768px) {
  .layout-container {
    grid-template-areas: "header" "main" "sidebar" "footer";
    grid-template-columns: 1fr;
    grid-template-rows: 50px 300px 60px 40px;
  }
  .layout-sidebar { border-top: 1px solid #ddd; }
  .layout-toast { width: 100px; height: 32px; font-size: 10px; }
}
`}),`
`,e.jsxs("div",{className:"layout-container",children:[e.jsx("div",{className:"layout-header",children:e.jsx(n,{k:"layout_diagram_header"})}),e.jsx("div",{className:"layout-sidebar",children:e.jsx(n,{k:"layout_diagram_sidebar"})}),e.jsxs("div",{className:"layout-main",children:[e.jsx("div",{className:"layout-page-header",children:e.jsx(n,{k:"layout_diagram_page_header"})}),e.jsx("div",{className:"layout-main-content",children:e.jsx(n,{k:"layout_diagram_main_content"})}),e.jsx("div",{className:"layout-toast",children:e.jsx(n,{k:"layout_diagram_toast"})})]}),e.jsx("div",{className:"layout-right",children:e.jsx(n,{k:"layout_diagram_right_panel"})}),e.jsx("div",{className:"layout-footer",children:e.jsx(n,{k:"layout_diagram_footer"})})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-1",children:e.jsx(n,{k:"guide_layout_header_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_header_desc"})}),`
`,e.jsx(i.h3,{id:"-2",children:e.jsx(n,{k:"table_header_description"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"guide_layout_header_content"})})}),`
`,e.jsx(i.h3,{id:"components",children:"Components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Header"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Navbar"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"SearchInput"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Avatar"})}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-3",children:e.jsx(n,{k:"guide_layout_sidebar_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_sidebar_desc"})}),`
`,e.jsx(i.h3,{id:"-4",children:e.jsx(n,{k:"table_header_description"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"guide_layout_sidebar_content"})})}),`
`,e.jsx(i.h3,{id:"components-1",children:"Components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Sidebar"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Menu"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"TreeView"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Accordion"})}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-5",children:e.jsx(n,{k:"guide_layout_pageheader_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_pageheader_desc"})}),`
`,e.jsx(i.h3,{id:"components-2",children:"Components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Breadcrumb"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Heading"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Button"})," (Toolbar)"]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-6",children:e.jsx(n,{k:"guide_layout_main_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_main_desc"})}),`
`,e.jsx(i.h3,{id:"components-3",children:"Components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Container"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Grid"})," / ",e.jsx(i.code,{children:"SimpleGrid"})]}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Card"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Table"})," / ",e.jsx(i.code,{children:"DataGrid"})]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-7",children:e.jsx(n,{k:"guide_layout_rightpanel_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_rightpanel_desc"})}),`
`,e.jsx(i.h3,{id:"-8",children:e.jsx(n,{k:"table_header_description"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"guide_layout_rightpanel_content"})})}),`
`,e.jsx(i.h3,{id:"components-4",children:"Components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Drawer"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Tabs"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"DescriptionList"})}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-9",children:e.jsx(n,{k:"guide_layout_footer_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_footer_desc"})}),`
`,e.jsx(i.h3,{id:"-10",children:e.jsx(n,{k:"table_header_description"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"guide_layout_footer_content"})})}),`
`,e.jsx(i.h3,{id:"components-5",children:"Components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Footer"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Link"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"Divider"})}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-11",children:e.jsx(n,{k:"guide_layout_overlay_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_overlay_desc"})}),`
`,e.jsx(i.h3,{id:"components-6",children:"Components"}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(n,{k:"guide_layout_overlay_content"})})}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-12",children:e.jsx(n,{k:"guide_layout_responsive_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_layout_responsive_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"auto_tr_applayout_25"})}),e.jsx("th",{children:e.jsx(n,{k:"auto_tr_applayout_26"})}),e.jsx("th",{children:e.jsx(n,{k:"auto_tr_applayout_27"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Mobile"})}),e.jsx("td",{children:"< 768px"}),e.jsx("td",{children:e.jsx(n,{k:"guide_layout_responsive_mobile"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tablet"})}),e.jsx("td",{children:"768px - 1024px"}),e.jsx("td",{children:e.jsx(n,{k:"guide_layout_responsive_tablet"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Desktop"})}),e.jsx("td",{children:"> 1024px"}),e.jsx("td",{children:e.jsx(n,{k:"guide_layout_responsive_desktop"})})]})]})]})]})}function m(d={}){const{wrapper:i}={...s(),...d.components};return i?e.jsx(i,{...d,children:e.jsx(r,{...d})}):r(d)}export{m as default};
