const fs = require('fs');

let content = fs.readFileSync('stories/DataGrid/DataGrid.stories.tsx', 'utf8');

if (!content.includes('useTranslation')) {
    content = content.replace(
        'import { Icon } from "@/components/Icon/Icon";',
        'import { Icon } from "@/components/Icon/Icon";\nimport { useTranslation } from "react-i18next";'
    );
}

// Just add helper functions after manyRows
const helperCode = `
const useDataGridTranslations = () => {
  const { t } = useTranslation(['docs', 'common', 'components']);
  const tColumns = basicColumns.map(c => ({
    ...c,
    header: typeof c.header === 'string' ? t(\`story_datagrid_col_\${c.key}\`) : c.header,
    render: c.key === 'status' ? (value: any) => {
      const translatedValue = value === "Active" ? t('story_datagrid_status_active') : value === "Inactive" ? t('story_datagrid_status_inactive') : t('story_datagrid_status_pending');
      return (
        <Badge
          content={translatedValue}
          size="small"
          color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"}
        />
      );
    } : c.render
  }));
  const tSampleData = sampleData; // We can leave data in English or translate it just in the UI if needed
  return { t, tColumns, tSampleData };
};
`;

if (!content.includes('useDataGridTranslations')) {
    content = content.replace(
        /const basicColumns = \[[\s\S]*?\];/,
        (match) => match + '\n' + helperCode
    );
}

// Convert Default
content = content.replace(
/export const Default: Story = {\n  args: {\n    columns: basicColumns,\n    rows: sampleData,\n    bordered: true,\n  },\n};/g,
`export const Default: Story = {
  render: (args) => {
    const { tColumns } = useDataGridTranslations();
    return <DataGrid {...args} columns={tColumns} />;
  },
  args: { rows: sampleData, bordered: true }
};`
);

// Convert WithSelection
content = content.replace(
/Selected: \{selectedRowKeys.join\(\", \"\)\}/g,
`{t('story_datagrid_selected')}{selectedRowKeys.join(", ")}`
).replace(
/<DataGrid\n          columns={basicColumns}/g,
`const { t, tColumns } = useDataGridTranslations();\n        <DataGrid\n          columns={tColumns}`
);

fs.writeFileSync('stories/DataGrid/DataGrid.stories.tsx', content);

console.log('Safe update run');
