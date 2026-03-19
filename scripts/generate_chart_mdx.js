import fs from 'fs';
import path from 'path';

const charts = [
  'AreaChart', 'FunnelChart', 'GaugeChart', 'Heatmap', 
  'LineChart', 'PieChart', 'RadarChart', 'ScatterChart', 'Treemap'
];

const storiesBase = 'c:\\Users\\facto\\Desktop\\github\\wimui\\stories';

for (const chart of charts) {
  const storyDir = path.join(storiesBase, chart);
  if (!fs.existsSync(storyDir)) {
    fs.mkdirSync(storyDir, { recursive: true });
  }

  const mdxPath = path.join(storyDir, `${chart}.mdx`);
  const prefix = `doc_${chart.toLowerCase()}`;
  
  const content = `import {
  Canvas,
  Meta,
  Controls,
  Title,
  Primary,
  Stories,
} from "@storybook/addon-docs/blocks";
import * as ${chart}Stories from "./${chart}.stories";
import { T } from "../T";

<Meta of={${chart}Stories} />

<Title />
<p
  style={{
    margin: "0 0 16px 0",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#6c757d",
  }}
>
  <T k="${prefix}_desc" />
</p>

<p><T k="${prefix}_long_desc" /></p>


## <T k="doc_design_intent_title" />
<p><T k="${prefix}_design_intent" /></p>

## <T k="doc_choice_matrix_title" />
<p><T k="${prefix}_choice_matrix_desc" /></p>
<table>
  <thead>
    <tr>
      <th><T k="doc_component" /></th>
      <th><T k="doc_usage_scenario" /></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>${chart}</b></td>
      <td><T k="${prefix}_choice_self_when" /></td>
    </tr>
    <tr>
      <td><b>Table</b></td>
      <td><T k="${prefix}_choice_alt_when" /></td>
    </tr>
  </tbody>
</table>

## <T k="doc_anatomy_title" />
<table>
  <thead>
    <tr>
      <th><T k="doc_component" /></th>
      <th><T k="doc_description" /></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b><T k="${prefix}_anatomy_root_label" /></b></td>
      <td><T k="${prefix}_anatomy_root" /></td>
    </tr>
    <tr>
      <td><b><T k="${prefix}_anatomy_content_label" /></b></td>
      <td><T k="${prefix}_anatomy_content" /></td>
    </tr>
  </tbody>
</table>

## <T k="doc_content_guidelines_title" />
<ul>
  <li><T k="${prefix}_content_guideline" /></li>
</ul>

## <T k="doc_motion_spec_title" />
<p><T k="${prefix}_motion_desc" /></p>

## <T k="doc_a11y_spec_title" />
<p><T k="${prefix}_a11y_desc" /></p>

## <T k="doc_real_world_scenarios_title" />
<ul>
  <li>
    <strong><T k="doc_scenario_dashboard_title" />:</strong> <T k="${prefix}_scenario_1" />
  </li>
  <li>
    <strong><T k="doc_scenario_stats_title" />:</strong> <T k="${prefix}_scenario_2" />
  </li>
</ul>

## <T k="doc_best_practices_title" />
<ul>
  <li><T k="${prefix}_best_practice_1" /></li>
  <li><T k="${prefix}_best_practice_2" /></li>
</ul>

<Primary />

## Props

<Controls />

<Stories />
`;

  fs.writeFileSync(mdxPath, content);
}

console.log('MDX files generated.');
