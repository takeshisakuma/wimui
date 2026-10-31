"use client";
import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{R as n,d as r,h as i,m as a,n as o,u as s,z as c}from"./blocks-DbHzBHGq.js";import{n as l,t as u}from"./T-kq1SWS19.js";import{n as d,t as f}from"./Docgen-B81m9h0K.js";import{a as p,i as m,n as h,r as g,t as _}from"./Sidebar.stories-WHDFX1PZ.js";function v(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,pre:`pre`,...c(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{of:m}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,b.jsx)(u,{k:`doc.sidebar_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.sidebar_long_desc`})}),`
`,(0,b.jsxs)(t.blockquote,{children:[`
`,(0,b.jsx)(u,{k:`doc.sidebar_pc_only`}),`
`]}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.app_layout_guide_link`})}),`
`,(0,b.jsx)(f,{componentName:`Sidebar`,section:`import`}),`
`,(0,b.jsx)(t.h2,{id:``,children:(0,b.jsx)(u,{k:`doc.basic_usage`})}),`
`,(0,b.jsx)(u,{k:`doc.sidebar_usage_desc`}),`
`,(0,b.jsx)(o,{of:g}),`
`,(0,b.jsx)(t.h2,{id:`-1`,children:(0,b.jsx)(u,{k:`doc.design_intent_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.sidebar_design_intent`})}),`
`,(0,b.jsx)(t.h2,{id:`-2`,children:(0,b.jsx)(u,{k:`doc.choice_matrix_title`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.component`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.usage_scenario`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Sidebar`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.sidebar_choice_self_when`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Navbar`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.sidebar_choice_alt_when`})})]})]})]}),`
`,(0,b.jsx)(f,{componentName:`Sidebar`,section:`anatomy`}),`
`,(0,b.jsx)(t.h2,{id:`-3`,children:(0,b.jsx)(u,{k:`doc.a11y_spec_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.sidebar_a11y_desc`})}),`
`,(0,b.jsx)(t.h2,{id:`-4`,children:(0,b.jsx)(u,{k:`doc.real_world_scenarios_title`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.usage_scenario`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(u,{k:`doc.table_header_description`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:(0,b.jsx)(u,{k:`doc.scenario_nav_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.sidebar_scenario_1`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:(0,b.jsx)(u,{k:`doc.scenario_admin_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(u,{k:`doc.sidebar_scenario_2`})})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`-5`,children:(0,b.jsx)(u,{k:`doc.best_practices_title`})}),`
`,(0,b.jsxs)(`ul`,{children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(u,{k:`doc.sidebar_best_practice_1`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(u,{k:`doc.sidebar_best_practice_2`})})]}),`
`,(0,b.jsx)(r,{}),`
`,(0,b.jsx)(t.h2,{id:`-6`,children:(0,b.jsx)(u,{k:`doc.sidebar_collapsed`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.sidebar_collapsed_desc`})}),`
`,(0,b.jsx)(o,{of:_}),`
`,(0,b.jsx)(t.h2,{id:`-7`,children:(0,b.jsx)(u,{k:`doc.sidebar_custom_width`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.sidebar_custom_width_desc`})}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`-8`,children:(0,b.jsx)(u,{k:`doc.sidebar_mobile_drawer`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.sidebar_mobile_drawer_desc`})}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`const [mobileOpen, setMobileOpen] = useState(false);

<>
  {/* In your Header — visible only at or below the md breakpoint */}
  <HamburgerMenu
    visibleBelow="md"
    open={mobileOpen}
    onOpenChange={setMobileOpen}
  />

  <Sidebar
    mobileOpen={mobileOpen}
    onOverlayClick={() => setMobileOpen(false)}
  >
    <Sidebar.Content>{/* Sidebar items */}</Sidebar.Content>
  </Sidebar>
</>
`})}),`
`,(0,b.jsx)(f,{componentName:`Sidebar`,section:`props`}),`
`,(0,b.jsx)(f,{componentName:`Sidebar`,section:`tokens`}),`
`,(0,b.jsx)(t.h2,{id:`-9`,children:(0,b.jsx)(u,{k:`doc.keyboard_nav_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(u,{k:`doc.sidebar_keyboard_desc`})}),`
`,(0,b.jsx)(f,{componentName:`Sidebar`,section:`i18n`}),`
`,(0,b.jsx)(f,{componentName:`Sidebar`,section:`test`})]})}function y(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),n(),i(),p(),l(),d()})))()}x();export{y as default};