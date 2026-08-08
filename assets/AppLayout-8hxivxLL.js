"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-DiXuc7DI.js";import{D as n,h as r,u as i}from"./blocks-jhaXMEKM.js";import{t as a}from"./mdx-react-shim-D1rZKK2O.js";import{n as o,t as s}from"./T-Dz91WLtt.js";import{n as c,t as l}from"./Command-1aNFZC-X.js";function u(e){let t={h1:`h1`,h2:`h2`,hr:`hr`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{title:`Guides/App Layout`}),`
`,(0,f.jsx)(t.h1,{id:``,children:(0,f.jsx)(s,{k:`guide.layout_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_desc`})}),`
`,(0,f.jsx)(`style`,{children:`
.layout-container {
  display: grid;
  grid-template-areas: "header header header" "sidebar main right" "footer footer footer";
  grid-template-rows: 60px 300px 40px;
  grid-template-columns: 200px 1fr 200px;
  gap: var(--wim-spacing-3xs);
  background: var(--wim-color-border);
  border: 1px solid var(--wim-color-border);
  color: var(--wim-color-text-secondary);
  font-size: var(--wim-font-size-sm);
  font-family: sans-serif;
  margin: var(--wim-spacing-3xl) 0;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  position: relative;
}

.layout-header { grid-area: header; background: var(--wim-color-primary-muted); display: flex; align-items: center; justify-content: center; font-weight: bold; }
.layout-sidebar { grid-area: sidebar; background: var(--wim-color-surface-variant); display: flex; align-items: center; justify-content: center; font-weight: bold; }
.layout-main { grid-area: main; background: var(--wim-color-surface); position: relative; }
.layout-page-header { position: absolute; top: 0; left: 0; right: 0; height: 40px; background: var(--wim-color-surface-variant); border-bottom: 1px dashed var(--wim-color-border); display: flex; align-items: center; justify-content: center; font-size: 12px; }
.layout-main-content { display: flex; align-items: center; justify-content: center; height: 100%; padding-top: var(--wim-spacing-5xl); font-weight: bold; }
.layout-toast { position: absolute; bottom: 10px; right: 10px; width: 120px; height: 40px; background: var(--wim-color-primary-soft); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.layout-right { grid-area: right; background: var(--wim-color-surface-variant); display: flex; align-items: center; justify-content: center; font-weight: bold; border-left: 1px solid var(--wim-color-border); }
.layout-footer { grid-area: footer; background: var(--wim-color-surface-variant); display: flex; align-items: center; justify-content: center; font-size: 12px; }

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
  .layout-sidebar { border-top: 1px solid var(--wim-color-border); }
  .layout-toast { width: 100px; height: 32px; font-size: 10px; }
}
`}),`
`,(0,f.jsxs)(`div`,{className:`layout-container`,children:[(0,f.jsx)(`div`,{className:`layout-header`,children:(0,f.jsx)(s,{k:`layout.diagram_header`})}),(0,f.jsx)(`div`,{className:`layout-sidebar`,children:(0,f.jsx)(s,{k:`layout.diagram_sidebar`})}),(0,f.jsxs)(`div`,{className:`layout-main`,children:[(0,f.jsx)(`div`,{className:`layout-page-header`,children:(0,f.jsx)(s,{k:`layout.diagram_page_header`})}),(0,f.jsx)(`div`,{className:`layout-main-content`,children:(0,f.jsx)(s,{k:`layout.diagram_main_content`})})]}),(0,f.jsx)(`div`,{className:`layout-toast`,children:(0,f.jsx)(s,{k:`layout.diagram_toast`})}),(0,f.jsx)(`div`,{className:`layout-right`,children:(0,f.jsx)(s,{k:`layout.diagram_right_panel`})}),(0,f.jsx)(`div`,{className:`layout-footer`,children:(0,f.jsx)(s,{k:`layout.diagram_footer`})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-1`,children:(0,f.jsx)(s,{k:`guide.layout_header_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_header_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_description`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_component`})})]})}),(0,f.jsx)(`tbody`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_header_content`})}),(0,f.jsxs)(`td`,{children:[(0,f.jsx)(`code`,{children:`Header`}),`, `,(0,f.jsx)(`code`,{children:`Navbar`}),`, `,(0,f.jsx)(`code`,{children:`SearchInput`}),`, `,(0,f.jsx)(`code`,{children:`Avatar`})]})]})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-2`,children:(0,f.jsx)(s,{k:`guide.layout_sidebar_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_sidebar_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_description`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_component`})})]})}),(0,f.jsx)(`tbody`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_sidebar_content`})}),(0,f.jsxs)(`td`,{children:[(0,f.jsx)(`code`,{children:`Sidebar`}),`, `,(0,f.jsx)(`code`,{children:`Menu`}),`, `,(0,f.jsx)(`code`,{children:`TreeView`}),`, `,(0,f.jsx)(`code`,{children:`Accordion`})]})]})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-3`,children:(0,f.jsx)(s,{k:`guide.layout_pageheader_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_pageheader_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsx)(`tr`,{children:(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_component`})})})}),(0,f.jsx)(`tbody`,{children:(0,f.jsx)(`tr`,{children:(0,f.jsxs)(`td`,{children:[(0,f.jsx)(`code`,{children:`Breadcrumb`}),`, `,(0,f.jsx)(`code`,{children:`Title`}),`, `,(0,f.jsx)(`code`,{children:`Button`}),` (Toolbar)`]})})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-4`,children:(0,f.jsx)(s,{k:`guide.layout_main_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_main_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsx)(`tr`,{children:(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_component`})})})}),(0,f.jsx)(`tbody`,{children:(0,f.jsx)(`tr`,{children:(0,f.jsxs)(`td`,{children:[(0,f.jsx)(`code`,{children:`Container`}),`, `,(0,f.jsx)(`code`,{children:`Grid`}),` / `,(0,f.jsx)(`code`,{children:`SimpleGrid`}),`, `,(0,f.jsx)(`code`,{children:`Card`}),`, `,(0,f.jsx)(`code`,{children:`Table`}),` / `,(0,f.jsx)(`code`,{children:`DataGrid`})]})})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-5`,children:(0,f.jsx)(s,{k:`guide.layout_rightpanel_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_rightpanel_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_description`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_component`})})]})}),(0,f.jsx)(`tbody`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_rightpanel_content`})}),(0,f.jsxs)(`td`,{children:[(0,f.jsx)(`code`,{children:`Drawer`}),`, `,(0,f.jsx)(`code`,{children:`Tabs`}),`, `,(0,f.jsx)(`code`,{children:`DescriptionList`})]})]})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-6`,children:(0,f.jsx)(s,{k:`guide.layout_footer_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_footer_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_description`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_component`})})]})}),(0,f.jsx)(`tbody`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_footer_content`})}),(0,f.jsxs)(`td`,{children:[(0,f.jsx)(`code`,{children:`Footer`}),`, `,(0,f.jsx)(`code`,{children:`Link`}),`, `,(0,f.jsx)(`code`,{children:`Divider`})]})]})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-7`,children:(0,f.jsx)(s,{k:`guide.layout_overlay_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_overlay_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsx)(`tr`,{children:(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_component`})})})}),(0,f.jsx)(`tbody`,{children:(0,f.jsx)(`tr`,{children:(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_overlay_content`})})})})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-8`,children:(0,f.jsx)(s,{k:`guide.layout_responsive_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.layout_responsive_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`applayout.device`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`applayout.breakpoint`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`applayout.behavior`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:`Mobile`})}),(0,f.jsx)(`td`,{children:`< 768px`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_responsive_mobile`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:`Tablet`})}),(0,f.jsx)(`td`,{children:`768px - 992px`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_responsive_tablet`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:`Desktop`})}),(0,f.jsx)(`td`,{children:`> 992px`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.layout_responsive_desktop`})})]})]})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-9`,children:(0,f.jsx)(s,{k:`doc.std_summary_title`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{style:{width:`30%`},children:(0,f.jsx)(s,{k:`doc.std_summary_item`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`doc.std_summary_desc`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`doc.global_standards_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`doc.global_standards_desc`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`doc.test_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(l,{children:`npm run i18n:check`})})]})]})]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),a(),c(),r(),o()}))();export{d as default};