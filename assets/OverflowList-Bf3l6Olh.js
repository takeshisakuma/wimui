"use client";
import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{R as n,d as r,h as i,i as a,m as o,n as s,u as c,z as l}from"./blocks-BvV4DEmd.js";import{n as u,t as d}from"./T-tuOOofAV.js";import{n as f,t as p}from"./Docgen-YBDc1S5T.js";import{a as m,i as h,n as g,r as _,t as v}from"./OverflowList.stories-CA4cbfWB.js";function y(e){let t={code:`code`,h2:`h2`,pre:`pre`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c,{of:h}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,x.jsx)(d,{k:`doc.overflowList_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(d,{k:`doc.overflowList_long_desc`})}),`
`,(0,x.jsx)(t.h2,{id:``,children:(0,x.jsx)(d,{k:`doc.design_intent_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(d,{k:`doc.overflowList_design_intent`})}),`
`,(0,x.jsx)(t.h2,{id:`-1`,children:(0,x.jsx)(d,{k:`doc.choice_matrix_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(d,{k:`doc.overflowList_choice_matrix_desc`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(d,{k:`doc.component`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(d,{k:`doc.usage_scenario`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`OverflowList`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(d,{k:`doc.overflowList_choice_self_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Group`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(d,{k:`doc.overflowList_choice_wrap_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Tabs`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(d,{k:`doc.overflowList_choice_scroll_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`AvatarGroup`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(d,{k:`doc.overflowList_choice_count_when`})})]})]})]}),`
`,(0,x.jsx)(p,{componentName:`OverflowList`,section:`anatomy`}),`
`,(0,x.jsx)(t.h2,{id:`-2`,children:(0,x.jsx)(d,{k:`doc.a11y_spec_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(d,{k:`doc.overflowList_a11y_desc`})}),`
`,(0,x.jsx)(t.h2,{id:`-3`,children:(0,x.jsx)(d,{k:`doc.real_world_scenarios_title`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(d,{k:`doc.usage_scenario`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(d,{k:`doc.table_header_description`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(d,{k:`doc.overflowList_scenario_1_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(d,{k:`doc.overflowList_scenario_1`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(d,{k:`doc.overflowList_scenario_2_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(d,{k:`doc.overflowList_scenario_2`})})]})]})]}),`
`,(0,x.jsx)(s,{of:v}),`
`,(0,x.jsx)(t.h2,{id:`-4`,children:(0,x.jsx)(d,{k:`doc.best_practices_title`})}),`
`,(0,x.jsxs)(`ul`,{children:[(0,x.jsx)(`li`,{children:(0,x.jsx)(d,{k:`doc.overflowList_best_practice_1`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(d,{k:`doc.overflowList_best_practice_2`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(d,{k:`doc.overflowList_best_practice_3`})})]}),`
`,(0,x.jsx)(s,{of:g}),`
`,(0,x.jsx)(r,{}),`
`,(0,x.jsx)(t.h2,{id:`-5`,children:(0,x.jsx)(d,{k:`doc.usage`})}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`import { OverflowList, Tag, Button, Popover, PopoverTrigger, PopoverContent, Stack, VisuallyHidden } from "wimui";

const Amenities = ({ amenities }: { amenities: string[] }) => (
  <OverflowList
    role="group"
    aria-label="Amenities"
    items={amenities}
    renderItem={(amenity) => (
      <Tag intent="neutral" variant="subtle" size="sm">
        {amenity}
      </Tag>
    )}
    renderOverflow={(hidden) => (
      <Popover placement="bottom-start">
        <PopoverTrigger asChild>
          <Button size="sm" variant="ghost">
            +{hidden.length}
            <VisuallyHidden> Show all amenities</VisuallyHidden>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Stack gap="xs" align="start">
            {hidden.map((amenity) => (
              <Tag key={amenity} intent="neutral" variant="subtle" size="sm">
                {amenity}
              </Tag>
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    )}
  />
);
`})}),`
`,(0,x.jsx)(s,{of:_}),`
`,(0,x.jsx)(a,{of:_}),`
`,(0,x.jsx)(p,{componentName:`OverflowList`,section:`props`}),`
`,(0,x.jsx)(p,{componentName:`OverflowList`,section:`tokens`}),`
`,(0,x.jsx)(t.h2,{id:`-6`,children:(0,x.jsx)(d,{k:`doc.keyboard_nav_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(d,{k:`doc.overflowList_keyboard_desc`})}),`
`,(0,x.jsx)(t.h2,{id:`-7`,children:(0,x.jsx)(d,{k:`doc.i18n_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(d,{k:`doc.overflowList_i18n_desc`})}),`
`,(0,x.jsx)(p,{componentName:`OverflowList`,section:`test`})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=t(),n(),i(),m(),u(),f()})))()}S();export{b as default};