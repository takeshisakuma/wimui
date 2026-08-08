"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-DiXuc7DI.js";import{D as n,d as r,h as i,m as a,n as o,u as s}from"./blocks-jhaXMEKM.js";import{t as c}from"./mdx-react-shim-D1rZKK2O.js";import{n as l,t as u}from"./T-Dz91WLtt.js";import{n as d,t as f}from"./Docgen-BeElYI3e.js";import{OnImage as p,WithDisabledItems as m,WithGroups as h,WithIcons as g,n as _,t as v}from"./ContextMenu.stories-C5FR2AzJ.js";function y(e){let t={code:`code`,h2:`h2`,h3:`h3`,pre:`pre`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{of:v}),`
`,(0,x.jsx)(a,{}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_long_desc_1`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_note`})}),`
`,(0,x.jsx)(t.h2,{id:``,children:(0,x.jsx)(u,{k:`doc.design_intent_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_design_intent`})}),`
`,(0,x.jsx)(t.h2,{id:`-1`,children:(0,x.jsx)(u,{k:`doc.choice_matrix_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_choice_matrix_desc`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.component`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.usage_scenario`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`ContextMenu`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_choice_self_when`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`b`,{children:`Dropdown`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_choice_alt_when`})})]})]})]}),`
`,(0,x.jsx)(f,{componentName:`ContextMenu`,section:`anatomy`}),`
`,(0,x.jsx)(t.h2,{id:`-2`,children:(0,x.jsx)(u,{k:`doc.a11y_spec_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_a11y_desc`})}),`
`,(0,x.jsx)(t.h2,{id:`-3`,children:(0,x.jsx)(u,{k:`doc.real_world_scenarios_title`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.usage_scenario`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.table_header_description`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(u,{k:`doc.scenario_files_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_scenario_1`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(u,{k:`doc.scenario_admin_title`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_scenario_2`})})]})]})]}),`
`,(0,x.jsx)(t.h2,{id:`-4`,children:(0,x.jsx)(u,{k:`doc.best_practices_title`})}),`
`,(0,x.jsxs)(`ul`,{children:[(0,x.jsx)(`li`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_best_practice_1`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_best_practice_2`})}),(0,x.jsx)(`li`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_best_practice_3`})})]}),`
`,(0,x.jsx)(t.h2,{id:`-5`,children:(0,x.jsx)(u,{k:`doc.usage`})}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`import { ContextMenu, ContextMenuItem, ContextMenuDivider } from "wimui";

<ContextMenu
  menu={
    <>
      <ContextMenuItem onClick={handleEdit}>Edit</ContextMenuItem>
      <ContextMenuItem onClick={handleCopy}>Copy</ContextMenuItem>
      <ContextMenuDivider />
      <ContextMenuItem danger onClick={handleDelete}>
        Delete
      </ContextMenuItem>
    </>
  }
>
  <div>Right-click this element</div>
</ContextMenu>;
`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_table_row_usage`})}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`<Table.Body>
  {rows.map((row) => (
    <ContextMenu key={row.id} asChild menu={<ContextMenuItem>History</ContextMenuItem>}>
      <Table.Row>
        <Table.Cell>{row.tc}</Table.Cell>
      </Table.Row>
    </ContextMenu>
  ))}
</Table.Body>
`})}),`
`,(0,x.jsx)(r,{}),`
`,(0,x.jsx)(f,{componentName:`ContextMenu`,section:`props`}),`
`,(0,x.jsx)(t.h2,{id:`-6`,children:(0,x.jsx)(u,{k:`doc.examples`})}),`
`,(0,x.jsx)(t.h3,{id:`-7`,children:(0,x.jsx)(u,{k:`doc.contextmenu_story_1`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_story_1_desc`})}),`
`,(0,x.jsx)(o,{of:g}),`
`,(0,x.jsx)(t.h3,{id:`-8`,children:(0,x.jsx)(u,{k:`doc.contextmenu_story_2`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_story_2_desc`})}),`
`,(0,x.jsx)(o,{of:h}),`
`,(0,x.jsx)(t.h3,{id:`-9`,children:(0,x.jsx)(u,{k:`doc.contextmenu_story_3`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_story_3_desc`})}),`
`,(0,x.jsx)(o,{of:m}),`
`,(0,x.jsx)(t.h3,{id:`-10`,children:(0,x.jsx)(u,{k:`doc.contextmenu_story_4`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_story_4_desc`})}),`
`,(0,x.jsx)(o,{of:p}),`
`,(0,x.jsx)(t.h2,{id:`-11`,children:(0,x.jsx)(u,{k:`doc.features`})}),`
`,(0,x.jsxs)(`table`,{children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.features`})}),(0,x.jsx)(`th`,{children:(0,x.jsx)(u,{k:`doc.description`})})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_1`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_1_desc`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_2`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_2_desc`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_3`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_3_desc`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(`strong`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_4`})})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_feat_4_desc`})})]})]})]}),`
`,(0,x.jsx)(t.h2,{id:`-12`,children:(0,x.jsx)(u,{k:`doc.accessibility`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_a11y_1`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_a11y_2`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_a11y_3`})}),`
`,(0,x.jsx)(f,{componentName:`ContextMenu`,section:`tokens`}),`
`,(0,x.jsx)(t.h2,{id:`-13`,children:(0,x.jsx)(u,{k:`doc.keyboard_nav_title`})}),`
`,(0,x.jsx)(`p`,{children:(0,x.jsx)(u,{k:`doc.contextmenu_keyboard_desc`})}),`
`,(0,x.jsx)(f,{componentName:`ContextMenu`,section:`i18n`}),`
`,(0,x.jsx)(f,{componentName:`ContextMenu`,section:`test`})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),c(),i(),_(),l(),d()}))();export{b as default};