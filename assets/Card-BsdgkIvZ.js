"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{ur as t}from"./iframe-wf1-Tomv.js";import{D as n,h as r,m as i,n as a,u as o}from"./blocks-Dkmn3D-m.js";import{t as s}from"./mdx-react-shim-D7Agmf_c.js";import{n as c,t as l}from"./T-VRhlXsGl.js";import{n as u,t as d}from"./Docgen-BHoDjU-4.js";import{Default as f,Elevated as p,Flat as m,Outline as h,WithHeaderAndFooter as g,n as _,t as v}from"./Card.stories-UCe2JSlk.js";function y(e){let t={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,pre:`pre`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{of:v}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,x.jsx)(l,{k:`doc.card_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_long_desc`})}),`
`,(0,x.jsx)(t.h2,{id:``,children:(0,x.jsx)(l,{k:`doc.design_intent_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_design_intent`})}),`
`,(0,x.jsx)(t.h2,{id:`-1`,children:(0,x.jsx)(l,{k:`doc.choice_matrix_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_choice_matrix_desc`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(l,{k:`doc.component`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(l,{k:`doc.usage_scenario`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Card`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(l,{k:`doc.card_choice_card_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Box`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(l,{k:`doc.card_choice_box_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`BentoGrid`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(l,{k:`doc.card_choice_tile_when`})})]})]})]}),`
`,(0,x.jsx)(d,{componentName:`Card`,section:`anatomy`}),`
`,(0,x.jsx)(t.h2,{id:`-2`,children:(0,x.jsx)(l,{k:`doc.a11y_spec_title`})}),`
`,(0,x.jsx)(`ul`,{children:(0,x.jsx)(`li`,{children:(0,x.jsx)(l,{k:`doc.card_a11y_spec`})})}),`
`,(0,x.jsx)(t.h2,{id:`-3`,children:(0,x.jsx)(l,{k:`doc.real_world_scenarios_title`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(l,{k:`doc.usage_scenario`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(l,{k:`doc.description`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:(0,x.jsx)(l,{k:`doc.scenario_product_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(l,{k:`doc.card_scenario_product`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:(0,x.jsx)(l,{k:`doc.scenario_profile_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(l,{k:`doc.card_scenario_profile`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:(0,x.jsx)(l,{k:`doc.scenario_status_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(l,{k:`doc.card_scenario_widget`})})]})]})]}),`
`,(0,x.jsx)(t.h2,{id:`-4`,children:(0,x.jsx)(l,{k:`doc.guidelines_title`})}),`
`,(0,x.jsxs)(`ul`,{children:[(0,x.jsx)(`li`,{children:(0,x.jsx)(l,{k:`doc.card_guideline_1`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(l,{k:`doc.card_guideline_2`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(l,{k:`doc.card_best_practice_1`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(l,{k:`doc.card_best_practice_2`})})]}),`
`,(0,x.jsx)(t.h2,{id:`-5`,children:(0,x.jsx)(l,{k:`doc.best_practices_title`})}),`
`,(0,x.jsxs)(`ul`,{children:[(0,x.jsx)(`li`,{children:(0,x.jsx)(l,{k:`doc.card_best_practice_1`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(l,{k:`doc.card_best_practice_2`})})]}),`
`,(0,x.jsx)(t.h2,{id:`-6`,children:(0,x.jsx)(l,{k:`doc.basic_usage`})}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`import { Card } from "wimui";

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>
`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_basic_usage_desc`})}),`
`,(0,x.jsx)(a,{of:f}),`
`,(0,x.jsx)(t.h3,{id:`-7`,children:(0,x.jsx)(l,{k:`doc.card_with_header_footer`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_with_header_footer_desc`})}),`
`,(0,x.jsx)(a,{of:g}),`
`,(0,x.jsx)(t.h3,{id:`-8`,children:(0,x.jsx)(l,{k:`doc.variants`})}),`
`,(0,x.jsx)(t.h4,{id:`-9`,children:(0,x.jsx)(l,{k:`doc.card_variant_elevated`})}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(t.h4,{id:`-10`,children:(0,x.jsx)(l,{k:`doc.card_variant_outline`})}),`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsx)(t.h4,{id:`-11`,children:(0,x.jsx)(l,{k:`doc.card_variant_flat`})}),`
`,(0,x.jsx)(a,{of:m}),`
`,(0,x.jsx)(t.h3,{id:`-12`,children:(0,x.jsx)(l,{k:`doc.card_padding_scale_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_padding_scale_desc`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(l,{k:`doc.card_padding_scale_prop`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(l,{k:`doc.card_padding_scale_token`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(l,{k:`doc.card_padding_scale_px`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`xs`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`--wim-spacing-sm`})}),(0,x.jsx)(`td`,{children:`6.4px`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`sm`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`--wim-spacing-md`})}),(0,x.jsx)(`td`,{children:`8px`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsxs)(`td`,{children:[(0,x.jsx)(`code`,{children:`md`}),` `,(0,x.jsx)(l,{k:`doc.card_padding_scale_default`})]}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`--wim-spacing-xl`})}),(0,x.jsx)(`td`,{children:`12px`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`lg`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`--wim-spacing-2xl`})}),(0,x.jsx)(`td`,{children:`16px`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`xl`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`--wim-spacing-3xl`})}),(0,x.jsx)(`td`,{children:`22.4px`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`2xl`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`--wim-spacing-4xl`})}),(0,x.jsx)(`td`,{children:`28.8px`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`3xl`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`code`,{children:`--wim-spacing-5xl`})}),(0,x.jsx)(`td`,{children:`35.2px`})]})]})]}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_padding_scale_why`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_padding_scale_gap`})}),`
`,(0,x.jsx)(d,{componentName:`Card`,section:`tokens`}),`
`,(0,x.jsx)(t.h2,{id:`-13`,children:(0,x.jsx)(l,{k:`doc.keyboard_nav_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(l,{k:`doc.card_keyboard_desc`})}),`
`,(0,x.jsx)(d,{componentName:`Card`,section:`i18n`}),`
`,(0,x.jsx)(d,{componentName:`Card`,section:`test`}),`
`,(0,x.jsx)(d,{componentName:`Card`,section:`props`}),`
`,(0,x.jsx)(t.h3,{id:`-14`,children:(0,x.jsx)(l,{k:`doc.card_header_props`})}),`
`,(0,x.jsx)(d,{componentName:`Card.Header`,section:`props`}),`
`,(0,x.jsx)(t.h3,{id:`-15`,children:(0,x.jsx)(l,{k:`doc.card_body_props`})}),`
`,(0,x.jsx)(d,{componentName:`Card.Body`,section:`props`}),`
`,(0,x.jsx)(t.h3,{id:`-16`,children:(0,x.jsx)(l,{k:`doc.card_footer_props`})}),`
`,(0,x.jsx)(d,{componentName:`Card.Footer`,section:`props`})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),s(),r(),_(),c(),u()}))();export{b as default};