/**
 * Fix hardcoded text in docs/*.mdx files.
 * Run: node scripts/fix-hardcoded-docs.cjs
 */
const fs = require("fs");
const path = require("path");

const docsDir = path.join(__dirname, "..", "docs");

function fix(filePath, replacements) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Updated:", path.basename(filePath));
  }
}

// ─── Hierarchy.mdx ────────────────────────────────────────────────────────────
fix(path.join(docsDir, "Hierarchy.mdx"), [
  // th headers
  ['      <th>Tier</th>', '      <th><T k="table.header_tier" /></th>'],
  ['      <th>Composition (Uses internally)</th>', '      <th><T k="guide.composition_uses_internally" /></th>'],

  // Tier N labels in the tiers table (first table)
  ['<td><strong>Tier 1</strong><br/>Foundations (<T k="cat.utilities" />)</td>',
   '<td><strong><T k="guide.tier1_label" /></strong><br/><T k="guide.tier_foundations" /> (<T k="cat.utilities" />)</td>'],
  ['<td><strong>Tier 2</strong><br/>Atoms (<T k="cat.basic_inputs" />)</td>',
   '<td><strong><T k="guide.tier2_label" /></strong><br/><T k="guide.tier_atoms" /> (<T k="cat.basic_inputs" />)</td>'],
  ['<td><strong>Tier 3</strong><br/>Molecules (<T k="cat.overlays" />)</td>',
   '<td><strong><T k="guide.tier3_label" /></strong><br/><T k="guide.tier_molecules" /> (<T k="cat.overlays" />)</td>'],
  ['<td><strong>Tier 4</strong><br/>Organisms (<T k="cat.app_shell" />)</td>',
   '<td><strong><T k="guide.tier4_label" /></strong><br/><T k="guide.tier_organisms" /> (<T k="cat.app_shell" />)</td>'],

  // Tier N in composition map (second table)
  ['<td><strong>Tier 4</strong></td>', '<td><strong><T k="guide.tier4_label" /></strong></td>'],
  ['<td><strong>Tier 3</strong></td>', '<td><strong><T k="guide.tier3_label" /></strong></td>'],
  ['<td><strong>Tier 2</strong></td>', '<td><strong><T k="guide.tier2_label" /></strong></td>'],

  // Internal annotations
  ['(Internal: *OverlayBase*)', '(<T k="guide.tier_internal_label" />: *OverlayBase*)'],
  ['(Internal: *BaseListItem*)', '(<T k="guide.tier_internal_label" />: *BaseListItem*)'],
  ['(Internal: *InputBase*, *FieldTemplate*, *BaseListItem*)', '(<T k="guide.tier_internal_label" />: *InputBase*, *FieldTemplate*, *BaseListItem*)'],
  ['(Internal: *FieldTemplate*, *BaseListItem*)', '(<T k="guide.tier_internal_label" />: *FieldTemplate*, *BaseListItem*)'],
  ['(Internal: *FieldTemplate*)', '(<T k="guide.tier_internal_label" />: *FieldTemplate*)'],
  ['(Internal: *StatusContent*)', '(<T k="guide.tier_internal_label" />: *StatusContent*)'],
  ['(Internal: *IndicatorBase*)', '(<T k="guide.tier_internal_label" />: *IndicatorBase*)'],

  // &nbsp; separator — keep as-is (non-text)
]);

// ─── ButtonSelection.mdx ──────────────────────────────────────────────────────
fix(path.join(docsDir, "ButtonSelection.mdx"), [
  ['<p>Refer to specific component pages for detail.</p>',
   '<p><T k="guide.refer_to_component_pages" /></p>'],
]);

// ─── Colors.mdx ───────────────────────────────────────────────────────────────
fix(path.join(docsDir, "Colors.mdx"), [
  ['<h2>Special Styles (Ghost, Glass, Skeleton)</h2>',
   '<h2><T k="guide.colors_special_styles_title" /></h2>'],
  ['  Used for specialized visual effects such as semi-transparency and placeholder states.\n',
   '  <T k="guide.colors_special_styles_desc" />\n'],
  ['<h2>Interaction & Overlays</h2>',
   '<h2><T k="guide.colors_interaction_title" /></h2>'],
  ['  Colors for interactive states and overlay elements.\n',
   '  <T k="guide.colors_interaction_desc" />\n'],
  ['<h2>Component Specific</h2>',
   '<h2><T k="guide.colors_component_specific_title" /></h2>'],
  ['  Predefined colors for avatars, chat bubbles, and other UI elements.\n',
   '  <T k="guide.colors_component_specific_desc" />\n'],
]);

