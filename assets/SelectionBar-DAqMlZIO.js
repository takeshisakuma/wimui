"use client";
import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{R as n,d as r,h as i,i as a,m as o,n as s,u as c,z as l}from"./blocks-BvV4DEmd.js";import{n as u,t as d}from"./T-tuOOofAV.js";import{n as f,t as p}from"./Docgen-YBDc1S5T.js";import{i as m,n as h,r as g,t as _}from"./SelectionBar.stories-n0gXtXeu.js";function v(e){let t={code:`code`,h2:`h2`,pre:`pre`,...l(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{of:h}),`
`,(0,b.jsx)(o,{}),`
`,(0,b.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,b.jsx)(d,{k:`doc.selectionBar_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_long_desc`})}),`
`,(0,b.jsx)(s,{of:g}),`
`,(0,b.jsx)(t.h2,{id:``,children:(0,b.jsx)(d,{k:`doc.design_intent_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_design_intent`})}),`
`,(0,b.jsx)(t.h2,{id:`-1`,children:(0,b.jsx)(d,{k:`doc.choice_matrix_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_choice_matrix_desc`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(d,{k:`doc.component`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(d,{k:`doc.usage_scenario`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`SelectionBar`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_choice_self_when`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`DataGrid`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_choice_footer_when`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`b`,{children:`Toolbar`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_choice_toolbar_when`})})]})]})]}),`
`,(0,b.jsx)(p,{componentName:`SelectionBar`,section:`anatomy`}),`
`,(0,b.jsx)(t.h2,{id:`-2`,children:(0,b.jsx)(d,{k:`doc.a11y_spec_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_a11y_desc`})}),`
`,(0,b.jsx)(t.h2,{id:`-3`,children:(0,b.jsx)(d,{k:`doc.real_world_scenarios_title`})}),`
`,(0,b.jsxs)(`table`,{children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:(0,b.jsx)(d,{k:`doc.usage_scenario`})}),(0,b.jsx)(`th`,{children:(0,b.jsx)(d,{k:`doc.table_header_description`})})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_scenario_1_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_scenario_1`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_scenario_2_title`})})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_scenario_2`})})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`-4`,children:(0,b.jsx)(d,{k:`doc.best_practices_title`})}),`
`,(0,b.jsxs)(`ul`,{children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_best_practice_1`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_best_practice_2`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_best_practice_3`})})]}),`
`,(0,b.jsx)(r,{}),`
`,(0,b.jsx)(t.h2,{id:`-5`,children:(0,b.jsx)(d,{k:`doc.usage`})}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react";
import { SelectionBar, DataGrid, Button, Stack, type DataGridColumn } from "wimui";

type Order = { id: string; customer: string; total: string };

const Orders = ({ orders, columns }: { orders: Order[]; columns: DataGridColumn<Order>[] }) => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <Stack gap="xs">
      <SelectionBar count={selected.length} onClear={() => setSelected([])}>
        <Button variant="outline" size="sm">Print shipping labels</Button>
        <Button variant="outline" size="sm">Mark as shipped</Button>
      </SelectionBar>
      <DataGrid
        columns={columns}
        data={orders}
        rowKey="id"
        selection
        selectedRowKeys={selected}
        onSelectionChange={(keys) => setSelected(keys)}
      />
    </Stack>
  );
};
`})}),`
`,(0,b.jsx)(a,{of:_}),`
`,(0,b.jsx)(p,{componentName:`SelectionBar`,section:`props`}),`
`,(0,b.jsx)(p,{componentName:`SelectionBar`,section:`tokens`}),`
`,(0,b.jsx)(t.h2,{id:`-6`,children:(0,b.jsx)(d,{k:`doc.keyboard_nav_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_keyboard_desc`})}),`
`,(0,b.jsx)(t.h2,{id:`-7`,children:(0,b.jsx)(d,{k:`doc.i18n_title`})}),`
`,(0,b.jsx)(`p`,{children:(0,b.jsx)(d,{k:`doc.selectionBar_i18n_desc`})}),`
`,(0,b.jsx)(p,{componentName:`SelectionBar`,section:`test`})]})}function y(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),n(),i(),m(),u(),f()})))()}x();export{y as default};