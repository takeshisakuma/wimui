"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-splidnB2.js";import{D as n,h as r,m as i,n as a,u as o}from"./blocks-qGTaibzD.js";import{t as s}from"./mdx-react-shim-CsIlWI2E.js";import{n as c,t as l}from"./T-D8-Z5cHp.js";import{n as u,t as d}from"./Docgen-BscC-bD0.js";import{Default as f,Flat as p,Outline as m,WithHeaderAndFooter as h,n as g,t as _}from"./Card.stories-Hjz9u77Z.js";function v(e){let t={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,pre:`pre`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{of:_}),`
`,(0,b.jsx)(i,{}),`
`,(0,b.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,b.jsx)(l,{k:`doc.card_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_long_desc`})}),`
`,(0,b.jsx)(t.h2,{id:``,children:(0,b.jsx)(l,{k:`doc.design_intent_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_design_intent`})}),`
`,(0,b.jsx)(t.h2,{id:`-1`,children:(0,b.jsx)(l,{k:`doc.choice_matrix_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_choice_matrix_desc`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(l,{k:`doc.component`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(l,{k:`doc.usage_scenario`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Card`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(l,{k:`doc.card_choice_card_when`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Box`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(l,{k:`doc.card_choice_box_when`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`BentoGrid`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(l,{k:`doc.card_choice_tile_when`})})]})]})]}),`
`,(0,b.jsx)(d,{componentName:`Card`,section:`anatomy`}),`
`,(0,b.jsx)(t.h2,{id:`-2`,children:(0,b.jsx)(l,{k:`doc.a11y_spec_title`})}),`
`,(0,b.jsx)(`ul`,{children:(0,b.jsx)(`li`,{children:(0,b.jsx)(l,{k:`doc.card_a11y_spec`})})}),`
`,(0,b.jsx)(t.h2,{id:`-3`,children:(0,b.jsx)(l,{k:`doc.real_world_scenarios_title`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(l,{k:`doc.usage_scenario`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(l,{k:`doc.description`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:(0,b.jsx)(l,{k:`doc.scenario_product_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(l,{k:`doc.card_scenario_product`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:(0,b.jsx)(l,{k:`doc.scenario_profile_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(l,{k:`doc.card_scenario_profile`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:(0,b.jsx)(l,{k:`doc.scenario_status_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(l,{k:`doc.card_scenario_widget`})})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`-4`,children:(0,b.jsx)(l,{k:`doc.guidelines_title`})}),`
`,(0,b.jsxs)(`ul`,{children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(l,{k:`doc.card_guideline_1`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(l,{k:`doc.card_guideline_2`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(l,{k:`doc.card_best_practice_1`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(l,{k:`doc.card_best_practice_2`})})]}),`
`,(0,b.jsx)(t.h2,{id:`-5`,children:(0,b.jsx)(l,{k:`doc.best_practices_title`})}),`
`,(0,b.jsxs)(`ul`,{children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(l,{k:`doc.card_best_practice_1`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(l,{k:`doc.card_best_practice_2`})})]}),`
`,(0,b.jsx)(t.h2,{id:`-6`,children:(0,b.jsx)(l,{k:`doc.basic_usage`})}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { Card } from "wimui";

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>
`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_basic_usage_desc`})}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`-7`,children:(0,b.jsx)(l,{k:`doc.card_with_header_footer`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_with_header_footer_desc`})}),`
`,(0,b.jsx)(a,{of:h}),`
`,(0,b.jsx)(t.h3,{id:`-8`,children:(0,b.jsx)(l,{k:`doc.variants`})}),`
`,(0,b.jsx)(t.h4,{id:`-9`,children:(0,b.jsx)(l,{k:`doc.card_variant_outline`})}),`
`,(0,b.jsx)(a,{of:m}),`
`,(0,b.jsx)(t.h4,{id:`-10`,children:(0,b.jsx)(l,{k:`doc.card_variant_flat`})}),`
`,(0,b.jsx)(a,{of:p}),`
`,(0,b.jsx)(t.h3,{id:`-11`,children:(0,b.jsx)(l,{k:`doc.card_padding_scale_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_padding_scale_desc`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(l,{k:`doc.card_padding_scale_prop`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(l,{k:`doc.card_padding_scale_token`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(l,{k:`doc.card_padding_scale_px`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`xs`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`--wim-spacing-sm`})}),(0,b.jsx)(`td`,{children:`6.4px`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`sm`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`--wim-spacing-md`})}),(0,b.jsx)(`td`,{children:`8px`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsxs)(`td`,{children:[(0,b.jsx)(`code`,{children:`md`}),` `,(0,b.jsx)(l,{k:`doc.card_padding_scale_default`})]}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`--wim-spacing-xl`})}),(0,b.jsx)(`td`,{children:`12px`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`lg`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`--wim-spacing-2xl`})}),(0,b.jsx)(`td`,{children:`16px`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`xl`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`--wim-spacing-3xl`})}),(0,b.jsx)(`td`,{children:`22.4px`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`2xl`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`--wim-spacing-4xl`})}),(0,b.jsx)(`td`,{children:`28.8px`})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`3xl`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:`--wim-spacing-5xl`})}),(0,b.jsx)(`td`,{children:`35.2px`})]})]})]}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_padding_scale_why`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_padding_scale_gap`})}),`
`,(0,b.jsx)(d,{componentName:`Card`,section:`tokens`}),`
`,(0,b.jsx)(t.h2,{id:`-12`,children:(0,b.jsx)(l,{k:`doc.keyboard_nav_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(l,{k:`doc.card_keyboard_desc`})}),`
`,(0,b.jsx)(d,{componentName:`Card`,section:`i18n`}),`
`,(0,b.jsx)(d,{componentName:`Card`,section:`test`}),`
`,(0,b.jsx)(d,{componentName:`Card`,section:`props`}),`
`,(0,b.jsx)(t.h3,{id:`-13`,children:(0,b.jsx)(l,{k:`doc.card_header_props`})}),`
`,(0,b.jsx)(d,{componentName:`Card.Header`,section:`props`}),`
`,(0,b.jsx)(t.h3,{id:`-14`,children:(0,b.jsx)(l,{k:`doc.card_body_props`})}),`
`,(0,b.jsx)(d,{componentName:`Card.Body`,section:`props`}),`
`,(0,b.jsx)(t.h3,{id:`-15`,children:(0,b.jsx)(l,{k:`doc.card_footer_props`})}),`
`,(0,b.jsx)(d,{componentName:`Card.Footer`,section:`props`})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),s(),r(),g(),c(),u()}))();export{y as default};