// ─── icons.mdx ────────────────────────────────────────────────────────────────
fix(path.join(docsDir, "icons.mdx"), [
  ['# Icons\n', '# <T k="icons.page_title" />\n'],
]);

// ─── LinkVsButton.mdx ─────────────────────────────────────────────────────────
fix(path.join(docsDir, "LinkVsButton.mdx"), [
  ['### Keyboard & Screen Readers',
   '### <T k="guide.lvb_keyboard_screen_readers" />'],
]);

// ─── InternalArchitecture.mdx ─────────────────────────────────────────────────
fix(path.join(docsDir, "InternalArchitecture.mdx"), [
  ['      <th>Component</th>', '      <th><T k="doc.std_column_component" /></th>'],
  ['      <th>Role</th>', '      <th><T k="table.header_role" /></th>'],
]);

// ─── LayoutSelection.mdx ──────────────────────────────────────────────────────
fix(path.join(docsDir, "LayoutSelection.mdx"), [
  ['      <td>Flexbox</td>', '      <td><T k="layout.flexbox" /></td>'],
  ['      <td>CSS Grid</td>', '      <td><T k="layout.css_grid" /></td>'],
  ['      <td>CSS</td>', '      <td><T k="layout.css" /></td>'],
]);

// ─── SelectionSelection.mdx ───────────────────────────────────────────────────
fix(path.join(docsDir, "SelectionSelection.mdx"), [
  ['### SegmentedControl vs Button Group (joined)',
   '### <T k="selection.seg_vs_btn_group_title" />'],
  ['### SegmentedControl vs Dropdown',
   '### <T k="selection.seg_vs_dropdown_title" />'],
  ['### SegmentedControl vs Tabs',
   '### <T k="selection.seg_vs_tabs_title" />'],
  ['      <th>SegmentedControl</th>', '      <th><T k="selection.segmented_control_label" /></th>'],
  ['        <strong>Button Group (joined)</strong>', '        <strong><T k="selection.btn_group_joined_label" /></strong>'],
]);

// ─── SelectionGroupStandardization.mdx ───────────────────────────────────────
fix(path.join(docsDir, "SelectionGroupStandardization.mdx"), [
  ['      <th style={{ textAlign: \'center\' }}>Selection Mode</th>',
   '      <th style={{ textAlign: \'center\' }}><T k="guide.std_header_selection_mode" /></th>'],
  ['      <th style={{ textAlign: \'center\' }}>Default Role</th>',
   '      <th style={{ textAlign: \'center\' }}><T k="guide.std_header_default_role" /></th>'],
  ['>Single<', '><T k="guide.std_value_single" /><'],
  ['>Single / Multiple<', '><T k="guide.std_value_single_or_multiple" /><'],
]);

// ─── RangeSelectionStandardization.mdx ───────────────────────────────────────
fix(path.join(docsDir, "RangeSelectionStandardization.mdx"), [
  ['      <th style={{ textAlign: \'center\' }}>Value Type</th>',
   '      <th style={{ textAlign: \'center\' }}><T k="guide.std_header_value_type" /></th>'],
  ['      <th style={{ textAlign: \'center\' }}>Range Support</th>',
   '      <th style={{ textAlign: \'center\' }}><T k="guide.std_header_range_support" /></th>'],
  ['>Number</', '><T k="guide.std_value_number" /></'],
  ['>Number[]</', '><T k="guide.std_value_number_array" /></'],
  ['>Date</', '><T k="guide.std_value_date" /></'],
  ['>Date[]</', '><T k="guide.std_value_date_array" /></'],
]);

// ─── QASummary.mdx ────────────────────────────────────────────────────────────
fix(path.join(docsDir, "QASummary.mdx"), [
  ['      <th>Tool</th>', '      <th><T k="qa.table_tool_header" /></th>'],
  ['      <th>Description</th>', '      <th><T k="table.header_description" /></th>'],
  ['      <th>Feature</th>', '      <th><T k="qa.table_feature_header" /></th>'],
  ['      <th>Detail</th>', '      <th><T k="qa.table_detail_header" /></th>'],
]);

// ─── NumericInputStandardization.mdx ─────────────────────────────────────────
fix(path.join(docsDir, "NumericInputStandardization.mdx"), [
  ['      <td><b>Safari (Desktop/iOS)</b></td>',
   '      <td><b><T k="guide.numeric_std_browser_safari" /></b></td>'],
  ['      <td><b>Chrome / Firefox</b></td>',
   '      <td><b><T k="guide.numeric_std_browser_chrome_firefox" /></b></td>'],
]);

// ─── DataDisplayStandardization.mdx ──────────────────────────────────────────
fix(path.join(docsDir, "DataDisplayStandardization.mdx"), [
  ['>Label/Value pairs<', '><T k="guide.display_std_label_value_pairs" /><'],
  ['>Items<', '><T k="guide.display_std_items" /><'],
  ['>Often in Card<', '><T k="guide.display_std_often_in_card" /><'],
  ['>Value/Label/Trend<', '><T k="guide.display_std_value_label_trend" /><'],
]);

// ─── FormUI.mdx ───────────────────────────────────────────────────────────────
fix(path.join(docsDir, "FormUI.mdx"), [
  ['        (Call To Action)', '        <T k="formui.call_to_action_annotation" />'],
]);

// ─── DataStructureSelection.mdx ───────────────────────────────────────────────
fix(path.join(docsDir, "DataStructureSelection.mdx"), [
  ['        (Row/Column)', '        <T k="datastructure.row_column_annotation" />'],
]);

// ─── VisualizationSelection.mdx ───────────────────────────────────────────────
fix(path.join(docsDir, "VisualizationSelection.mdx"), [
  ['        (Comparison & Trend)', '        (<T k="viz.comparison_trend_annotation" />)'],
  ['      Line Chart', '      <T k="viz.line_chart" />'],
  ['      Bar Chart', '      <T k="viz.bar_chart" />'],
  ['        (Proportions)', '        (<T k="viz.proportions_annotation" />)'],
  ['      Pie Chart', '      <T k="viz.pie_chart" />'],
  ['        (Correlation & Distribution)', '        (<T k="viz.correlation_annotation" />)'],
]);

// ─── UtilitySelection.mdx ─────────────────────────────────────────────────────
fix(path.join(docsDir, "UtilitySelection.mdx"), [
  ['        <strong>Focus Trap</strong>', '        <strong><T k="util.focus_trap_label" /></strong>'],
  ['        <strong>Error Boundary</strong>', '        <strong><T k="util.error_boundary_label" /></strong>'],
  ['        <strong>Visually Hidden</strong>', '        <strong><T k="util.visually_hidden_label" /></strong>'],
  ['        <strong>Scroll Area</strong>', '        <strong><T k="util.scroll_area_label" /></strong>'],
  ['        <strong>Infinite Scroll</strong>', '        <strong><T k="util.infinite_scroll_label" /></strong>'],
]);

// ─── UnitSelection.mdx ────────────────────────────────────────────────────────
fix(path.join(docsDir, "UnitSelection.mdx"), [
  ['      <td><strong>rem</strong></td>', '      <td><strong><T k="unit.rem_label" /></strong></td>'],
]);

// ─── StylingStandardization.mdx ───────────────────────────────────────────────
fix(path.join(docsDir, "StylingStandardization.mdx"), [
  ['## Implementation Example', '## <T k="doc.implementation_example" />'],
]);

// ─── Spacings.mdx ─────────────────────────────────────────────────────────────
fix(path.join(docsDir, "Spacings.mdx"), [
  ['<h2>\n  <p>Border Width</p>\n</h2>', '<h2>\n  <p><T k="guide.spacings_border_width_title" /></p>\n</h2>'],
  ['        <th>Name</th>', '        <th><T k="guide.spacings_header_name" /></th>'],
  ['        <th>Value</th>', '        <th><T k="guide.spacings_header_value" /></th>'],
  ['        <th>Token</th>', '        <th><T k="guide.spacings_header_token" /></th>'],
  ['        <td><strong>Thin</strong></td>', '        <td><strong><T k="guide.spacings_thin" /></strong></td>'],
  ['        <td><strong>Thick</strong></td>', '        <td><strong><T k="guide.spacings_thick" /></strong></td>'],
]);

// ─── LoadingSelection.mdx ─────────────────────────────────────────────────────
fix(path.join(docsDir, "LoadingSelection.mdx"), [
  ['>Progress Indicator Standardization<', '><T k="guide.std_doc_progress_indicator" /><'],
]);

console.log("Done.");
